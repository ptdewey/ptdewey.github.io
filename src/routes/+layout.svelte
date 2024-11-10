<script>
  import { base } from "$app/paths";
  export let data;
</script>

<svelte:head>
  <link rel="stylesheet" href="{base}/styles.css" />
</svelte:head>

<div class="layout">
  <header>
    <nav>
      <a href="{base}/" class="logo">Home</a>
      <div class="nav-links">
        {#each data.pages as page}
          <a href="{base}/{page.metadata.slug}">{page.metadata.title}</a>
        {/each}
        <a href="{base}/blog">Blog</a>
      </div>
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <p>&copy; {new Date().getFullYear()} Patrick Dewey. All rights reserved.</p>
  </footer>
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    max-width: 800px;
    margin: 0 auto;
    padding: 2em;
  }
</style>
