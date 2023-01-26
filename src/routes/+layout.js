import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte'

/** @type {import('./$types').LayoutLoad} */
export async function load () {
  storyblokInit({
    accessToken: 'mc5AoeBBBxim29gN7oYlTQtt',
    use: [apiPlugin]
  })
  const storyblokApi = await useStoryblokApi()

  const footer = await storyblokApi.get('cdn/stories/footer-section', {
    version: 'draft'
  })

  const footerData = footer.data.story.content.body[0]

  return {
    storyblokApi,
    footerData
  }
}
