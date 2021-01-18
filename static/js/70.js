(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70,25],{

/***/ 136:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E5%BC%80%E5%8F%91%E6%89%93%E5%8C%85\"><a class=\"header-anchor\" href=\"#%E5%BC%80%E5%8F%91%E6%89%93%E5%8C%85\">#</a> 开发打包</h1> <p><code>san serve</code>是开发环境打包，下面详细说下用法。</p> <h2 id=\"%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4\"><a class=\"header-anchor\" href=\"#%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4\">#</a> 使用命令</h2> <pre class=\"language-bash\"><code class=\"language-bash\">san serve <span class=\"token punctuation\">[</span>entry<span class=\"token punctuation\">]</span></code></pre> <ul> <li>entry：入口文件，用于编译单一文件，不传入，则从当前<a href=\"https://zh.wikipedia.org/wiki/%E5%B7%A5%E4%BD%9C%E7%9B%AE%E9%8C%84\">工作目录</a>，读取 Config 文件的 pages 配置项</li> </ul> <h2 id=\"%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E\"><a class=\"header-anchor\" href=\"#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E\">#</a> 参数说明</h2> <ul> <li><code>--port，--p</code>：指定 devServer 端口号，默认为 8899</li> <li><code>--use-https</code>： 请求头是否使用 https，默认为 false</li> <li><code>--host，--H</code>：指定 devServer 域名，默认为 0.0.0.0</li> <li><code>--public</code>：指定 HMR client 的 URL，默认http://localhost:8899/sockjs-node</li> <li><code>--open，--O</code>：是否在编译打包完成后，自动在浏览器中打开页面地址，值为 true 或 false，默认是 false</li> <li><code>--qrcode</code>：是否输出页面地址二维码，值为 true 或 false，默认是 true</li> <li><code>--mode，--m</code>：环境指示，值为 development 或 production，默认是 development</li> <li><code>--config，--config-file</code>：指定 san config 内容，值为 san config 文件的地址，默认会从目录中找寻 san.config.js 文件</li> </ul> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 37:
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
        "hash": "%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(136);
        
        var script = __webpack_require__(37).default;
        module.exports = __webpack_require__(37);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);