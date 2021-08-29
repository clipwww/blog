const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
console.log('[NODE_ENV]', process.env.NODE_ENV)
if (isDev) {
  require('dotenv').config()
}

module.exports = {
  base: '/blog/',
  lang: 'zh-Hant-TW',
  title: 'David\'s Blog',
  description: 'なんですか、これ？',
  repo: 'https://github.com/clipwww',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }]
  ],

  // theme: '@vuepress/theme-blog',
  themeConfig: {
    dateFormat: 'YYYY/MM/DD',
    pwa: true,
    logo: 'https://vuejs.org/images/logo.png',
    nav: [
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Blog',
        link: '/'
      },
      {
        text: 'Tags',
        link: '/tag/'
      },
      // {
      //   text: 'Link',
      //   link: '/link/'
      // },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/clipwww',
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/davidjian/',
        },
        {
          type: 'mail',
          link: 'mailto:clipwww@gmail.com',
        },
      ],
      copyright: [
        {
          text: 'Copyright © 2021 David,Jian',
          link: '/',
        },
        {
          text: 'Powered by VuePress',
          link: 'https://v1.vuepress.vuejs.org/',
        },
      ],
    },
    comment: {
      service: 'vssue',
      owner: 'clipwww',
      repo: 'blog',
      clientId: process.env.VSSUE_CLIENT_ID,
      clientSecret: process.env.VSSUE_CLIENT_SECRET,
      locale: 'en',
      perPage: 20,
    },
    sitemap: {
      hostname: 'https://clipwww.github.io/blog/',
    },
    smoothScroll: true,
    feed: {
      json: true,
      canonical_base: 'https://clipwww.github.io/blog/'
    }
  },

  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-93335284-1',
      },
    ],
    ['@kawarimidoll/tailwind', {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            vue: '#3eaf7c'
          },
        },
      },
      plugins: [
        require('@tailwindcss/aspect-ratio')
      ]
    }],
    ['reading-progress', {
      readingDir: ['_posts', 'about', 'link', 'tag']
    }],
    ['@vuepress/nprogress'],
    ['@vuepress/last-updated', {
      transformer(timestamp, lang){
        // Don't forget to install moment yourself
        require('dayjs/locale/zh-tw')
        const dayjs = require('dayjs')
        dayjs.locale('zh-tw')
        return dayjs(timestamp).format('YYYY/MM/DD HH:mm:ss')
      }
    }],
    ['@vuepress/back-to-top'],
    ['@vuepress/search'],
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.vuepress-blog-theme-content :not(a) > img',
        options: {
          background: 'rgba(0,0,0,0.7)',
          margin: 16
        }
      }
    ],
    ['social-share', {
      networks: ['line', 'facebook', 'twitter', 'email'],
      email: 'clipwww@gmail.com',
      twitterUser: 'clipwwww',
      fallbackImage: 'https://vuepress.vuejs.org/hero.png',
      autoQuote: true,
      isPlain: true,
      noGlobalSocialShare: true,
    },]
  ],

  configureWebpack: {
    output: isDev ? {} : {
      publicPath: 'https://cdn.jsdelivr.net/gh/clipwww/blog@gh-pages/'
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../assets'),
      },
    },
  },
  markdown: {
    lineNumbers: false,
    toc: {
      includeLevel: [2, 3, 4, 5, 6]
    }
  },
  extendMarkdown: (md) => {
    md.set({ breaks: true, html: true, linkify: true });
    // md.use(require('markdown-it-task-lists'));
  },
}