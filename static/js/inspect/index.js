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
/******/ 		20: 0,
/******/ 		66: 0
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
/******/ 	deferredModules.push([73,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 132:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E6%9F%A5%E7%9C%8Bwebpack%E5%86%85%E7%BD%AE%E4%BF%A1%E6%81%AF\"><a class=\"header-anchor\" href=\"#%E6%9F%A5%E7%9C%8Bwebpack%E5%86%85%E7%BD%AE%E4%BF%A1%E6%81%AF\">#</a> 查看webpack内置信息</h1> <h2 id=\"%E6%9F%A5%E7%9C%8B-webpack-rule\"><a class=\"header-anchor\" href=\"#%E6%9F%A5%E7%9C%8B-webpack-rule\">#</a> 查看 webpack rule</h2> <h3 id=\"%E6%9F%A5%E7%9C%8B%E6%89%80%E6%9C%89%E5%86%85%E7%BD%AE-webpack-rules-list\"><a class=\"header-anchor\" href=\"#%E6%9F%A5%E7%9C%8B%E6%89%80%E6%9C%89%E5%86%85%E7%BD%AE-webpack-rules-list\">#</a> 查看所有内置 webpack rules list</h3> <pre class=\"language-bash\"><code class=\"language-bash\">san inspect --rules</code></pre> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token punctuation\">[</span>\n  <span class=\"token string\">'san'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'js'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'ejs'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'html'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'svg'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'img'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'media'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'fonts'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'css'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'postcss'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'less'</span>\n<span class=\"token punctuation\">]</span></code></pre> <h3 id=\"%E6%9F%A5%E7%9C%8B%E5%85%B7%E4%BD%93%E5%86%85%E7%BD%AE-webpack-rule-%E4%BF%A1%E6%81%AF\"><a class=\"header-anchor\" href=\"#%E6%9F%A5%E7%9C%8B%E5%85%B7%E4%BD%93%E5%86%85%E7%BD%AE-webpack-rule-%E4%BF%A1%E6%81%AF\">#</a> 查看具体内置 webpack rule 信息</h3> <pre class=\"language-bash\"><code class=\"language-bash\">san inspect --rule postcss</code></pre> <h2 id=\"%E6%9F%A5%E7%9C%8B-webpack-plugin\"><a class=\"header-anchor\" href=\"#%E6%9F%A5%E7%9C%8B-webpack-plugin\">#</a> 查看 webpack plugin</h2> <h3 id=\"%E6%9F%A5%E7%9C%8B%E6%89%80%E6%9C%89%E5%86%85%E7%BD%AE-webpack-plugins-list\"><a class=\"header-anchor\" href=\"#%E6%9F%A5%E7%9C%8B%E6%89%80%E6%9C%89%E5%86%85%E7%BD%AE-webpack-plugins-list\">#</a> 查看所有内置 webpack plugins list</h3> <pre class=\"language-bash\"><code class=\"language-bash\">san inspect --plugins</code></pre> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token punctuation\">[</span>\n  <span class=\"token string\">'san'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'case-sensitive-paths'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'define'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'hmr'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'no-emit-on-errors'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'html-index'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'san-html-index'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'html-demo-store'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'san-html-demo-store'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'html-webpack-harddisk-plugin'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'copy-webpack-plugin'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'progress'</span>\n<span class=\"token punctuation\">]</span></code></pre> <h3 id=\"%E6%9F%A5%E7%9C%8B%E5%85%B7%E4%BD%93%E5%86%85%E7%BD%AE-webpack-plugin-%E4%BF%A1%E6%81%AF\"><a class=\"header-anchor\" href=\"#%E6%9F%A5%E7%9C%8B%E5%85%B7%E4%BD%93%E5%86%85%E7%BD%AE-webpack-plugin-%E4%BF%A1%E6%81%AF\">#</a> 查看具体内置 webpack plugin 信息</h3> <pre class=\"language-bash\"><code class=\"language-bash\">san inspect --plugin copy-webpack-plugin</code></pre> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\">new</span> <span class=\"token class-name\">CopyPlugin</span><span class=\"token punctuation\">(</span>\n  <span class=\"token punctuation\">{</span>\n    patterns<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token function-variable function\">transform</span><span class=\"token operator\">:</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span> <span class=\"token comment\">/* omitted long function */</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token keyword\">from</span><span class=\"token operator\">:</span> <span class=\"token string\">'/Users/baidu/Desktop/baidu/xxx/template'</span><span class=\"token punctuation\">,</span>\n        to<span class=\"token operator\">:</span> <span class=\"token string\">'/Users/baidu/Desktop/baidu/xxx/output/template'</span><span class=\"token punctuation\">,</span>\n        globOptions<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n          ignore<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n            <span class=\"token string\">'index.html'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token string\">'.DS_Store'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token string\">'index/index.tpl'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token string\">'demo-store/index.tpl'</span>\n          <span class=\"token punctuation\">]</span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">)</span></code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 32:
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
        "title": "查看 webpack rule",
        "hash": "%E6%9F%A5%E7%9C%8B-webpack-rule",
        "children": [{
          "level": 3,
          "title": "查看所有内置 webpack rules list",
          "hash": "%E6%9F%A5%E7%9C%8B%E6%89%80%E6%9C%89%E5%86%85%E7%BD%AE-webpack-rules-list"
        }, {
          "level": 3,
          "title": "查看具体内置 webpack rule 信息",
          "hash": "%E6%9F%A5%E7%9C%8B%E5%85%B7%E4%BD%93%E5%86%85%E7%BD%AE-webpack-rule-%E4%BF%A1%E6%81%AF"
        }]
      }, {
        "level": 2,
        "title": "查看 webpack plugin",
        "hash": "%E6%9F%A5%E7%9C%8B-webpack-plugin",
        "children": [{
          "level": 3,
          "title": "查看所有内置 webpack plugins list",
          "hash": "%E6%9F%A5%E7%9C%8B%E6%89%80%E6%9C%89%E5%86%85%E7%BD%AE-webpack-plugins-list"
        }, {
          "level": 3,
          "title": "查看具体内置 webpack plugin 信息",
          "hash": "%E6%9F%A5%E7%9C%8B%E5%85%B7%E4%BD%93%E5%86%85%E7%BD%AE-webpack-plugin-%E4%BF%A1%E6%81%AF"
        }]
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        var injectStyles = [];

        var template = __webpack_require__(132);
        
        var script = __webpack_require__(32).default;
        module.exports = __webpack_require__(32);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

/******/ });