import pkg from './package'

export default {
  env: {
    PATH_TYPE: process.env.PATH_TYPE
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#fff' },
  loading: '~/components/loading.vue',
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    // '@/assets/styles/mian.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src:'~/plugins/element-ui',
      ssr: true //是能在服务端运行
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // proxy: true,
    // prefix: '/api', // baseURL
    // credentials: true,
  },
  proxy: {
    // '/api/': {
    //   target: 'http://127.0.0.1:3001', // 代理地址
    //   changeOrigin: true,
    //   pathRewrite: {
    //     '^/api': ''
    //   },
    // },
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {

    }
  }
}
