interface BlogPostPageProps {
  params: Promise<{
    id: string; // Must exactly match the directory name [id]
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  return <div>BlogPost: {id}</div>;
}
