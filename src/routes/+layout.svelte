<script>
  import MainLayout from "$lib/components/MainLayout.svelte";
  export let data;
  import { base } from "$app/paths";
</script>

<svelte:head>
  <link rel="stylesheet" href="{base}/styles.css" />
</svelte:head>

<MainLayout {data}>
  <slot />
</MainLayout>
