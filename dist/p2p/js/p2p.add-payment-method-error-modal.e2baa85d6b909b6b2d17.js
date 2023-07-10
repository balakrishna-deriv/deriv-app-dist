/*! For license information please see p2p.add-payment-method-error-modal.e2baa85d6b909b6b2d17.js.LICENSE.txt */
"use strict";(self.webpackChunk_deriv_p2p=self.webpackChunk_deriv_p2p||[]).push([["add-payment-method-error-modal"],{"./src/components/modal-manager/modals/add-payment-method-error-modal.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/modal-manager/modal-manager-context */ "./src/components/modal-manager/modal-manager-context.js");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var Stores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Stores */ "./src/stores/index.js");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react-lite */ "../../node_modules/mobx-react-lite/es/index.js");\n/* harmony import */ var Components_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/i18next */ "./src/components/i18next/index.js");\n\n\n\n\n\n\nvar AddPaymentMethodErrorModal = function AddPaymentMethodErrorModal() {\n  var _useStores = (0,Stores__WEBPACK_IMPORTED_MODULE_3__.useStores)(),\n    my_profile_store = _useStores.my_profile_store;\n  var _useModalManagerConte = (0,Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_1__.useModalManagerContext)(),\n    is_modal_open = _useModalManagerConte.is_modal_open,\n    hideModal = _useModalManagerConte.hideModal;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n    is_open: is_modal_open,\n    small: true,\n    has_close_icon: false,\n    title: (0,Components_i18next__WEBPACK_IMPORTED_MODULE_5__.localize)("Something\'s not right")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n    color: "prominent",\n    size: "xs"\n  }, my_profile_store.add_payment_method_error_message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Modal.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    has_effect: true,\n    text: (0,Components_i18next__WEBPACK_IMPORTED_MODULE_5__.localize)(\'Ok\'),\n    onClick: function onClick() {\n      my_profile_store.setAddPaymentMethodErrorMessage(\'\');\n      hideModal({\n        should_save_form_history: true\n      });\n    },\n    primary: true,\n    large: true\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__.observer)(AddPaymentMethodErrorModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9hZGQtcGF5bWVudC1tZXRob2QtZXJyb3ItbW9kYWwuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L3AycC8uL3NyYy9jb21wb25lbnRzL21vZGFsLW1hbmFnZXIvbW9kYWxzL2FkZC1wYXltZW50LW1ldGhvZC1lcnJvci1tb2RhbC5qc3g/NzE5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTW9kYWxNYW5hZ2VyQ29udGV4dCB9IGZyb20gJ0NvbXBvbmVudHMvbW9kYWwtbWFuYWdlci9tb2RhbC1tYW5hZ2VyLWNvbnRleHQnO1xuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVN0b3JlcyB9IGZyb20gJ1N0b3Jlcyc7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSc7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJ0NvbXBvbmVudHMvaTE4bmV4dCc7XG5cbmNvbnN0IEFkZFBheW1lbnRNZXRob2RFcnJvck1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbXlfcHJvZmlsZV9zdG9yZSB9ID0gdXNlU3RvcmVzKCk7XG4gICAgY29uc3QgeyBpc19tb2RhbF9vcGVuLCBoaWRlTW9kYWwgfSA9IHVzZU1vZGFsTWFuYWdlckNvbnRleHQoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWwgaXNfb3Blbj17aXNfbW9kYWxfb3Blbn0gc21hbGwgaGFzX2Nsb3NlX2ljb249e2ZhbHNlfSB0aXRsZT17bG9jYWxpemUoXCJTb21ldGhpbmcncyBub3QgcmlnaHRcIil9PlxuICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9J3Byb21pbmVudCcgc2l6ZT0neHMnPlxuICAgICAgICAgICAgICAgICAgICB7bXlfcHJvZmlsZV9zdG9yZS5hZGRfcGF5bWVudF9tZXRob2RfZXJyb3JfbWVzc2FnZX1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgaGFzX2VmZmVjdFxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtsb2NhbGl6ZSgnT2snKX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXlfcHJvZmlsZV9zdG9yZS5zZXRBZGRQYXltZW50TWV0aG9kRXJyb3JNZXNzYWdlKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkX3NhdmVfZm9ybV9oaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2VcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVyKEFkZFBheW1lbnRNZXRob2RFcnJvck1vZGFsKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/add-payment-method-error-modal.jsx\n')}}]);