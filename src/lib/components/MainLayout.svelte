<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import { base } from "$app/paths";
  export let data;
</script>

<div class="layout">
  <Header pages={data.pages} />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
