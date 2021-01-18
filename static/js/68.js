(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68,23],{

/***/ 134:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E6%8F%92%E4%BB%B6\"><a class=\"header-anchor\" href=\"#%E6%8F%92%E4%BB%B6\">#</a> 插件</h1> <p>San CLI 是灵活可扩展的，我们可以通过编写插件来扩展 San CLI 的功能。San CLI 的插件分为两类：</p> <ul> <li>Command 插件：命令行插件，指通过给 Command 添加自定义命令的方式，添加 Command 插件，这样的插件可以使用<code>san your_command_name [options]</code>方式在主流程触发；</li> <li>Service 插件：Service 层的插件，用于对 Webpack 构建流程进行扩展。</li> </ul> <div class=\"warning\"> <p>Command 插件在执行时机上要比 Service 插件更加提前，并且在读取 <code>san.config.js</code> 之前；而 Service 插件主要是针对 Webpack 相关的，会加载内置 Webpack 配置和<code>san.config.js</code>配置。</p> </div> <h3 id=\"%E6%B7%B1%E5%85%A5%E9%98%85%E8%AF%BB\"><a class=\"header-anchor\" href=\"#%E6%B7%B1%E5%85%A5%E9%98%85%E8%AF%BB\">#</a> 深入阅读</h3> <ul> <li><a href=\"/cmd-plugin.md\">Command 插件</a></li> <li><a href=\"/srv-plugin.md\">Service 插件</a></li> </ul> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 33:
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
        "level": 3,
        "title": "深入阅读",
        "hash": "%E6%B7%B1%E5%85%A5%E9%98%85%E8%AF%BB"
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(134);
        
        var script = __webpack_require__(33).default;
        module.exports = __webpack_require__(33);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);