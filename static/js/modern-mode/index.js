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
/******/ 		22: 0,
/******/ 		67: 0
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
/******/ 	deferredModules.push([75,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 133:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E7%8E%B0%E5%9C%A8%E7%9A%84%E6%B5%8F%E8%A7%88%E5%99%A8%E6%89%93%E5%8C%85%E6%A8%A1%E5%BC%8F\"><a class=\"header-anchor\" href=\"#%E7%8E%B0%E5%9C%A8%E7%9A%84%E6%B5%8F%E8%A7%88%E5%99%A8%E6%89%93%E5%8C%85%E6%A8%A1%E5%BC%8F\">#</a> 现在的浏览器打包模式</h1> <p>现在相信很多团队的代码都是直接用 ES2015+ 语法来编写和维护，然后通过 Babel 将 ES2015+ 语法转成支持老浏览器的 js 代码，经过转换后的 js 代码从体积和解析执行效率上都比转换前有损耗。</p> <h2 id=\"%E5%85%BC%E5%AE%B9%E6%80%A7\"><a class=\"header-anchor\" href=\"#%E5%85%BC%E5%AE%B9%E6%80%A7\">#</a> 兼容性</h2> <p>从 Caniuse 网站的数据来看，现在绝大多数的浏览器已经对 ES2015+有了很好的支持，而经过我们统计百度 APP 的 Webview 浏览器数据来看，国内大概有 <strong>74.71%</strong> 的浏览器支持 ES2015+代码，这说明有 70%的浏览器是不再是老版本的浏览器，而我们却因为 30% 不到的浏览器影响了 70% 的本来应该更快更好的现在浏览器。</p> <p>如果能够在一个网站上自动识别不支持 ES2015 语法的浏览器，执行 Babel 转换后 ES2015-的代码，而支持 ES2015+的浏览器直接使用 ES2015+代码就好了！好消息是目前有方法这样做了，<a href=\"https://philipwalton.com/articles/deploying-es2015-code-in-production-today/\">这篇文章</a>已经有详细的介绍了。</p> <p>在 San CLI 中也吸收了这个方案！只需要使用<code>san build --modern</code>就可以打出对应的代码。</p> <h2 id=\"%E7%AE%80%E5%8D%95%E8%AF%B4%E5%AE%9E%E7%8E%B0\"><a class=\"header-anchor\" href=\"#%E7%AE%80%E5%8D%95%E8%AF%B4%E5%AE%9E%E7%8E%B0\">#</a> 简单说实现</h2> <p>在 Modern Mode 打包的时候，会打包两次，第一次正常打包生成老浏览器代码，第二次修改 Babel 的 <code>target='module'</code>，打包出来的 js 代码是 ES2015+，然后通过 html-webpack-plugin 的插件，将两次打包的 js 文件进行整合，生成下面的 HTML 片段：</p> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span>module</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span>/js/modern.js</span><span class=\"token punctuation\">></span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\"><span class=\"token operator\">!</span><span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">var</span> e<span class=\"token operator\">=</span>document<span class=\"token punctuation\">,</span>t<span class=\"token operator\">=</span>e<span class=\"token punctuation\">.</span><span class=\"token function\">createElement</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"script\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span><span class=\"token keyword\">if</span><span class=\"token punctuation\">(</span><span class=\"token operator\">!</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"noModule\"</span><span class=\"token keyword\">in</span> t<span class=\"token punctuation\">)</span><span class=\"token operator\">&amp;&amp;</span><span class=\"token string\">\"onbeforeload\"</span><span class=\"token keyword\">in</span> t<span class=\"token punctuation\">)</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">var</span> n<span class=\"token operator\">=</span><span class=\"token operator\">!</span><span class=\"token number\">1</span><span class=\"token punctuation\">;</span>e<span class=\"token punctuation\">.</span><span class=\"token function\">addEventListener</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"beforeload\"</span><span class=\"token punctuation\">,</span><span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">e</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">if</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">.</span>target<span class=\"token operator\">===</span>t<span class=\"token punctuation\">)</span>n<span class=\"token operator\">=</span><span class=\"token operator\">!</span><span class=\"token number\">0</span><span class=\"token punctuation\">;</span><span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span><span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span><span class=\"token function\">hasAttribute</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"nomodule\"</span><span class=\"token punctuation\">)</span><span class=\"token operator\">||</span><span class=\"token operator\">!</span>n<span class=\"token punctuation\">)</span><span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span><span class=\"token operator\">!</span><span class=\"token number\">0</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>t<span class=\"token punctuation\">.</span>type<span class=\"token operator\">=</span><span class=\"token string\">\"module\"</span><span class=\"token punctuation\">,</span>t<span class=\"token punctuation\">.</span>src<span class=\"token operator\">=</span><span class=\"token string\">\".\"</span><span class=\"token punctuation\">,</span>e<span class=\"token punctuation\">.</span>head<span class=\"token punctuation\">.</span><span class=\"token function\">appendChild</span><span class=\"token punctuation\">(</span>t<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>t<span class=\"token punctuation\">.</span><span class=\"token function\">remove</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span>text/javascript</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span>/js/legacy.js</span> <span class=\"token attr-name\">nomodule</span><span class=\"token punctuation\">></span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> <p>实现：</p> <ul> <li>Modern 浏览器通过 <code>&lt;script type=&quot;module&quot;&gt;</code> 在被支持的浏览器中加载，同时忽略<code>nomodule</code>的 script 代码；</li> <li>老版本浏览器不支持<code>type=module</code>的<code>script</code>，则会加载<code>nomodule</code>的 script；</li> <li>另外针对 Safari 10 中 bug 还使用一段代码进行修复。</li> </ul> <h2 id=\"%E6%94%B6%E7%9B%8A\"><a class=\"header-anchor\" href=\"#%E6%94%B6%E7%9B%8A\">#</a> 收益</h2> <p>在我们项目的实际应用中，Modern Mode 能有效缩减代码 bundle 总体积，提升代码载入执行速度，实际项目数据如下：</p> <ol> <li>体积减少 10K；</li> <li>安卓首屏减少 100ms 左右，iOS 首屏减少 60ms 左右；</li> </ol> <div class=\"warning\"> <p>Modern Mode 的具体收益受具体项目而影响，上面的数据仅供参考，不过 Modern Mode 肯定是正向的！</p> </div> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 34:
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
        "title": "兼容性",
        "hash": "%E5%85%BC%E5%AE%B9%E6%80%A7"
      }, {
        "level": 2,
        "title": "简单说实现",
        "hash": "%E7%AE%80%E5%8D%95%E8%AF%B4%E5%AE%9E%E7%8E%B0"
      }, {
        "level": 2,
        "title": "收益",
        "hash": "%E6%94%B6%E7%9B%8A"
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(133);
        
        var script = __webpack_require__(34).default;
        module.exports = __webpack_require__(34);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

/******/ });