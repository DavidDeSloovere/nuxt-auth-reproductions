// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-auth'
  ],
  runtimeConfig: {
    authSecret: '123',
  },
  typescript: {
    shim: false
  }
})
