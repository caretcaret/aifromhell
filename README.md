# AI FROM HELL

*AI from hell is here on Earth, and it's because of humans in the loop.*

## How to contribute

Add a new markdown file in `demons/`, following the format of the other posts. Send a pull request.

## How to develop

`npm install --legacy-peer-deps` and then `npm run dev` should work. This is built on SvelteKit, https://learn.svelte.dev/ is a good introduction. Use this to preview your markdown change.

## How to deploy

A static site will be built using [`adapter-static`](https://kit.svelte.dev/docs/adapter-static#github-pages). It will deploy to GitHub Pages on push to `main`.