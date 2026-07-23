import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({ orderBy: { id: "asc" } });
    return Response.json(posts);
  } catch (error) {
    console.log("❌ Error:", error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      author: body.author,
      category: body.category,
      date: new Date(body.date),
    },
  });

  return Response.json(post);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("id");

  if (!postId) {
    return Response.json(
      { success: false, error: "Post ID is required" },
      { status: 400 },
    );
  }

  try {
    await prisma.post.delete({
      where: { id: parseInt(postId) },
    });
    return Response.json({ success: true });
  } catch (error) {
    console.error("❌ Error:", error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}
