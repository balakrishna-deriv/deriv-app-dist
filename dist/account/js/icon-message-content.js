/*! For license information please see icon-message-content.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e.react)}(self,((e,t,r)=>(()=>{var n={"../../../node_modules/classnames/index.js":(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},react:e=>{"use strict";e.exports=r}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};return(()=>{"use strict";a.d(i,{default:()=>l});var e=a("react"),t=a.n(e),r=a("../../../node_modules/classnames/index.js"),n=a.n(r),o=a("@deriv/components"),s=a("@deriv/shared");function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const l=function(e){var r=e.children,a=e.className,i=e.full_width,c=e.icon,l=e.message,m=e.text;return t().createElement(o.Div100vhContainer,{className:n()("account-management__message-wrapper",{"account-management__message-wrapper-full-width":i}),is_disabled:(0,s.isDesktop)(),height_offset:"110px"},t().createElement("div",{className:n()("account-management__message-content",u({},"".concat(a,"__message-content"),a))},c&&t().createElement("div",{className:n()("account-management__message-icon",u({},"".concat(a,"__message-icon"),a))},c),t().createElement(o.Text,{as:"div",color:"general",weight:"bold",size:"s",align:"center",className:n()("account-management__message",u({},"".concat(a,"__message"),a))},l),m&&t().createElement("div",{className:"account-management__text-container"},t().createElement(o.Text,{className:n()(u({},"".concat(a,"__text"),a)),as:"p",size:"xs",align:"center"},m)),r))}})(),i.default})()));