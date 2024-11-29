<script>
  import projects from "./projects.js";
</script>

<!--
 TODO:
- improve project sections
  - "featured" projects (take up full width)
  - "other projects" (below featured, have all the other projects)
- Add navigation jumps for moving between sections
-->
<div>
  {#each projects as projectCategory}
    <div class="category-section">
      <h1 class="category-title">{projectCategory.category}</h1>
      <div class="projects-grid">
        {#each projectCategory.items as project}
          <div class="project-card">
            <div class="project-content">
              <h2 class="project-title">
                {#if project.link}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer">{project.title}</a
                  >
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
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .category-section {
    margin-bottom: 2rem;
  }

  .category-title {
    font-size: 1.8em;
    font-weight: bold;
    margin-bottom: 1rem;
    padding: 1rem;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .project-card {
    background-color: var(--background-color-alt);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 8px var(--card-shadow, rgba(0, 0, 0, 0.1));
    transition: transform 0.2s ease;
  }

  .project-card:hover {
    transform: scale(var(--hover-scale, 1.02));
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

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
