import { g as get_current_component, c as create_ssr_component, b as compute_rest_props, d as add_attribute, v as validate_component, e as globals, f as compute_slots, h as spread, i as escape_object, j as is_void, k as escape_attribute_value, l as subscribe, o as escape, p as each } from "../../chunks/index2.js";
import classNames from "classnames";
import { F as Frame } from "../../chunks/Indicator.svelte_svelte_type_style_lang.js";
import { createPopper } from "@popperjs/core";
import { l as language } from "../../chunks/language.js";
function createEventDispatcher() {
  const component = get_current_component();
  return (type, target, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = new CustomEvent(type, { detail });
      target.dispatchEvent(event);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
const { Object: Object_1 } = globals;
const Popper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "strategy",
    "open",
    "yOnly"
  ]);
  let { activeContent = false } = $$props;
  let { arrow = true } = $$props;
  let { offset = 8 } = $$props;
  let { placement = "top" } = $$props;
  let { trigger = "hover" } = $$props;
  let { triggeredBy = void 0 } = $$props;
  let { strategy = "absolute" } = $$props;
  let { open = false } = $$props;
  let { yOnly = false } = $$props;
  const dispatch = createEventDispatcher();
  let triggerEl;
  let contentEl;
  let popper;
  function init(node, _triggerEl) {
    popper = createPopper(_triggerEl, node, {
      placement,
      strategy,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: ({ reference, popper: popper2 }) => {
              return [
                yOnly ? popper2.width / 2 - reference.width / 2 - reference.x : 0,
                offset
              ];
            }
          }
        },
        { name: "eventListeners", enabled: open },
        { name: "flip", enabled: false }
      ]
    });
    return {
      update(_triggerEl2) {
        popper.state.elements.reference = _triggerEl2;
        popper.update();
      },
      destroy() {
        popper.destroy();
      }
    };
  }
  if ($$props.activeContent === void 0 && $$bindings.activeContent && activeContent !== void 0)
    $$bindings.activeContent(activeContent);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0)
    $$bindings.arrow(arrow);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0)
    $$bindings.trigger(trigger);
  if ($$props.triggeredBy === void 0 && $$bindings.triggeredBy && triggeredBy !== void 0)
    $$bindings.triggeredBy(triggeredBy);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0)
    $$bindings.strategy(strategy);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.yOnly === void 0 && $$bindings.yOnly && yOnly !== void 0)
    $$bindings.yOnly(yOnly);
  {
    dispatch("show", triggerEl, open);
  }
  popper && popper.setOptions({ placement });
  return `${`<div${add_attribute("this", contentEl, 0)}></div>`}

${open && triggerEl ? `${validate_component(Frame, "Frame").$$render(
    $$result,
    Object_1.assign({ use: init }, { options: triggerEl }, { role: "tooltip" }, { tabIndex: activeContent ? -1 : void 0 }, $$restProps, {
      class: classNames("z-10 outline-none", $$props.class)
    }),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}
    ${arrow ? `<div data-popper-arrow class="${"tooltip-arrow"}"></div>` : ``}`;
      }
    }
  )}` : ``}`;
});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "frameClass"]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { frameClass = "" } = $$props;
  let popoverClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.frameClass === void 0 && $$bindings.frameClass && frameClass !== void 0)
    $$bindings.frameClass(frameClass);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        $$restProps.arrow = $$restProps.arrow ?? false;
        $$restProps.trigger = $$restProps.trigger ?? "click";
        $$restProps.placement = $$restProps.placement ?? "bottom";
        $$restProps.color = $$restProps.color ?? "dropdown";
        $$restProps.shadow = $$restProps.shadow ?? true;
        $$restProps.rounded = $$restProps.rounded ?? true;
      }
    }
    popoverClass = classNames("divide-y divide-gray-100 dark:divide-gray-600", frameClass);
    $$rendered = `${validate_component(Popper, "Popper").$$render(
      $$result,
      Object.assign({ activeContent: true }, $$restProps, { class: popoverClass }, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${$$slots.header ? `<div class="${"py-1 overflow-hidden rounded-t"}">${slots.header ? slots.header({}) : ``}</div>` : ``}
  <ul${add_attribute("class", $$props.class ?? "py-1 w-44", 0)}>${slots.default ? slots.default({}) : ``}</ul>
  ${$$slots.footer ? `<div class="${"py-1 overflow-hidden rounded-b"}">${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "show", "use"]);
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `${show ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${slots.default ? slots.default({}) : ``}`}`;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["defaultClass", "href"]);
  let { defaultClass = "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" } = $$props;
  let { href = void 0 } = $$props;
  let liClass;
  let wrap = true;
  function init(node) {
    wrap = node.parentElement?.tagName === "UL";
  }
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  liClass = classNames(defaultClass, href ? "block" : "w-full text-left", $$props.class);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { tag: "li", show: wrap, use: init }, {}, {
    default: () => {
      return `${((tag) => {
        return tag ? `<${href ? "a" : "button"}${spread(
          [
            { href: escape_attribute_value(href) },
            escape_object($$restProps),
            { class: escape_attribute_value(liClass) }
          ],
          {}
        )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(href ? "a" : "button")}`;
    }
  })}`;
});
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "select.svelte-1uhwzid{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url('/img/arrowDown.svg');background-position:1.5rem 0.8rem;background-repeat:no-repeat;padding-right:0.8rem;background-size:0.63rem;padding-top:0.2rem}header.svelte-1uhwzid{position:fixed;top:0;width:100%;background-color:#fff;z-index:100010}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_language;
  $$unsubscribe_language = subscribe(language, (value) => value);
  let { contactsData } = $$props;
  let { navData } = $$props;
  const languages = [{ value: "lt", name: "LT" }, { value: "en", name: "EN" }];
  if ($$props.contactsData === void 0 && $$bindings.contactsData && contactsData !== void 0)
    $$bindings.contactsData(contactsData);
  if ($$props.navData === void 0 && $$bindings.navData && navData !== void 0)
    $$bindings.navData(navData);
  $$result.css.add(css);
  $$unsubscribe_language();
  return `<header class="${"svelte-1uhwzid"}"><nav class="${"mx-auto hidden max-w-screen-xl justify-end lg:mr-auto lg:flex"}"><div class="${"lg:flex lg:gap-10 lg:p-6 lg:text-lg"}"><a href="${"/"}" class="${"decoration-viking-yellow decoration-4 underline-offset-8 hover:underline"}">${escape(navData.home)}</a>
			<div class="${"relative"}"><button id="${"services-btn"}" class="${"relative flex items-center gap-1"}"><span class="${"decoration-viking-yellow decoration-4 underline-offset-8 hover:underline"}">${escape(navData.services)}</span>
					<div class="${"sm:pt-1"}"><img src="${"img/arrowDown.svg"}" alt="${""}"></div></button></div>

			<a href="${"/#about-us"}" class="${"decoration-viking-yellow decoration-4 underline-offset-8 hover:underline"}">${escape(navData.about)}</a>
			<a href="${"/#faq"}" class="${"decoration-viking-yellow decoration-4 underline-offset-8 hover:underline"}">${escape(navData.faq)}</a>
			<a href="${"/#contacts"}" class="${"decoration-viking-yellow decoration-4 underline-offset-8 hover:underline"}">${escape(navData.contacts)}</a>

			${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      triggeredBy: "#services-btn",
      class: "dropdownMenu z-20 w-44"
    },
    {},
    {
      default: () => {
        return `${validate_component(DropdownItem, "DropdownItem").$$render(
          $$result,
          {
            href: "/rope-access-service",
            class: "decoration-viking-yellow decoration-4 underline-offset-8 hover:bg-inherit hover:underline"
          },
          {},
          {
            default: () => {
              return `${escape(navData.rope_access)}`;
            }
          }
        )}
				${validate_component(DropdownItem, "DropdownItem").$$render(
          $$result,
          {
            href: "/arborist-service",
            class: "decoration-viking-yellow decoration-4 underline-offset-8 hover:bg-inherit hover:underline"
          },
          {},
          {
            default: () => {
              return `${escape(navData.arborism)}`;
            }
          }
        )}`;
      }
    }
  )}

			<div class="${"lan-select flex items-start gap-2"}"><div class="${"pt-2"}"><img src="${"img/lang.svg"}" alt="${""}"></div>
				<select class="${"border-none py-0 pl-0 pr-7 focus:outline-none svelte-1uhwzid"}">${each(languages, (language2) => {
    return `<option${add_attribute("value", language2.value, 0)}>${escape(language2.name)}</option>`;
  })}</select></div></div></nav>

	<div class="${"p-3 lg:hidden "}"><button>${`<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"32"}" height="${"32"}" viewBox="${"0 0 20 20"}"><path d="${"M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 5A.75.75 0 0 1 2.75 9h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75ZM2.75 14a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Z"}"></path></svg>`}</button>
		${``}</div>
</header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cmsData } = $$props;
  let { navData } = $$props;
  if ($$props.cmsData === void 0 && $$bindings.cmsData && cmsData !== void 0)
    $$bindings.cmsData(cmsData);
  if ($$props.navData === void 0 && $$bindings.navData && navData !== void 0)
    $$bindings.navData(navData);
  return `<footer class="${"border-t-8 border-viking-yellow bg-viking-grey-background"}"><div class="${"mx-auto grid auto-cols-auto pt-10 pb-14 text-center lg:max-w-screen-xl lg:grid-flow-col lg:justify-between lg:gap-5 lg:p-10 lg:pb-0 lg:text-left"}"><div class="${"order-last flex flex-col items-center gap-5 lg:order-first"}"><img src="${"/img/logo.png"}" alt="${""}" class="${"w-32"}">
			<div class="${"text-xs"}">© 2023. Visos teisės saugomos</div></div>
		<div><ul class="${"lg:mt-8 lg:space-y-3"}"><li class="${"mt-7 hidden lg:block"}"><a href="${"/"}" class="${"border-viking-yellow hover:border-b-4"}">${escape(navData.home)}</a></li>
				<li class="${"mt-7 flex justify-center lg:block"}"><button id="${"services-btn"}" class="${"flex items-center gap-1"}"><span class="${"decoration-viking-yellow decoration-4 underline-offset-8 hover:underline"}">${escape(navData.services)}</span>
						<div class="${"sm:pt-1"}"><img src="${"img/arrowDown.svg"}" alt="${""}"></div></button></li></ul>

			${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      triggeredBy: "#services-btn",
      class: "dropdownMenu z-20 w-44"
    },
    {},
    {
      default: () => {
        return `${validate_component(DropdownItem, "DropdownItem").$$render(
          $$result,
          {
            href: "/rope-access-service",
            class: "decoration-viking-yellow decoration-4 underline-offset-8 hover:bg-inherit hover:underline"
          },
          {},
          {
            default: () => {
              return `${escape(navData.rope_access)}`;
            }
          }
        )}
				${validate_component(DropdownItem, "DropdownItem").$$render(
          $$result,
          {
            href: "/arborist-service",
            class: "decoration-viking-yellow decoration-4 underline-offset-8 hover:bg-inherit hover:underline"
          },
          {},
          {
            default: () => {
              return `${escape(navData.arborism)}`;
            }
          }
        )}`;
      }
    }
  )}</div>
		<div><ul class="${"lg:mt-8 lg:space-y-3"}"><li class="${"mt-7"}"><a href="${"/#about-us"}" class="${"border-viking-yellow hover:border-b-4"}">${escape(navData.about)}</a></li>
				<li class="${"mt-7"}"><a href="${"/#faq"}" class="${"border-viking-yellow hover:border-b-4"}">${escape(navData.faq)}</a></li></ul></div>
		<div><ul class="${"lg:mt-8 lg:space-y-3"}"><li class="${"mt-7"}"><a href="${"tel:+37065482654"}"><span><img src="${"/img/phone-icon.svg"}" alt="${""}" class="${"mr-2 inline"}"></span>
						<span class="${"border-viking-yellow hover:border-b-4"}">${escape(cmsData.phone)}</span></a></li>
				<li class="${"mt-7"}"><a href="${"mailto:vikingropeaccess@gmail.com"}"><span><img src="${"/img/mail-icon.svg"}" alt="${""}" class="${"mr-2 inline"}"></span>
						<span class="${"border-viking-yellow hover:border-b-4"}">${escape(cmsData.email)}</span></a></li></ul></div>
		<div><ul class="${"mb-7 flex justify-center gap-5 lg:my-0 lg:block lg:space-y-3"}"><li class="${"mt-7"}"><a${add_attribute("href", cmsData.facebook.url, 0)} target="${"_blank"}" rel="${"noopener noreferrer"}"><img src="${"/img/fb-icon.svg"}" alt="${""}"></a></li>
				<li class="${"mt-7"}"><a${add_attribute("href", cmsData.instagram.url, 0)} target="${"_blank"}" rel="${"noopener noreferrer"}"><img src="${"/img/insta-icon.svg"}" alt="${""}"></a></li></ul></div></div></footer>`;
});
const styles = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"app"}">${validate_component(Header, "Header").$$render(
    $$result,
    {
      contactsData: data.contactsData,
      navData: data.navData
    },
    {},
    {}
  )}

	<main>${slots.default ? slots.default({}) : ``}</main>

	<div></div>
	${validate_component(Footer, "Footer").$$render(
    $$result,
    {
      cmsData: data.footerData,
      navData: data.navData
    },
    {},
    {}
  )}</div>`;
});
export {
  Layout as default
};
