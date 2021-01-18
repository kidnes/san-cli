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
/******/ 		17: 0,
/******/ 		63: 0
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
/******/ 	deferredModules.push([83,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 141:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h2 id=\"docit-sanbox-demo\"><a class=\"header-anchor\" href=\"#docit-sanbox-demo\">#</a> Docit Sanbox Demo</h2> <sanbox> ::: #### What's Docit? san docit 命令是放在`packages/san-cli-docit`中实现的，它是一个 Commander 插件，如果要编写自己的 Commander 插件可以参考它的代码。 ::: <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>hello-sanbox<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>hello</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h2</span><span class=\"token punctuation\">></span></span>&#123;&#123;text}}<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h2</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>style</span> <span class=\"token attr-name\">lang</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>less<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token style\"><span class=\"token language-css\">\n    <span class=\"token atrule\"><span class=\"token rule\">@red</span><span class=\"token punctuation\">:</span> red<span class=\"token punctuation\">;</span></span>\n    <span class=\"token selector\">#hello-sanbox</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token selector\">h1</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> 18px<span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n        <span class=\"token selector\">h2</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> 16px<span class=\"token punctuation\">;</span>\n            <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token atrule\"><span class=\"token rule\">@red</span><span class=\"token punctuation\">;</span></span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>style</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n    <span class=\"token keyword\">import</span> Hello <span class=\"token keyword\">from</span> <span class=\"token string\">'./component.js'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token function\">initData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n                text<span class=\"token operator\">:</span> <span class=\"token string\">'Red, Less enabled!'</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            hello<span class=\"token operator\">:</span> Hello\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </sanbox> <h2 id=\"sanbox-%E5%A4%8D%E6%9D%82%E7%8E%A9%E6%B3%95%EF%BC%8C%E9%80%82%E5%90%88%E8%87%AA%E5%AE%9A%E4%B9%89\"><a class=\"header-anchor\" href=\"#sanbox-%E5%A4%8D%E6%9D%82%E7%8E%A9%E6%B3%95%EF%BC%8C%E9%80%82%E5%90%88%E8%87%AA%E5%AE%9A%E4%B9%89\">#</a> Sanbox 复杂玩法，适合自定义</h2> <sanbox> ::: #### 说明 上面的内容是来自`./sanbox.js`，通过 picker 的 loader 单独引入对应模块来展现的。 ::: <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>sanbox-demo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h1</span><span class=\"token punctuation\">></span></span>↓ 来自`?san-md-picker&amp;get=sanbox&amp;eq=0`<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h1</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>sanbox</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>hr</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h1</span><span class=\"token punctuation\">></span></span>↓ 来自`?san-md-picker&amp;get=text-tag&amp;eq=0`<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h1</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>text-tag</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>hr</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h1</span><span class=\"token punctuation\">></span></span>↓ 来自`?san-md-picker&amp;get=highlight-code&amp;eq=0`<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h1</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>highlight-code</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>hr</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h1</span><span class=\"token punctuation\">></span></span>↓ 来自`?san-md-picker&amp;get=san-component&amp;eq=0`<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h1</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>san-code</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>style</span> <span class=\"token attr-name\">lang</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>less<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token style\"><span class=\"token language-css\">\n    <span class=\"token atrule\"><span class=\"token rule\">@red</span><span class=\"token punctuation\">:</span> red<span class=\"token punctuation\">;</span></span>\n    <span class=\"token selector\">.markdown .sanbox-demo</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token selector\">h1</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> 16px<span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>style</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n    <span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Sanbox<span class=\"token punctuation\">,</span> TextTag<span class=\"token punctuation\">,</span> HighlightCode<span class=\"token punctuation\">,</span> SanCode<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'./sanbox.js'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token function\">initData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            sanbox<span class=\"token operator\">:</span> Sanbox<span class=\"token punctuation\">,</span>\n            <span class=\"token string\">'text-tag'</span><span class=\"token operator\">:</span> TextTag<span class=\"token punctuation\">,</span>\n            <span class=\"token string\">'highlight-code'</span><span class=\"token operator\">:</span> HighlightCode<span class=\"token punctuation\">,</span>\n            <span class=\"token string\">'san-code'</span><span class=\"token operator\">:</span> SanCode\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </sanbox> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 42:
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
        "title": "Docit Sanbox Demo",
        "hash": "docit-sanbox-demo"
      }, {
        "level": 2,
        "title": "Sanbox 复杂玩法，适合自定义",
        "hash": "sanbox-%E5%A4%8D%E6%9D%82%E7%8E%A9%E6%B3%95%EF%BC%8C%E9%80%82%E5%90%88%E8%87%AA%E5%AE%9A%E4%B9%89"
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(141);
        
        var script = __webpack_require__(42).default;
        module.exports = __webpack_require__(42);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

/******/ });