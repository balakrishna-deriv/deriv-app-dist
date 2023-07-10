/*! For license information please see CFDTopUpDemoModal.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("mobx-react"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","mobx-react","react"],t):"object"==typeof exports?exports["@deriv/cfd"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("mobx-react"),require("react")):e["@deriv/cfd"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e["mobx-react"],e.react)}(self,((e,t,r,n,o)=>(()=>{var a={"../../node_modules/classnames/index.js":(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var c=o.apply(null,r);c&&e.push(c)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},"../../node_modules/prop-types/factoryWithThrowingShims.js":(e,t,r)=>{"use strict";var n=r("../../node_modules/prop-types/lib/ReactPropTypesSecret.js");function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,c){if(c!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},"../../node_modules/prop-types/index.js":(e,t,r)=>{e.exports=r("../../node_modules/prop-types/factoryWithThrowingShims.js")()},"../../node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./src/Components/success-dialog.jsx":(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var n=r("../../node_modules/prop-types/index.js"),o=r.n(n),a=r("../../node_modules/classnames/index.js"),c=r.n(a),s=r("react"),i=r.n(s),l=r("@deriv/components"),u=r("@deriv/translations");function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}var d=function(e){var t=e.className;return i().createElement(l.Icon,{className:t,icon:"IcCheckmarkCircle",custom_color:"var(--status-success)",size:24})},m=function(e){var t=e.classNameMessage,r=void 0===t?"":t,n=e.has_cancel,o=e.has_submit,a=e.icon,s=e.message,m=e.onCancel,_=e.onSubmit,f=e.heading,y=e.icon_size,v=e.text_submit,b=e.text_cancel,g=e.is_open,h=e.toggleModal,x=e.title,E=e.has_close_icon,j=e.width,O=void 0===j?"":j,S=e.is_medium_button;return i().createElement(l.Modal,{className:"cfd-success-dialog",is_open:g,toggleModal:h,has_close_icon:E,small:!x,title:x,width:O},i().createElement(l.Modal.Body,null,i().createElement("div",{className:c()("success-change__icon-area",{"success-change__icon-area--large":"large"===y,"success-change__icon-area--xlarge":"xlarge"===y})},a,i().createElement(d,{className:"bottom-right-overlay"})),!f&&i().createElement(l.Text,{as:"h2",weight:"bold",size:"s",className:"dc-modal-header__title"},i().createElement(u.Localize,{i18n_default_text:"Success!"})),f&&f,i().isValidElement(s)&&s,!i().isValidElement(s)&&i().createElement("p",{className:r},s)),i().createElement(l.Modal.Footer,null,n&&i().createElement(l.Button,p({onClick:m,has_effect:!0,text:b||(0,u.localize)("Maybe later"),secondary:!0},S?{medium:!0}:{large:!0})),o&&i().createElement(l.Button,p({has_effect:!0,onClick:_,text:v,primary:!0},S?{medium:!0}:{large:!0}))))};m.defaultProps={icon_size:"large",has_cancel:!1,has_submit:!0},m.propTypes={classNameMessage:o().string,has_cancel:o().bool,has_close_icon:o().bool,has_submit:o().bool,heading:o().oneOfType([o().string,o().object]),icon:o().object,icon_size:o().string,icon_type:o().string,is_medium_button:o().bool,is_open:o().bool,message:o().oneOfType([o().string,o().object]),onCancel:o().func,onSubmit:o().func,text_cancel:o().string,text_submit:o().string,title:o().string,toggleModal:o().func,width:o().string};const _=m},"./src/Helpers/constants.ts":(e,t,r)=>{"use strict";r.d(t,{tY:()=>n}),r("@deriv/shared");var n=function(){return{minimum_amount:1e3,additional_amount:1e4}}},"./src/Stores/connect.js":(e,t,r)=>{"use strict";r.d(t,{$j:()=>p});var n=r("mobx-react"),o=r("react"),a=r.n(o);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=a().createContext(null),p=function(e){return function(t){return function(e,t){var r=function(r){var o=a().useContext(u),c=t;(function(e){return!("function"!=typeof e||!e.prototype||!e.prototype.isReactComponent)})(t)&&(c=function(e){return a().createElement(t,e)});var s=r.context||o;return(0,n.useObserver)((function(){return c(i(i({},r),e(s,r)))}))};return r.displayName=t.name,r}(e,t)}}},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},"@deriv/translations":e=>{"use strict";e.exports=r},"mobx-react":e=>{"use strict";e.exports=n},react:e=>{"use strict";e.exports=o}},c={};function s(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={exports:{}};return a[e](r,r.exports,s),r.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};return(()=>{"use strict";s.d(i,{default:()=>u});var e=s("react"),t=s.n(e),r=s("./src/Components/success-dialog.jsx"),n=s("@deriv/components"),o=s("@deriv/shared"),a=s("@deriv/translations"),c=s("./src/Stores/connect.js"),l=s("./src/Helpers/constants.ts");const u=(0,c.$j)((function(e){var t=e.ui,r=e.modules;return{is_top_up_virtual_open:t.is_top_up_virtual_open,is_top_up_virtual_in_progress:t.is_top_up_virtual_in_progress,is_top_up_virtual_success:t.is_top_up_virtual_success,closeTopUpModal:t.closeTopUpModal,closeSuccessTopUpModal:t.closeSuccessTopUpModal,current_account:r.cfd.current_account,dxtrade_companies:r.cfd.dxtrade_companies,mt5_companies:r.cfd.mt5_companies,topUpVirtual:r.cfd.topUpVirtual}}))((function(e){var c=e.dxtrade_companies,s=e.mt5_companies,i=e.current_account,u=e.closeSuccessTopUpModal,p=e.closeTopUpModal,d=e.is_top_up_virtual_open,m=e.is_top_up_virtual_in_progress,_=e.is_top_up_virtual_success,f=e.platform,y=e.context,v=e.topUpVirtual,b=t().useCallback((function(){return(s||c)&&i?s[i.category][i.type].title:""}),[s,c,i]),g=(0,o.getCFDPlatformLabel)(f);if(!s&&!c||!i)return null;var h=(0,l.tY)(),x=h.minimum_amount,E=h.additional_amount;return t().createElement(t().Fragment,null,t().createElement(n.Modal,{toggleModal:p,is_open:d,context:y,className:"top-up-virtual",title:(0,a.localize)("Fund top up"),width:"384px"},t().createElement("div",{className:"dc-modal__container_top-up-virtual__body"},t().createElement(n.Text,{as:"p",align:"center",size:"xxs",line_height:"xs",className:"dc-modal__container_top-up-virtual__description","data-testid":"dt_top_up_virtual_description"},t().createElement(a.Localize,{i18n_default_text:"You can top up your demo account with an additional <0></0> if your balance is <1></1> or less.",components:[t().createElement(n.Money,{key:0,amount:E,currency:i.currency,show_currency:!0}),t().createElement(n.Money,{key:1,amount:x,currency:i.currency,show_currency:!0})]})),t().createElement("h4",{className:"dc-modal__container_top-up-virtual--h4"},t().createElement(a.Localize,{i18n_default_text:"{{ platform }} {{ account_title }} account",values:{platform:g,account_title:b()}})),t().createElement("div",null,t().createElement(n.Text,{as:"p",align:"center",size:"xxs"},t().createElement(a.Localize,{i18n_default_text:"Current balance"})),t().createElement("div",{className:"dc-modal__container_top-up-virtual--balance"},t().createElement(n.Money,{amount:i.display_balance,currency:i.currency,has_sign:i.balance<0}))),t().createElement("div",{className:"dc-modal__container_top-up-virtual--button"},t().createElement(n.Button,{is_disabled:i.balance>1e3||m,type:"button",is_loading:m,onClick:function(){return v(f)},primary:!0,large:!0},!m&&t().createElement(a.Localize,{i18n_default_text:"Top up  <0></0>",components:[t().createElement(n.Money,{key:0,amount:E,currency:i.currency,show_currency:!0})]}))))),t().createElement(r.Z,{is_open:_,toggleModal:function(){u()},has_close_icon:!0,title:(0,a.localize)("Fund top up"),icon:t().createElement(n.Icon,{icon:"IcCashierWallet",size:128}),heading:t().createElement("h3",{className:"cfd-success-topup__heading"},t().createElement(a.Localize,{i18n_default_text:"<0></0> has been credited into your {{platform}} {{title}} account.",values:{platform:g,title:b()},components:[t().createElement(n.Money,{key:0,amount:E,currency:i.currency,show_currency:!0})]})),message:t().createElement("div",{className:"cfd-success-topup__description"},t().createElement("p",null,t().createElement(a.Localize,{i18n_default_text:"New current balance"})),t().createElement("div",{className:"dc-modal__container_top-up-virtual--balance"},t().createElement(n.Money,{amount:i.balance,currency:i.currency}))),icon_size:"large",has_cancel:!1,has_submit:!1,width:"384px"}))}))})(),i.default})()));