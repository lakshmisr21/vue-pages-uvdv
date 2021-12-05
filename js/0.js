(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/Dashboard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Dashboard',\n  data: function data() {\n    return {\n      ishidden: false\n    };\n  },\n  mounted: function mounted() {//alert('Please scan QR code to Access')\n  },\n  methods: {\n    showUser: function showUser() {\n      this.ishidden = true;\n    },\n    logout: function logout() {\n      this.$router.push('/');\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Dashboard.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Dashboard.vue?vue&type=template&id=22ba47ca":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/Dashboard.vue?vue&type=template&id=22ba47ca ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _assets_Qr_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/Qr.png */ \"./src/assets/Qr.png\");\n/* harmony import */ var _assets_Qr_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_Qr_png__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _hoisted_1 = {\n  key: 0,\n  class: \"collection with-header\"\n};\n\nvar _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h3\", null, \"User Name\", -1\n/* HOISTED */\n);\n\nvar _hoisted_3 = {\n  class: \"collection-header green\"\n};\n\nvar _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\"Vehicles\");\n\nvar _hoisted_5 = {\n  class: \"collection-header green\"\n};\n\nvar _hoisted_6 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\"Driving License\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_router_link = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"router-link\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, [$data.ishidden ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"ul\", _hoisted_1, [_hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"li\", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h5\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_link, {\n    to: \"/vehicles\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [_hoisted_4];\n    }),\n    _: 1\n    /* STABLE */\n\n  })])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"li\", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h5\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_link, {\n    to: \"/dl\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [_hoisted_6];\n    }),\n    _: 1\n    /* STABLE */\n\n  })])])])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"img\", {\n    onClick: _cache[0] || (_cache[0] = function () {\n      return $options.showUser && $options.showUser.apply($options, arguments);\n    }),\n    class: \"img\",\n    src: _assets_Qr_png__WEBPACK_IMPORTED_MODULE_1___default.a\n  })], 64\n  /* STABLE_FRAGMENT */\n  );\n}\n\n//# sourceURL=webpack:///./src/views/Dashboard.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./src/assets/Qr.png":
/*!***************************!*\
  !*** ./src/assets/Qr.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/Qr.b9cbf838.png\";\n\n//# sourceURL=webpack:///./src/assets/Qr.png?");

/***/ }),

/***/ "./src/views/Dashboard.vue":
/*!*********************************!*\
  !*** ./src/views/Dashboard.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dashboard_vue_vue_type_template_id_22ba47ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=22ba47ca */ \"./src/views/Dashboard.vue?vue&type=template&id=22ba47ca\");\n/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ \"./src/views/Dashboard.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var C_Vuejs_Dummy_WebApp_GithubPages_uvdv_vue_pages_uvdv_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var C_Vuejs_Dummy_WebApp_GithubPages_uvdv_vue_pages_uvdv_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Vuejs_Dummy_WebApp_GithubPages_uvdv_vue_pages_uvdv_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/C_Vuejs_Dummy_WebApp_GithubPages_uvdv_vue_pages_uvdv_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Dashboard_vue_vue_type_template_id_22ba47ca__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/views/Dashboard.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/views/Dashboard.vue?");

/***/ }),

/***/ "./src/views/Dashboard.vue?vue&type=script&lang=js":
/*!*********************************************************!*\
  !*** ./src/views/Dashboard.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./Dashboard.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/views/Dashboard.vue?");

/***/ }),

/***/ "./src/views/Dashboard.vue?vue&type=template&id=22ba47ca":
/*!***************************************************************!*\
  !*** ./src/views/Dashboard.vue?vue&type=template&id=22ba47ca ***!
  \***************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Dashboard_vue_vue_type_template_id_22ba47ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./Dashboard.vue?vue&type=template&id=22ba47ca */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Dashboard.vue?vue&type=template&id=22ba47ca\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Dashboard_vue_vue_type_template_id_22ba47ca__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Dashboard.vue?");

/***/ })

}]);