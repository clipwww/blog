/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2021/08/17/first/index.html",
    "revision": "60b31df45012f91189a702f0db8ffad7"
  },
  {
    "url": "2021/08/23/covid19-medigen-vaccine/index.html",
    "revision": "e1dbb93dcdab81c009c9f52eecded5ab"
  },
  {
    "url": "2021/08/25/google-sheets/index.html",
    "revision": "87b88cc30e4c5075b49c31fb0318d863"
  },
  {
    "url": "2021/08/27/umamusume-leo-race/index.html",
    "revision": "9b46f8edfdf539e228522ebc4660b847"
  },
  {
    "url": "404.html",
    "revision": "40414c2e8c66e630e4a05426e98786f9"
  },
  {
    "url": "about/index.html",
    "revision": "7b04a7addd14719df1a2946aca688645"
  },
  {
    "url": "assets/css/0.styles.1b38d01d.css",
    "revision": "bbad92098eb8da7eb175347ade1b1a17"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/pic.1a9c794c.png",
    "revision": "1a9c794cf364ba754c7c28ae812a29af"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fc46ffa9.js",
    "revision": "7d141acaaef9c0fa611f6fae00255cf9"
  },
  {
    "url": "assets/js/11.b1a0a669.js",
    "revision": "81c002a1a47f8996922e2ad09502fdad"
  },
  {
    "url": "assets/js/12.1af66d1b.js",
    "revision": "5618dd4d19b1d57f3fc69eb8d4f5d5ce"
  },
  {
    "url": "assets/js/13.3c42a2eb.js",
    "revision": "d3e1049b9a8ec0948f48c4ab91f607a8"
  },
  {
    "url": "assets/js/14.8c63f540.js",
    "revision": "6483368c0615c69be0a4461b67420fe1"
  },
  {
    "url": "assets/js/15.acc1fec9.js",
    "revision": "32e3571bd3c8c7106c011d8763b1133b"
  },
  {
    "url": "assets/js/16.0314b142.js",
    "revision": "71d32ecced508eedae7e1e8399d9412b"
  },
  {
    "url": "assets/js/17.f6ff686e.js",
    "revision": "4fda3edde13a17d3e223e12b642f79c9"
  },
  {
    "url": "assets/js/18.af13f513.js",
    "revision": "8d7b86cc56f00d94537e3fc3ef507c61"
  },
  {
    "url": "assets/js/19.af824887.js",
    "revision": "fcb70bdaf28f68ad1250f1e386cacea9"
  },
  {
    "url": "assets/js/20.3955a82f.js",
    "revision": "83e70ef9616051860a658550353b66c0"
  },
  {
    "url": "assets/js/21.c654202f.js",
    "revision": "baf214fcc0a463e078f6ca46dbb67871"
  },
  {
    "url": "assets/js/3.e1b1d662.js",
    "revision": "d8ef1dde58a29018314a44ff0042fe35"
  },
  {
    "url": "assets/js/4.1713a0d6.js",
    "revision": "29328d9b9888534f13dec9f4ad90946a"
  },
  {
    "url": "assets/js/5.f5eaa915.js",
    "revision": "2e1f107c97bc1bec4575b3cf0976b41e"
  },
  {
    "url": "assets/js/6.dd749bb8.js",
    "revision": "a0188e700e4b04c0ab938fc64f8009fa"
  },
  {
    "url": "assets/js/7.5000f27b.js",
    "revision": "532a6d5b583a386dd2995eca8c4a3dbe"
  },
  {
    "url": "assets/js/8.1295d4b4.js",
    "revision": "f448423d4411f1e6763f116a0cf15197"
  },
  {
    "url": "assets/js/9.59aa795a.js",
    "revision": "a426f665a68dba1b74673a3c1ac252a3"
  },
  {
    "url": "assets/js/app.150d6828.js",
    "revision": "d036e3df72310f82c6a3743477fd9bc7"
  },
  {
    "url": "assets/js/vuejs-paginate.cd2053e3.js",
    "revision": "16377c8ffb13c218f64857b00392b343"
  },
  {
    "url": "images/me.jpg",
    "revision": "ebe16f598213d5ee78fbede8826a9438"
  },
  {
    "url": "images/pic.png",
    "revision": "1a9c794cf364ba754c7c28ae812a29af"
  },
  {
    "url": "index.html",
    "revision": "1ee56c2bad3a8f406274a1eea7af2b7d"
  },
  {
    "url": "link/index.html",
    "revision": "3f930d032f1eab6e83400c7e2c0ce80b"
  },
  {
    "url": "tag/COVID-19/index.html",
    "revision": "8963bcea7ff94fac3cccc5612d54b5df"
  },
  {
    "url": "tag/Google Sheets/index.html",
    "revision": "9bfb07722a30c708ed9d3be4c76a55fe"
  },
  {
    "url": "tag/index.html",
    "revision": "dae6c5cea4b3c6d6c95ab5483c82ddff"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "1588bcadb13c1077caeb55e5edea3b80"
  },
  {
    "url": "tag/JSON/index.html",
    "revision": "87b1557a14a4b09c84cc0e5c3fa5679e"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "9feb5197c4e6241b0790e281e4715aff"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "ae5ef12f6238c5b5f17971686f3c30ca"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "97c7a5cc296a9c8bb8a16b53489c1989"
  },
  {
    "url": "tag/ウマ娘/index.html",
    "revision": "03be32572bd3f0bce1e669c2d42b7de1"
  },
  {
    "url": "tag/遊戲/index.html",
    "revision": "9ad2ef3ba997b176e98762e80fdfa6cc"
  },
  {
    "url": "tag/雜記/index.html",
    "revision": "c0a9fc036bae44223a859c389353e1cc"
  },
  {
    "url": "tag/高端疫苗/index.html",
    "revision": "11b3777e6e02e17f8d037a4b6beeeaaf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
