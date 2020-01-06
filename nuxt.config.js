const path = require("path");

module.exports = {
  mode: "spa",
  head: { title: "electron-nuxt" }, // Headers of the page
  loading: false, // Disable default loading bar,
  plugins: [
    {
      src: "@/plugins/ant.js",
      ssr: false
    }
  ],
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, "./tailwind.config.js")
      }
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        // Run ESLint on save
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.target = "electron-renderer";
      }
    }
  },
  dev: process.env.NODE_ENV === "DEV",
  css: ["@/assets/css/global.css", "~assets/css/tailwind.css"],
  modules: ["nuxt-purgecss"],
  /*
   ** PurgCSS configuration
   */
  purgeCSS: {
    mode: "postcss",
    enabled: ({ isDev }) => {
      if (isDev) false;
    },
    paths: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js"
    ]
  }
};
