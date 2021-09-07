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
    "revision": "06e78461c1c96863db7ffcbd7611ee68"
  },
  {
    "url": "2021/08/23/covid19-medigen-vaccine/index.html",
    "revision": "62697128921baac9c6e2e2766b18117f"
  },
  {
    "url": "2021/08/25/google-sheets/index.html",
    "revision": "46ff6de9b06716edac338ba7a739ee25"
  },
  {
    "url": "2021/08/27/umamusume-leo-race/index.html",
    "revision": "d591011d21b2267cdfcc6f181ee7812c"
  },
  {
    "url": "2021/09/07/position-sticky/index.html",
    "revision": "5be516bc253909368e605e51828d6c6c"
  },
  {
    "url": "404.html",
    "revision": "8ffebc09151cbd22205028921776cdd5"
  },
  {
    "url": "about/index.html",
    "revision": "0c90e875e30697e0da4bfe63f8323b06"
  },
  {
    "url": "assets/css/0.styles.33a63581.css",
    "revision": "c71be1d919040f85913a1cad5814512f"
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
    "url": "assets/js/10.7062cfc3.js",
    "revision": "621026c0dc209db7e9afa7a597873d10"
  },
  {
    "url": "assets/js/11.c81427b8.js",
    "revision": "81c9d74743f4ca75abbb44db5f3a718a"
  },
  {
    "url": "assets/js/12.bfddbbff.js",
    "revision": "da890263da84127025cbc8a9bafbd2ad"
  },
  {
    "url": "assets/js/13.beb10467.js",
    "revision": "bf345b64dd86baf4148c37b06348b4ba"
  },
  {
    "url": "assets/js/14.f5dc5762.js",
    "revision": "a1ac239d87217d4c451a11447919881d"
  },
  {
    "url": "assets/js/15.eb73eb54.js",
    "revision": "5b78ed7a1ab5de5a2ef3457106bc9e31"
  },
  {
    "url": "assets/js/16.c4521927.js",
    "revision": "f551ac2cd3301d06dee20bf3d2c8fcf5"
  },
  {
    "url": "assets/js/17.ad6c7c8f.js",
    "revision": "d806de87d1f1a0a0833ece3b6841ba5e"
  },
  {
    "url": "assets/js/18.44bba423.js",
    "revision": "4cb9837e2c566ad170f549ad0315d0bf"
  },
  {
    "url": "assets/js/19.e992afdc.js",
    "revision": "f80f2ecfb9d4e98a61631b2d923fc457"
  },
  {
    "url": "assets/js/20.f17c6ec1.js",
    "revision": "132f20980f6df8dd015ce00ea878c0e6"
  },
  {
    "url": "assets/js/21.c71f91b3.js",
    "revision": "698302623e7f5d90fd128a85133404e6"
  },
  {
    "url": "assets/js/22.76147325.js",
    "revision": "cedc21a626d9cf22c6d545de8488cfac"
  },
  {
    "url": "assets/js/23.e560e1d1.js",
    "revision": "77dd1289a85d2c83c11baf31f424c15d"
  },
  {
    "url": "assets/js/3.e48026bf.js",
    "revision": "2a2070e70ab0efef699f4233f683d817"
  },
  {
    "url": "assets/js/4.38c68b99.js",
    "revision": "5834924a94f6e1a2ec1e3277a8882b2d"
  },
  {
    "url": "assets/js/5.8600c672.js",
    "revision": "abe605421b9f6ea8bacb819d9f8ba676"
  },
  {
    "url": "assets/js/6.3e0480c1.js",
    "revision": "980b490180da6adb371019759b707fa3"
  },
  {
    "url": "assets/js/7.f29568ee.js",
    "revision": "2f57037bc93012d9924d5694a50badfb"
  },
  {
    "url": "assets/js/8.1a57ce26.js",
    "revision": "eb03d0948ff425dcaa9dd95579ba4d47"
  },
  {
    "url": "assets/js/9.56cf9a42.js",
    "revision": "f88efccbdd83e59b0516716d2ac8e339"
  },
  {
    "url": "assets/js/app.5932bc00.js",
    "revision": "d75e2bbf7b23a4adcfbef8509df05188"
  },
  {
    "url": "assets/js/vuejs-paginate.3ca14eab.js",
    "revision": "44a64bb02c444cc42c873d4dadd2d557"
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
    "revision": "be72486104a62603530d28eaec99cdad"
  },
  {
    "url": "link/index.html",
    "revision": "80aee4b805f5c4d72e1e519b6bdc10ce"
  },
  {
    "url": "tag/COVID-19/index.html",
    "revision": "c1856901d5463c4f5aa058e8c51157ec"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "49eefc2dea1c6d280162e78b1fef1d47"
  },
  {
    "url": "tag/Google Sheets/index.html",
    "revision": "6263e92d7868970254db09c6f4afced0"
  },
  {
    "url": "tag/index.html",
    "revision": "dca169ee4d7efcb603d8336396c5b66b"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "8b59bf55d9cb99fd166702950973ea3a"
  },
  {
    "url": "tag/JSON/index.html",
    "revision": "e87551db92783c081a2cd6ba7425e49a"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "0fbedb2ee55bf44cf6392cbb5b3f26f9"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "7ce558f4c6963a8d59931be1d9810388"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "7cb40c6f5461875bb16a39852cb52cf8"
  },
  {
    "url": "tag/ウマ娘/index.html",
    "revision": "bf64d001849fb626ccfdf77ab7006c80"
  },
  {
    "url": "tag/遊戲/index.html",
    "revision": "40f55b2c5337e3bec63a7bd90bb4aba9"
  },
  {
    "url": "tag/雜記/index.html",
    "revision": "7dc00b39456e93c72bbe6fcc4c6feffb"
  },
  {
    "url": "tag/高端疫苗/index.html",
    "revision": "d8670e519debfec955f3e6f0d6ca0eb9"
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
