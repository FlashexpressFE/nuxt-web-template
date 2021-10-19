import env from "./env";

export default {
  // 环境变量
  env: env[process.env.NODE_ENV],
  loading: false,
  head: {
    title: "Flash HR",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "google-site-verification",
        content: "xxxxxxx"
      }
    ],
    script: [
      { async: true, src: "https://www.googletagmanager.com/gtag/js?id=xxxxx" }, 
      { async: true, src: "https://www.googletagmanager.com/gtag/js?id=xxxxxx" },
      { async: true, src: "/ga4.js" },
      { async: true, src: "/ua.js" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.ico" }],
    __dangerouslyDisableSanitizers: ["script"]
  },
  server: { port: 8057, host: "0.0.0.0" },
  googleAnalytics: { id: "xxxxxx" },
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "~/assets/less/reset",
    "~/assets/iconfont/iconfont.css",
    "~/assets/less/prompt.css"
  ],
  plugins: [
    { src: "~/plugins/i18n", ssr: true },
    { src: "~/plugins/axios", ssr: true },
    { src: "~/plugins/element-ui", ssr: true },
    { src: "~/plugins/dompurify-html", ssr: false },
    { src: "~/plugins/pdf", ssr: false },
    { src: "~/plugins/lazy-load-img", ssr: false }
  ],
  components: true,
  buildModules: ["@nuxtjs/google-analytics"],
  modules: ["@nuxtjs/axios", "cookie-universal-nuxt"],
  build: {
    extractCSS: { ignoreOrder: true },
    analyze: false,
    transpile: [/^element-ui/],
    extend(config, ctx) {
      config.output.globalObject = "this";
      config.module.rules.push({
        test: /\.pdf$/,
        loader: "url-loader"
      });
    }
  }
};
