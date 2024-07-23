// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-auth'
  ],
  runtimeConfig: {
    authSecret: '123',
  },
  auth: {
    baseURL: 'https://nuxt-auth-reproductions.vercel.app/api/auth',
  },
  typescript: {
    shim: false
  }
})
