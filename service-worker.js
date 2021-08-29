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
    "revision": "7263a770ffc2341b496a166ead446b26"
  },
  {
    "url": "2021/08/23/covid19-medigen-vaccine/index.html",
    "revision": "40b3830fb56bd3fa3ee56101bebe3e6a"
  },
  {
    "url": "2021/08/25/google-sheets/index.html",
    "revision": "c3fd49de46bdd0b9b680f8978fea758a"
  },
  {
    "url": "2021/08/27/umamusume-leo-race/index.html",
    "revision": "7adad56cd900fba0ad9566b239de3edf"
  },
  {
    "url": "404.html",
    "revision": "472d379b728ed866b8f76fdd12705db1"
  },
  {
    "url": "about/index.html",
    "revision": "563afc1a8bdf10f9e31a73609b2d210d"
  },
  {
    "url": "assets/css/0.styles.68a69206.css",
    "revision": "70f4259ed30fa587716f01e68fe9d791"
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
    "url": "assets/js/10.0a9749ea.js",
    "revision": "db5cf90375e2de384902e15fb9a58778"
  },
  {
    "url": "assets/js/11.76726dab.js",
    "revision": "723fd7b3eded5ef86fce2d5f438d5488"
  },
  {
    "url": "assets/js/12.cdc3ed62.js",
    "revision": "0fc42b807556f9da300e5869e4b046ee"
  },
  {
    "url": "assets/js/13.b6eec3cb.js",
    "revision": "abb5d40fc65f97b3adc842551279e049"
  },
  {
    "url": "assets/js/14.04c69437.js",
    "revision": "3df4c5e81394244b7d7123475a58bde4"
  },
  {
    "url": "assets/js/15.ce402a40.js",
    "revision": "65642a8277e927749b560c6b38c0332b"
  },
  {
    "url": "assets/js/16.ff263464.js",
    "revision": "262e2b5c5e257c34eb5a416840a43c36"
  },
  {
    "url": "assets/js/17.768a9ef6.js",
    "revision": "78e380b0b533033d3389542ba7d6a8ce"
  },
  {
    "url": "assets/js/18.1fb75b84.js",
    "revision": "e019820e43c635765c32a82158077026"
  },
  {
    "url": "assets/js/19.965994fe.js",
    "revision": "6f03703d59f6631e7d1fa012b0c6a5ed"
  },
  {
    "url": "assets/js/20.1826775b.js",
    "revision": "b5ab8f0261c7b2ddaface380b1cae13c"
  },
  {
    "url": "assets/js/21.403a1130.js",
    "revision": "b79bca6ff32bbf78c96e76a27f136200"
  },
  {
    "url": "assets/js/22.44723c73.js",
    "revision": "6eb3899e66e96d42550041b669deaa77"
  },
  {
    "url": "assets/js/3.bdc3eb1b.js",
    "revision": "84aa6e22f8dbfd9733747d806713fb2a"
  },
  {
    "url": "assets/js/4.5ed8716e.js",
    "revision": "7f0a756f5c1b50be78fe16608d5fb297"
  },
  {
    "url": "assets/js/5.9dd992ca.js",
    "revision": "e386530fff1259f70b19d2881e6f2f3a"
  },
  {
    "url": "assets/js/6.944d0252.js",
    "revision": "09fdd136dd9575fd60f4976b4681c162"
  },
  {
    "url": "assets/js/7.710db601.js",
    "revision": "27d78ea96f5422d17df75077ce16e6ff"
  },
  {
    "url": "assets/js/8.065c13e3.js",
    "revision": "4a4223bbc9b38985a0fc5a2ade45b980"
  },
  {
    "url": "assets/js/9.53bab0d5.js",
    "revision": "da805753eab65791ea77c64c611f1c96"
  },
  {
    "url": "assets/js/app.1e3779dd.js",
    "revision": "310b484c787a6ec3a5756c3e8b37ed4c"
  },
  {
    "url": "assets/js/vuejs-paginate.d1226f16.js",
    "revision": "9696a47e634a642ee019d227aa799430"
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
    "revision": "b113c4bbb8737384036aa537277eb9ab"
  },
  {
    "url": "link/index.html",
    "revision": "738c4c2c5dc9a59c23c133eb2ffbc63e"
  },
  {
    "url": "tag/COVID-19/index.html",
    "revision": "7c3845fc1e211b256ebde12e30041d90"
  },
  {
    "url": "tag/Google Sheets/index.html",
    "revision": "df335a3f70f4bed6171e16ecca2f00ca"
  },
  {
    "url": "tag/index.html",
    "revision": "18474631fdcac305cf8a3a113734a226"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "cdfaa69f95c1480791f31211d980759e"
  },
  {
    "url": "tag/JSON/index.html",
    "revision": "a749f6406524b877b22ff6be83741903"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "bc03f6ae7f2c944b7e76bb37ed4514f4"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "322ffb653a85c52615f93ef9550d9151"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "d9fbe804ebdd83d222918f45d30cdb2b"
  },
  {
    "url": "tag/ウマ娘/index.html",
    "revision": "f005ebbe15e981f1f415515e0f7ce111"
  },
  {
    "url": "tag/遊戲/index.html",
    "revision": "7f8401813f3f6f8f51a3fb23ff4fcff3"
  },
  {
    "url": "tag/雜記/index.html",
    "revision": "f6db4cd47a030b98d6ad1a1d57b5711b"
  },
  {
    "url": "tag/高端疫苗/index.html",
    "revision": "03c26500987e4f20b640acff125f641e"
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
