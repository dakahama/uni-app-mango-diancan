(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/search/search-list"],{

/***/ 57:
/*!************************************************************************************************************!*\
  !*** D:/Workspance/HBuilderProjects/uni-app-mango-diancan/main.js?{"page":"pages%2Fsearch%2Fsearch-list"} ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _searchList = _interopRequireDefault(__webpack_require__(/*! ./pages/search/search-list.vue */ 58));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_searchList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 58:
/*!*****************************************************************************************!*\
  !*** D:/Workspance/HBuilderProjects/uni-app-mango-diancan/pages/search/search-list.vue ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_list_vue_vue_type_template_id_b67bbaac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-list.vue?vue&type=template&id=b67bbaac& */ 59);
/* harmony import */ var _search_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-list.vue?vue&type=script&lang=js& */ 61);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs




/* normalize component */

var component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_list_vue_vue_type_template_id_b67bbaac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_list_vue_vue_type_template_id_b67bbaac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _search_list_vue_vue_type_template_id_b67bbaac___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Workspance/HBuilderProjects/uni-app-mango-diancan/pages/search/search-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/*!************************************************************************************************************************!*\
  !*** D:/Workspance/HBuilderProjects/uni-app-mango-diancan/pages/search/search-list.vue?vue&type=template&id=b67bbaac& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_list_vue_vue_type_template_id_b67bbaac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search-list.vue?vue&type=template&id=b67bbaac& */ 60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_list_vue_vue_type_template_id_b67bbaac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_list_vue_vue_type_template_id_b67bbaac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_list_vue_vue_type_template_id_b67bbaac___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_list_vue_vue_type_template_id_b67bbaac___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 60:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Workspance/HBuilderProjects/uni-app-mango-diancan/pages/search/search-list.vue?vue&type=template&id=b67bbaac& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.showRigth = true
    }

    _vm.e1 = function($event) {
      _vm.showRigth = false
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 61:
/*!******************************************************************************************************************!*\
  !*** D:/Workspance/HBuilderProjects/uni-app-mango-diancan/pages/search/search-list.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search-list.vue?vue&type=script&lang=js& */ 62);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 62:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Workspance/HBuilderProjects/uni-app-mango-diancan/pages/search/search-list.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var uniDrawer = function uniDrawer() {return __webpack_require__.e(/*! import() | components/uni-ui/uni-drawer/uni-drawer */ "components/uni-ui/uni-drawer/uni-drawer").then(__webpack_require__.bind(null, /*! @/components/uni-ui/uni-drawer/uni-drawer.vue */ 276));};var zcmRadioGroup = function zcmRadioGroup() {return __webpack_require__.e(/*! import() | components/common/radio-group */ "components/common/radio-group").then(__webpack_require__.bind(null, /*! @/components/common/radio-group.vue */ 283));};var searchList = function searchList() {return __webpack_require__.e(/*! import() | components/search/search-list */ "components/search/search-list").then(__webpack_require__.bind(null, /*! @/components/search/search-list.vue */ 290));};var noThing = function noThing() {return __webpack_require__.e(/*! import() | components/common/no-thing */ "components/common/no-thing").then(__webpack_require__.bind(null, /*! @/components/common/no-thing.vue */ 295));};var _default =






























































{
  components: {
    searchList: searchList,
    noThing: noThing,
    uniDrawer: uniDrawer,
    zcmRadioGroup: zcmRadioGroup },

  data: function data() {
    return {
      // 1.上拉加载更多  2.加载中... 3.没有更多了
      loadtext: "上拉加载更多",
      keyword: "",
      page: 1,
      limit: 5,
      list: [],
      screen: {
        currentIndex: 0,
        list: [
        // status 0 1升序 2 降序
        { name: "综合", status: 1, key: "all" },
        { name: "销量", status: 0, key: "sale_count" },
        { name: "价格", status: 0, key: "min_price" }] },


      label: {
        selected: 0,
        list: [
        { name: "不限", rule: false, value: false },
        { name: "0-5", rule: "between", value: "0,5" },
        { name: "5-10", rule: "between", value: "5,10" },
        { name: "10-50", rule: "between", value: "10,50" },
        { name: "50-100", rule: "between", value: "50,100" },
        { name: "大于100", rule: ">", value: "100" }] },


      showRigth: false,
      condition: {},
      oldSelected: 0 };

  },
  computed: {
    // 排序相关
    options: function options() {
      var obj = this.screen.list[this.screen.currentIndex];
      var value = obj.status === 1 ? 'asc' : 'desc';
      return _defineProperty({},
      obj.key, value);

    } },

  onNavigationBarSearchInputChanged: function onNavigationBarSearchInputChanged(e) {
    this.keyword = e.text;
  },
  onNavigationBarSearchInputConfirmed: function onNavigationBarSearchInputConfirmed() {
    this.initSearch();
    this.search();
  },
  onNavigationBarButtonTap: function onNavigationBarButtonTap() {
    this.initSearch();
    this.search();
  },
  onLoad: function onLoad(e) {
    this.keyword = e.keyword;
    // 加载数据
    this.getData();
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.getData(true, function () {
      uni.showToast({
        title: '刷新成功',
        icon: "none" });

      uni.stopPullDownRefresh();
    });
  },
  onReachBottom: function onReachBottom() {
    // 是否已经处于加载状态
    if (this.loadtext !== '上拉加载更多') return;
    // 改变加载状态
    this.loadtext = '加载中...';
    this.page++;
    // 请求数据
    this.getData(false);
  },
  methods: {
    // 初始化搜索
    initSearch: function initSearch() {
      this.label.selected = 0;
      this.condition = {};
      this.page = 1;
    },
    // 搜索
    search: function search() {
      if (this.keyword === '') {
        return uni.showToast({
          title: '关键词不能为空',
          icon: 'none' });

      }




      uni.hideKeyboard();


      this.addHistory();
      this.initSearch();
      this.list = [];

      this.getData();

    },
    addHistory: function addHistory() {
      // 拿到所有的搜索历史
      var history = uni.getStorageSync('searchHistory');
      history = history ? JSON.parse(history) : [];
      // 判断之前是否有该搜索记录
      var index = history.indexOf(this.keyword);
      if (index === -1) {
        history.unshift(this.keyword);
      } else {
        history.unshift(history.splice(index, 1)[0]);
      }
      uni.setStorageSync('searchHistory', JSON.stringify(history));
    },
    // 加载数据
    getData: function getData() {var _this = this;var refresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var page = refresh ? 1 : this.page;

      console.log(JSON.stringify(this.options));
      console.log(JSON.stringify(this.condition));

      this.$H.post('/product/product/search', _objectSpread({
        title: this.keyword,
        page: page,
        limit: this.limit },
      this.options,
      this.condition)).
      then(function (res) {

        _this.keyword = "";

        console.log(res);
        var list = _this.format(res.list);
        _this.list = refresh ? _toConsumableArray(list) : [].concat(_toConsumableArray(_this.list), _toConsumableArray(list));

        // 恢复加载状态
        _this.loadtext = res.list.length < _this.limit ? '没有更多了' : '上拉加载更多';
        console.log(_this.loadtext);
        if (typeof callback === 'function') {
          callback();
        }
      });
    },
    // 格式化
    format: function format(res) {
      return res.map(function (item) {
        var goodNums = item.num === 0 ? 0 : item.goodNums / item.num * 100;
        return {
          id: item.id,
          title: item.title,
          cover: item.cover,
          desci: item.desci,
          price: item.price,
          num: item.num,
          goodNums: goodNums.toFixed(2) + '%' };

      });
    },
    changeScreen: function changeScreen(index) {
      this.page = 1;
      this.list = [];
      // 判断当前点击是否已经是激活状态
      var oldIndex = this.screen.currentIndex;
      var oldItem = this.screen.list[oldIndex];
      if (oldIndex === index) {
        oldItem.status = oldItem.status === 1 ? 2 : 1;
        // 加载数据
        this.getData();
        return;
      }
      var newIitem = this.screen.list[index];
      // 移除旧激活状态
      oldItem.status = 0;
      this.screen.currentIndex = index;
      // 增加新激活状态
      newIitem.status = 1;
      // 加载数据

      this.getData();
    },
    // 提交筛选条件
    confirm: function confirm() {
      this.page = 1;
      this.list = [];
      // 组织筛选条件
      this.getCondition();
      // 获取数据
      this.getData();

      this.showRigth = false;
    },
    // 重置
    reset: function reset() {
      this.condition = {};
      this.label.selected = 0;
      // 获取数据
      this.getData();

    },

    // 组织筛选条件
    getCondition: function getCondition() {
      var item = this.label.list[this.label.selected];
      this.condition = item.rule && item.value ? {
        price: item.rule + ',' + item.value } :
      {};

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[57,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/search/search-list.js.map