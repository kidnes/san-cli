(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43,33],{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(4);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(149);
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(150);
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(151);
var ___HTML_LOADER_IMPORT_3___ = __webpack_require__(152);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_3___);
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E4%BB%AA%E8%A1%A8%E7%9B%98\"><a class=\"header-anchor\" href=\"#%E4%BB%AA%E8%A1%A8%E7%9B%98\">#</a> 仪表盘</h1> <p>在仪表盘，我们可以找到各种实用的小部件。一个项目的默认部件有 2 个，分别是提供了 cli ui 上手指南的“欢迎”部件和根据端口号终止本地服务的“终止端口”部件。</p> <p><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"/></p> <h2 id=\"%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BB%AA%E8%A1%A8%E7%9B%98\"><a class=\"header-anchor\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BB%AA%E8%A1%A8%E7%9B%98\">#</a> 自定义仪表盘</h2> <p>点击右上角的“自定义”按钮后，可以进入如下所示的自定义仪表盘的编辑界面。可以看到，除了默认的“欢迎”部件和“终止端口”部件，目前还可以添加的部件有“运行任务”部件和“新闻”部件。</p> <p><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\"/></p> <h2 id=\"%E2%80%9C%E8%BF%90%E8%A1%8C%E4%BB%BB%E5%8A%A1%E2%80%9D%E9%83%A8%E4%BB%B6\"><a class=\"header-anchor\" href=\"#%E2%80%9C%E8%BF%90%E8%A1%8C%E4%BB%BB%E5%8A%A1%E2%80%9D%E9%83%A8%E4%BB%B6\">#</a> “运行任务”部件</h2> <p>在一个“运行任务”部件，我们可以配置一个任务，比如 start 任务，然后就可以快捷地运行 start 任务了。当然，我们也可以添加多个“运行任务”部件，这样就可以配置多个任务了。</p> <p><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"/></p> <h2 id=\"%E2%80%9C%E6%96%B0%E9%97%BB%E2%80%9D%E9%83%A8%E4%BB%B6\"><a class=\"header-anchor\" href=\"#%E2%80%9C%E6%96%B0%E9%97%BB%E2%80%9D%E9%83%A8%E4%BB%B6\">#</a> “新闻”部件</h2> <p>在“新闻”部件，我们可以配置喜欢的 RSS 源直接阅读而不用跳转第三方网站（默认配置的 RSS 源是 <a href=\"https://ecomfe.github.io/atom.xml\">https://ecomfe.github.io/atom.xml</a>）。</p> <p>点击右上角的“全屏”按钮还可以获得最佳的阅读体检。</p> <p><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\"/></p> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/dashboard.png");

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/custom-dashboard.png");

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/run-task-widget.png");

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/news-widget.png");

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

/***/ 46:
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
        "title": "自定义仪表盘",
        "hash": "%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BB%AA%E8%A1%A8%E7%9B%98"
      }, {
        "level": 2,
        "title": "“运行任务”部件",
        "hash": "%E2%80%9C%E8%BF%90%E8%A1%8C%E4%BB%BB%E5%8A%A1%E2%80%9D%E9%83%A8%E4%BB%B6"
      }, {
        "level": 2,
        "title": "“新闻”部件",
        "hash": "%E2%80%9C%E6%96%B0%E9%97%BB%E2%80%9D%E9%83%A8%E4%BB%B6"
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(148);
        
        var script = __webpack_require__(46).default;
        module.exports = __webpack_require__(46);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);