!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],r):"object"==typeof exports?exports["@deriv/account"]=r(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=r(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(self,((e,r,t,o)=>(()=>{"use strict";var i={"@deriv/components":r=>{r.exports=e},"@deriv/shared":e=>{e.exports=r},"@deriv/translations":e=>{e.exports=t},react:e=>{e.exports=o}},n={};function s(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={exports:{}};return i[e](t,t.exports,s),t.exports}s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var a={};return(()=>{s.d(a,{default:()=>n});var e=s("react"),r=s.n(e),t=s("@deriv/components"),o=s("@deriv/translations"),i=s("@deriv/shared");const n=function(e){var n=e.header,s=e.message,a=e.redirect_label,d=e.redirectOnClick,c=e.should_show_refresh,l=void 0===c||c?(0,o.localize)("Please refresh this page to continue."):"";return r().createElement(t.PageError,{header:n||(0,o.localize)("Oops, something went wrong."),messages:s?[s,l]:[(0,o.localize)("Sorry, an error occured while processing your request."),l],redirect_urls:[i.routes.trade],redirect_labels:[a||(0,o.localize)("Refresh")],buttonOnClick:d||function(){return location.reload()}})}})(),a.default})()));