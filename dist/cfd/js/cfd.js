/*! For license information please see cfd.js.LICENSE.txt */
!function(_,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("@deriv/account/dist/account/css/proof-of-identity-container-for-mt5.css"),require("@deriv/account/dist/account/css/reset-trading-password-modal.css"),require("@deriv/account/dist/account/js/file-uploader-container"),require("@deriv/account/dist/account/js/form-sub-header"),require("@deriv/account/dist/account/js/poa-status-codes"),require("@deriv/account/dist/account/js/poi-poa-docs-submitted"),require("@deriv/account/dist/account/js/proof-of-identity-container-for-mt5"),require("@deriv/account/dist/account/js/reset-trading-password-modal"),require("@deriv/account/dist/account/js/sent-email-modal"),require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("mobx"),require("mobx-react"),require("react"),require("react-dom"),require("react-router"),require("react-router-dom")):"function"==typeof define&&define.amd?define(["@deriv/account/dist/account/css/proof-of-identity-container-for-mt5.css","@deriv/account/dist/account/css/reset-trading-password-modal.css","@deriv/account/dist/account/js/file-uploader-container","@deriv/account/dist/account/js/form-sub-header","@deriv/account/dist/account/js/poa-status-codes","@deriv/account/dist/account/js/poi-poa-docs-submitted","@deriv/account/dist/account/js/proof-of-identity-container-for-mt5","@deriv/account/dist/account/js/reset-trading-password-modal","@deriv/account/dist/account/js/sent-email-modal","@deriv/components","@deriv/shared","@deriv/translations","mobx","mobx-react","react","react-dom","react-router","react-router-dom"],e):"object"==typeof exports?exports["@deriv/cfd"]=e(require("@deriv/account/dist/account/css/proof-of-identity-container-for-mt5.css"),require("@deriv/account/dist/account/css/reset-trading-password-modal.css"),require("@deriv/account/dist/account/js/file-uploader-container"),require("@deriv/account/dist/account/js/form-sub-header"),require("@deriv/account/dist/account/js/poa-status-codes"),require("@deriv/account/dist/account/js/poi-poa-docs-submitted"),require("@deriv/account/dist/account/js/proof-of-identity-container-for-mt5"),require("@deriv/account/dist/account/js/reset-trading-password-modal"),require("@deriv/account/dist/account/js/sent-email-modal"),require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("mobx"),require("mobx-react"),require("react"),require("react-dom"),require("react-router"),require("react-router-dom")):_["@deriv/cfd"]=e(_["@deriv/account/dist/account/css/proof-of-identity-container-for-mt5.css"],_["@deriv/account/dist/account/css/reset-trading-password-modal.css"],_["@deriv/account/dist/account/js/file-uploader-container"],_["@deriv/account/dist/account/js/form-sub-header"],_["@deriv/account/dist/account/js/poa-status-codes"],_["@deriv/account/dist/account/js/poi-poa-docs-submitted"],_["@deriv/account/dist/account/js/proof-of-identity-container-for-mt5"],_["@deriv/account/dist/account/js/reset-trading-password-modal"],_["@deriv/account/dist/account/js/sent-email-modal"],_["@deriv/components"],_["@deriv/shared"],_["@deriv/translations"],_.mobx,_["mobx-react"],_.react,_["react-dom"],_["react-router"],_["react-router-dom"])}(self,((__WEBPACK_EXTERNAL_MODULE__deriv_account_dist_account_css_proof_of_identity_container_for_mt5_css__,__WEBPACK_EXTERNAL_MODULE__deriv_account_dist_account_css_reset_trading_password_modal_css__,__WEBPACK_EXTERNAL_MODULE__deriv_account_dist_account_js_file_uploader_container__,__WEBPACK_EXTERNAL_MODULE__deriv_account_dist_account_js_form_sub_header__,__WEBPACK_EXTERNAL_MODULE__deriv_account_dist_account_js_poa_status_codes__,__WEBPACK_EXTERNAL_MODULE__deriv_account_dist_account_js_poi_poa_docs_submitted__,__WEBPACK_EXTERNAL_MODULE__deriv_account_dist_account_js_proof_of_identity_container_for_mt5__,__WEBPACK_EXTERNAL_MODULE__deriv_account_dist_account_js_reset_trading_password_modal__,__WEBPACK_EXTERNAL_MODULE__deriv_account_dist_account_js_sent_email_modal__,__WEBPACK_EXTERNAL_MODULE__deriv_components__,__WEBPACK_EXTERNAL_MODULE__deriv_shared__,__WEBPACK_EXTERNAL_MODULE__deriv_translations__,__WEBPACK_EXTERNAL_MODULE_mobx__,__WEBPACK_EXTERNAL_MODULE_mobx_react__,__WEBPACK_EXTERNAL_MODULE_react__,__WEBPACK_EXTERNAL_MODULE_react_dom__,__WEBPACK_EXTERNAL_MODULE_react_router__,__WEBPACK_EXTERNAL_MODULE_react_router_dom__)=>(()=>{"use strict";var __webpack_modules__={"./src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar App = (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.makeLazyLoader)(function () {\n  return Promise.all(/*! import() | cfd-app */[__webpack_require__.e("vendors-node_modules_classnames_index_js-node_modules_formik_dist_formik_esm_js-node_modules_-2808e5"), __webpack_require__.e("cfd-app")]).then(__webpack_require__.bind(__webpack_require__, /*! ./app */ "./src/app.tsx"));\n}, function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Loading, null);\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvY2ZkLy4vc3JjL2luZGV4LnRzeD9kOTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlTGF6eUxvYWRlciB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcblxuY29uc3QgQXBwID0gbWFrZUxhenlMb2FkZXIoXG4gICAgKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2ZkLWFwcFwiLCB3ZWJwYWNrUHJlbG9hZDogdHJ1ZSAqLyAnLi9hcHAnKSxcbiAgICAoKSA9PiA8TG9hZGluZyAvPlxuKSgpO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.tsx\n')},"@deriv/account/dist/account/css/proof-of-identity-container-for-mt5.css":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_account_dist_account_css_proof_of_identity_container_for_mt5_css__},"@deriv/account/dist/account/css/reset-trading-password-modal.css":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_account_dist_account_css_reset_trading_password_modal_css__},"@deriv/account/dist/account/js/file-uploader-container":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_account_dist_account_js_file_uploader_container__},"@deriv/account/dist/account/js/form-sub-header":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_account_dist_account_js_form_sub_header__},"@deriv/account/dist/account/js/poa-status-codes":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_account_dist_account_js_poa_status_codes__},"@deriv/account/dist/account/js/poi-poa-docs-submitted":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_account_dist_account_js_poi_poa_docs_submitted__},"@deriv/account/dist/account/js/proof-of-identity-container-for-mt5":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_account_dist_account_js_proof_of_identity_container_for_mt5__},"@deriv/account/dist/account/js/reset-trading-password-modal":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_account_dist_account_js_reset_trading_password_modal__},"@deriv/account/dist/account/js/sent-email-modal":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_account_dist_account_js_sent_email_modal__},"@deriv/components":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_components__},"@deriv/shared":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_shared__},"@deriv/translations":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_translations__},mobx:_=>{_.exports=__WEBPACK_EXTERNAL_MODULE_mobx__},"mobx-react":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE_mobx_react__},react:_=>{_.exports=__WEBPACK_EXTERNAL_MODULE_react__},"react-dom":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE_react_dom__},"react-router":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE_react_router__},"react-router-dom":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE_react_router_dom__}},__webpack_module_cache__={},inProgress,dataWebpackPrefix,loadStylesheet,installedCssChunks;function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[_]={id:_,loaded:!1,exports:{}};return __webpack_modules__[_](r,r.exports,__webpack_require__),r.loaded=!0,r.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=_=>{var e=_&&_.__esModule?()=>_.default:()=>_;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(_,e)=>{for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(_,r)&&Object.defineProperty(_,r,{enumerable:!0,get:e[r]})},__webpack_require__.f={},__webpack_require__.e=_=>Promise.all(Object.keys(__webpack_require__.f).reduce(((e,r)=>(__webpack_require__.f[r](_,e),e)),[])),__webpack_require__.u=_=>"cfd/js/cfd."+_+"."+{404:"49e9299f9820e9435cb4","vendors-node_modules_classnames_index_js-node_modules_formik_dist_formik_esm_js-node_modules_-2808e5":"b19c64803c71c4284218","cfd-app":"a12bff214a663b445cbe"}[_]+".js",__webpack_require__.miniCssF=_=>"cfd/css/cfd."+_+".0aef5199a2287110af96.css",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(_){if("object"==typeof window)return window}}(),__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),inProgress={},dataWebpackPrefix="@deriv/cfd:",__webpack_require__.l=(_,e,r,t)=>{if(inProgress[_])inProgress[_].push(e);else{var o,a;if(void 0!==r)for(var c=document.getElementsByTagName("script"),i=0;i<c.length;i++){var s=c[i];if(s.getAttribute("src")==_||s.getAttribute("data-webpack")==dataWebpackPrefix+r){o=s;break}}o||(a=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,__webpack_require__.nc&&o.setAttribute("nonce",__webpack_require__.nc),o.setAttribute("data-webpack",dataWebpackPrefix+r),o.src=_),inProgress[_]=[e];var n=(e,r)=>{o.onerror=o.onload=null,clearTimeout(d);var t=inProgress[_];if(delete inProgress[_],o.parentNode&&o.parentNode.removeChild(o),t&&t.forEach((_=>_(r))),e)return e(r)},d=setTimeout(n.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=n.bind(null,o.onerror),o.onload=n.bind(null,o.onload),a&&document.head.appendChild(o)}},__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},__webpack_require__.nmd=_=>(_.paths=[],_.children||(_.children=[]),_),__webpack_require__.p="/",loadStylesheet=_=>new Promise(((e,r)=>{var t=__webpack_require__.miniCssF(_),o=__webpack_require__.p+t;if(((_,e)=>{for(var r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var o=(c=r[t]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===_||o===e))return c}var a=document.getElementsByTagName("style");for(t=0;t<a.length;t++){var c;if((o=(c=a[t]).getAttribute("data-href"))===_||o===e)return c}})(t,o))return e();((_,e,r,t)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var c=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||e,s=new Error("Loading CSS chunk "+_+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=c,s.request=i,o.parentNode.removeChild(o),t(s)}},o.href=e,document.head.appendChild(o)})(_,o,e,r)})),installedCssChunks={cfd:0},__webpack_require__.f.miniCss=(_,e)=>{installedCssChunks[_]?e.push(installedCssChunks[_]):0!==installedCssChunks[_]&&{"cfd-app":1}[_]&&e.push(installedCssChunks[_]=loadStylesheet(_).then((()=>{installedCssChunks[_]=0}),(e=>{throw delete installedCssChunks[_],e})))},(()=>{var _={cfd:0};__webpack_require__.f.j=(e,r)=>{var t=__webpack_require__.o(_,e)?_[e]:void 0;if(0!==t)if(t)r.push(t[2]);else{var o=new Promise(((r,o)=>t=_[e]=[r,o]));r.push(t[2]=o);var a=__webpack_require__.p+__webpack_require__.u(e),c=new Error;__webpack_require__.l(a,(r=>{if(__webpack_require__.o(_,e)&&(0!==(t=_[e])&&(_[e]=void 0),t)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,t[1](c)}}),"chunk-"+e,e)}};var e=(e,r)=>{var t,o,[a,c,i]=r,s=0;if(a.some((e=>0!==_[e]))){for(t in c)__webpack_require__.o(c,t)&&(__webpack_require__.m[t]=c[t]);if(i)i(__webpack_require__)}for(e&&e(r);s<a.length;s++)o=a[s],__webpack_require__.o(_,o)&&_[o]&&_[o][0](),_[o]=0},r=self.webpackChunk_deriv_cfd=self.webpackChunk_deriv_cfd||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var __webpack_exports__=__webpack_require__("./src/index.tsx");return __webpack_exports__=__webpack_exports__.default,__webpack_exports__})()));