import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".svx"],
  preprocess: mdsvex({
    extension: ".svx",
  }),
  kit: {
    alias: {
      $lib: "src/lib",
      $app: ".svelte-kit/types/src/app",
    },
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === "production" ? "" : "",
    },
    prerender: {
      entries: ["*"],
    },
  },
};

export default config;
