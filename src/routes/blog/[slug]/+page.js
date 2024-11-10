export async function load({ params, fetch }) {
  const { slug } = params;

  const response = await fetch("/posts.json");

  if (!response.ok) {
    throw new Error(`Failed to load posts: ${response.status}`);
  }

  const posts = await response.json();

  const post = posts.find((p) => p.metadata.slug === slug);

  if (!post) {
    return {
      status: 404,
      error: new Error("Post not found"),
    };
  }

  return { post };
}
