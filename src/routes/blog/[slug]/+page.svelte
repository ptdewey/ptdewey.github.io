<script>
  export let data;
</script>

<article>
  {#if data && data.post}
    <h1>{data.post.metadata.title}</h1>
    <div class="metadata-line">
      <p>Author: {data.post.metadata.authors}</p>
      <p>Date: {data.post.metadata.date}</p>
      <p>Category: {data.post.metadata.categories}</p>
    </div>
    <div class="post-content">
      {@html data.post.content}
    </div>
  {:else}
    <p>Post not found.</p>
  {/if}
</article>
