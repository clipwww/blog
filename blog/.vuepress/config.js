const path = require('path');

console.log('[NODE_ENV]', process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
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
          text: '本部落格依照創用CC「姓名標示-非商業性-禁止改作 3.0 台灣」授權',
          link: 'https://creativecommons.org/licenses/by-nc-nd/3.0/tw/',
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
        id: 'UA-93335284-1',
      },
    ],
    // ['@vuepress/plugin-pwa'],
    // ['@vuepress/plugin-pwa-popup'],
    ['@kawarimidoll/tailwind', {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            vue: '#3eaf7c'
          },
        },
      },
    }],
    ['reading-progress', {
      readingDir: ['_posts', 'about', 'link']
    }],
    ['@vuepress/nprogress'],
    ['@vuepress/last-updated'],
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
  ],

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../assets'),
      },
    },
  },
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [2, 3, 4, 5, 6]
    }
  },
  extendMarkdown: (md) => {
    md.set({ breaks: true, html: true, linkify: true });
    // md.use(require('markdown-it-task-lists'));
  },
}