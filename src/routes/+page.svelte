<script>
  import ArrowRightIcon from '$lib/components/ArrowRightIcon.svelte'
  import PostsList from '$lib/components/PostsList.svelte'
  import SocialLinks from '$lib/components/SocialLinks.svelte'
  import Tagline from '$lib/components/Tagline.svelte'
  import { avatar, tagline, name, website } from '$lib/info.js'
  import { page } from '$app/stores'

  /** @type {import('./$types').PageData} */
  export let data
</script>

<svelte:head>
  <title>{name}</title>
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

<div class="flex flex-col flex-grow gap-8 pb-16">
  <!-- bio -->
  <section class="flex flex-col items-center gap-16 pb-16">
    <div class="flex flex-col items-center w-full gap-4 rounded-lg">
      <a
        href="/"
      >
        <h1
          class="text-4xl font-bold tracking-tighter text-nowrap sm:text-7xl !text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-700 dark:to-red-300"
        >
          AI FROM HELL
        </h1>
      </a>
      <p class="text-lg italic text-zinc-600 dark:text-zinc-400 prose">
        <Tagline />
      </p>
      <div class="flex gap-6">
        <SocialLinks />
      </div>
    </div>
  </section>
  <section class="w-full">
    <div class="flex items-center justify-between gap-4 mb-8">
      <h2 class="text-sm font-medium sm:text-base text-red-800 dark:text-red-200">
        Newest demons
      </h2>
      {#if data.posts.length > 4}
        <a href="/demons" class="flex items-center gap-1 text-sm font-medium text-red-500"
          >View all sightings <ArrowRightIcon class="w-4 h-4" /></a
        >
      {/if}
    </div>
    <PostsList posts={data.posts.slice(0, 4)} />
  </section>
</div>
