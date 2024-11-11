<script>
  import { base } from "$app/paths";
  export let data;

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="{base}/styles.css" />
</svelte:head>

<div class="layout">
  <header>
    <nav>
      <a href="{base}/" class="logo">Home</a>

      <button class="menu-toggle" on:click={toggleMenu}> ☰ </button>

      <div class="nav-links" class:is-open={isMenuOpen}>
        {#each data.pages as page}
          <a href="{base}/{page.slug}" on:click={closeMenu}>{page.title}</a>
        {/each}
        <a href="{base}/blog" on:click={closeMenu}>Blog</a>
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

  header {
    margin: 1em;
  }

  header a:hover {
    color: var(--link-hover-color);
    background-color: var(--text-color);
    text-decoration: none;
  }

  nav {
    background-color: var(--header-background);
    padding: 1em 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .logo {
    font-size: 1.5em;
    font-weight: bold;
    color: var(--tan);
    text-decoration: none;
  }

  .nav-links a {
    color: var(--text-color);
    text-decoration: none;
    display: block;
  }

  .nav-links {
    display: flex;
    gap: 2em;
    font-weight: bold;
  }

  .menu-toggle {
    display: none;
    font-size: 1.5em;
    background: none;
    border: none;
    color: var(--text-color);
    cursor: pointer;
  }

  footer {
    font-size: 0.8em;
    color: var(--text-color);
    text-align: center;
    padding: 0em;
    margin-top: 1em;
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
      margin-left: auto;
    }

    .nav-links {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: var(--header-background);
      flex-direction: column;
      gap: 0;
      padding: 1em 0;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional shadow for dropdown effect */
      z-index: 1000;
    }

    /* Display nav links as dropdown when menu is open */
    .nav-links.is-open {
      display: flex;
    }

    .nav-links a {
      padding: 0.75em 1em;
      text-align: left;
    }
  }
</style>
