(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Vehicle/NewVehicle.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/Vehicle/NewVehicle.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'newvehicle',\n  data: function data() {\n    return {\n      vehicle: ''\n    };\n  },\n  mounted: function mounted() {// if(this.vehicle){\n    // const path=this.$router.currentRoute.value.path\n    // console.log(path)\n    //  this.$router.push({ name: 'Vehicles' })\n    // } else {\n    //   alert('Please enter valid vehicle number')\n    // }\n  },\n  methods: {\n    newvehicle: function newvehicle() {\n      if (this.vehicle != '') {\n        alert('New Vehicle Registered Successfully');\n        this.vehicle = this.vehicle;\n        this.$router.push({\n          name: 'Vehicles'\n        });\n      } else {\n        alert('Please fill vehicle number');\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Vehicle/NewVehicle.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Vehicle/NewVehicle.vue?vue&type=template&id=b7fa76ee":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/Vehicle/NewVehicle.vue?vue&type=template&id=b7fa76ee ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  style: {\n    \"margin\": \"30%\"\n  }\n};\n\nvar _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h5\", null, \"New-Vehicle\", -1\n/* HOISTED */\n);\n\nvar _hoisted_3 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"label\", {\n  for: \"vehicle\"\n}, \"Required Vehicle # Format : KA99AA9999\", -1\n/* HOISTED */\n);\n\nvar _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"br\", null, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_5 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"br\", null, null, -1\n/* HOISTED */\n);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, [_hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"form\", null, [_hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withDirectives\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"input\", {\n    type: \"text\",\n    pattern: \"[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{4}\",\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = function ($event) {\n      return $data.vehicle = $event;\n    })\n  }, null, 512\n  /* NEED_PATCH */\n  ), [[vue__WEBPACK_IMPORTED_MODULE_0__[\"vModelText\"], $data.vehicle]]), _hoisted_4, _hoisted_5, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"button\", {\n    type: \"submit\",\n    onClick: _cache[1] || (_cache[1] = function () {\n      return $options.newvehicle && $options.newvehicle.apply($options, arguments);\n    }),\n    class: \"btn green\"\n  }, \"Add New Vehicle\")])]);\n}\n\n//# sourceURL=webpack:///./src/views/Vehicle/NewVehicle.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./src/views/Vehicle/NewVehicle.vue":
/*!******************************************!*\
  !*** ./src/views/Vehicle/NewVehicle.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NewVehicle_vue_vue_type_template_id_b7fa76ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewVehicle.vue?vue&type=template&id=b7fa76ee */ \"./src/views/Vehicle/NewVehicle.vue?vue&type=template&id=b7fa76ee\");\n/* harmony import */ var _NewVehicle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewVehicle.vue?vue&type=script&lang=js */ \"./src/views/Vehicle/NewVehicle.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var C_Vuejs_Dummy_WebApp_GithubPages_uvdv_vue_pages_uvdv_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var C_Vuejs_Dummy_WebApp_GithubPages_uvdv_vue_pages_uvdv_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Vuejs_Dummy_WebApp_GithubPages_uvdv_vue_pages_uvdv_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/C_Vuejs_Dummy_WebApp_GithubPages_uvdv_vue_pages_uvdv_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_NewVehicle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_NewVehicle_vue_vue_type_template_id_b7fa76ee__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/views/Vehicle/NewVehicle.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/views/Vehicle/NewVehicle.vue?");

/***/ }),

/***/ "./src/views/Vehicle/NewVehicle.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/views/Vehicle/NewVehicle.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_NewVehicle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./NewVehicle.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Vehicle/NewVehicle.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_NewVehicle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/views/Vehicle/NewVehicle.vue?");

/***/ }),

/***/ "./src/views/Vehicle/NewVehicle.vue?vue&type=template&id=b7fa76ee":
/*!************************************************************************!*\
  !*** ./src/views/Vehicle/NewVehicle.vue?vue&type=template&id=b7fa76ee ***!
  \************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_NewVehicle_vue_vue_type_template_id_b7fa76ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./NewVehicle.vue?vue&type=template&id=b7fa76ee */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Vehicle/NewVehicle.vue?vue&type=template&id=b7fa76ee\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_NewVehicle_vue_vue_type_template_id_b7fa76ee__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Vehicle/NewVehicle.vue?");

/***/ })

}]);