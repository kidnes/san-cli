(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44,37],{

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(7);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(164);
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(165);
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(166);
var ___HTML_LOADER_IMPORT_3___ = __webpack_require__(167);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_3___);
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E9%A1%B9%E7%9B%AE%E5%88%97%E8%A1%A8\"><a class=\"header-anchor\" href=\"#%E9%A1%B9%E7%9B%AE%E5%88%97%E8%A1%A8\">#</a> 项目列表</h1> <p>在cli ui添加的本地项目列表，可对列表项目进行收藏、在编辑器打开、重命名、从cli ui删除（不会删除本地文件）</p> <p><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"/></p> <h2 id=\"%E9%A1%B9%E7%9B%AE%E5%88%9B%E5%BB%BA\"><a class=\"header-anchor\" href=\"#%E9%A1%B9%E7%9B%AE%E5%88%9B%E5%BB%BA\">#</a> 项目创建</h2> <p>点击顶部导航右上角&quot;+&quot;按钮，可进入创建项目页首先在本地文件浏览器中选中需要创建项目的目录，可以通过点击路径切换，或者直接点击编辑后输入本地路径收藏：对本地路径进行收藏，会进入收藏列表，下次可快速切换新建：最右侧点击更多，可新建文件夹及显示隐藏文件</p> <p><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\"/></p> <p>点击创建项目后，选择模板，填入必要信息即可完成创建</p> <p><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"/> <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\"/></p> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/project-list.png");

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/create-project-1.png");

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/create-project-2.png");

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/create-project-3.png");

/***/ }),

/***/ 53:
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
        "title": "项目创建",
        "hash": "%E9%A1%B9%E7%9B%AE%E5%88%9B%E5%BB%BA"
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 7:
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

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        var injectStyles = [];

        var template = __webpack_require__(163);
        
        var script = __webpack_require__(53).default;
        module.exports = __webpack_require__(53);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);