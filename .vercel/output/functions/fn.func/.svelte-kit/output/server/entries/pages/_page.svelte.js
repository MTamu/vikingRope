import { c as create_ssr_component, o as escape, v as validate_component, p as each, d as add_attribute } from "../../chunks/index2.js";
import { B as Btn } from "../../chunks/Btn.js";
import { renderRichText } from "@storyblok/js";
import { A as Accordion, a as AccordionItem, C as Contacts } from "../../chunks/Contacts.js";
import "classnames";
import "../../chunks/Indicator.svelte_svelte_type_style_lang.js";
const Hero_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 400px){h1.svelte-vntr5o{font-size:1.8em}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let resolvedTitleHtml;
  let { cmsData } = $$props;
  const btn = cmsData.button[0];
  if ($$props.cmsData === void 0 && $$bindings.cmsData && cmsData !== void 0)
    $$bindings.cmsData(cmsData);
  $$result.css.add(css);
  resolvedTitleHtml = renderRichText(cmsData.main_title);
  return `<section class="${"pt-16 sm:pt-28"}"><div class="${"md mx-auto max-w-screen-xl p-3 pb-16 md:pb-32 lg:px-10 lg:pt-10"}"><div class="${"grid auto-cols-fr sm:gap-2 md:grid-flow-col md:gap-10 lg:gap-32"}"><div class="${""}"><div class="${"border-l-8 border-viking-yellow pl-4 sm:font-medium"}"><div>${escape(cmsData.before_title)}</div>
					<h1 class="${"mt-1 text-left leading-snug lg:whitespace-nowrap svelte-vntr5o"}"><!-- HTML_TAG_START -->${resolvedTitleHtml}<!-- HTML_TAG_END --></h1></div>
				<p class="${"mt-5 ml-6 hidden font-medium md:block"}">${escape(cmsData.short_description)}</p>
				<div class="${"hidden md:block"}">${validate_component(Btn, "Btn").$$render(
    $$result,
    {
      text: btn.text,
      href: "/#contacts",
      customStyle: "ml-6"
    },
    {},
    {}
  )}</div></div>
			<div class="${"p-10 sm:basis-0 sm:p-10 md:p-0"}"><img src="${"img/tree.svg"}" alt="${""}"></div>
			<div class="${"flex justify-center md:hidden"}"><a class="${"rounded bg-viking-yellow p-2 font-medium tracking-wider"}" href="${"tel:+37065482654"}">+37065482654</a></div></div>
		<div class="${"mt-32 grid auto-cols-fr gap-10 md:mt-20 md:grid-flow-col md:gap-4"}">${each(cmsData.advantages_blocks, (block) => {
    return `<div class="${"flex"}"><div class="${"mr-8 flex-shrink-0"}"><!-- HTML_TAG_START -->${block.logo}<!-- HTML_TAG_END --></div>
					<div class="${"space-y-3"}"><h2>${escape(block.title)}</h2>
						<p>${escape(block.description)}</p></div>
				</div>`;
  })}</div></div>
</section>`;
});
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cmsData } = $$props;
  if ($$props.cmsData === void 0 && $$bindings.cmsData && cmsData !== void 0)
    $$bindings.cmsData(cmsData);
  return `<section class="${"bg-viking-grey-background"}"><div class="${"mx-auto max-w-screen-xl p-3 py-10 md:p-0 md:py-0 md:px-10 md:pb-10 md:pt-5"}">${each(cmsData.service, (service) => {
    return `<div class="${"grid auto-cols-fr sm:gap-2 md:grid-flow-col md:gap-10 lg:gap-32 lg:pb-20"}"><div class="${"md:order-2 md:space-y-5"}"><div class="${"inline-block border-b-8 border-viking-yellow pl-10 uppercase leading-none"}"><h2>${escape(service.title)}</h2></div>
					<p class="${"mt-6"}">${escape(service.description)}</p>
					<div class="${"hidden md:block"}">${validate_component(Btn, "Btn").$$render(
      $$result,
      {
        text: service.btn[0].text,
        href: service.btn[0].href
      },
      {},
      {}
    )}
					</div></div>
				<div class="${"md:order-" + escape(Math.abs(service.order), true) + " mt-10 md:mt-0 md:pt-6"}"><img class="${"rounded-sm"}"${add_attribute("src", service.img.filename, 0)} alt="${""}"></div>
				<div class="${"mt-10 mb-10 flex justify-center md:hidden"}">${validate_component(Btn, "Btn").$$render(
      $$result,
      {
        text: service.btn[0].text,
        href: service.btn[0].href
      },
      {},
      {}
    )}</div>
			</div>`;
  })}</div></section>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cmsData } = $$props;
  let quote = cmsData.quote[0];
  if ($$props.cmsData === void 0 && $$bindings.cmsData && cmsData !== void 0)
    $$bindings.cmsData(cmsData);
  return `<section id="${"about-us"}"><div class="${"mx-auto max-w-screen-xl p-3 py-10 md:p-0 md:px-10 md:pb-32"}"><div class="${"inline-block border-b-8 border-viking-yellow pl-10 uppercase leading-none md:mt-5"}"><h2 class="${"uppercase"}">${escape(cmsData.title)}</h2></div>
		<div class="${"flex md:mt-10"}"><div class="${"mt-5 flex flex-col gap-12 md:mt-0 md:w-2/3"}"><div class="${"rounded bg-viking-grey-textBox px-6 py-8 md:px-10 md:py-8"}"><!-- HTML_TAG_START -->${renderRichText(cmsData.description)}<!-- HTML_TAG_END --></div>

				${quote !== void 0 ? `<div class="${"hidden border-l-xl border-viking-yellow text-center text-xl font-medium md:block "}"><div class="${"ty-5 flex flex-col gap-6 px-10 py-5 pr-20"}"><p><!-- HTML_TAG_START -->${renderRichText(quote.description)}<!-- HTML_TAG_END --></p>
							<div class="${"text-right"}">${escape(quote.author)}</div></div></div>` : ``}</div>
			<div class="${"hidden md:block"}"><img src="${"img/human.svg"}" alt="${""}"></div></div>

		${cmsData.feedback.length !== 0 ? `<div class="${"mt-20 mb-10"}"><div class="${"mb-10 inline-block border-b-8 border-viking-yellow pl-10 uppercase leading-none"}"><h2>${escape(cmsData.feedback_title)}</h2></div>
				<div class="${"grid auto-cols-fr gap-5 md:grid-flow-col [&>*]:rounded [&>*]:p-5"}">${each(cmsData.feedback, (feedback) => {
    return `<div class="${"bg-viking-grey-textBox"}"><!-- HTML_TAG_START -->${renderRichText(feedback.feedback_text)}<!-- HTML_TAG_END -->
						</div>`;
  })}</div></div>` : ``}</div></section>

`;
});
const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cmsData } = $$props;
  const qAndA = cmsData.question.map((item) => {
    return {
      question: item.question,
      answer: item.answer
    };
  });
  if ($$props.cmsData === void 0 && $$bindings.cmsData && cmsData !== void 0)
    $$bindings.cmsData(cmsData);
  return `<section id="${"faq"}" class="${"bg-viking-grey-background"}"><div class="${"mx-auto max-w-screen-xl p-3 py-10 md:px-10 md:py-20"}"><div class="${"mb-6 flex justify-center"}"><div class="${"mt-5 border-b-8 border-viking-yellow pl-10 text-center uppercase leading-none"}"><h2 class="${"uppercase"}">${escape(cmsData.title)}</h2></div></div>
		${validate_component(Accordion, "Accordion").$$render($$result, { flush: true }, {}, {
    default: () => {
      return `${each(qAndA, (item) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
          header: () => {
            return `<span slot="${"header"}" class="${"text-lg font-normal text-black"}"><!-- HTML_TAG_START -->${renderRichText(item.question)}<!-- HTML_TAG_END -->
					</span>`;
          },
          default: () => {
            return `<p class="${"mb-2 border-4 border-viking-yellow p-2 text-black"}"><!-- HTML_TAG_START -->${renderRichText(item.answer)}<!-- HTML_TAG_END --></p>
				`;
          }
        })}`;
      })}`;
    }
  })}</div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1dz92ki_START --><meta name="${"description"}" content="${"Svelte demo app"}"><!-- HEAD_svelte-1dz92ki_END -->`, ""}

${validate_component(Hero, "Hero").$$render($$result, { cmsData: data.story.hero }, {}, {})}
${validate_component(Services, "Services").$$render($$result, { cmsData: data.story.services }, {}, {})}
${validate_component(About, "About").$$render($$result, { cmsData: data.story.about }, {}, {})}
${validate_component(Faq, "Faq").$$render($$result, { cmsData: data.story.faq }, {}, {})}
${validate_component(Contacts, "Contacts").$$render($$result, { cmsData: data.contactsData }, {}, {})}`;
});
export {
  Page as default
};
