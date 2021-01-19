/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		33: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/san-cli/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([90,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(7);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(152);
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(153);
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(154);
var ___HTML_LOADER_IMPORT_3___ = __webpack_require__(155);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_3___);
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E4%BB%AA%E8%A1%A8%E7%9B%98\"><a class=\"header-anchor\" href=\"#%E4%BB%AA%E8%A1%A8%E7%9B%98\">#</a> 仪表盘</h1> <p>在仪表盘，我们可以找到各种实用的小部件。一个项目的默认部件有 2 个，分别是提供了 cli ui 上手指南的“欢迎”部件和根据端口号终止本地服务的“终止端口”部件。</p> <p><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"/></p> <h2 id=\"%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BB%AA%E8%A1%A8%E7%9B%98\"><a class=\"header-anchor\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BB%AA%E8%A1%A8%E7%9B%98\">#</a> 自定义仪表盘</h2> <p>点击右上角的“自定义”按钮后，可以进入如下所示的自定义仪表盘的编辑界面。可以看到，除了默认的“欢迎”部件和“终止端口”部件，目前还可以添加的部件有“运行任务”部件和“新闻”部件。</p> <p><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\"/></p> <h2 id=\"%E2%80%9C%E8%BF%90%E8%A1%8C%E4%BB%BB%E5%8A%A1%E2%80%9D%E9%83%A8%E4%BB%B6\"><a class=\"header-anchor\" href=\"#%E2%80%9C%E8%BF%90%E8%A1%8C%E4%BB%BB%E5%8A%A1%E2%80%9D%E9%83%A8%E4%BB%B6\">#</a> “运行任务”部件</h2> <p>在一个“运行任务”部件，我们可以配置一个任务，比如 start 任务，然后就可以快捷地运行 start 任务了。当然，我们也可以添加多个“运行任务”部件，这样就可以配置多个任务了。</p> <p><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"/></p> <h2 id=\"%E2%80%9C%E6%96%B0%E9%97%BB%E2%80%9D%E9%83%A8%E4%BB%B6\"><a class=\"header-anchor\" href=\"#%E2%80%9C%E6%96%B0%E9%97%BB%E2%80%9D%E9%83%A8%E4%BB%B6\">#</a> “新闻”部件</h2> <p>在“新闻”部件，我们可以配置喜欢的 RSS 源直接阅读而不用跳转第三方网站（默认配置的 RSS 源是 <a href=\"https://ecomfe.github.io/atom.xml\">https://ecomfe.github.io/atom.xml</a>）。</p> <p>点击右上角的“全屏”按钮还可以获得最佳的阅读体检。</p> <p><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\"/></p> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/dashboard.png");

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/custom-dashboard.png");

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/run-task-widget.png");

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/news-widget.png");

/***/ }),

/***/ 49:
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        var injectStyles = [];

        var template = __webpack_require__(151);
        
        var script = __webpack_require__(49).default;
        module.exports = __webpack_require__(49);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

/******/ });