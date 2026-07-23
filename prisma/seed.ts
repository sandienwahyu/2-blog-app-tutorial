import { prisma } from "../lib/db";

async function main() {
  console.log("🌱 Seeding database...");

  const res = await fetch("https://api.vercel.app/blog");
  const posts = await res.json();

  await Promise.all(
    posts.map((post: any) =>
      prisma.post.create({
        data: {
          title: post.title,
          content: post.content,
          author: post.author,
          date: new Date(post.date),
          category: post.category,
        },
      }),
    ),
  );

  for (const post of posts) {
    await prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        author: post.author,
        date: new Date(post.date),
        category: post.category,
      },
    });
  }

  console.log(`✅ Seeded ${posts.length} posts successfully!`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
