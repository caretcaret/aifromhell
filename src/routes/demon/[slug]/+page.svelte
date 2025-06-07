<script>
  import { website, name, tagline, avatar } from '$lib/info.js'
import Demon from '$lib/components/Demon.svelte';
  import ToC from '$lib/components/ToC.svelte'
  import ArrowLeftIcon from '$lib/components/ArrowLeftIcon.svelte'
  import SocialLinks from '$lib/components/SocialLinks.svelte'
  import { afterNavigate } from '$app/navigation'
  import PostDate from '$lib/components/PostDate.svelte'
  import Tagline from '$lib/components/Tagline.svelte'
  import { page } from '$app/stores'

  /** @type {import('./$types').PageData} */
  export let data

  // if we came from /demons, we will use history to go back to preserve
  // posts pagination
  let canGoBack = false
  afterNavigate(({ from }) => {
    if (from && from.url.pathname.startsWith('/demons')) {
      canGoBack = true
    }
  })

  function goBack() {
    if (canGoBack) {
      history.back()
    }
  }
</script>

<svelte:head>
  <title>{data.post.title} - {name}</title>
  <meta name="description" content={data.post.preview.text} />
  <meta name="author" content={name} />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={website + $page.url.pathname} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.post.title} />
  <meta property="og:description" content={data.post.preview.text} />
  <meta property="og:image" content={data.post?.source?.image ?? (website + '/cover.png')} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={website} />
  <meta property="twitter:url" content={website + $page.url.pathname} />
  <meta name="twitter:title" content={data.post.title} />
  <meta name="twitter:description" content={data.post.preview.text} />
  <meta name="twitter:image" content={data.post?.source?.image ?? (website + '/cover.png')} />
</svelte:head>

<div class="root max-w-2xl mx-auto lg:max-w-none">
  <div class="hidden lg:block pt-8">
    <div class="sticky top-0 w-full flex justify-end pt-11 pr-8">
      <svelte:element
        this={canGoBack ? 'button' : 'a'}
        class="items-center justify-center hidden w-10 h-10 mb-8 transition bg-white rounded-full shadow-md -top-1 -left-16 lg:flex group shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800/50 dark:ring-0 dark:focus-visible:ring-2 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
        href={canGoBack ? undefined : '/demons'}
        aria-label="Go back to all demon sightings"
        on:click={goBack}
        on:keydown={goBack}
      >
        <ArrowLeftIcon
          class="w-4 h-4 transition stroke-zinc-500 group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
        />
      </svelte:element>
    </div>
  </div>

  <div class="w-full mx-auto overflow-x-hidden">
    <article>
      <header class="flex flex-col">
        <h1
          class="mt-6 text-4xl font-bold tracking-tight text-red-800 dark:text-red-200 sm:text-5xl"
        >
          {data.post.title}
        </h1>
        <PostDate class="text-sm sm:text-base" post={data.post} decorate collapsed />
      </header>

      <!-- render the post -->
      <div class="prose dark:prose-invert ">
        <Demon post={data.post}>
          <svelte:component this={data.component} />
        </Demon>
      </div>
    </article>

    <!-- tagline -->
    <hr />
    <div class="py-8">
      <div class="grid gap-8">
        <div class="flex justify-center order-1 col-span-2 gap-4 md:order-2">
          <SocialLinks />
        </div>
        <p class="order-3 text-base italic text-zinc-600 dark:text-zinc-400 prose">
          <Tagline />
        </p>
      </div>
    </div>
  </div>

  <!-- table of contents -->
  <div class="hidden xl:block pt-10">
    <aside class="sticky hidden w-48 ml-8 xl:block top-8" aria-label="Table of Contents">
      <ToC post={data.post} />
    </aside>
  </div>
</div>

<style lang="postcss">
  .root {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media screen(lg) {
    .root {
      /* 42rem matches max-w-2xl */
      grid-template-columns: 1fr 42rem 1fr;
    }
  }
</style>
