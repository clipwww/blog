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
    "revision": "416358de733ea627429f3dc6a92c509c"
  },
  {
    "url": "2021/08/23/covid19-medigen-vaccine/index.html",
    "revision": "27bbbaced0be18435abefea8a1237018"
  },
  {
    "url": "2021/08/25/google-sheets/index.html",
    "revision": "10c47b62f289eea928a6ac4aeac50e25"
  },
  {
    "url": "2021/08/27/umamusume-leo-race/index.html",
    "revision": "0166ad5faa0d7e92169fd6c7656be490"
  },
  {
    "url": "404.html",
    "revision": "26e4085a748df8aa4162abce1914e824"
  },
  {
    "url": "about/index.html",
    "revision": "760f308ebac20d13d770a679fb2da3d3"
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
    "url": "assets/js/12.bffff7cd.js",
    "revision": "bc87c1115d8d25551b164ac73562890f"
  },
  {
    "url": "assets/js/13.9719ae37.js",
    "revision": "6052d3306b4e4b397ef77dbfc547460f"
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
    "url": "assets/js/3.b6e8ef81.js",
    "revision": "4bd3f04d0dbc649f4e596e2a1ca5b2e2"
  },
  {
    "url": "assets/js/4.5b16171e.js",
    "revision": "54a795d1a05702e7cf524c7bfa186aab"
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
    "url": "assets/js/8.04d3be7b.js",
    "revision": "32361f31ab20bd687bbb00c3d2449ddd"
  },
  {
    "url": "assets/js/9.5f4ec962.js",
    "revision": "4b251acc67755fa378710ad63184f907"
  },
  {
    "url": "assets/js/app.067bcbf4.js",
    "revision": "1d13badc134658e29b4c95b590298278"
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
    "revision": "e6458cb7dec28235a9c64915200eb5e3"
  },
  {
    "url": "link/index.html",
    "revision": "dd7339f6e09aabb744e82d7327066b57"
  },
  {
    "url": "tag/COVID-19/index.html",
    "revision": "dc82426f92c5485831259a0449fcb993"
  },
  {
    "url": "tag/Google Sheets/index.html",
    "revision": "41bf3e4066aa8c716774f055eb45b796"
  },
  {
    "url": "tag/index.html",
    "revision": "09869018b245fb9ce441c82b7a532c2e"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "082fd36cffec6e521a19f76a51db2cd6"
  },
  {
    "url": "tag/JSON/index.html",
    "revision": "cdccb993a9dc500b04dad11bb3a7c81c"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "1567b6d4ee861c9f45119c3bc308c612"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "77f4bfcb73c894477bc14fc937411cf9"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "fced54c1c3a6fd472b59eb57876d6d35"
  },
  {
    "url": "tag/ウマ娘/index.html",
    "revision": "96a060fdbe48a2fe5cd4b9dceef3acdb"
  },
  {
    "url": "tag/遊戲/index.html",
    "revision": "874bc6b4d103de29fe740848ea7e3f5c"
  },
  {
    "url": "tag/雜記/index.html",
    "revision": "cbd38cefbf6b93e82d64cc869ff1fd91"
  },
  {
    "url": "tag/高端疫苗/index.html",
    "revision": "311494d33da56057ac10c0e743dd6721"
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
