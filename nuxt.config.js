export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Uniqyl",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Uniqyl e-ticaret" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap",
      },
    ],
  },
  target: "static",
  router: { trailingSlash: false },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/slider", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-route-meta"],

  serverMiddleware: {
    "/_ipx": "~/server/middleware/ipx.js",
  },
  static: {
    prefix: false,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "@nuxtjs/redirect-module",
    "@nuxt/image",
    [
      "nuxt-i18n",
      {
        locales: [
          { code: "tr", file: "tr.json" },
          { code: "en", file: "en.json" },
        ],
        langDir: "locales",
        defaultLocale: "tr",
        vueI18n: {
          fallbackLocale: "tr",
        },
        parsePages: false,
        pages: {
          features: {
            tr: "/ozellikler",
            en: "/features",
          },
          aboutus: {
            tr: "/hakkimizda",
            en: "/about-us",
          },
          contactus: {
            tr: "/bize-ulasin",
            en: "/contact-us",
          },
          references: {
            tr: "/referanslarimiz",
            en: "/references",
          },
          questions: {
            tr: "/sorular",
            en: "/questions",
          },
          price: {
            tr: "/fiyatlar",
            en: "/prices",
          },
          stories: {
            tr: "/basari-hikayeleri",
            en: "/stories",
          },
        }, //dile göre url nameleri değişiyor
      },
    ],
  ],
  redirect: [
    {
      // eslint-disable-next-line
      from: "(?!^/$|^/[?].*$)(.*/[?](.*)$|.*/$)",
      to: (from, req) => {
        const base = req._parsedUrl.pathname.replace(/\/$/, "");
        const search = req._parsedUrl.search;
        return base + (search != null ? search : "");
      },
    },
  ],

  styleResources: {
    scss: ["~/assets/css/*.scss"],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
