import { posts } from '$lib/data/posts'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const { slug } = params

  // get post with metadata
  const post = posts.find((post) => slug === post.slug)

  if (!post) {
    error(404, 'Article not found');
  }

  return {
    post
  }
}
