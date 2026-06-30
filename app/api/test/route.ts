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
