(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45,34],{

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(4);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(154);
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(155);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E4%BE%9D%E8%B5%96%E7%AE%A1%E7%90%86\"><a class=\"header-anchor\" href=\"#%E4%BE%9D%E8%B5%96%E7%AE%A1%E7%90%86\">#</a> 依赖管理</h1> <p>在依赖管理，我们可以查看项目已安装的依赖列表，也可以在上方的搜索框中搜索项目已安装的依赖，然后可以更新或卸载它们。</p> <p><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"/></p> <h2 id=\"%E5%AE%89%E8%A3%85%E4%BE%9D%E8%B5%96\"><a class=\"header-anchor\" href=\"#%E5%AE%89%E8%A3%85%E4%BE%9D%E8%B5%96\">#</a> 安装依赖</h2> <p>点击右上角的“安装依赖”按钮后，我们可以根据关键词搜索所有已发布的 npm 包，并且按不同方式对搜索结果进行排序，然后选择需要的直接进行安装。</p> <p><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\"/></p> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/dependency.png");

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/install-dependency.png");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

class ContentView extends san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"] {
  inited() {
    global.hub.fire('changed', {
      "level": 0,
      "children": [{
        "level": 2,
        "title": "安装依赖",
        "hash": "%E5%AE%89%E8%A3%85%E4%BE%9D%E8%B5%96"
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(153);
        
        var script = __webpack_require__(47).default;
        module.exports = __webpack_require__(47);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);