<script>
  /** @import {Project} from "$lib/types" */

  /** @type {Project} **/
  // @ts-ignore
  export let project = {};
</script>

<div class="project-card">
  <div class="project-content">
    <h2 class="project-title">
      {#if project.link}
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.title}
        </a>
      {:else}
        {project.title}
      {/if}
    </h2>
    {#if project.image}
      <img
        src={project.image}
        alt="{project.title} screenshot"
        class="project-image"
      />
    {/if}
    <p class="project-description">{project.description}</p>
    {#if project.time}
      <p class="project-time">{project.time}</p>
    {/if}
  </div>
</div>

<style>
  .project-card {
    background-color: var(--background-color-alt);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 8px var(--card-shadow, rgba(0, 0, 0, 0.1));
    transition: transform 0.2s ease;
  }

  .project-content {
    padding: 1rem;
  }

  .project-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.5rem 0;
  }

  .project-title:hover::before {
    content: none;
  }

  .project-image {
    width: 100%;
    height: auto;
    margin: 0.5rem 0;
    border-radius: 4px;
  }

  .project-description {
    margin: 0.5rem 0 1rem;
  }
</style>
