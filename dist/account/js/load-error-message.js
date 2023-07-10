/*! For license information please see load-error-message.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e.react)}(self,((e,t,r)=>(()=>{var n={"./Components/icon-message-content/index.ts":(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var n=r("react"),o=r.n(n),a=r("../../../node_modules/classnames/index.js"),s=r.n(a),i=r("@deriv/components"),c=r("@deriv/shared");function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const m=function(e){var t=e.children,r=e.className,n=e.full_width,a=e.icon,u=e.message,m=e.text;return o().createElement(i.Div100vhContainer,{className:s()("account-management__message-wrapper",{"account-management__message-wrapper-full-width":n}),is_disabled:(0,c.isDesktop)(),height_offset:"110px"},o().createElement("div",{className:s()("account-management__message-content",l({},"".concat(r,"__message-content"),r))},a&&o().createElement("div",{className:s()("account-management__message-icon",l({},"".concat(r,"__message-icon"),r))},a),o().createElement(i.Text,{as:"div",color:"general",weight:"bold",size:"s",align:"center",className:s()("account-management__message",l({},"".concat(r,"__message"),r))},u),m&&o().createElement("div",{className:"account-management__text-container"},o().createElement(i.Text,{className:s()(l({},"".concat(r,"__text"),r)),as:"p",size:"xs",align:"center"},m)),t))}},"../../../node_modules/classnames/index.js":(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var s=o.apply(null,r);s&&e.push(s)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},react:e=>{"use strict";e.exports=r}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};return(()=>{"use strict";a.d(s,{default:()=>o});var e=a("react"),t=a.n(e),r=a("@deriv/components"),n=a("./Components/icon-message-content/index.ts");const o=function(e){var o=e.error_message;return t().createElement(n.default,{message:o,icon:t().createElement(r.Icon,{icon:"IcPoaLock",size:128})})}})(),s.default})()));