export const prerender = true;

export async function load({ fetch }) {
  try {
    const response = await fetch("/pages.json");

    if (!response.ok) {
      throw new Error(`Failed to load pages: ${response.status}`);
    }

    const pages = await response.json();
    return { pages };
  } catch (error) {
    console.error("Error in +layout.js load function:", error);
    return { pages: [] };
  }
}
