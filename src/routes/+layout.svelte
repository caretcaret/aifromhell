<script>
  import '../app.css'
  import '../prism.css'
  import MoonIcon from 'heroicons-svelte/solid/MoonIcon.svelte'
  import FireIcon from 'heroicons-svelte/solid/FireIcon.svelte'
  import { browser } from '$app/environment'
  import { name } from '$lib/info'
  import { page } from '$app/stores'

  let isDarkMode = browser ? Boolean(document.documentElement.classList.contains('dark')) : true

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }
</script>

<div class="flex flex-col min-h-screen ">
  <div class="flex flex-col flex-grow w-full px-4 py-2">
    <header class="flex items-center justify-between w-full max-w-2xl py-4 mx-auto lg:pb-8">
      {#if !$page.data.is_homepage}
        <a
          class="text-lg font-bold sm:text-2xl !text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-700 dark:to-red-300"
          href="/"
        >
          {name}
        </a>
      {:else}
        <!-- dummy element to allow the button to stay right -->
        <div></div>
      {/if}
      <button
        type="button"
        role="switch"
        aria-label="Toggle Dark Mode"
        aria-checked={isDarkMode}
        class="w-5 h-5 sm:h-8 sm:w-8 sm:p-1"
        on:click={() => {
          isDarkMode = !isDarkMode
          localStorage.setItem('isDarkMode', isDarkMode.toString())

          disableTransitionsTemporarily()

          if (isDarkMode) {
            document.querySelector('html').classList.add('dark')
          } else {
            document.querySelector('html').classList.remove('dark')
          }
        }}
      >
        <MoonIcon class="hidden text-zinc-500 dark:block" />
        <FireIcon class="block text-zinc-400 dark:hidden" />
      </button>
    </header>
    <main
      class="flex flex-col flex-grow w-full mx-auto"
      class:max-w-2xl={!$page.data.layout?.fullWidth}
    >
      <slot />
    </main>
  </div>
</div>
