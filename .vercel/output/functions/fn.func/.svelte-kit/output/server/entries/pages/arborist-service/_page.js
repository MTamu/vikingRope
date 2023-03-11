import { l as language } from "../../../chunks/language.js";
let pageLanguage;
language.subscribe((value) => {
  pageLanguage = value;
});
async function load({ parent }) {
  const { storyblokApi } = await parent();
  const dataStory = await storyblokApi.get(`cdn/stories/arborist-page?language=${pageLanguage}`, {
    version: "draft"
  });
  const storyList = dataStory.data.story.content.body;
  const componentList = {};
  storyList.forEach((element) => {
    componentList[element.component] = element;
  });
  console.log(componentList);
  return {
    story: componentList
  };
}
export {
  load
};
