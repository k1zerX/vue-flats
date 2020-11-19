import PosthtmlBem from 'posthtml-bem';

const PosthtmlLoader = {
  loader: 'posthtml-loader',
  options: {
    parser: 'posthtml-pug',
    plugins: [
      PosthtmlBem(),
    ],
    sync: false,
  },
};

const PosthtmlRule = {
  test: /\.pug$/i,
  oneOf: [
    {
      resourceQuery: /^\?vue/i,
      use: [
        PosthtmlLoader,
      ],
    },
    {
      use: [
        PosthtmlLoader,
      ],
    },
  ],
};

export default {
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0',
  },

  target: 'static',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    'nuxt-client-init-module',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt',
  ],

  axios: {
    proxy: true,
  },

  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      pathRewrite: {
        '^/api' : '/',
      },
    },
  },

  css: [
    '~/assets/global-css/main.styl'
  ],

  build: {
    extend({ module, plugins }, obj) {
      console.log(obj);
      const i = module.rules.findIndex(elem => elem.test.toString() === PosthtmlRule.test.toString());
      if (i >= 0) {
        module.rules[i] = PosthtmlRule;
      } else {
        module.rules.push(PosthtmlRule);
      }
    },
  },
}
