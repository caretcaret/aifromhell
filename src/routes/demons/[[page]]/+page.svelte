<script>
  import { name, bio } from '$lib/info.js'
  import ArrowLeftIcon from '$lib/components/ArrowLeftIcon.svelte'
  import ArrowRightIcon from '$lib/components/ArrowRightIcon.svelte'
  import PostsList from '$lib/components/PostsList.svelte'

  /** @type {import('./$types').PageData} */
  export let data

  $: isFirstPage = data.page === 1
  $: hasNextPage = data.posts[data.posts.length - 1]?.previous
</script>

<svelte:head>
  <title>{name} 𓃶 All demon sightings</title>
</svelte:head>

<div class="flex flex-col flex-grow">
  <header class="pt-4">
    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-red-800 dark:text-red-200">
      All demon sightings
    </h2>
    <p class="text-base italic text-zinc-600 dark:text-zinc-400">
      {bio}
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
