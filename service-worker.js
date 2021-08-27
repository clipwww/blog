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
    "revision": "27d04a34ee22da041796bccf5470f42b"
  },
  {
    "url": "2021/08/23/covid19-medigen-vaccine/index.html",
    "revision": "648511a1c591ba396345118f06aef574"
  },
  {
    "url": "2021/08/25/google-sheets/index.html",
    "revision": "c0a3617076274ba90053c2a70034fd0d"
  },
  {
    "url": "2021/08/27/umamusume-leo-race/index.html",
    "revision": "c3fa7e2ae6c3578561b1a6e6c0589b1a"
  },
  {
    "url": "404.html",
    "revision": "0647ad049e8350afcb6837dbaf686fa4"
  },
  {
    "url": "about/index.html",
    "revision": "5e322d0970aa5ad55e2721c55564b348"
  },
  {
    "url": "assets/css/0.styles.83fbe4ff.css",
    "revision": "9ab1ae90e367e0bdde27d5f920fe1368"
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
    "url": "assets/js/18.14d8cf90.js",
    "revision": "21060b6e8ace53a88b64295aab9fd1bd"
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
    "url": "assets/js/5.abc54c6b.js",
    "revision": "47ce3fe819dec97f53f4d021b0b9ffd8"
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
    "url": "assets/js/app.d5af1621.js",
    "revision": "838566f791f64607efced5e2345d33aa"
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
    "revision": "3c2651f3ff6f8e25d99a7d3a44d6e769"
  },
  {
    "url": "link/index.html",
    "revision": "8401d1ffc2b71020641d5d81a986c898"
  },
  {
    "url": "tag/COVID-19/index.html",
    "revision": "36d45f44ccefcd8c75b2083f79f09dc5"
  },
  {
    "url": "tag/Google Sheets/index.html",
    "revision": "b7dc3c74cbd8359ff5236ff65f745fc1"
  },
  {
    "url": "tag/index.html",
    "revision": "1601a20c133e709e9e164059418299ad"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "a1b466a0ac878a862e6509c168c3d72f"
  },
  {
    "url": "tag/JSON/index.html",
    "revision": "d35efa8950df5d38449428d99d8b7580"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "7d420c5112a959e04f1d1cccf49b744a"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "4167b4df083289ae1215acd4bb88e62d"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "e28c0f9c317b703f7e8ce0b0423254f2"
  },
  {
    "url": "tag/ウマ娘/index.html",
    "revision": "16c2c56c41fca422b3a678c4642127fb"
  },
  {
    "url": "tag/遊戲/index.html",
    "revision": "8466cb7ee9f5d32e8966dc7bf887eeaf"
  },
  {
    "url": "tag/雜記/index.html",
    "revision": "7c2e367dde034dcaa169a45b39c9ef13"
  },
  {
    "url": "tag/高端疫苗/index.html",
    "revision": "bb2b105633c0a42b9eacce83d3f24962"
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
