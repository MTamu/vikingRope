import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte'

import { language } from '$stores/language'

let pageLanguage

language.subscribe(value => {
  pageLanguage = value
})
export async function load () {
  storyblokInit({
    accessToken: 'mc5AoeBBBxim29gN7oYlTQtt',
    use: [apiPlugin]
  })
  const storyblokApi = await useStoryblokApi()

  const footer = await storyblokApi.get('cdn/stories/footer-section', {
    version: 'draft'
  })
  const contacts = await storyblokApi.get('cdn/stories/contact-section', {
    version: 'draft'
  })
  const mainPageData = await storyblokApi.get(`cdn/stories/main-page?language=${pageLanguage}`, {
    version: 'draft'
  })

  const footerData = footer.data.story.content.body[0]
  const contactsData = contacts.data.story.content.body[0]
  const navData = mainPageData.data.story.content.body[4]

  console.log(navData)

  return {
    storyblokApi,
    footerData,
    contactsData,
    navData
  }
}
