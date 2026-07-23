import { prisma } from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const author = searchParams.get("author");

  const posts = await prisma.post.findMany({
    where: {
      author: author || undefined,
    },
    orderBy: { date: "asc" },
  });

  return Response.json(posts);
}
