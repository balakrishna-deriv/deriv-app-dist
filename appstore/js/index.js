!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react"),require("@deriv/shared"),require("@deriv/components"),require("classnames"),require("react-router-dom"),require("@deriv/translations"),require("react-dom"),require("mobx"),require("react-router")):"function"==typeof define&&define.amd?define(["react","@deriv/shared","@deriv/components","classnames","react-router-dom","@deriv/translations","react-dom","mobx","react-router"],r):"object"==typeof exports?exports["@deriv/appstore"]=r(require("react"),require("@deriv/shared"),require("@deriv/components"),require("classnames"),require("react-router-dom"),require("@deriv/translations"),require("react-dom"),require("mobx"),require("react-router")):e["@deriv/appstore"]=r(e.react,e["@deriv/shared"],e["@deriv/components"],e.classnames,e["react-router-dom"],e["@deriv/translations"],e["react-dom"],e.mobx,e["react-router"])}(self,((e,r,t,o,a,n,i,d,s)=>(()=>{"use strict";var u,c,l={1336:e=>{e.exports=t},5770:e=>{e.exports=r},2273:e=>{e.exports=n},8310:e=>{e.exports=o},259:e=>{e.exports=d},8156:r=>{r.exports=e},7111:e=>{e.exports=i},5432:e=>{e.exports=s},6128:e=>{e.exports=a}},p={};function f(e){var r=p[e];if(void 0!==r)return r.exports;var t=p[e]={id:e,loaded:!1,exports:{}};return l[e].call(t.exports,t,t.exports,f),t.loaded=!0,t.exports}f.m=l,f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r,{a:r}),r},f.d=(e,r)=>{for(var t in r)f.o(r,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((r,t)=>(f.f[t](e,r),r)),[])),f.u=e=>"appstore/js/appstore."+(542===e?"appstore":e)+"."+{542:"00e63665788a8fedea35",737:"326305849ee0daf9f4df"}[e]+".js",f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),u={},c="@deriv/appstore:",f.l=(e,r,t,o)=>{if(u[e])u[e].push(r);else{var a,n;if(void 0!==t)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var s=i[d];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==c+t){a=s;break}}a||(n=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,f.nc&&a.setAttribute("nonce",f.nc),a.setAttribute("data-webpack",c+t),a.src=e),u[e]=[r];var l=(r,t)=>{a.onerror=a.onload=null,clearTimeout(p);var o=u[e];if(delete u[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),n&&document.head.appendChild(a)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),f.p="/",(()=>{var e={826:0};f.f.j=(r,t)=>{var o=f.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(((t,a)=>o=e[r]=[t,a]));t.push(o[2]=a);var n=f.p+f.u(r),i=new Error;f.l(n,(t=>{if(f.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,o[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,a,[n,i,d]=t,s=0;if(n.some((r=>0!==e[r]))){for(o in i)f.o(i,o)&&(f.m[o]=i[o]);d&&d(f)}for(r&&r(t);s<n.length;s++)a=n[s],f.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunk_deriv_appstore=self.webpackChunk_deriv_appstore||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),f.nc=void 0;var m={};return(()=>{f.d(m,{default:()=>a});var e=f(8156),r=f.n(e),t=f(5770),o=f(1336);const a=(0,t.makeLazyLoader)((function(){return(0,t.moduleLoader)((function(){return Promise.all([f.e(737),f.e(542)]).then(f.bind(f,4646))}))}),(function(){return r().createElement(o.Loading,null)}))()})(),m.default})()));