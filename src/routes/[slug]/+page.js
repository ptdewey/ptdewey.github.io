export async function load({ params, fetch }) {
  const { slug } = params;

  const response = await fetch("/pages.json");

  if (!response.ok) {
    throw new Error(`Failed to load pages: ${response.status}`);
  }

  const pages = await response.json();

  const page = pages.find((p) => p.metadata.slug === slug);

  if (!page) {
    return {
      status: 404,
      error: new Error("Page not found"),
    };
  }

  return { page };
}
