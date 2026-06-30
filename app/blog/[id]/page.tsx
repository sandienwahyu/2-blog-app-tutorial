import { getEachBlog } from "@/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    id: string; // Must exactly match the directory name [id]
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  // const data = await fetch(`https://api.vercel.app/blog/${id}`);
  // const blog = await data.json();
  const { data: blog, status } = await getEachBlog(id);

  if (status === 404) notFound();

  return (
    <div className="flex-1 flex flex-col gap-6 mt-4">
      <div className="flex gap-4 items-center justify-between">
        <div className="flex-1 justify-center flex flex-col gap-1">
          <h1 className="text-3xl font-bold">{blog.title}</h1>
          <p className="text-lg text-foreground">{blog.content}</p>
          <div className="flex-1 flex gap-2 justify-start items-center">
            <div className="rounded-full w-8 h-8 bg-gray-300"></div>
            <span className="text-sm text-foreground/80">{blog.author}</span>
          </div>
        </div>
        <div className="flex-1 h-44 relative overflow-hidden">
          <Image
            src="/app-portfolio.jpg"
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 text-foreground/80 text-justify">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam eum
          fuga repellendus quasi magni beatae suscipit, reiciendis libero? Ut
          architecto in expedita obcaecati enim quae praesentium odit molestiae
          vero qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Aperiam eum fuga repellendus quasi magni beatae suscipit, reiciendis
          libero? Ut architecto in expedita obcaecati enim quae praesentium odit
          molestiae vero qui.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam eum
          fuga repellendus quasi magni beatae suscipit, reiciendis libero? Ut
          architecto in expedita obcaecati enim quae praesentium odit molestiae
          vero qui.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam eum
          fuga repellendus quasi magni beatae suscipit, reiciendis libero? Ut
          architecto in expedita obcaecati enim quae praesentium odit molestiae
          vero qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Aperiam eum fuga repellendus quasi magni beatae suscipit, reiciendis
          libero? Ut architecto in expedita obcaecati enim quae praesentium odit
          molestiae vero qui.
        </p>
      </div>
    </div>
  );
}
