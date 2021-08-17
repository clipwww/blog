const path = require('path');

module.exports = {
  base: '/blog/',
  lang: 'zh-Hant-TW',
  title: '雜七雜八 - David, Jian',
  description: 'なんですか、これ？',
  repo: 'https://github.com/clipwww',
  // head: [
  //   ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }]
  // ],

  theme: '@vuepress/theme-blog',
  themeConfig: {
    dateFormat: 'YYYY/MM/DD',
    logo: 'https://vuejs.org/images/logo.png',
    nav: [
      {
        text: 'Blog',
        link: '/'
      },
      {
        text: 'Tags',
        link: '/tag/'
      },
      {
        text: 'About',
        link: '/about/'
      }
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
        // {
        //   type: 'web',
        //   link: 'https://www.cakeresume.com/me/er-ting-jian',
        // },
        {
          type: 'mail',
          link: 'mailto:clipwww@gmail.com',
        },
      ],
      copyright: [
        {
          text: 'clipwww©2021',
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
      clientId: '6770b5e770cb48e399e7',
      clientSecret: process.env.VSSUE_CLIENT_SECRET,
    },
    sitemap: {
      hostname: 'https://clipwww.github.io/blog/',
    },
    smoothScroll: true,
    feed: {
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
    ['reading-progress', {
      readingDir: ['_posts', 'about']
    }],
    ['@vuepress/nprogress'],
    ['@vuepress/last-updated'],
    ['@vuepress/back-to-top'],
    ['@vuepress/search'],
    [
      '@vuepress/medium-zoom',
      {
        selector: 'img.zoom-custom-imgs',
        options: {
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
      includeLevel: [1, 2, 3]
    }
  },
  extendMarkdown: (md) => {
    md.set({ breaks: true, html: true, linkify: true });
    md.use(require('markdown-it-task-lists'));
  },
}