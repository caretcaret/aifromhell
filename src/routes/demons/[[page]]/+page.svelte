<script>
  import { name, tagline, website } from '$lib/info.js'
  import ArrowLeftIcon from '$lib/components/ArrowLeftIcon.svelte'
  import ArrowRightIcon from '$lib/components/ArrowRightIcon.svelte'
  import PostsList from '$lib/components/PostsList.svelte'
  import { page } from '$app/stores'

  /** @type {import('./$types').PageData} */
  export let data

  $: isFirstPage = data.page === 1
  $: hasNextPage = data.posts[data.posts.length - 1]?.previous
</script>

<svelte:head>
  <title>{name} 𓃶 All demon sightings</title>
  <meta name="description" content={tagline} />
  <meta property="og:title" content={name} />
  <meta property="og:type" content="website" />
	<meta property="og:description" content={tagline} />
	<meta property="og:url" content={website + $page.url.pathname} />
  <meta property="og:image" content={website + '/cover.png'} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={website} />
  <meta property="twitter:url" content={website + $page.url.pathname} />
  <meta name="twitter:title" content={name} />
  <meta name="twitter:description" content={tagline} />
  <meta name="twitter:image" content={website + '/cover.png'} />
</svelte:head>

<div class="flex flex-col flex-grow">
  <header class="pt-4">
    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-red-800 dark:text-red-200">
      All demon sightings
    </h2>
    <p class="text-base italic text-zinc-600 dark:text-zinc-400">
      {tagline}
    </p>
  </header>

  <div class="mt-16 sm:mt-20">
    <PostsList posts={data.posts} />
  </div>

  <!-- pagination -->
  <div class="flex items-center justify-between pt-16 pb-8">
    {#if !isFirstPage}
      <a href={`/demons/${data.page - 1}`} data-sveltekit-prefetch>
        <ArrowLeftIcon class="w-4 h-4" />
        Previous
      </a>
    {:else}
      <div />
    {/if}

    {#if hasNextPage}
      <a href={`/demons/${data.page + 1}`} data-sveltekit-prefetch
        >Next
        <ArrowRightIcon class="w-4 h-4" />
      </a>
    {/if}
  </div>
</div>

<style>
  a {
    @apply flex items-center gap-2 font-medium text-red-500;
  }
</style>
