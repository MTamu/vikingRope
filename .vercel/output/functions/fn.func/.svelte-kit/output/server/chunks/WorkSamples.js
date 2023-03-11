import { c as create_ssr_component, o as escape, v as validate_component, p as each } from "./index2.js";
import { A as Accordion, a as AccordionItem } from "./Contacts.js";
import "classnames";
import "./Indicator.svelte_svelte_type_style_lang.js";
import { renderRichText } from "@storyblok/js";
const ServicesList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cmsData } = $$props;
  if ($$props.cmsData === void 0 && $$bindings.cmsData && cmsData !== void 0)
    $$bindings.cmsData(cmsData);
  return `<section><div class="${"mt-24 grid md:mt-12 md:grid-cols-2"}"><div><div class="${"inline-block border-b-8 border-viking-yellow pl-6 uppercase leading-none"}"><h2>${escape(cmsData.title)}</h2></div>
			${validate_component(Accordion, "Accordion").$$render($$result, { multiple: true, flush: true }, {}, {
    default: () => {
      return `${each(cmsData.services, (service) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
          header: () => {
            return `<span slot="${"header"}" class="${"text-lg font-normal text-black"}">${escape(service.service_name)}</span>`;
          },
          default: () => {
            return `<p class="${"mb-2 border-b-2 p-2 text-gray-500"}">${escape(service.service_description)}</p>
					`;
          }
        })}`;
      })}`;
    }
  })}</div>
		<div></div></div></section>`;
});
const WorkSamples_svelte_svelte_type_style_lang = "";
const css = {
  code: ".order-1.svelte-hjizi3{order:1}.order-2.svelte-hjizi3{order:2}",
  map: null
};
const itemsToLoad = 2;
const WorkSamples = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cmsData } = $$props;
  const samples = cmsData.samples;
  let loadCount = itemsToLoad;
  const getDisplayOrder = (index) => {
    return index % 2 ? ["order-1", "order-2"] : ["order-2", "order-1"];
  };
  if ($$props.cmsData === void 0 && $$bindings.cmsData && cmsData !== void 0)
    $$bindings.cmsData(cmsData);
  $$result.css.add(css);
  return `<section class="${"pt-10 md:mt-12 md:pt-0"}"><div class="${"mb-6 flex justify-center"}"><div class="${"inline-block border-b-8 border-viking-yellow pl-10 leading-none"}"><h2 class="${"uppercase"}">${escape(cmsData.title)}</h2></div></div>
	<div class="${"mx-auto max-w-screen-xl p-3 md:p-0 md:px-10 md:pb-32"}">${each(samples.slice(0, loadCount), (sample, index) => {
    return `<div class="${"grid auto-cols-fr pb-20 sm:gap-2 md:grid-flow-col md:gap-10 md:pb-20 lg:gap-32"}"><div class="${"md:" + escape(getDisplayOrder(index)[0], true) + " mt-5 md:space-y-5 svelte-hjizi3"}"><!-- HTML_TAG_START -->${renderRichText(sample.sample_description)}<!-- HTML_TAG_END --></div>
				<div class="${"md:" + escape(getDisplayOrder(index)[1], true) + " pt-6 svelte-hjizi3"}"><img class="${"rounded-sm"}" src="${escape(sample.sample_img[0].filename, true) + "/m/filters:quality(50)"}" alt="${"Work sample"}"></div>
			</div>`;
  })}

		${loadCount < samples.length ? `<div class="${"mt-10 flex justify-center"}"><button class="${"inline-block rounded border-2 border-viking-yellow py-2 px-4 font-medium hover:bg-viking-yellow hover:no-underline sm:mt-8 md:mt-16"}">${escape(cmsData.btn_text)}</button></div>` : `${samples.length > itemsToLoad && loadCount >= samples.length ? `<div class="${"mt-10 flex justify-center"}"><button class="${"inline-block rounded border-2 border-viking-yellow py-2 px-8 font-medium hover:bg-viking-yellow hover:no-underline sm:mt-8 md:mt-16"}"><img src="${"img/close.svg"}" alt="${""}"></button></div>` : ``}`}</div>
</section>`;
});
export {
  ServicesList as S,
  WorkSamples as W
};
