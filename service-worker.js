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
    "revision": "6269d4f4f362cb99beb8208e0a38e510"
  },
  {
    "url": "2021/08/23/covid19-medigen-vaccine/index.html",
    "revision": "98a559a25b385d76a85fcabe58817889"
  },
  {
    "url": "2021/08/25/google-sheets/index.html",
    "revision": "7b7cd60660a8293de38aa84b8ae6165c"
  },
  {
    "url": "2021/08/27/umamusume-leo-race/index.html",
    "revision": "5e8ce1f6e26af7e2ebe496e43723637b"
  },
  {
    "url": "404.html",
    "revision": "be21126609d47471f513d26730c19b1e"
  },
  {
    "url": "about/index.html",
    "revision": "7d172382a43d247949a6da70ff13dd87"
  },
  {
    "url": "assets/css/0.styles.3bda96f8.css",
    "revision": "1f4cec7f923c517ec140ada7c2072588"
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
    "url": "assets/js/10.6c490161.js",
    "revision": "1dc2d1f2dcb1509cdb0011e37281ba05"
  },
  {
    "url": "assets/js/11.6630025d.js",
    "revision": "9de39f65d85239fd1a582cfbd6bff1f3"
  },
  {
    "url": "assets/js/12.448c8b46.js",
    "revision": "7224323fcfc14dbb7b5315646085d7e5"
  },
  {
    "url": "assets/js/13.711dcafb.js",
    "revision": "13c994f4b7630035ebef249fdec3dbeb"
  },
  {
    "url": "assets/js/14.c99eacf9.js",
    "revision": "fa2037a4518203b3066d9e78b700fd1d"
  },
  {
    "url": "assets/js/15.77a45c98.js",
    "revision": "dd6105f3acc21d7d9968f0973897ef62"
  },
  {
    "url": "assets/js/16.06e72871.js",
    "revision": "e3a1250b82f99a395e0b9cadbd58d9de"
  },
  {
    "url": "assets/js/17.5664c56a.js",
    "revision": "0ec73a082ccefe03fbc866648774e966"
  },
  {
    "url": "assets/js/18.65d65fae.js",
    "revision": "ea3fa90e31ee4b58a3b32659be158f7c"
  },
  {
    "url": "assets/js/19.4c360855.js",
    "revision": "33a35bd724c00985f19c8d440ea40bd8"
  },
  {
    "url": "assets/js/20.ea03cb69.js",
    "revision": "8cb5b4fe0c7c55fb25842dc390a647f8"
  },
  {
    "url": "assets/js/21.0f601111.js",
    "revision": "6e13418c6307403a999aec06e58aa1d3"
  },
  {
    "url": "assets/js/3.57c9e3d7.js",
    "revision": "8efa16b96d3dfd799514a557fdefacb9"
  },
  {
    "url": "assets/js/4.43020847.js",
    "revision": "a40ac31a251faf14f960bc68e3039d5b"
  },
  {
    "url": "assets/js/5.5644f89a.js",
    "revision": "911883d1f1cfe7e719b1fc4c67d5e024"
  },
  {
    "url": "assets/js/6.a27df412.js",
    "revision": "94be9bc00b4603814641f69c7c856350"
  },
  {
    "url": "assets/js/7.22473c92.js",
    "revision": "a8797a632f51174f47cad2c2e32f4ce1"
  },
  {
    "url": "assets/js/8.64ec34f0.js",
    "revision": "4b4eb92a94d6f08c1220f3888a7c5a5f"
  },
  {
    "url": "assets/js/9.5f4ec962.js",
    "revision": "4b251acc67755fa378710ad63184f907"
  },
  {
    "url": "assets/js/app.fbbcf0bc.js",
    "revision": "7d118d91adc18fa49ebf83e688cd5253"
  },
  {
    "url": "assets/js/vuejs-paginate.5a68fb6a.js",
    "revision": "fba17c89816b77309b2de7a17f000b06"
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
    "revision": "16cc5142c741a01ea0aeadb05da50190"
  },
  {
    "url": "link/index.html",
    "revision": "a722d0b5ce56f20a1841111436208765"
  },
  {
    "url": "tag/COVID-19/index.html",
    "revision": "e7e92273364d3684880237add72e3e2c"
  },
  {
    "url": "tag/Google Sheets/index.html",
    "revision": "56f52e2d81005d3d251a81f97693d0a0"
  },
  {
    "url": "tag/index.html",
    "revision": "885281e49ed9eb9c0ad503df810b5a58"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "eaf82807a57d0c2101bfa2d5d766f60d"
  },
  {
    "url": "tag/JSON/index.html",
    "revision": "67f999bd8c0bf67f0cbcc5917aed22f7"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "6172e1408f627d89077c4c5f04294bae"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "88f631736bc1bcbf35cd8a923eef52ce"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "79958a689abf60631078f658e69597a6"
  },
  {
    "url": "tag/ウマ娘/index.html",
    "revision": "f4660da32821933e63f748b4e91656dc"
  },
  {
    "url": "tag/遊戲/index.html",
    "revision": "6c508578121732fd169fe20871daa0f4"
  },
  {
    "url": "tag/雜記/index.html",
    "revision": "656693f25c1a80d3cf32bbf2a701eed7"
  },
  {
    "url": "tag/高端疫苗/index.html",
    "revision": "8df1e122e87055621ecf2057469586de"
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
