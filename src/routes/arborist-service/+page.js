
export async function load ({ parent }) {
  const { storyblokApi } = await parent()

  const dataStory = await storyblokApi.get('cdn/stories/arborist-page', {
    version: 'draft'
  })

  const storyList = dataStory.data.story.content.body

  const componentList = {}

  storyList.forEach(element => {
    componentList[element.component] = element
  })

  console.log(componentList)
  return {
    story: componentList
  }
}
