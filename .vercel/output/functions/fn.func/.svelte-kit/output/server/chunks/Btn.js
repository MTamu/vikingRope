import { c as create_ssr_component, o as escape, d as add_attribute } from "./index2.js";
const Btn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { href = "" } = $$props;
  let { customStyle = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.customStyle === void 0 && $$bindings.customStyle && customStyle !== void 0)
    $$bindings.customStyle(customStyle);
  return `<a class="${escape(customStyle, true) + " inline-block rounded border-2 border-viking-yellow py-2 px-4 font-medium hover:bg-viking-yellow hover:no-underline sm:mt-8 md:mt-10"}"${add_attribute("href", href, 0)}>${escape(text)}</a>`;
});
export {
  Btn as B
};
