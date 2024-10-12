import { posts } from '$lib/data/posts'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    is_homepage: true,
    posts: posts.slice(0, 5)
  }
}
