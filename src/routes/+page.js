export async function load({ fetch }) {
  const response = await fetch("/pages.json");

  if (!response.ok) {
    throw new Error(`Failed to load pages: ${response.status}`);
  }

  const pages = await response.json();
  return { pages };
}
