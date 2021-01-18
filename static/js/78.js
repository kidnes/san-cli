(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78,38],{

/***/ 165:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"cli-ui%E5%AE%89%E8%A3%85\"><a class=\"header-anchor\" href=\"#cli-ui%E5%AE%89%E8%A3%85\">#</a> CLI UI安装</h1> <p>作为san-cli的可视化命令，安装san-cli即可尽情享用。</p> <p>全局安装san-cli</p> <pre class=\"language-bash\"><code class=\"language-bash\"><span class=\"token comment\"># use npm </span>\n<span class=\"token operator\">></span> <span class=\"token function\">npm</span> <span class=\"token function\">install</span> -g san-cli\n\n<span class=\"token comment\"># or use yarn </span>\n<span class=\"token operator\">></span> <span class=\"token function\">yarn</span> global <span class=\"token function\">add</span> san-cli</code></pre> <p>之后执行命令启动</p> <pre class=\"language-bash\"><code class=\"language-bash\"><span class=\"token operator\">></span> san ui</code></pre> <p>这样就会打开一个浏览器窗口，通过图形化界面安装和管理项目了。</p> </div></div> ";
// Exports
module.exports = code;

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
      "level": 0
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(165);
        
        var script = __webpack_require__(53).default;
        module.exports = __webpack_require__(53);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);