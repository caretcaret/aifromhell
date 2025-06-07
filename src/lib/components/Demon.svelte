<script>
  /** @type {import('$lib/data/posts').Post} */
  export let post;

  const { source, decision_maker, summary } = post;
</script>

{#if source?.image}
  <figure>
    <img src={source.image} alt={source.description ?? post.title} />
    {#if source.description}
      <figcaption>{source.description}</figcaption>
    {/if}
  </figure>
{/if}

{#if source}
  <p>
    From
    {#if source.author}
      {source.author},
    {/if}
    {#if source.site_name}
      <a href={source.url} target="_blank" rel="noopener noreferrer">
        {source.site_name}
      </a>
    {:else}
      <a href={source.url} target="_blank" rel="noopener noreferrer">
        source
      </a>
    {/if}:
    {#if source.description}
      <em>"{source.description}"</em>
    {/if}
  </p>
{/if}

{#if decision_maker}
  <p><strong>Human in the Loop</strong>: {decision_maker}</p>
{/if}

{#if summary}
  <p>{summary}</p>
{/if}
<slot />