import { storyblokInit as storyblokInit$1, apiPlugin } from "@storyblok/js";
import "../../chunks/index2.js";
import { l as language } from "../../chunks/language.js";
let storyblokApiInstance = null;
const useStoryblokApi = () => {
  if (!storyblokApiInstance) {
    console.log(
      `You can't use getStoryblokApi if you're not loading apiPlugin.`
    );
  }
  return storyblokApiInstance;
};
const storyblokInit = (options) => {
  const { storyblokApi } = storyblokInit$1(options);
  storyblokApiInstance = storyblokApi;
  options.components || {};
};
let pageLanguage;
language.subscribe((value) => {
  pageLanguage = value;
});
async function load() {
  storyblokInit({
    accessToken: "mc5AoeBBBxim29gN7oYlTQtt",
    use: [apiPlugin]
  });
  const storyblokApi = await useStoryblokApi();
  const footer = await storyblokApi.get("cdn/stories/footer-section", {
    version: "draft"
  });
  const contacts = await storyblokApi.get("cdn/stories/contact-section", {
    version: "draft"
  });
  const mainPageData = await storyblokApi.get(`cdn/stories/main-page?language=${pageLanguage}`, {
    version: "draft"
  });
  const footerData = footer.data.story.content.body[0];
  const contactsData = contacts.data.story.content.body[0];
  const navData = mainPageData.data.story.content.body[4];
  console.log(navData);
  return {
    storyblokApi,
    footerData,
    contactsData,
    navData
  };
}
export {
  load
};
