// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // 配置全局样式
  css: ["@/assets/style/global.scss"],
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: "123",

    // Public keys that are exposed to the client
    // 优先级低于.env文件
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE
    }
  },
  appConfig: {
    title: "wing nuxt title",
    theme: {
      primaryColor: "#ababab"
    }
  },
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ]
      // script: [{ src: "https://awesome-lib.js" }],
      // link: [{ rel: "stylesheet", href: "https://awesome-lib.css" }],
      // style: [{ children: ":root { color: red }" }],
      // noscript: [{ children: "JavaScript is required" }]
    }
  },
  vite: {
    css: {
      // 配置变量样式自动导入
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/variable.scss" as *;'
        }
      }
    }
  }
});
