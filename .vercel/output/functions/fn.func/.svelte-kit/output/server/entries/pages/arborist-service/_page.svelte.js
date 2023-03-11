import { c as create_ssr_component, o as escape, v as validate_component } from "../../../chunks/index2.js";
import { C as Contacts } from "../../../chunks/Contacts.js";
import { S as ServicesList, W as WorkSamples } from "../../../chunks/WorkSamples.js";
import { renderRichText } from "@storyblok/js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let descriptionText;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  descriptionText = renderRichText(data.story.hero_section.service_description);
  return `<section class="${"pt-28"}"><div class="${"mx-auto max-w-screen-xl p-3 sm:px-10 sm:pt-10"}"><div class="${"mb-6 flex justify-center"}"><div class="${"inline-block border-b-8 border-viking-yellow pl-2 leading-none md:pl-10"}"><h1 class="${"uppercase"}">${escape(data.story.hero_section.title)}</h1></div></div>

		<div class="${"mt-10 md:mt-0"}"><!-- HTML_TAG_START -->${descriptionText}<!-- HTML_TAG_END --></div>
		${validate_component(ServicesList, "ServicesList").$$render($$result, { cmsData: data.story.services_list }, {}, {})}</div>
	${validate_component(Contacts, "Contacts").$$render(
    $$result,
    {
      cmsData: data.contactsData,
      bgColor: "bg-viking-grey-background"
    },
    {},
    {}
  )}
	${data.story.sample_list.samples.length !== 0 ? `${validate_component(WorkSamples, "WorkSamples").$$render($$result, { cmsData: data.story.sample_list }, {}, {})}` : ``}</section>`;
});
export {
  Page as default
};
