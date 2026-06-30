import { getBlog } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function Blog() {
  // const data = await fetch("https://api.vercel.app/blog");
  // const res = await data.json();
  const res = await getBlog();

  return (
    <div className="flex flex-1 flex-col gap-6 mt-4">
      <div>
        <h1 className="text-5xl font-bold text-primary/80">Blog List</h1>
      </div>
      <div className="flex flex-col gap-2">
        {res.map((blog: any) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.id}`}
            className="flex justify-between rounded-lg bg-secondary/75 hover:bg-secondary p-4"
          >
            <div className="flex flex-col gap-1 justify-center">
              <h2 className="text-xl font-semibold">
                {blog.title.length > 30
                  ? blog.title.substring(0, 30) + "..."
                  : blog.title}
              </h2>
              <p className="text-sm text-foreground/80">
                {blog.content.length > 200
                  ? blog.content.substring(0, 200) + "..."
                  : blog.content}
              </p>
            </div>
            <div className="relative w-1/3 min-h-24 rounded-lg overflow-hidden">
              <Image
                src="/website-portfolio.jpg"
                alt={blog.title}
                fill
                className="object-cover scale-115 translate-x-4 object-[50%_20%]"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
