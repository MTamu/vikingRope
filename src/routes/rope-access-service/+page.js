import { language } from '$stores/language'

let pageLanguage

language.subscribe(value => {
  pageLanguage = value
})

export async function load ({ parent }) {
  const { storyblokApi } = await parent()

  const dataStory = await storyblokApi.get(`cdn/stories/rope-access-page?language=${pageLanguage}`, {
    version: 'draft'
  })

  const storyList = dataStory.data.story.content.body

  const componentList = {}

  storyList.forEach(element => {
    componentList[element.component] = element
  })

  return {
    story: componentList
  }
}
