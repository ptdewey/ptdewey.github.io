<script>
  export let data;
</script>

<!-- TODO: convert metadata-line to a component with better styling -->
<article class="post-container">
  {#if data && data.post}
    <h1>{data.post.metadata.title}</h1>
    <ul class="post-metadata">
      <li>Date: {data.post.metadata.date}</li>
      <li>Category: {data.post.metadata.categories}</li>
      <li>{data.post.metadata.read_time} minute read</li>
    </ul>
    <div class="post-content">
      {@html data.post.content}
    </div>
  {:else}
    <p>Post not found.</p>
  {/if}
</article>

<style>
  .post-container {
    max-width: 800px;
  }

  .post-metadata {
    background-color: var(--background-color-alt);
    padding: 5px 15px;
    border-radius: 8px;
  }

  .post-metadata li {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
</style>
