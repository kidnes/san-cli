(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46,36],{

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(4);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(158);
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(159);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E6%8F%92%E4%BB%B6%E7%AE%A1%E7%90%86\"><a class=\"header-anchor\" href=\"#%E6%8F%92%E4%BB%B6%E7%AE%A1%E7%90%86\">#</a> 插件管理</h1> <p>在插件管理，我们可以查看项目已安装的插件列表，也可以在上方的搜索框中搜索项目已安装的插件，然后可以更新或卸载它们。</p> <p><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"/></p> <h2 id=\"%E5%AE%89%E8%A3%85%E6%8F%92%E4%BB%B6\"><a class=\"header-anchor\" href=\"#%E5%AE%89%E8%A3%85%E6%8F%92%E4%BB%B6\">#</a> 安装插件</h2> <p>点击右上角的“安装插件”按钮后，我们可以浏览所有的插件，然后选择需要的直接进行安装。</p> <p><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\"/></p> <h2 id=\"%E5%AE%89%E8%A3%85-devtools\"><a class=\"header-anchor\" href=\"#%E5%AE%89%E8%A3%85-devtools\">#</a> 安装 devtools</h2> <p>右上角还提供了安装 devtools 的快捷入口。注：devtools 是用于调试 san.js 应用的开发工具。</p> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/plugins.png");

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/install-plugin.png");

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

/***/ 50:
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
        "title": "安装插件",
        "hash": "%E5%AE%89%E8%A3%85%E6%8F%92%E4%BB%B6"
      }, {
        "level": 2,
        "title": "安装 devtools",
        "hash": "%E5%AE%89%E8%A3%85-devtools"
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        var injectStyles = [];

        var template = __webpack_require__(157);
        
        var script = __webpack_require__(50).default;
        module.exports = __webpack_require__(50);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);