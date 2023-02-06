export async function load ({ parent }) {
  const { storyblokApi } = await parent()

  const dataStory = await storyblokApi.get('cdn/stories/main-page?language=en', {
    version: 'draft'
  })
  console.log('🚀 ~ file: +page.js:7 ~ load ~ dataStory', dataStory)

  const storyList = dataStory.data.story.content.body
  const componentList = {}

  storyList.forEach(element => {
    componentList[element.component] = element
  })

  return {
    story: componentList
  }
}
