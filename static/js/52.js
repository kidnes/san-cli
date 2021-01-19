(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52,2],{

/***/ 115:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><ul> <li><a href=\"https://baidu.github.io/san/\">San</a></li> <li><a href=\"https://ecomfe.github.com/santd/\">Santd</a></li> </ul> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 20:
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        var injectStyles = [];

        var template = __webpack_require__(115);
        
        var script = __webpack_require__(20).default;
        module.exports = __webpack_require__(20);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);