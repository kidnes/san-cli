(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51,20],{

/***/ 114:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"san-cli\"><a class=\"header-anchor\" href=\"#san-cli\">#</a> San CLI</h1> <p>San CLI 是一个命令行工具，其次它是一个内置 Webpack 的前端工程化构建工具。</p> <p>San CLI 在兼顾 San 生态的同时，尽量做到通用化配置，在设计之初，我们希望不局限于 San 的应用范畴，做可定制化的前端开发工具集。</p> <h2 id=\"%E5%AE%89%E8%A3%85\"><a class=\"header-anchor\" href=\"#%E5%AE%89%E8%A3%85\">#</a> 安装</h2> <div class=\"warning\"> <p>San CLI 的 Node.js 版本要求 <code>&gt;= 8.16.0</code>。</p> </div> <p>通过下面命令安装 San CLI</p> <pre class=\"language-bash\"><code class=\"language-bash\"><span class=\"token function\">npm</span> <span class=\"token function\">install</span> -g san-cli\n<span class=\"token comment\"># OR</span>\n<span class=\"token function\">yarn</span> global <span class=\"token function\">add</span> san-cli</code></pre> <h2 id=\"%E4%BD%BF%E7%94%A8\"><a class=\"header-anchor\" href=\"#%E4%BD%BF%E7%94%A8\">#</a> 使用</h2> <p>安装之后，你可以通过下面命令查看帮助</p> <pre class=\"language-bash\"><code class=\"language-bash\">san -h\nsan build\nsan serve</code></pre> <h2 id=\"%E7%89%B9%E7%82%B9\"><a class=\"header-anchor\" href=\"#%E7%89%B9%E7%82%B9\">#</a> 特点</h2> <ul> <li>支持 Command 和 Service 双插件机制，可以定制化自己/团队的 CLI</li> <li>内置打包、部署、包分析、性能分析等功能和最佳实践</li> <li>支持自定义项目脚手架</li> <li>支持 Markdown 建站</li> <li>支持 San Component 文档预览功能</li> </ul> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 19:
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
        "title": "安装",
        "hash": "%E5%AE%89%E8%A3%85"
      }, {
        "level": 2,
        "title": "使用",
        "hash": "%E4%BD%BF%E7%94%A8"
      }, {
        "level": 2,
        "title": "特点",
        "hash": "%E7%89%B9%E7%82%B9"
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        var injectStyles = [];

        var template = __webpack_require__(114);
        
        var script = __webpack_require__(19).default;
        module.exports = __webpack_require__(19);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);