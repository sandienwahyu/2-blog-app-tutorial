"use client";

import { DatePickerDemo } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCurrentSession } from "@/hooks/useCurrentSession";
import { format } from "date-fns/format";
import { useRef, useState } from "react";

import useSWR, { mutate } from "swr";

const fetcher = (url: string | URL | Request) =>
  fetch(url).then((res) => res.json());

export default function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { session } = useCurrentSession();

  const { data, error, isLoading } = useSWR(
    `/api/test/my-post?author=${session?.user?.name}`,
    fetcher,
  );

  const resetDatePicker = useRef<() => void>(() => {});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          category,
          date,
          author: session?.user?.name, // Replace with actual user
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const newPost = await response.json();
      console.log("Post created:", newPost);

      // Clear form
      setTitle("");
      setContent("");
      setCategory("");
      resetDatePicker.current();

      mutate(`/api/test/my-post?author=${session?.user?.name}`);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleDelete = async (postId: number) => {
    try {
      const response = await fetch(`/api/test?id=${postId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      mutate(`/api/test/my-post?author=${session?.user?.name}`);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const capitalizeWords = (str: string) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex-1 flex flex-col h-full pt-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-lg text-foreground/60">
        Welcome to the dashboard, {capitalizeWords(session?.user?.name || "")}!
      </p>
      <div className="flex-1 flex flex-col md:flex-row justify-center items-stretch gap-14">
        <div className="flex-1 flex flex-col gap-2 py-4 px-2">
          {data.map((post: any) => (
            <div
              key={post.id}
              className="flex flex-row justify-between items-center gap-2 w-full h-20"
            >
              <div className="text-center">
                {format(post.date, "dd/MM/yyyy")}
              </div>
              <div className="flex-1 text-center">
                {post.title.slice(0, 20) +
                  `${post.title.length > 20 ? "..." : ""}`}
              </div>
              <Button
                variant="destructive"
                onClick={() => handleDelete(post.id)}
              >
                X
              </Button>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-3 py-4 px-2">
          <h2 className="w-full text-xl font-bold text-center mb-2">
            Add New Post
          </h2>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-3"
          >
            <DatePickerDemo
              onDateChange={setDate}
              onReset={(reset) => {
                resetDatePicker.current = reset;
              }}
            />
            <Input
              type="text"
              placeholder="Title"
              className="border-2 border-primary/50"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Category"
              className="border-2 border-primary/50"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />

            <Textarea
              placeholder="Content"
              className="border-2 border-primary/50 h-50"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <Button className="w-full">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
