export async function getBlog() {
  const res = await fetch("https://api.vercel.app/blog");
  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
}

export async function getEachBlog(id: string) {
  const res = await fetch(`https://api.vercel.app/blog/${id}`);

  if (res.status === 404) return { data: null, status: 404 };
  if (!res.ok) return { data: null, status: res.status };

  const data = await res.json();
  return { data, status: 200 };
}

export async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
