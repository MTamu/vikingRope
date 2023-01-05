import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte'

/** @type {import('./$types').LayoutLoad} */
export async function load () {
  storyblokInit({
    accessToken: 'mc5AoeBBBxim29gN7oYlTQtt',
    use: [apiPlugin]
  })
  const storyblokApi = await useStoryblokApi()

  return {
    storyblokApi
  }
}
