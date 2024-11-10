<script>
  export let data;
</script>

<article>
  {#if data && data.page}
    <h1>{data.page.metadata.title}</h1>
    <div class="page-content">
      {@html data.page.content}
    </div>
  {:else}
    <p>Page not found.</p>
  {/if}
</article>
