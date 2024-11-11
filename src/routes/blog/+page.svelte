<script>
  import { base } from "$app/paths";
  export let data;
</script>

<main>
  <h1>Blog</h1>
  <ul>
    {#each data.posts as post}
      <li>
        {post.metadata.date} -
        <a href="{base}/blog/{post.metadata.slug}">
          {post.metadata.title}
        </a>
      </li>
    {/each}
  </ul>
</main>

<style>
  li {
    list-style: none;
  }
</style>
