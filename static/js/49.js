(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49,7],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(4);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(123);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"bundle-%E5%88%86%E6%9E%90\"><a class=\"header-anchor\" href=\"#bundle-%E5%88%86%E6%9E%90\">#</a> Bundle 分析</h1> <p>很多团队在使用 Webpack 的时候，不会关注打包后的性能问题，使用<a href=\"https://github.com/webpack-contrib/webpack-bundle-analyzer/\">webpack-bundle-analyzer</a>可以帮忙排查打包不合理的情况，一般会遇见下面的问题：</p> <ol> <li>打入不必要的包，引入过多的内容，比如<code>lodash</code>，需要使用<code>lodash</code> babel 插件来解决；</li> <li>打包优先级错误，导致本来不需提前引入的包，可以使用动态加载的方式来引入；</li> <li>多页面情况下没有拆包，每个页面一个包，这种情况可以使用<code>spiltChunks</code>来进行拆包，将公共内容拆成一个包。</li> </ol> <p>San CLI 内置了<a href=\"https://github.com/webpack-contrib/webpack-bundle-analyzer/\">webpack-bundle-analyzer</a>，方便使用，只需要在<code>san build --analyze</code></p> <p><img src=\"https://cloud.githubusercontent.com/assets/302213/20628702/93f72404-b338-11e6-92d4-9a365550a701.gif\" alt=\"\"/></p> <h2 id=\"%E5%88%86%E6%9E%90%E7%BB%93%E6%9E%9C\"><a class=\"header-anchor\" href=\"#%E5%88%86%E6%9E%90%E7%BB%93%E6%9E%9C\">#</a> 分析结果</h2> <p>除了直接使用 webpack-bundle-analyzer 查看结果，还可以将 Bundle 结果保存下来，用于分析和比较两次打包的结果，查找是否打包合理，San CLI 的 build 使用下面的两个方式来将分析结果进行保存：</p> <ul> <li><code>--stats-json，--stats</code>：生成 Webpack stats JSON 文件到 stats.json，值为 true 或 false，默认是 false</li> <li><code>--report</code>：是否输将包分析报表生成为单个 HTML 文件，值为 true 或 false，默认 false，仅生成 Webpack Stats JSON 文件</li> </ul> <p>关于 Bundle 结果的分析可以查看<a href=\"https://survivejs.com/webpack/optimizing/build-analysis/\">这篇文章</a>介绍了很多 Bundle 分析工具。这些工具的使用方法都是将生成的报告 JSON 地址上传上去，然后分析，这里就不再赘余了。</p> <h2 id=\"%E6%89%93%E5%8C%85%E6%80%A7%E8%83%BD%E5%88%86%E6%9E%90\"><a class=\"header-anchor\" href=\"#%E6%89%93%E5%8C%85%E6%80%A7%E8%83%BD%E5%88%86%E6%9E%90\">#</a> 打包性能分析</h2> <p>如果需要排查 loader 或者 plugin 的性能问题，可以使用 <code>san build --profile</code>，打包后会出现对应的性能表格。</p> <p><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"/></p> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/profile.png");

/***/ }),

/***/ 22:
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
        "title": "分析结果",
        "hash": "%E5%88%86%E6%9E%90%E7%BB%93%E6%9E%9C"
      }, {
        "level": 2,
        "title": "打包性能分析",
        "hash": "%E6%89%93%E5%8C%85%E6%80%A7%E8%83%BD%E5%88%86%E6%9E%90"
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

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

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(122);
        
        var script = __webpack_require__(22).default;
        module.exports = __webpack_require__(22);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);