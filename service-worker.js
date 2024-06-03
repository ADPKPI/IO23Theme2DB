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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "4379421684389774211450519717615e"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.1d4e0b39.css",
    "revision": "060c3b0a436294665206969f28f866d3"
  },
  {
    "url": "assets/img/delete.dc50e94f.jpg",
    "revision": "dc50e94f0675df05e77eff4fec38bd24"
  },
  {
    "url": "assets/img/get.51d0d4db.jpg",
    "revision": "51d0d4db79b0cf8bb70474d2cbf17821"
  },
  {
    "url": "assets/img/patch.feeab78d.jpg",
    "revision": "feeab78d904e398ff290d94b03e506d8"
  },
  {
    "url": "assets/img/post.df04f3de.jpg",
    "revision": "df04f3de785a31313956dc82a10d269e"
  },
  {
    "url": "assets/img/put.9639daae.jpg",
    "revision": "9639daae821e7525fff0001e03d9969c"
  },
  {
    "url": "assets/img/relationscheme1.69673898.png",
    "revision": "69673898037fa1027fcbebfb4033053e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/serverstart.7e8f2bfd.jpg",
    "revision": "7e8f2bfdddd48e469ad321f420378136"
  },
  {
    "url": "assets/js/1.e345743e.js",
    "revision": "3e95cddee5abb80b850dae25efa5fd67"
  },
  {
    "url": "assets/js/10.70312636.js",
    "revision": "266ac7d94d5ae16655657069635c41f2"
  },
  {
    "url": "assets/js/13.18544b04.js",
    "revision": "9205322d5d5ca0c8fff38eca217c4ff6"
  },
  {
    "url": "assets/js/14.a4bcfaea.js",
    "revision": "95375db9899f9443edcba141c6e06f1b"
  },
  {
    "url": "assets/js/15.cfb05680.js",
    "revision": "9159a1bb0d626916a728725811770481"
  },
  {
    "url": "assets/js/16.4cda5ee8.js",
    "revision": "e1ba8710cfc5e578d41f4c47130b58c4"
  },
  {
    "url": "assets/js/17.4480f90f.js",
    "revision": "2f380983ce9e14406f623ebd2bf93b35"
  },
  {
    "url": "assets/js/18.37e71a23.js",
    "revision": "8ae9dbb20c3d524cac3654026d1041fc"
  },
  {
    "url": "assets/js/19.90782010.js",
    "revision": "3e6a71e82bb3dbc02fc2a552a4ebef24"
  },
  {
    "url": "assets/js/2.620ae50d.js",
    "revision": "0b25b61bab556f248dcb0dfc19806123"
  },
  {
    "url": "assets/js/20.c103b249.js",
    "revision": "531f5d4196087cf8aca3272a83ba1a3d"
  },
  {
    "url": "assets/js/21.279524ce.js",
    "revision": "afe959b996bb93c92dacf170959ad92c"
  },
  {
    "url": "assets/js/22.dbcd25f7.js",
    "revision": "5b9f82036e706a5a31545d68cb50651e"
  },
  {
    "url": "assets/js/23.655062b9.js",
    "revision": "61d77687081967d747b4636d12eb2372"
  },
  {
    "url": "assets/js/24.15ed194e.js",
    "revision": "c6cc98839bad31170592573571ccd2f4"
  },
  {
    "url": "assets/js/25.d949ade8.js",
    "revision": "2ebcbbd5d518e65bb1ce27408870903a"
  },
  {
    "url": "assets/js/26.b290ab6a.js",
    "revision": "12ba1940c7e9d5c1e04fab529b3dfb0e"
  },
  {
    "url": "assets/js/27.870c6b1e.js",
    "revision": "c218ac464ea2f50c7311f8b02f8525f3"
  },
  {
    "url": "assets/js/28.09919a72.js",
    "revision": "8f39a319263e194f9f3d8b316913d65c"
  },
  {
    "url": "assets/js/29.6b4da6b0.js",
    "revision": "1f9ef0c8dc549530030aa54bc97b517e"
  },
  {
    "url": "assets/js/3.e27c38cc.js",
    "revision": "8b5c5393304f9789a88301b03013f8f0"
  },
  {
    "url": "assets/js/30.2fcfa9e4.js",
    "revision": "53cb6059204eed296ad9676ac67d64e1"
  },
  {
    "url": "assets/js/31.b3c388de.js",
    "revision": "e00aaeb779a99143b0b32bbb102fe97a"
  },
  {
    "url": "assets/js/32.786fe4da.js",
    "revision": "9fe84fadfb1640d23e69ccab41866453"
  },
  {
    "url": "assets/js/33.232e38bc.js",
    "revision": "d1871be087879e3a6c038aef2e2b4bad"
  },
  {
    "url": "assets/js/34.e8372fb9.js",
    "revision": "0d74e023529868b5f609211dd24f701b"
  },
  {
    "url": "assets/js/35.1b87db51.js",
    "revision": "b259886489c36dcb41466538097d2824"
  },
  {
    "url": "assets/js/36.433fd094.js",
    "revision": "71a1215ce02f33c72ba59ee81f4ae3d8"
  },
  {
    "url": "assets/js/37.c9ec8d7c.js",
    "revision": "3e77c858b3d898be61e26d168cba718d"
  },
  {
    "url": "assets/js/38.d651fbd7.js",
    "revision": "849782937062d0390db806e1731faba5"
  },
  {
    "url": "assets/js/39.b5c8161f.js",
    "revision": "12bb8eb62d1a39dc5570bf399c462fa0"
  },
  {
    "url": "assets/js/4.9b4e6e64.js",
    "revision": "385a90764be9455e1451ff185e92b7da"
  },
  {
    "url": "assets/js/41.b7ad4f39.js",
    "revision": "4a64eabbfdab15775cabe77202431645"
  },
  {
    "url": "assets/js/5.96b50931.js",
    "revision": "a00c9b331cae4f72a3ada5811db545c8"
  },
  {
    "url": "assets/js/6.d2e0a1c2.js",
    "revision": "4ac7e849a9532a03985892e21fdf0930"
  },
  {
    "url": "assets/js/7.5db91952.js",
    "revision": "9fb9745e26be917aac58e10be7259ad5"
  },
  {
    "url": "assets/js/8.d5adb214.js",
    "revision": "4ded9932fbf222a5d73ad3be77a25828"
  },
  {
    "url": "assets/js/9.47470e96.js",
    "revision": "919b9f0643e716960e5f9ac6db6310d1"
  },
  {
    "url": "assets/js/app.daef5f8b.js",
    "revision": "7e58ed35f7c4bef9171f5ae22c0a1337"
  },
  {
    "url": "assets/js/vendors~docsearch.3cefa927.js",
    "revision": "a771ffaa589785db57bba23b6f8f053b"
  },
  {
    "url": "conclusion/index.html",
    "revision": "93d4f0ab2426b8c5caae71ec5cc73b8c"
  },
  {
    "url": "design/index.html",
    "revision": "a565d75bb9f0fa7f34c7e68097add3e5"
  },
  {
    "url": "index.html",
    "revision": "eb76165421b4c60b98454e603e24a078"
  },
  {
    "url": "intro/index.html",
    "revision": "771507fb4287ba657e6e7f9af56bc1c8"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "7cbf41aa3f084dfbaea63d766787aaff"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "9b8045edbfff4ae41f277e21c2c0abb6"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "68784f56a0e9c7ba89db76378a3b5d31"
  },
  {
    "url": "software/index.html",
    "revision": "e72d041db38dbc4b13ccf5352ec2b93a"
  },
  {
    "url": "test/index.html",
    "revision": "b8c75e8899ecd3bd741e45195daf7f66"
  },
  {
    "url": "use cases/index.html",
    "revision": "a80b1aac1aa235f0dd15b51e4050985f"
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
