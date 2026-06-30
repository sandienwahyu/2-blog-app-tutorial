import { getBlog } from "@/lib/api";

export async function GET() {
  const data = await getBlog();

  return Response.json(data);
}
