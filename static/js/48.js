(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48,6],{

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(4);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(121);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E7%94%9F%E4%BA%A7%E6%89%93%E5%8C%85\"><a class=\"header-anchor\" href=\"#%E7%94%9F%E4%BA%A7%E6%89%93%E5%8C%85\">#</a> 生产打包</h1> <p><code>san build</code>是生产环境打包，下面详细说下用法。</p> <h2 id=\"%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4\"><a class=\"header-anchor\" href=\"#%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4\">#</a> 使用命令</h2> <pre class=\"language-bash\"><code class=\"language-bash\">san build <span class=\"token punctuation\">[</span>entry<span class=\"token punctuation\">]</span></code></pre> <ul> <li>entry：入口文件，用于编译单一文件，不传入，则从当前<a href=\"https://zh.wikipedia.org/wiki/%E5%B7%A5%E4%BD%9C%E7%9B%AE%E9%8C%84\">工作目录</a>，读取 Config 文件的 pages 配置项。</li> </ul> <p>打包结束之后，build 命令默认会生成产出物报表，效果如下：</p> <p><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"/></p> <h2 id=\"%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E\"><a class=\"header-anchor\" href=\"#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E\">#</a> 参数说明</h2> <h3 id=\"%E8%B7%9F%E6%80%A7%E8%83%BD%E7%9B%B8%E5%85%B3\"><a class=\"header-anchor\" href=\"#%E8%B7%9F%E6%80%A7%E8%83%BD%E7%9B%B8%E5%85%B3\">#</a> 跟性能相关</h3> <ul> <li><code>--modern</code> 是否使用 modern mode 打包，值为 true 或 false，默认是 false，modern mode<a href=\"/modern-mode.md\">参考</a></li> </ul> <h3 id=\"%E8%B7%9F%E9%85%8D%E7%BD%AE%E7%9B%B8%E5%85%B3\"><a class=\"header-anchor\" href=\"#%E8%B7%9F%E9%85%8D%E7%BD%AE%E7%9B%B8%E5%85%B3\">#</a> 跟配置相关</h3> <ul> <li><code>--dest</code> 产出文件目录</li> <li><code>--mode，--m</code> 环境指示，值为 development 或 production，默认是 production</li> <li><code>--config，--config-file</code> 指定 san config 内容，值为 san config 文件的地址，默认会从目录中找寻 san.config.js 文件</li> </ul> <h3 id=\"%E6%8A%A5%E5%91%8A%E5%92%8C%E6%97%A5%E5%BF%97%E7%9B%B8%E5%85%B3\"><a class=\"header-anchor\" href=\"#%E6%8A%A5%E5%91%8A%E5%92%8C%E6%97%A5%E5%BF%97%E7%9B%B8%E5%85%B3\">#</a> 报告和日志相关</h3> <ul> <li><code>--analyze，--analyzer</code>：是否使用 webpack-analyze-bunlde 输出包分析，值为 true 或 false，默认 false</li> <li><code>--profile</code>：是否展示编译进度日志，值为 true 或 false，默认是 false</li> <li><code>--report</code>：是否输将包分析报表生成为单个 HTML 文件，值为 true 或 false 或者文件名，默认 false，仅生成 Webpack Stats JSON 文件</li> <li><code>--stats-json，--statsJson</code>：是否输将包分析报表生成为 stats.json，值为 true 或 false 或者文件名，默认是 false</li> <li><code>--no-colors</code>：是否展示无色彩 log，值为 true 或 false，默认是 false</li> </ul> <h3 id=\"%E5%85%B6%E4%BB%96\"><a class=\"header-anchor\" href=\"#%E5%85%B6%E4%BB%96\">#</a> 其他</h3> <ul> <li><code>--watch，--w</code> 是否监听代码变化</li> <li><code>--no-clean</code> 是否在 building 之前不删除上一次的产出文件，值为 true 或 false，默认 false</li> <li><code>--remote</code> 将编译产出远程部署到目标机器的名称，具体使用可<a href=\"/deployment.md\">参考文档</a></li> </ul> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/format-stats.png");

/***/ }),

/***/ 21:
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
        "title": "使用命令",
        "hash": "%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4"
      }, {
        "level": 2,
        "title": "参数说明",
        "hash": "%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",
        "children": [{
          "level": 3,
          "title": "跟性能相关",
          "hash": "%E8%B7%9F%E6%80%A7%E8%83%BD%E7%9B%B8%E5%85%B3"
        }, {
          "level": 3,
          "title": "跟配置相关",
          "hash": "%E8%B7%9F%E9%85%8D%E7%BD%AE%E7%9B%B8%E5%85%B3"
        }, {
          "level": 3,
          "title": "报告和日志相关",
          "hash": "%E6%8A%A5%E5%91%8A%E5%92%8C%E6%97%A5%E5%BF%97%E7%9B%B8%E5%85%B3"
        }, {
          "level": 3,
          "title": "其他",
          "hash": "%E5%85%B6%E4%BB%96"
        }]
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

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(120);
        
        var script = __webpack_require__(21).default;
        module.exports = __webpack_require__(21);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);