export const prerender = true;

export async function load() {
  return {
    pages: [
      { title: "Resume", slug: "resume" },
      { title: "Projects", slug: "projects" },
    ],
  };
}
