(self.webpackChunk_deriv_p2p=self.webpackChunk_deriv_p2p||[]).push([[462],{5882:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(2609),l=r.n(n)()((function(e){return e[1]}));l.push([e.id,".filter-modal-no-result{display:flex;flex-direction:column;padding:50% 0.8rem;justify-content:center;align-content:center}.filter-modal-no-result__title{line-height:1.43;letter-spacing:normal;margin-bottom:0.8rem}.filter-modal-no-result__subtitle{letter-spacing:normal;margin:0}\n",""]);const a=l},2107:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(2609),l=r.n(n)()((function(e){return e[1]}));l.push([e.id,".filter-modal-search{border-bottom:1px solid var(--border-normal)}.filter-modal-search .dc-input{border:medium none currentColor;border:initial;height:5.2rem}@media (min-width: 320px) and (max-width: 767px){.filter-modal-search{margin:0.8rem 1.6rem 1rem;min-width:25rem}.filter-modal-search .dc-input{height:4rem}}@media (max-width: 320px){.filter-modal-search{width:14rem}}.filter-modal-search__cross-icon{cursor:pointer}.filter-modal-search__field{margin-bottom:0 !important}.filter-modal-search__field .dc-input{justify-content:center}.filter-modal-search__field .dc-input__container{border:none;padding:0;height:6rem}.filter-modal-search__field .dc-input__field{flex-grow:1;height:4rem;padding-right:3rem;margin-left:1.2rem;width:auto;width:initial}@media (min-width: 320px) and (max-width: 767px){.filter-modal-search__field .dc-input__field{padding:0 2.8rem 0 0.4rem}}.filter-modal-search__field .dc-input__leading-icon{cursor:pointer;margin-left:0.8rem;pointer-events:inherit;position:static;position:initial}\n",""]);const a=l},2519:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(2609),l=r.n(n)()((function(e){return e[1]}));l.push([e.id,".filter-modal__column{display:flex;flex-direction:column}@media (max-width: 450px){.filter-modal__column{width:80%}}.filter-modal__select{cursor:pointer}.filter-modal__arrow{min-width:1.8rem;min-height:1.8rem}.filter-modal__selected-payment-methods{max-width:350px;max-height:45px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (max-width: 450px){.filter-modal__selected-payment-methods{max-width:300px}}@media (max-width: 400px){.filter-modal__selected-payment-methods{max-width:250px}}.filter-modal__footer-button{display:flex;width:100%}.filter-modal__row{align-items:center;border-bottom:2px solid var(--general-section-5);display:flex;flex-direction:row;justify-content:space-between;min-height:8rem;padding:0 2.4rem}@media (max-width: 375px){.filter-modal__row{padding:0 0 0 1.5rem;justify-content:initial}}.filter-modal__toggle-label{margin:0}.filter-modal__checkbox-container{height:36rem}.dc-modal__container_payment-methods .dc-modal-header{border-bottom:2px solid var(--general-section-5);height:5.6rem}.dc-modal__container_payment-methods .dc-modal-header__title{padding:1.6rem 3.2rem}.dc-modal__container_payment-methods .dc-modal-body{padding:0;min-width:33rem}.dc-modal__container_payment-methods .dc-checkbox{min-height:4.9rem;padding:0 1.6rem}\n",""]);const a=l},3885:(e,t,r)=>{var n=r(6062),l=r(5882);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.id,l,""]]);n(l,{insert:"head",singleton:!1}),e.exports=l.locals||{}},4286:(e,t,r)=>{var n=r(6062),l=r(2107);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.id,l,""]]);n(l,{insert:"head",singleton:!1}),e.exports=l.locals||{}},5935:(e,t,r)=>{var n=r(6062),l=r(2519);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.id,l,""]]);n(l,{insert:"head",singleton:!1}),e.exports=l.locals||{}},6811:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>N});var n=r(8156),l=r(4309),a=r(1336),i=r(7674),o=r(2322),c=r(6576);const s=(0,l.Pi)((function(){var e=(0,o.m)(),t=e.buy_sell_store,r=e.my_profile_store;return t.show_filter_payment_methods?n.createElement(c.Z,{onClick:function(){t.setShowFilterPaymentMethods(!1),r.setSearchTerm(""),r.setSearchResults([])},page_title:(0,i.NC)("Payment methods")}):n.createElement(i.Xx,{i18n_default_text:"Filter"})}));var m=r(7661),d=r(4421),u=r.n(d),_=r(5770);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}r(4286);const h=(0,l.Pi)((function(){var e=(0,o.m)(),t=e.buy_sell_store,r=e.my_profile_store,l=u()((function(){r.getPaymentMethodsList()}),1e3);return n.createElement("div",{className:"filter-modal-search"},n.createElement(m.Formik,{initialValues:{search:""},onSubmit:function(e){var n=e.search;r.setSearchTerm(n.trim()),n.trim()?(t.setIsFilterModalLoading(!0),l()):r.setSearchResults([])}},(function(e){var t=e.submitForm,l=e.values.search,o=e.setFieldValue;return n.createElement(m.Form,null,n.createElement(m.Field,{name:"search"},(function(e){var c=e.field;return n.createElement(a.Input,f({},c,{className:"filter-modal-search__field","data-lpignore":"true",leading_icon:n.createElement(a.Icon,{className:"filter-modal-search__field-icon",icon:"IcSearch"}),name:"search",onFocus:t,onKeyUp:function(){return function(e){clearTimeout(t);var t=setTimeout((function(){e()}),1e3)}(t)},placeholder:(0,_.isDesktop)()?(0,i.NC)("Search payment method"):(0,i.NC)("Search"),trailing_icon:l?n.createElement(a.Icon,{className:"filter-modal-search__cross-icon",color:"secondary",icon:"IcCloseCircle",onClick:function(){return function(e){e("search",""),r.setSearchTerm(""),r.setSearchResults([])}(o)}}):null,type:"text"}))})))})))}));var p=r(5099),g=r.n(p),y=(r(3885),function(e){var t=e.text;return n.createElement("div",{className:"filter-modal-no-result"},n.createElement(a.Text,{as:"h2",size:"s",align:"center",weight:"bold",className:"filter-modal-no-result__title"},(0,i.NC)('No results for "{{text}}".',{text:t,interpolation:{escapeValue:!1}})),n.createElement(a.Text,{as:"p",size:"s",align:"center",className:"filter-modal-no-result__subtitle"},(0,i.NC)("Check your spelling or use a different term.")))});y.propTypes={text:g().string};const x=y;var v=r(4047);function b(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||E(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a,i,o=[],c=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(o.push(n.value),o.length!==t);c=!0);}catch(e){s=!0,l=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw l}}return o}}(e,t)||E(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){if(e){if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const C=(0,l.Pi)((function(){var e=(0,o.m)(),t=e.buy_sell_store,r=e.my_profile_store,c=(0,v.M)(),m=c.hideModal,d=c.is_modal_open,u=w(n.useState([]),2),_=u[0],f=u[1],p=w(n.useState([]),2),g=p[0],y=p[1],E=function(e){t.filter_payment_methods.includes(e.value)?(t.filter_payment_methods=t.filter_payment_methods.filter((function(t){return t!==e.value})),f((function(t){return t.filter((function(t){return t!==e.value}))})),y((function(t){return t.filter((function(t){return t!==e.text}))}))):(t.filter_payment_methods.push(e.value),f((function(t){return[].concat(b(t),[e.value])})),y((function(t){return[].concat(b(t),[e.text])})))},S=function(){t.filter_payment_methods=[],f([]),y([]),t.setSelectedPaymentMethodValue([]),t.setSelectedPaymentMethodText([])};n.useEffect((function(){t.setShowFilterPaymentMethods(!1),r.getPaymentMethodsList(),t.selected_payment_method_value.length&&(f(t.selected_payment_method_value),y(t.selected_payment_method_text))}),[]);var C=(0,l.Pi)((function(){return t.is_filter_modal_loading?n.createElement(a.Loading,{is_fullscreen:!1}):r.search_term?!r.search_results||r.search_results.length>0?null===(e=r.search_results)||void 0===e?void 0:e.map((function(e,t){return n.createElement(a.Checkbox,{key:t,label:e.text,onChange:function(){return E(e)},value:_.includes(e.value)})})):n.createElement(x,{text:r.search_term}):r.payment_methods_list_items.map((function(e,t){return n.createElement(a.Checkbox,{name:"checkbox",key:t,label:e.text,onChange:function(){return E(e)},value:_.includes(e.value)})}));var e}));return n.createElement(a.Modal,{className:"payment-methods",has_close_icon:!0,height:"56rem",title:n.createElement(s,null),is_open:d,toggleModal:function(){t.setShowFilterPaymentMethods(!1),m(),r.setSearchTerm(""),g.length&&!t.selected_payment_method_value.length&&S()},width:"44rem"},n.createElement(a.Modal.Body,null,t.show_filter_payment_methods?n.createElement(n.Fragment,null,n.createElement(h,null),n.createElement("div",{className:"filter-modal__checkbox-container"},n.createElement(a.ThemedScrollbars,{is_scrollbar_hidden:!0},n.createElement(C,null)))):n.createElement(n.Fragment,null,n.createElement("div",{className:"filter-modal__row filter-modal__select",onClick:function(){return t.setShowFilterPaymentMethods(!0)}},n.createElement("div",{className:"filter-modal__column"},n.createElement(a.Text,{color:"prominent",size:"xs"},n.createElement(i.Xx,{i18n_default_text:"Payment methods"})),g.length===r.payment_methods_list_items.length?n.createElement(a.Text,{color:"less-prominent",size:"xs"},n.createElement(i.Xx,{i18n_default_text:"All"})):n.createElement(a.Text,{className:"filter-modal__selected-payment-methods",color:"less-prominent",size:"xs"},g.join(", "))),n.createElement(a.Icon,{className:"filter-modal__arrow",icon:"IcChevronRight",size:18})),n.createElement("div",{className:"filter-modal__row"},n.createElement("div",{className:"filter-modal__column"},n.createElement(a.Text,{color:"prominent",size:"xs"},n.createElement(i.Xx,{i18n_default_text:"Matching ads"})),n.createElement(a.Text,{color:"less-prominent",size:"xs"},n.createElement(i.Xx,{i18n_default_text:"Ads that match your Deriv P2P balance and limit."}))),n.createElement(a.ToggleSwitch,{id:"toggle-filter-modal",classNameButton:"filter-modal__toggle-button",classNameLabel:"filter-modal__toggle-label",handleToggle:function(){return t.setShouldUseClientLimits(!t.should_use_client_limits)},is_enabled:t.should_use_client_limits})))),n.createElement(a.Modal.Footer,{has_separator:!0},t.show_filter_payment_methods?n.createElement(a.Button,{className:"filter-modal__footer-button",large:!0,secondary:!0,onClick:function(){return S()}},n.createElement(i.Xx,{i18n_default_text:"Clear"})):n.createElement(a.Button.Group,null,n.createElement(a.Button,{large:!0,secondary:!0,onClick:function(){t.onClickReset(),S()}},(0,i.NC)("Reset")),n.createElement(a.Button,{large:!0,primary:!0,onClick:function(){t.onClickApply(_,g),m()}},(0,i.NC)("Apply")))))}));r(5935);const N=C}}]);