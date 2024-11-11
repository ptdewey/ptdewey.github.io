<script>
  export let data;
</script>

<!-- TODO: convert metadata-line to a component with better styling -->
<article>
  {#if data && data.post}
    <h1>{data.post.metadata.title}</h1>
    <div class="metadata-line">
      <p>Date: {data.post.metadata.date}</p>
      <p>Category: {data.post.metadata.categories}</p>
      <p>{data.post.metadata.read_time} minute read</p>
    </div>
    <div class="post-content">
      {@html data.post.content}
    </div>
  {:else}
    <p>Post not found.</p>
  {/if}
</article>
