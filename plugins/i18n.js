const eleLangConf = { zh: "zh-CN", th: "th", en: "en" };
import ElementLocale from "element-ui/lib/locale";

export default async ({ app, env, store, params, redirect, route }, inject) => {
  if (!route.name) redirect("/404");
  const langs = store.state.langArr.map(v => v.value);
  let lang = params.lang;

  // 有参数，但 参数是错的，需要赋值正确的语言，并重定向到该语言地址
  if (lang && !langs.includes(lang)) lang = env.lang && redirect(route.fullPath.replace(params.lang, env.lang));

  // 有参数且正确，且等于默认参数，重定向到默认地址
  if (lang && lang === env.lang) redirect(route.fullPath.slice(3) || "/");

  // 没有语言，设置为默认语言
  if (!lang) lang = env.lang;
  if (lang === "zh" || env.node_env === "training")
    app.head.meta.push({ name: "ROBOTS", content: "NOINDEX, NOFOLLOW" });

  store.commit("set_lang", store.state.langArr.filter(v => v.value === lang)[0]);
  store.commit("set_env", env);
  const elementLang = await import(`element-ui/lib/locale/lang/${eleLangConf[lang]}`);
  ElementLocale.use(elementLang.default);
  inject("path", href => (lang === env.lang ? `${href}` : `/${lang}${href === "/" ? "" : href}`));
};
