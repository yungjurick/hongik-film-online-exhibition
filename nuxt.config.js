export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'hongik-film-online-exhibition',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;600;900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;500;600;900&display=swap'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/fullpage', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/moment'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyB3Dr_2Wppo7d2ifRV7WqYcgn1t8dmd9gc',
          authDomain: 'hongik-film-graduation.firebaseapp.com',
          databaseURL: 'https://hongik-film-graduation-default-rtdb.firebaseio.com',
          projectId: 'hongik-film-graduation',
          storageBucket: 'hongik-film-graduation.appspot.com',
          messagingSenderId: '819974274190',
          appId: '1:819974274190:web:04386e13af9c935e5b1ddf',
          measurementId: 'G-Y37XB6YPQB'
        },
        services: {
          firestore: true,
          storage: true
        }
      }
    ],
    'nuxt-fullpage.js'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  router: {
    middleware: 'navigationCheck'
  },

  generate: {
    fallback: true
  }
}
