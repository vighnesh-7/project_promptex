if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"f0204dff3117d974ce97df938dba5af2"},{url:"/_next/static/chunks/232-753f9f5d71cda4f8.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/5e22fd23-f0c3e835d5a91d55.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/749-2228f18cdd85358e.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/8e1d74a4-a6ba61efae2fdb86.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/924-e9aa831890ebe185.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/938-dec9b8db917bf6a2.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/9c4e2130-9b240e2267fb761a.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/app/_not-found-42c8099489ef4b09.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/app/create-prompt/loading-5640017b604c410e.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/app/create-prompt/page-fae6994506c8d037.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/app/layout-7bfe1d97324747ff.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/app/page-ba0c2723eae1a53d.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/app/profile/%5Bid%5D/loading-400b1dce7cd119cd.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/app/profile/%5Bid%5D/page-7f4f1c2a31752e54.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/app/profile/loading-3797642e992a0e1d.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/app/profile/page-f5f235c106963aa4.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/app/update-prompt/page-afa90fdcc3e26e1a.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/fd9d1056-e22bf0dadd3b7f72.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/main-00150541c6bdc719.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/main-app-de599401972070d4.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/pages/_app-98cb51ec6f9f135f.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/pages/_error-e87e5963ec1b8011.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-e236aa184b9e7f39.js",revision:"ePv61D157S_4twDcJ0RXj"},{url:"/_next/static/css/981fd8746ca4359a.css",revision:"981fd8746ca4359a"},{url:"/_next/static/ePv61D157S_4twDcJ0RXj/_buildManifest.js",revision:"a1b7599199e2e8c82f2c6bcf8d8aca61"},{url:"/_next/static/ePv61D157S_4twDcJ0RXj/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/icons/copy.svg",revision:"b3e52024f109e5f6f6c71d3221b6d92e"},{url:"/assets/icons/loader.svg",revision:"c66ae5c05c29b32d8c99e16c73ef8523"},{url:"/assets/icons/tick.svg",revision:"5b84b6ce9905ba8410a4b661cd56f5f3"},{url:"/assets/images/bing image , gravity write ai,vectorizer  ai.jpeg",revision:"6f860056f5e28a60cb64ee6f8f6b6a14"},{url:"/assets/images/logo.jpeg",revision:"ae83013f2d63a0818fb43bca7974a7b3"},{url:"/assets/images/logo.png",revision:"42d076d947c6379f150f7357daf3ab40"},{url:"/assets/images/logo.svg",revision:"3b2edd59027a46b7e56fb48df791b1f4"},{url:"/assets/images/logo1.png",revision:"4b8180acdb9c1371a6a9a2912727fcbc"},{url:"/icon-192x192.png",revision:"c3021926a8f315535e21ff9aadb0fe55"},{url:"/icon-256x256.png",revision:"6062360ea459e4bc7d9a66401cb08dbe"},{url:"/icon-384x384.png",revision:"04ea784b6840b5fd55b7768533077db0"},{url:"/icon-512x512.png",revision:"bcb53f62f7eeba02740b8daaa78e8d6f"},{url:"/icon-72x72.png",revision:"73662310015af6542d28c7e20428808e"},{url:"/manifest.json",revision:"73877b6615cdb993497c757578643cda"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));