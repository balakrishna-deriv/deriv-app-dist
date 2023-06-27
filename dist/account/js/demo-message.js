/*! For license information please see demo-message.js.LICENSE.txt */
!function(e,_){"object"==typeof exports&&"object"==typeof module?module.exports=_(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("mobx-react"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","mobx-react","react"],_):"object"==typeof exports?exports["@deriv/account"]=_(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("mobx-react"),require("react")):e["@deriv/account"]=_(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e["mobx-react"],e.react)}(self,((__WEBPACK_EXTERNAL_MODULE__deriv_components__,__WEBPACK_EXTERNAL_MODULE__deriv_shared__,__WEBPACK_EXTERNAL_MODULE__deriv_translations__,__WEBPACK_EXTERNAL_MODULE_mobx_react__,__WEBPACK_EXTERNAL_MODULE_react__)=>(()=>{var __webpack_modules__={"./Components/demo-message/demo-message.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/translations */ "@deriv/translations");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var Components_icon_with_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/icon-with-message */ "./Components/icon-with-message/index.ts");\n\n\n\nvar DemoMessage = function DemoMessage(_ref) {\n  var has_demo_icon = _ref.has_demo_icon,\n    has_button = _ref.has_button;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_icon_with_message__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    icon: has_demo_icon ? \'IcPoaLockDemo\' : \'IcPoaLock\',\n    message: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)(\'This feature is not available for demo accounts.\'),\n    has_button: has_button\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DemoMessage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2RlbW8tbWVzc2FnZS9kZW1vLW1lc3NhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL2RlbW8tbWVzc2FnZS9kZW1vLW1lc3NhZ2UudHN4PzFhZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgSWNvbldpdGhNZXNzYWdlIGZyb20gJ0NvbXBvbmVudHMvaWNvbi13aXRoLW1lc3NhZ2UnO1xuXG50eXBlIFREZW1vTWVzc2FnZSA9IHtcbiAgICBoYXNfZGVtb19pY29uPzogYm9vbGVhbjtcbiAgICBoYXNfYnV0dG9uPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IERlbW9NZXNzYWdlID0gKHsgaGFzX2RlbW9faWNvbiwgaGFzX2J1dHRvbiB9OiBURGVtb01lc3NhZ2UpID0+IChcbiAgICA8SWNvbldpdGhNZXNzYWdlXG4gICAgICAgIGljb249e2hhc19kZW1vX2ljb24gPyAnSWNQb2FMb2NrRGVtbycgOiAnSWNQb2FMb2NrJ31cbiAgICAgICAgbWVzc2FnZT17bG9jYWxpemUoJ1RoaXMgZmVhdHVyZSBpcyBub3QgYXZhaWxhYmxlIGZvciBkZW1vIGFjY291bnRzLicpfVxuICAgICAgICBoYXNfYnV0dG9uPXtoYXNfYnV0dG9ufVxuICAgIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBEZW1vTWVzc2FnZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/demo-message/demo-message.tsx\n')},"./Components/demo-message/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _demo_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo-message */ "./Components/demo-message/demo-message.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_demo_message__WEBPACK_IMPORTED_MODULE_0__["default"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2RlbW8tbWVzc2FnZS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvZGVtby1tZXNzYWdlL2luZGV4LnRzP2E2OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERlbW9NZXNzYWdlIGZyb20gJy4vZGVtby1tZXNzYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgRGVtb01lc3NhZ2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/demo-message/index.ts\n')},"./Components/icon-with-message/icon-with-message.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/translations */ "@deriv/translations");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Stores/connect */ "./Stores/connect.js");\n\n\n\n\n\n\nvar IconWithMessage = function IconWithMessage(_ref) {\n  var has_button = _ref.has_button,\n    has_real_account = _ref.has_real_account,\n    icon = _ref.icon,\n    message = _ref.message,\n    toggleAccountsDialog = _ref.toggleAccountsDialog,\n    toggleShouldShowRealAccountsList = _ref.toggleShouldShowRealAccountsList;\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_deriv_shared__WEBPACK_IMPORTED_MODULE_3__.PlatformContext),\n    is_appstore = _React$useContext.is_appstore;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\'da-icon-with-message\', {\n      \'da-icon-with-message-full-width\': is_appstore\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n    icon: icon,\n    size: 128\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n    className: "da-icon-with-message__text",\n    as: "p",\n    color: "general",\n    size: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_3__.isMobile)() ? \'xs\' : \'s\',\n    line_height: "m",\n    weight: "bold"\n  }, message), has_button && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    primary: true,\n    onClick: function onClick() {\n      toggleShouldShowRealAccountsList(true);\n      toggleAccountsDialog();\n    },\n    className: "account__demo-message-button",\n    "data-testid": "icon-with-message-button"\n  }, has_real_account ? (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.localize)(\'Switch to real account\') : (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.localize)(\'Add a real account\')));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,Stores_connect__WEBPACK_IMPORTED_MODULE_5__.connect)(function (_ref2) {\n  var client = _ref2.client,\n    ui = _ref2.ui;\n  return {\n    has_real_account: client.has_any_real_account,\n    toggleAccountsDialog: ui.toggleAccountsDialog,\n    toggleShouldShowRealAccountsList: ui.toggleShouldShowRealAccountsList\n  };\n})(IconWithMessage));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2ljb24td2l0aC1tZXNzYWdlL2ljb24td2l0aC1tZXNzYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQU9BO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvaWNvbi13aXRoLW1lc3NhZ2UvaWNvbi13aXRoLW1lc3NhZ2UudHN4P2FkMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgSWNvbiwgVGV4dCwgQnV0dG9uIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgaXNNb2JpbGUsIFBsYXRmb3JtQ29udGV4dCB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdTdG9yZXMvY29ubmVjdCc7XG5pbXBvcnQgUm9vdFN0b3JlIGZyb20gJ1N0b3Jlcy9pbmRleCc7XG5cbnR5cGUgVEljb25XaXRoTWVzc2FnZSA9IHtcbiAgICBpY29uOiBzdHJpbmc7XG4gICAgaGFzX2J1dHRvbj86IGJvb2xlYW47XG4gICAgaGFzX3JlYWxfYWNjb3VudD86IGJvb2xlYW47XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHRvZ2dsZUFjY291bnRzRGlhbG9nOiAoc3RhdHVzPzogYm9vbGVhbikgPT4gdm9pZDtcbiAgICB0b2dnbGVTaG91bGRTaG93UmVhbEFjY291bnRzTGlzdDogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xufTtcblxuY29uc3QgSWNvbldpdGhNZXNzYWdlID0gKHtcbiAgICBoYXNfYnV0dG9uLFxuICAgIGhhc19yZWFsX2FjY291bnQsXG4gICAgaWNvbixcbiAgICBtZXNzYWdlLFxuICAgIHRvZ2dsZUFjY291bnRzRGlhbG9nLFxuICAgIHRvZ2dsZVNob3VsZFNob3dSZWFsQWNjb3VudHNMaXN0LFxufTogVEljb25XaXRoTWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IHsgaXNfYXBwc3RvcmUgfSA9IFJlYWN0LnVzZUNvbnRleHQoUGxhdGZvcm1Db250ZXh0KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdkYS1pY29uLXdpdGgtbWVzc2FnZScsIHsgJ2RhLWljb24td2l0aC1tZXNzYWdlLWZ1bGwtd2lkdGgnOiBpc19hcHBzdG9yZSB9KX0+XG4gICAgICAgICAgICA8SWNvbiBpY29uPXtpY29ufSBzaXplPXsxMjh9IC8+XG4gICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZGEtaWNvbi13aXRoLW1lc3NhZ2VfX3RleHQnXG4gICAgICAgICAgICAgICAgYXM9J3AnXG4gICAgICAgICAgICAgICAgY29sb3I9J2dlbmVyYWwnXG4gICAgICAgICAgICAgICAgc2l6ZT17aXNNb2JpbGUoKSA/ICd4cycgOiAncyd9XG4gICAgICAgICAgICAgICAgbGluZV9oZWlnaHQ9J20nXG4gICAgICAgICAgICAgICAgd2VpZ2h0PSdib2xkJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAge2hhc19idXR0b24gJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVTaG91bGRTaG93UmVhbEFjY291bnRzTGlzdCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFjY291bnRzRGlhbG9nKCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYWNjb3VudF9fZGVtby1tZXNzYWdlLWJ1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9J2ljb24td2l0aC1tZXNzYWdlLWJ1dHRvbidcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtoYXNfcmVhbF9hY2NvdW50ID8gbG9jYWxpemUoJ1N3aXRjaCB0byByZWFsIGFjY291bnQnKSA6IGxvY2FsaXplKCdBZGQgYSByZWFsIGFjY291bnQnKX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCh7IGNsaWVudCwgdWkgfTogUm9vdFN0b3JlKSA9PiAoe1xuICAgIGhhc19yZWFsX2FjY291bnQ6IGNsaWVudC5oYXNfYW55X3JlYWxfYWNjb3VudCxcbiAgICB0b2dnbGVBY2NvdW50c0RpYWxvZzogdWkudG9nZ2xlQWNjb3VudHNEaWFsb2csXG4gICAgdG9nZ2xlU2hvdWxkU2hvd1JlYWxBY2NvdW50c0xpc3Q6IHVpLnRvZ2dsZVNob3VsZFNob3dSZWFsQWNjb3VudHNMaXN0LFxufSkpKEljb25XaXRoTWVzc2FnZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/icon-with-message/icon-with-message.tsx\n')},"./Components/icon-with-message/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _icon_with_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-with-message */ "./Components/icon-with-message/icon-with-message.tsx");\n/* harmony import */ var _icon_with_message_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-with-message.scss */ "./Components/icon-with-message/icon-with-message.scss");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_icon_with_message__WEBPACK_IMPORTED_MODULE_0__["default"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2ljb24td2l0aC1tZXNzYWdlL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9pY29uLXdpdGgtbWVzc2FnZS9pbmRleC50cz9jNWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJY29uV2l0aE1lc3NhZ2UgZnJvbSAnLi9pY29uLXdpdGgtbWVzc2FnZSc7XG5pbXBvcnQgJy4vaWNvbi13aXRoLW1lc3NhZ2Uuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEljb25XaXRoTWVzc2FnZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/icon-with-message/index.ts\n')},"./Stores/connect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "MobxContent": () => (/* binding */ MobxContent),\n/* harmony export */   "MobxContentProvider": () => (/* binding */ MobxContentProvider),\n/* harmony export */   "connect": () => (/* binding */ connect)\n/* harmony export */ });\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-react */ "mobx-react");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\n\n\nvar isClassComponent = function isClassComponent(Component) {\n  return !!(typeof Component === \'function\' && Component.prototype && Component.prototype.isReactComponent);\n};\nvar MobxContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null);\nfunction injectStorePropsToComponent(propsToSelectFn, BaseComponent) {\n  var Component = function Component(own_props) {\n    var store = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(MobxContent);\n    var ObservedComponent = BaseComponent;\n    if (isClassComponent(BaseComponent)) {\n      var FunctionalWrapperComponent = function FunctionalWrapperComponent(props) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(BaseComponent, props);\n      };\n      ObservedComponent = FunctionalWrapperComponent;\n    }\n    return (0,mobx_react__WEBPACK_IMPORTED_MODULE_0__.useObserver)(function () {\n      return ObservedComponent(_objectSpread(_objectSpread({}, own_props), propsToSelectFn(store, own_props)));\n    });\n  };\n  Component.displayName = BaseComponent.name;\n  return Component;\n}\nvar MobxContentProvider = function MobxContentProvider(_ref) {\n  var store = _ref.store,\n    children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(MobxContent.Provider, {\n    value: _objectSpread(_objectSpread({}, store), {}, {\n      mobxStores: store\n    })\n  }, children);\n};\nvar connect = function connect(propsToSelectFn) {\n  return function (Component) {\n    return injectStorePropsToComponent(propsToSelectFn, Component);\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZXMvY29ubmVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL1N0b3Jlcy9jb25uZWN0LmpzPzQ3NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGlzQ2xhc3NDb21wb25lbnQgPSBDb21wb25lbnQgPT5cbiAgICAhISh0eXBlb2YgQ29tcG9uZW50ID09PSAnZnVuY3Rpb24nICYmIENvbXBvbmVudC5wcm90b3R5cGUgJiYgQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcblxuZXhwb3J0IGNvbnN0IE1vYnhDb250ZW50ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuZnVuY3Rpb24gaW5qZWN0U3RvcmVQcm9wc1RvQ29tcG9uZW50KHByb3BzVG9TZWxlY3RGbiwgQmFzZUNvbXBvbmVudCkge1xuICAgIGNvbnN0IENvbXBvbmVudCA9IG93bl9wcm9wcyA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gUmVhY3QudXNlQ29udGV4dChNb2J4Q29udGVudCk7XG5cbiAgICAgICAgbGV0IE9ic2VydmVkQ29tcG9uZW50ID0gQmFzZUNvbXBvbmVudDtcblxuICAgICAgICBpZiAoaXNDbGFzc0NvbXBvbmVudChCYXNlQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgY29uc3QgRnVuY3Rpb25hbFdyYXBwZXJDb21wb25lbnQgPSBwcm9wcyA9PiA8QmFzZUNvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xuICAgICAgICAgICAgT2JzZXJ2ZWRDb21wb25lbnQgPSBGdW5jdGlvbmFsV3JhcHBlckNvbXBvbmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1c2VPYnNlcnZlcigoKSA9PiBPYnNlcnZlZENvbXBvbmVudCh7IC4uLm93bl9wcm9wcywgLi4ucHJvcHNUb1NlbGVjdEZuKHN0b3JlLCBvd25fcHJvcHMpIH0pKTtcbiAgICB9O1xuXG4gICAgQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gQmFzZUNvbXBvbmVudC5uYW1lO1xuICAgIHJldHVybiBDb21wb25lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBNb2J4Q29udGVudFByb3ZpZGVyID0gKHsgc3RvcmUsIGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gPE1vYnhDb250ZW50LlByb3ZpZGVyIHZhbHVlPXt7IC4uLnN0b3JlLCBtb2J4U3RvcmVzOiBzdG9yZSB9fT57Y2hpbGRyZW59PC9Nb2J4Q29udGVudC5Qcm92aWRlcj47XG59O1xuXG5leHBvcnQgY29uc3QgY29ubmVjdCA9IHByb3BzVG9TZWxlY3RGbiA9PiBDb21wb25lbnQgPT4gaW5qZWN0U3RvcmVQcm9wc1RvQ29tcG9uZW50KHByb3BzVG9TZWxlY3RGbiwgQ29tcG9uZW50KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Stores/connect.js\n')},"../../../node_modules/classnames/index.js":(module,exports)=>{eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n\tCopyright (c) 2018 Jed Watson.\n\tLicensed under the MIT License (MIT), see\n\thttp://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\tvar nativeCodeString = '[native code]';\n\n\tfunction classNames() {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tif (arg.length) {\n\t\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\t\tif (inner) {\n\t\t\t\t\t\tclasses.push(inner);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tif (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {\n\t\t\t\t\tclasses.push(arg.toString());\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4uLy4uLy4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzPzNkY2QiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG5cdENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuXHRMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuXHRodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXHR2YXIgbmF0aXZlQ29kZVN0cmluZyA9ICdbbmF0aXZlIGNvZGVdJztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRpZiAoYXJnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGlmIChhcmcudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgJiYgIWFyZy50b1N0cmluZy50b1N0cmluZygpLmluY2x1ZGVzKCdbbmF0aXZlIGNvZGVdJykpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../node_modules/classnames/index.js\n")},"./Components/icon-with-message/icon-with-message.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2ljb24td2l0aC1tZXNzYWdlL2ljb24td2l0aC1tZXNzYWdlLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL2ljb24td2l0aC1tZXNzYWdlL2ljb24td2l0aC1tZXNzYWdlLnNjc3M/NTMyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/icon-with-message/icon-with-message.scss\n")},"@deriv/components":e=>{"use strict";e.exports=__WEBPACK_EXTERNAL_MODULE__deriv_components__},"@deriv/shared":e=>{"use strict";e.exports=__WEBPACK_EXTERNAL_MODULE__deriv_shared__},"@deriv/translations":e=>{"use strict";e.exports=__WEBPACK_EXTERNAL_MODULE__deriv_translations__},"mobx-react":e=>{"use strict";e.exports=__WEBPACK_EXTERNAL_MODULE_mobx_react__},react:e=>{"use strict";e.exports=__WEBPACK_EXTERNAL_MODULE_react__}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=e=>{var _=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(_,{a:_}),_},__webpack_require__.d=(e,_)=>{for(var t in _)__webpack_require__.o(_,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:_[t]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./Components/demo-message/index.ts");return __webpack_exports__=__webpack_exports__.default,__webpack_exports__})()));