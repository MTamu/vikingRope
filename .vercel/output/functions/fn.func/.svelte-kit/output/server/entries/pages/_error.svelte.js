import { q as getContext, c as create_ssr_component, l as subscribe, o as escape, v as validate_component } from "../../chunks/index2.js";
import { B as Btn } from "../../chunks/Btn.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let { form } = $$props;
  const errList = [404, 500];
  let err = "error";
  if (errList.includes($page.status)) {
    err = $page.status;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$unsubscribe_page();
  return `<section class="${"pt-28"}"><div class="${"mx-auto max-w-screen-xl p-3 text-center md:p-0 md:px-10 md:pb-72"}"><div class="${"grid auto-cols-fr md:grid-flow-col"}"><div class="${"md:mt-16 md:text-left"}"><p class="${"text-2xl font-medium"}">Ooops!</p>
				<div class="${"mt-5 inline-block border-b-4 border-viking-yellow pb-1 leading-none"}"><h2>${escape($page.status)} - ${escape($page.error.message)}</h2></div>
				<p class="${"mt-3 text-gray-500"}">This page doesn&#39;t exist or was removed!<br>We suggest you back to home</p>
				${validate_component(Btn, "Btn").$$render($$result, { text: "Home", href: "/" }, {}, {})}</div>
			<div class="${"flex flex-col md:justify-end"}"><img src="${"/img/" + escape(err, true) + ".svg"}" alt="${""}">
				<a class="${"text-right text-xs text-gray-200"}" href="${"https://storyset.com/online"}">Online illustrations by Storyset</a></div></div></div></section>`;
});
export {
  Error$1 as default
};
