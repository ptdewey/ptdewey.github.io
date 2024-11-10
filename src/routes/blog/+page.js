export async function load({ fetch }) {
  const response = await fetch("/posts.json");

  if (!response.ok) {
    throw new Error(`Failed to load posts: ${response.status}`);
  }

  const posts = await response.json();
  return { posts };
}
