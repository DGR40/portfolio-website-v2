if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const o=e=>n(e,r),u={module:{uri:r},exports:t,require:o};s[r]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(l(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/arrow-icon-a6fd8f64.png",revision:null},{url:"assets/email-icon-6fca0a38.png",revision:null},{url:"assets/github-icon-64847b5d.png",revision:null},{url:"assets/home-design-670ec27c.png",revision:null},{url:"assets/index-0d2f6fb8.css",revision:null},{url:"assets/index-5ea745da.js",revision:null},{url:"assets/linkedin-icon-244fda37.png",revision:null},{url:"assets/meonboat2-c3d9bc3b.png",revision:null},{url:"assets/swing2-3b9bb466.png",revision:null},{url:"assets/swing3-1ea35371.png",revision:null},{url:"assets/text-analysis-1-75b6eefc.png",revision:null},{url:"assets/vueggie-1-092bc9d9.png",revision:null},{url:"index.html",revision:"17682568edde5c1551e8664401ce31a4"},{url:"registerSW.js",revision:"5f081f2da882f5e44f5272984db4d416"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"830b72580e36ae7c14af0e51019e6a1d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
