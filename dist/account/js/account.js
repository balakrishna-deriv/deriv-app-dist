/*! For license information please see account.js.LICENSE.txt */
!function(e,_){"object"==typeof exports&&"object"==typeof module?module.exports=_(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("mobx"),require("mobx-react"),require("react"),require("react-dom"),require("react-router"),require("react-router-dom")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","mobx","mobx-react","react","react-dom","react-router","react-router-dom"],_):"object"==typeof exports?exports["@deriv/account"]=_(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("mobx"),require("mobx-react"),require("react"),require("react-dom"),require("react-router"),require("react-router-dom")):e["@deriv/account"]=_(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.mobx,e["mobx-react"],e.react,e["react-dom"],e["react-router"],e["react-router-dom"])}(self,((__WEBPACK_EXTERNAL_MODULE__deriv_components__,__WEBPACK_EXTERNAL_MODULE__deriv_shared__,__WEBPACK_EXTERNAL_MODULE__deriv_translations__,__WEBPACK_EXTERNAL_MODULE_mobx__,__WEBPACK_EXTERNAL_MODULE_mobx_react__,__WEBPACK_EXTERNAL_MODULE_react__,__WEBPACK_EXTERNAL_MODULE_react_dom__,__WEBPACK_EXTERNAL_MODULE_react_router__,__WEBPACK_EXTERNAL_MODULE_react_router_dom__)=>(()=>{"use strict";var __webpack_modules__={"./index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar App = (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.makeLazyLoader)(function () {\n  return (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.moduleLoader)(function () {\n    return Promise.all(/*! import() | account-app */[__webpack_require__.e("vendors-node_modules_binary-com_binary-document-uploader_DocumentUploader_js-node_modules_bow-cc3252"), __webpack_require__.e("account-app")]).then(__webpack_require__.bind(__webpack_require__, /*! ./App */ "./App.tsx"));\n  });\n}, function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Loading, null);\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL2luZGV4LnRzeD9mZTFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlTGF6eUxvYWRlciwgbW9kdWxlTG9hZGVyIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuXG5jb25zdCBBcHAgPSBtYWtlTGF6eUxvYWRlcihcbiAgICAoKSA9PiBtb2R1bGVMb2FkZXIoKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYWNjb3VudC1hcHBcIiwgd2VicGFja1ByZWxvYWQ6IHRydWUgKi8gJy4vQXBwJykpLFxuICAgICgpID0+IDxMb2FkaW5nIC8+XG4pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.tsx\n')},"@deriv/components":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__deriv_components__},"@deriv/shared":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__deriv_shared__},"@deriv/translations":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__deriv_translations__},mobx:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE_mobx__},"mobx-react":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE_mobx_react__},react:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE_react__},"react-dom":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE_react_dom__},"react-router":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE_react_router__},"react-router-dom":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE_react_router_dom__}},__webpack_module_cache__={},inProgress,dataWebpackPrefix,loadStylesheet,installedCssChunks;function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var r=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(r.exports,r,r.exports,__webpack_require__),r.loaded=!0,r.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=e=>{var _=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(_,{a:_}),_},__webpack_require__.d=(e,_)=>{for(var r in _)__webpack_require__.o(_,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:_[r]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((_,r)=>(__webpack_require__.f[r](e,_),_)),[])),__webpack_require__.u=e=>"account/js/account."+e+"."+{404:"e7803b04bd2924a6436b","vendors-node_modules_binary-com_binary-document-uploader_DocumentUploader_js-node_modules_bow-cc3252":"a056eb6e48a9e78c60db","account-app":"8b5e26ae52bd75332372"}[e]+".js",__webpack_require__.miniCssF=e=>"account/css/"+e+".9bc561675bbf4fc17fe0.css",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),inProgress={},dataWebpackPrefix="@deriv/account:",__webpack_require__.l=(e,_,r,t)=>{if(inProgress[e])inProgress[e].push(_);else{var a,o;if(void 0!==r)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var c=n[i];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==dataWebpackPrefix+r){a=c;break}}a||(o=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,__webpack_require__.nc&&a.setAttribute("nonce",__webpack_require__.nc),a.setAttribute("data-webpack",dataWebpackPrefix+r),a.src=e),inProgress[e]=[_];var u=(_,r)=>{a.onerror=a.onload=null,clearTimeout(d);var t=inProgress[e];if(delete inProgress[e],a.parentNode&&a.parentNode.removeChild(a),t&&t.forEach((e=>e(r))),_)return _(r)},d=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),o&&document.head.appendChild(a)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.p="/",loadStylesheet=e=>new Promise(((_,r)=>{var t=__webpack_require__.miniCssF(e),a=__webpack_require__.p+t;if(((e,_)=>{for(var r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var a=(n=r[t]).getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===_))return n}var o=document.getElementsByTagName("style");for(t=0;t<o.length;t++){var n;if((a=(n=o[t]).getAttribute("data-href"))===e||a===_)return n}})(t,a))return _();((e,_,r,t)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=o=>{if(a.onerror=a.onload=null,"load"===o.type)r();else{var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||_,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=n,c.request=i,a.parentNode.removeChild(a),t(c)}},a.href=_,document.head.appendChild(a)})(e,a,_,r)})),installedCssChunks={account:0},__webpack_require__.f.miniCss=(e,_)=>{installedCssChunks[e]?_.push(installedCssChunks[e]):0!==installedCssChunks[e]&&{"account-app":1}[e]&&_.push(installedCssChunks[e]=loadStylesheet(e).then((()=>{installedCssChunks[e]=0}),(_=>{throw delete installedCssChunks[e],_})))},(()=>{var e={account:0};__webpack_require__.f.j=(_,r)=>{var t=__webpack_require__.o(e,_)?e[_]:void 0;if(0!==t)if(t)r.push(t[2]);else{var a=new Promise(((r,a)=>t=e[_]=[r,a]));r.push(t[2]=a);var o=__webpack_require__.p+__webpack_require__.u(_),n=new Error;__webpack_require__.l(o,(r=>{if(__webpack_require__.o(e,_)&&(0!==(t=e[_])&&(e[_]=void 0),t)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;n.message="Loading chunk "+_+" failed.\n("+a+": "+o+")",n.name="ChunkLoadError",n.type=a,n.request=o,t[1](n)}}),"chunk-"+_,_)}};var _=(_,r)=>{var t,a,[o,n,i]=r,c=0;if(o.some((_=>0!==e[_]))){for(t in n)__webpack_require__.o(n,t)&&(__webpack_require__.m[t]=n[t]);if(i)i(__webpack_require__)}for(_&&_(r);c<o.length;c++)a=o[c],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunk_deriv_account=self.webpackChunk_deriv_account||[];r.forEach(_.bind(null,0)),r.push=_.bind(null,r.push.bind(r))})();var __webpack_exports__=__webpack_require__("./index.tsx");return __webpack_exports__=__webpack_exports__.default,__webpack_exports__})()));