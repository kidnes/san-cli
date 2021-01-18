(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79,39],{

/***/ 166:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E5%85%AC%E5%85%B1%E9%9D%99%E6%80%81%E6%96%87%E4%BB%B6\"><a class=\"header-anchor\" href=\"#%E5%85%AC%E5%85%B1%E9%9D%99%E6%80%81%E6%96%87%E4%BB%B6\">#</a> 公共静态文件</h1> <p>若需要在 cli-ui内建的http服务器上暴露一些静态文件，例如：为自定义视图指定图标。可以通过在插件包根目录里可选的放置一个<code>public</code>文件夹，这个文件夹里的任何文件都会暴露至 /_plugin/:id/* 的http路由。</p> <p>例如，如果将 x-logo.png 文件放置到 san-cli-ui-widget-x/public/ 文件夹，那么 cli-ui 加载插件的时候可以通过 /_plugin/san-cli-ui-widget-x/x-logo.png 这个url来访问。</p> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 52:
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

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(166);
        
        var script = __webpack_require__(52).default;
        module.exports = __webpack_require__(52);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);