/*! For license information please see poa-submitted.js.LICENSE.txt */
!function(_,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],e):"object"==typeof exports?exports["@deriv/account"]=e(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):_["@deriv/account"]=e(_["@deriv/components"],_["@deriv/shared"],_["@deriv/translations"],_.react)}(self,((__WEBPACK_EXTERNAL_MODULE__deriv_components__,__WEBPACK_EXTERNAL_MODULE__deriv_shared__,__WEBPACK_EXTERNAL_MODULE__deriv_translations__,__WEBPACK_EXTERNAL_MODULE_react__)=>(()=>{var __webpack_modules__={"./Components/icon-message-content/icon-message-content.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\n\n\n\n\nvar IconMessageContent = function IconMessageContent(_ref) {\n  var children = _ref.children,\n    className = _ref.className,\n    full_width = _ref.full_width,\n    icon = _ref.icon,\n    message = _ref.message,\n    text = _ref.text;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Div100vhContainer, {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\'account-management__message-wrapper\', {\n      \'account-management__message-wrapper-full-width\': full_width\n    }),\n    is_disabled: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_3__.isDesktop)(),\n    height_offset: "110px"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\'account-management__message-content\', _defineProperty({}, "".concat(className, "__message-content"), className))\n  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\'account-management__message-icon\', _defineProperty({}, "".concat(className, "__message-icon"), className))\n  }, icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n    as: "div",\n    color: "general",\n    weight: "bold",\n    size: "s",\n    align: "center",\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\'account-management__message\', _defineProperty({}, "".concat(className, "__message"), className))\n  }, message), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "account-management__text-container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_defineProperty({}, "".concat(className, "__text"), className)),\n    as: "p",\n    size: "xs",\n    align: "center"\n  }, text)), children));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconMessageContent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2ljb24tbWVzc2FnZS1jb250ZW50L2ljb24tbWVzc2FnZS1jb250ZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUlBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBUUE7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9pY29uLW1lc3NhZ2UtY29udGVudC9pY29uLW1lc3NhZ2UtY29udGVudC50c3g/MDBlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBEaXYxMDB2aENvbnRhaW5lciwgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IGlzRGVza3RvcCB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuXG50eXBlIFRJY29uTWVzc2FnZUNvbnRlbnQgPSB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIGZ1bGxfd2lkdGg/OiBib29sZWFuO1xuICAgIGljb246IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgICBtZXNzYWdlOiBSZWFjdC5SZWFjdE5vZGU7XG4gICAgdGV4dD86IHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudDtcbn07XG5cbmNvbnN0IEljb25NZXNzYWdlQ29udGVudCA9ICh7XG4gICAgY2hpbGRyZW4sXG4gICAgY2xhc3NOYW1lLFxuICAgIGZ1bGxfd2lkdGgsXG4gICAgaWNvbixcbiAgICBtZXNzYWdlLFxuICAgIHRleHQsXG59OiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxUSWNvbk1lc3NhZ2VDb250ZW50PikgPT4gKFxuICAgIDxEaXYxMDB2aENvbnRhaW5lclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2FjY291bnQtbWFuYWdlbWVudF9fbWVzc2FnZS13cmFwcGVyJywge1xuICAgICAgICAgICAgJ2FjY291bnQtbWFuYWdlbWVudF9fbWVzc2FnZS13cmFwcGVyLWZ1bGwtd2lkdGgnOiBmdWxsX3dpZHRoLFxuICAgICAgICB9KX1cbiAgICAgICAgaXNfZGlzYWJsZWQ9e2lzRGVza3RvcCgpfVxuICAgICAgICBoZWlnaHRfb2Zmc2V0PScxMTBweCdcbiAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYWNjb3VudC1tYW5hZ2VtZW50X19tZXNzYWdlLWNvbnRlbnQnLCB7XG4gICAgICAgICAgICAgICAgW2Ake2NsYXNzTmFtZX1fX21lc3NhZ2UtY29udGVudGBdOiBjbGFzc05hbWUsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2ljb24gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdhY2NvdW50LW1hbmFnZW1lbnRfX21lc3NhZ2UtaWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgJHtjbGFzc05hbWV9X19tZXNzYWdlLWljb25gXTogY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgYXM9J2RpdidcbiAgICAgICAgICAgICAgICBjb2xvcj0nZ2VuZXJhbCdcbiAgICAgICAgICAgICAgICB3ZWlnaHQ9J2JvbGQnXG4gICAgICAgICAgICAgICAgc2l6ZT0ncydcbiAgICAgICAgICAgICAgICBhbGlnbj0nY2VudGVyJ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYWNjb3VudC1tYW5hZ2VtZW50X19tZXNzYWdlJywge1xuICAgICAgICAgICAgICAgICAgICBbYCR7Y2xhc3NOYW1lfV9fbWVzc2FnZWBdOiBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICB7dGV4dCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FjY291bnQtbWFuYWdlbWVudF9fdGV4dC1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYCR7Y2xhc3NOYW1lfV9fdGV4dGBdOiBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPSdwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0neHMnXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj0nY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9EaXYxMDB2aENvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEljb25NZXNzYWdlQ29udGVudDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/icon-message-content/icon-message-content.tsx\n')},"./Components/icon-message-content/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _icon_message_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-message-content */ "./Components/icon-message-content/icon-message-content.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_icon_message_content__WEBPACK_IMPORTED_MODULE_0__["default"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2ljb24tbWVzc2FnZS1jb250ZW50L2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9pY29uLW1lc3NhZ2UtY29udGVudC9pbmRleC50cz83ZmY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJY29uTWVzc2FnZUNvbnRlbnQgZnJvbSAnLi9pY29uLW1lc3NhZ2UtY29udGVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IEljb25NZXNzYWdlQ29udGVudDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/icon-message-content/index.ts\n')},"./Components/poa/continue-trading-button/continue-trading-button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "ContinueTradingButton": () => (/* binding */ ContinueTradingButton)\n/* harmony export */ });\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/translations */ "@deriv/translations");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar ContinueTradingButton = function ContinueTradingButton() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_0__.ButtonLink, {\n    className: "account-management__button",\n    to: "/"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_0__.Text, {\n    className: "dc-btn__text",\n    as: "p",\n    weight: "bold",\n    "data-testid": "continue_btn_text"\n  }, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)(\'Continue trading\')));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvYS9jb250aW51ZS10cmFkaW5nLWJ1dHRvbi9jb250aW51ZS10cmFkaW5nLWJ1dHRvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvcG9hL2NvbnRpbnVlLXRyYWRpbmctYnV0dG9uL2NvbnRpbnVlLXRyYWRpbmctYnV0dG9uLnRzeD9iMzNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbkxpbmssIFRleHQgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IENvbnRpbnVlVHJhZGluZ0J1dHRvbiA9ICgpID0+IChcbiAgICA8QnV0dG9uTGluayBjbGFzc05hbWU9J2FjY291bnQtbWFuYWdlbWVudF9fYnV0dG9uJyB0bz0nLyc+XG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT0nZGMtYnRuX190ZXh0JyBhcz0ncCcgd2VpZ2h0PSdib2xkJyBkYXRhLXRlc3RpZD0nY29udGludWVfYnRuX3RleHQnPlxuICAgICAgICAgICAge2xvY2FsaXplKCdDb250aW51ZSB0cmFkaW5nJyl9XG4gICAgICAgIDwvVGV4dD5cbiAgICA8L0J1dHRvbkxpbms+XG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/poa/continue-trading-button/continue-trading-button.tsx\n')},"./Components/poa/status/submitted/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _submitted__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submitted */ "./Components/poa/status/submitted/submitted.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_submitted__WEBPACK_IMPORTED_MODULE_0__.Submitted);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvYS9zdGF0dXMvc3VibWl0dGVkL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9wb2Evc3RhdHVzL3N1Ym1pdHRlZC9pbmRleC50cz82NTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1Ym1pdHRlZCBhcyBQb2FTdWJtaXR0ZWQgfSBmcm9tICcuL3N1Ym1pdHRlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IFBvYVN1Ym1pdHRlZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/poa/status/submitted/index.ts\n')},"./Components/poa/status/submitted/submitted.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Submitted": () => (/* binding */ Submitted)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/translations */ "@deriv/translations");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var Components_poa_continue_trading_button_continue_trading_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/poa/continue-trading-button/continue-trading-button */ "./Components/poa/continue-trading-button/continue-trading-button.tsx");\n/* harmony import */ var Components_poi_poi_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Components/poi/poi-button */ "./Components/poi/poi-button/index.ts");\n/* harmony import */ var Components_icon_message_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Components/icon-message-content */ "./Components/icon-message-content/index.ts");\n\n\n\n\n\n\n\n\nvar Submitted = function Submitted(_ref) {\n  var needs_poi = _ref.needs_poi,\n    redirect_button = _ref.redirect_button;\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_deriv_shared__WEBPACK_IMPORTED_MODULE_4__.PlatformContext),\n    is_appstore = _React$useContext.is_appstore;\n  var message = (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.localize)(\'Your documents were submitted successfully\');\n  if (needs_poi) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\'account-management__container\', {\n        \'account-management__container-dashboard\': is_appstore\n      })\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_icon_message_content__WEBPACK_IMPORTED_MODULE_7__["default"], {\n      message: message,\n      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n        icon: "IcPoaVerified",\n        size: 128\n      }),\n      full_width: is_appstore\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n      className: "account-management__text-container"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n      align: "center",\n      size: "xs",\n      as: "p"\n    }, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.localize)(\'We’ll review your documents and notify you of its status within 1 to 3 days.\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n      align: "center",\n      size: "xs",\n      as: "p"\n    }, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.localize)(\'You must also submit a proof of identity.\'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_poi_poi_button__WEBPACK_IMPORTED_MODULE_6__["default"], null)));\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\'account-management__container\', {\n      \'account-management__container-dashboard\': is_appstore\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_icon_message_content__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    message: message,\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.localize)(\'We’ll review your documents and notify you of its status within 1 to 3 days.\'),\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n      icon: "IcPoaVerified",\n      size: 128\n    }),\n    full_width: is_appstore\n  }, redirect_button || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_poa_continue_trading_button_continue_trading_button__WEBPACK_IMPORTED_MODULE_5__.ContinueTradingButton, null)));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvYS9zdGF0dXMvc3VibWl0dGVkL3N1Ym1pdHRlZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFNQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9wb2Evc3RhdHVzL3N1Ym1pdHRlZC9zdWJtaXR0ZWQudHN4P2I0NTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgSWNvbiwgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBQbGF0Zm9ybUNvbnRleHQgfSBmcm9tICdAZGVyaXYvc2hhcmVkJztcbmltcG9ydCB7IFRQb2FTdGF0dXNQcm9wcyB9IGZyb20gJ1R5cGVzJztcbmltcG9ydCB7IENvbnRpbnVlVHJhZGluZ0J1dHRvbiB9IGZyb20gJ0NvbXBvbmVudHMvcG9hL2NvbnRpbnVlLXRyYWRpbmctYnV0dG9uL2NvbnRpbnVlLXRyYWRpbmctYnV0dG9uJztcbmltcG9ydCBQb2lCdXR0b24gZnJvbSAnQ29tcG9uZW50cy9wb2kvcG9pLWJ1dHRvbic7XG5pbXBvcnQgSWNvbk1lc3NhZ2VDb250ZW50IGZyb20gJ0NvbXBvbmVudHMvaWNvbi1tZXNzYWdlLWNvbnRlbnQnO1xuXG5leHBvcnQgY29uc3QgU3VibWl0dGVkID0gKHsgbmVlZHNfcG9pLCByZWRpcmVjdF9idXR0b24gfTogVFBvYVN0YXR1c1Byb3BzKSA9PiB7XG4gICAgY29uc3QgeyBpc19hcHBzdG9yZSB9ID0gUmVhY3QudXNlQ29udGV4dChQbGF0Zm9ybUNvbnRleHQpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBsb2NhbGl6ZSgnWW91ciBkb2N1bWVudHMgd2VyZSBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgaWYgKG5lZWRzX3BvaSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYWNjb3VudC1tYW5hZ2VtZW50X19jb250YWluZXInLCB7XG4gICAgICAgICAgICAgICAgICAgICdhY2NvdW50LW1hbmFnZW1lbnRfX2NvbnRhaW5lci1kYXNoYm9hcmQnOiBpc19hcHBzdG9yZSxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SWNvbk1lc3NhZ2VDb250ZW50XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIGljb249ezxJY29uIGljb249J0ljUG9hVmVyaWZpZWQnIHNpemU9ezEyOH0gLz59XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxfd2lkdGg9e2lzX2FwcHN0b3JlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FjY291bnQtbWFuYWdlbWVudF9fdGV4dC1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgYWxpZ249J2NlbnRlcicgc2l6ZT0neHMnIGFzPSdwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9jYWxpemUoJ1dl4oCZbGwgcmV2aWV3IHlvdXIgZG9jdW1lbnRzIGFuZCBub3RpZnkgeW91IG9mIGl0cyBzdGF0dXMgd2l0aGluIDEgdG8gMyBkYXlzLicpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgYWxpZ249J2NlbnRlcicgc2l6ZT0neHMnIGFzPSdwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9jYWxpemUoJ1lvdSBtdXN0IGFsc28gc3VibWl0IGEgcHJvb2Ygb2YgaWRlbnRpdHkuJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8UG9pQnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgPC9JY29uTWVzc2FnZUNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdhY2NvdW50LW1hbmFnZW1lbnRfX2NvbnRhaW5lcicsIHtcbiAgICAgICAgICAgICAgICAnYWNjb3VudC1tYW5hZ2VtZW50X19jb250YWluZXItZGFzaGJvYXJkJzogaXNfYXBwc3RvcmUsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEljb25NZXNzYWdlQ29udGVudFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgdGV4dD17bG9jYWxpemUoJ1dl4oCZbGwgcmV2aWV3IHlvdXIgZG9jdW1lbnRzIGFuZCBub3RpZnkgeW91IG9mIGl0cyBzdGF0dXMgd2l0aGluIDEgdG8gMyBkYXlzLicpfVxuICAgICAgICAgICAgICAgIGljb249ezxJY29uIGljb249J0ljUG9hVmVyaWZpZWQnIHNpemU9ezEyOH0gLz59XG4gICAgICAgICAgICAgICAgZnVsbF93aWR0aD17aXNfYXBwc3RvcmV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3JlZGlyZWN0X2J1dHRvbiB8fCA8Q29udGludWVUcmFkaW5nQnV0dG9uIC8+fVxuICAgICAgICAgICAgPC9JY29uTWVzc2FnZUNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/poa/status/submitted/submitted.tsx\n')},"./Components/poi/poi-button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _poi_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./poi-button */ "./Components/poi/poi-button/poi-button.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_poi_button__WEBPACK_IMPORTED_MODULE_0__.PoiButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvaS9wb2ktYnV0dG9uL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9wb2kvcG9pLWJ1dHRvbi9pbmRleC50cz8yNWI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvaUJ1dHRvbiB9IGZyb20gJy4vcG9pLWJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IFBvaUJ1dHRvbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/poi/poi-button/index.ts\n')},"./Components/poi/poi-button/poi-button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "PoiButton": () => (/* binding */ PoiButton)\n/* harmony export */ });\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/translations */ "@deriv/translations");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar PoiButton = function PoiButton() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_0__.ButtonLink, {\n    className: "account-management__button",\n    to: "/account/proof-of-identity"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_0__.Text, {\n    className: "dc-btn__text",\n    weight: "bold",\n    as: "p"\n  }, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)(\'Proof of identity\')));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvaS9wb2ktYnV0dG9uL3BvaS1idXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9wb2kvcG9pLWJ1dHRvbi9wb2ktYnV0dG9uLnRzeD8xMDQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbkxpbmssIFRleHQgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFBvaUJ1dHRvbiA9ICgpID0+IChcbiAgICA8QnV0dG9uTGluayBjbGFzc05hbWU9J2FjY291bnQtbWFuYWdlbWVudF9fYnV0dG9uJyB0bz0nL2FjY291bnQvcHJvb2Ytb2YtaWRlbnRpdHknPlxuICAgICAgICA8VGV4dCBjbGFzc05hbWU9J2RjLWJ0bl9fdGV4dCcgd2VpZ2h0PSdib2xkJyBhcz0ncCc+XG4gICAgICAgICAgICB7bG9jYWxpemUoJ1Byb29mIG9mIGlkZW50aXR5Jyl9XG4gICAgICAgIDwvVGV4dD5cbiAgICA8L0J1dHRvbkxpbms+XG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/poi/poi-button/poi-button.tsx\n')},"../../../node_modules/classnames/index.js":(module,exports)=>{eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n\tCopyright (c) 2018 Jed Watson.\n\tLicensed under the MIT License (MIT), see\n\thttp://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\tvar nativeCodeString = '[native code]';\n\n\tfunction classNames() {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tif (arg.length) {\n\t\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\t\tif (inner) {\n\t\t\t\t\t\tclasses.push(inner);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tif (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {\n\t\t\t\t\tclasses.push(arg.toString());\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4uLy4uLy4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzPzNkY2QiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG5cdENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuXHRMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuXHRodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXHR2YXIgbmF0aXZlQ29kZVN0cmluZyA9ICdbbmF0aXZlIGNvZGVdJztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRpZiAoYXJnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGlmIChhcmcudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgJiYgIWFyZy50b1N0cmluZy50b1N0cmluZygpLmluY2x1ZGVzKCdbbmF0aXZlIGNvZGVdJykpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../node_modules/classnames/index.js\n")},"@deriv/components":_=>{"use strict";_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_components__},"@deriv/shared":_=>{"use strict";_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_shared__},"@deriv/translations":_=>{"use strict";_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_translations__},react:_=>{"use strict";_.exports=__WEBPACK_EXTERNAL_MODULE_react__}},__webpack_module_cache__={};function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var t=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=_=>{var e=_&&_.__esModule?()=>_.default:()=>_;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(_,e)=>{for(var t in e)__webpack_require__.o(e,t)&&!__webpack_require__.o(_,t)&&Object.defineProperty(_,t,{enumerable:!0,get:e[t]})},__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./Components/poa/status/submitted/index.ts");return __webpack_exports__=__webpack_exports__.default,__webpack_exports__})()));