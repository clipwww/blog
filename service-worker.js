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
    "revision": "077acc83f132d2b341f82685eb90ed18"
  },
  {
    "url": "2021/08/23/covid19-medigen-vaccine/index.html",
    "revision": "7faafc1dde183d3ba588811510e881e0"
  },
  {
    "url": "2021/08/25/google-sheets/index.html",
    "revision": "155f3daddf1a8c5e9b9ca0a95a747e01"
  },
  {
    "url": "404.html",
    "revision": "8920a222c14e8cf2e0027ddd7a7a9a86"
  },
  {
    "url": "about/index.html",
    "revision": "72715a5ebe6c122ce6923cfc8ee85650"
  },
  {
    "url": "assets/css/0.styles.767370cb.css",
    "revision": "ad813b4c76f61aacc842daa2b942a396"
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
    "url": "assets/js/10.786d1b26.js",
    "revision": "0c734824d7c6a08f3c45f31a44962430"
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
    "url": "assets/js/14.edc299ab.js",
    "revision": "e45777d6c7087f7418f04f4038090271"
  },
  {
    "url": "assets/js/15.a85a3e24.js",
    "revision": "b77a8b67ff51ded3ad0077c4daa9f184"
  },
  {
    "url": "assets/js/16.cca3bf03.js",
    "revision": "9bf99caefd12add2d563e6e09096c1f3"
  },
  {
    "url": "assets/js/17.1e45c90d.js",
    "revision": "a614d7ff5ad11305b2e2fcdddc73f0a7"
  },
  {
    "url": "assets/js/18.2a29b2df.js",
    "revision": "cd268b61b938ab634d704c69a62833f4"
  },
  {
    "url": "assets/js/19.cda4b285.js",
    "revision": "10e1f9d1b8f2e77d940ec2381f3184c0"
  },
  {
    "url": "assets/js/20.81c8c617.js",
    "revision": "30107cd716a9c101be29d38a4a912393"
  },
  {
    "url": "assets/js/3.e1b1d662.js",
    "revision": "d8ef1dde58a29018314a44ff0042fe35"
  },
  {
    "url": "assets/js/4.e185a939.js",
    "revision": "aaa07ae3e69907a7c792175dde3e4dd8"
  },
  {
    "url": "assets/js/5.87ab7f91.js",
    "revision": "78ab561ba0037e559318f4317e61b6c8"
  },
  {
    "url": "assets/js/6.dd749bb8.js",
    "revision": "a0188e700e4b04c0ab938fc64f8009fa"
  },
  {
    "url": "assets/js/7.e1ac5f8f.js",
    "revision": "e5a2ee05e3c5c6005d6eb5f431ab2bbd"
  },
  {
    "url": "assets/js/8.7b8a6626.js",
    "revision": "101e9929a6004e6a417e00029b78da2a"
  },
  {
    "url": "assets/js/9.96a70caa.js",
    "revision": "133ea99d26ed91c6f86f1d8ed0348eb7"
  },
  {
    "url": "assets/js/app.01e8e081.js",
    "revision": "3582e0db613266d80276cf473f2ac18b"
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
    "revision": "7ce7f0dfcbd2ff3ccb9cb4d63225f8fa"
  },
  {
    "url": "link/index.html",
    "revision": "5811d37c12d334e60d7ea7c98c02eb67"
  },
  {
    "url": "tag/COVID-19/index.html",
    "revision": "8abd7243e03687f62b239ea3b3220822"
  },
  {
    "url": "tag/Google Sheets/index.html",
    "revision": "f76b3b2a89d9d342892b7a6638545241"
  },
  {
    "url": "tag/index.html",
    "revision": "a471924894fb735f7d2d311796dda7bb"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "10ce0cfac5a9c773f82d7218d81f7615"
  },
  {
    "url": "tag/JSON/index.html",
    "revision": "492a8ef4cec80d4a6126663eb4e25210"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "34fe45cc730ca6893c88e1485ac804f7"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "c44e11efb49b25d0f91a90abe66433f2"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "4b9e831020650de0f31a0db2c8aaabc4"
  },
  {
    "url": "tag/雜記/index.html",
    "revision": "5305995ec81a34ebd9bcc66ff9c2b063"
  },
  {
    "url": "tag/高端疫苗/index.html",
    "revision": "311016d2baf125cfc75f945aaa263c78"
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
