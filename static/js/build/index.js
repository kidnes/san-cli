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
/******/ 		6: 0
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
/******/ 	deferredModules.push([65,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(7);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(124);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E7%94%9F%E4%BA%A7%E6%89%93%E5%8C%85\"><a class=\"header-anchor\" href=\"#%E7%94%9F%E4%BA%A7%E6%89%93%E5%8C%85\">#</a> 生产打包</h1> <p><code>san build</code>是生产环境打包，下面详细说下用法。</p> <h2 id=\"%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4\"><a class=\"header-anchor\" href=\"#%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4\">#</a> 使用命令</h2> <pre class=\"language-bash\"><code class=\"language-bash\">san build <span class=\"token punctuation\">[</span>entry<span class=\"token punctuation\">]</span></code></pre> <ul> <li>entry：入口文件，用于编译单一文件，不传入，则从当前<a href=\"https://zh.wikipedia.org/wiki/%E5%B7%A5%E4%BD%9C%E7%9B%AE%E9%8C%84\">工作目录</a>，读取 Config 文件的 pages 配置项。</li> </ul> <p>打包结束之后，build 命令默认会生成产出物报表，效果如下：</p> <p><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"/></p> <h2 id=\"%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E\"><a class=\"header-anchor\" href=\"#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E\">#</a> 参数说明</h2> <h3 id=\"%E8%B7%9F%E6%80%A7%E8%83%BD%E7%9B%B8%E5%85%B3\"><a class=\"header-anchor\" href=\"#%E8%B7%9F%E6%80%A7%E8%83%BD%E7%9B%B8%E5%85%B3\">#</a> 跟性能相关</h3> <ul> <li><code>--modern</code> 是否使用 modern mode 打包，值为 true 或 false，默认是 false，modern mode<a href=\"/modern-mode.md\">参考</a></li> </ul> <h3 id=\"%E8%B7%9F%E9%85%8D%E7%BD%AE%E7%9B%B8%E5%85%B3\"><a class=\"header-anchor\" href=\"#%E8%B7%9F%E9%85%8D%E7%BD%AE%E7%9B%B8%E5%85%B3\">#</a> 跟配置相关</h3> <ul> <li><code>--dest</code> 产出文件目录</li> <li><code>--mode，--m</code> 环境指示，值为 development 或 production，默认是 production</li> <li><code>--config，--config-file</code> 指定 san config 内容，值为 san config 文件的地址，默认会从目录中找寻 san.config.js 文件</li> </ul> <h3 id=\"%E6%8A%A5%E5%91%8A%E5%92%8C%E6%97%A5%E5%BF%97%E7%9B%B8%E5%85%B3\"><a class=\"header-anchor\" href=\"#%E6%8A%A5%E5%91%8A%E5%92%8C%E6%97%A5%E5%BF%97%E7%9B%B8%E5%85%B3\">#</a> 报告和日志相关</h3> <ul> <li><code>--analyze，--analyzer</code>：是否使用 webpack-analyze-bunlde 输出包分析，值为 true 或 false，默认 false</li> <li><code>--profile</code>：是否展示编译进度日志，值为 true 或 false，默认是 false</li> <li><code>--report</code>：是否输将包分析报表生成为单个 HTML 文件，值为 true 或 false 或者文件名，默认 false，仅生成 Webpack Stats JSON 文件</li> <li><code>--stats-json，--statsJson</code>：是否输将包分析报表生成为 stats.json，值为 true 或 false 或者文件名，默认是 false</li> <li><code>--no-colors</code>：是否展示无色彩 log，值为 true 或 false，默认是 false</li> </ul> <h3 id=\"%E5%85%B6%E4%BB%96\"><a class=\"header-anchor\" href=\"#%E5%85%B6%E4%BB%96\">#</a> 其他</h3> <ul> <li><code>--watch，--w</code> 是否监听代码变化</li> <li><code>--no-clean</code> 是否在 building 之前不删除上一次的产出文件，值为 true 或 false，默认 false</li> <li><code>--remote</code> 将编译产出远程部署到目标机器的名称，具体使用可<a href=\"/deployment.md\">参考文档</a></li> </ul> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/img/format-stats.png");

/***/ }),

/***/ 24:
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        var injectStyles = [];

        var template = __webpack_require__(123);
        
        var script = __webpack_require__(24).default;
        module.exports = __webpack_require__(24);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

/******/ });