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
/******/ 		13: 0,
/******/ 		59: 0
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
/******/ 	deferredModules.push([71,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 131:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E5%A6%82%E4%BD%95%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E8%84%9A%E6%89%8B%E6%9E%B6%E9%A1%B9%E7%9B%AE\"><a class=\"header-anchor\" href=\"#%E5%A6%82%E4%BD%95%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E8%84%9A%E6%89%8B%E6%9E%B6%E9%A1%B9%E7%9B%AE\">#</a> 如何创建一个脚手架项目</h1> <p>日常开发中，团队可以创建自己的项目脚手架，本文将介绍脚手架创建的方法。</p> <h2 id=\"%E8%84%9A%E6%89%8B%E6%9E%B6%E9%A1%B9%E7%9B%AE%E5%BF%85%E5%A4%87%E7%9A%84%E5%9F%BA%E7%A1%80%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84\"><a class=\"header-anchor\" href=\"#%E8%84%9A%E6%89%8B%E6%9E%B6%E9%A1%B9%E7%9B%AE%E5%BF%85%E5%A4%87%E7%9A%84%E5%9F%BA%E7%A1%80%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84\">#</a> 脚手架项目必备的基础目录结构</h2> <pre class=\"language-text\"><code class=\"language-text\">├── template            # 模板目录结构\n│   ├── san.config.js   # cli配置项\n└── meta.js/meta.json   # 模板创建 prompt 交互问题</code></pre> <p>San CLI 使用 handlerbars 渲染 template 目录，所以脚手架请使用 handlerbars 语法。</p> <h2 id=\"meta.js%2Fmeta.json\"><a class=\"header-anchor\" href=\"#meta.js%2Fmeta.json\">#</a> meta.js/meta.json</h2> <p>回答的内容会作为模板数据来处理文件</p> <h5 id=\"meta.js\"><a class=\"header-anchor\" href=\"#meta.js\">#</a> meta.js</h5> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token comment\">// meta 配置项</span>\nmodule<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// 生成器会将 handlerbars 语法填上 prompts 内容</span>\n    <span class=\"token comment\">// 扩展 handlerbars helper</span>\n    helpers<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token comment\">// 过滤满足 value 跳转的目录 key，不做生成处理</span>\n    filters<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'mock/**'</span><span class=\"token operator\">:</span> <span class=\"token string\">'useMock'</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token comment\">// 脚手架交互问答</span>\n    prompts<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        name<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            type<span class=\"token operator\">:</span> <span class=\"token string\">'string'</span><span class=\"token punctuation\">,</span>\n            required<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'项目名称'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token comment\">// 默认 &#123;&#123;name}} 会被替换成init 命令的目录名</span>\n            <span class=\"token comment\">// 类似还有username、email 等 git 配置</span>\n            <span class=\"token keyword\">default</span><span class=\"token operator\">:</span> <span class=\"token string\">'&#123;&#123;name}}'</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        useMock<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            type<span class=\"token operator\">:</span> <span class=\"token string\">'confirm'</span><span class=\"token punctuation\">,</span>\n            message<span class=\"token operator\">:</span> <span class=\"token string\">'使用 mock 数据？'</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <h5 id=\"meta.json\"><a class=\"header-anchor\" href=\"#meta.json\">#</a> meta.json</h5> <pre class=\"language-json\"><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// meta 配置项</span>\n<span class=\"token punctuation\">}</span></code></pre> <h5 id=\"%E9%85%8D%E7%BD%AE%E9%A1%B9\"><a class=\"header-anchor\" href=\"#%E9%85%8D%E7%BD%AE%E9%A1%B9\">#</a> 配置项</h5> <p><code>helpers</code> 自定义 handlerbars 的块级 helper，cli 会调用 registerHelper，处理这段自定义</p> <p><strong>例如</strong></p> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token comment\">// meta.js</span>\n<span class=\"token punctuation\">{</span>\n    helpers<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token function-variable function\">if_or</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">v1<span class=\"token punctuation\">,</span> v2<span class=\"token punctuation\">,</span> options</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>v1 <span class=\"token operator\">||</span> v2<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n                <span class=\"token keyword\">return</span> options<span class=\"token punctuation\">.</span><span class=\"token function\">fn</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n            <span class=\"token keyword\">return</span> options<span class=\"token punctuation\">.</span><span class=\"token function\">inverse</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre> <p><code>filters</code> 过滤满足 value 跳转的目录 key，不做渲染处理</p> <p><strong>例如</strong></p> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token comment\">// meta.js</span>\n<span class=\"token punctuation\">{</span>\n    filters<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'mock/**'</span><span class=\"token operator\">:</span> <span class=\"token string\">'tplEngine!==\"smarty\"'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'template/**'</span><span class=\"token operator\">:</span> <span class=\"token string\">'tplEngine!==\"smarty\"'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'template/demo-store/**'</span><span class=\"token operator\">:</span> <span class=\"token string\">'!demo || (demo &amp;&amp; demoType!==\"store\")'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'template/demo/**'</span><span class=\"token operator\">:</span> <span class=\"token string\">'!demo || (demo &amp;&amp; demoType!==\"normal\")'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'src/pages/demo-store/**'</span><span class=\"token operator\">:</span> <span class=\"token string\">'!demo || (demo &amp;&amp; demoType!==\"store\")'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'src/pages/demo/**'</span><span class=\"token operator\">:</span> <span class=\"token string\">'!demo || (demo &amp;&amp; demoType!==\"normal\")'</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre> <p><code>prompts</code> 交互问答，key 为问题名称（string 类型），value 为问题配置项（Object 类型）</p> <p><strong>例如</strong></p> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token comment\">// meta.js</span>\n<span class=\"token punctuation\">{</span>\n    prompts<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        name<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            type<span class=\"token operator\">:</span> <span class=\"token string\">'string'</span><span class=\"token punctuation\">,</span>\n            required<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'项目名称'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token keyword\">default</span><span class=\"token operator\">:</span> <span class=\"token string\">'&#123;&#123;name}}'</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        tplEngine<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            type<span class=\"token operator\">:</span> <span class=\"token string\">'select'</span><span class=\"token punctuation\">,</span>\n            message<span class=\"token operator\">:</span> <span class=\"token string\">'选择模板引擎'</span><span class=\"token punctuation\">,</span>\n            choices<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n                <span class=\"token punctuation\">{</span>\n                    title<span class=\"token operator\">:</span> <span class=\"token string\">'Smarty（百度内部）'</span><span class=\"token punctuation\">,</span>\n                    value<span class=\"token operator\">:</span> <span class=\"token string\">'smarty'</span>\n                <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n                <span class=\"token punctuation\">{</span>\n                    title<span class=\"token operator\">:</span> <span class=\"token string\">'纯 HTML'</span><span class=\"token punctuation\">,</span>\n                    value<span class=\"token operator\">:</span> <span class=\"token string\">'html'</span>\n                <span class=\"token punctuation\">}</span>\n            <span class=\"token punctuation\">]</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        demo<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            type<span class=\"token operator\">:</span> <span class=\"token string\">'confirm'</span><span class=\"token punctuation\">,</span>\n            message<span class=\"token operator\">:</span> <span class=\"token string\">'安装demo示例？'</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        demoType<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            when<span class=\"token operator\">:</span> <span class=\"token string\">'demo'</span><span class=\"token punctuation\">,</span>\n            type<span class=\"token operator\">:</span> <span class=\"token string\">'select'</span><span class=\"token punctuation\">,</span>\n            message<span class=\"token operator\">:</span> <span class=\"token string\">'选择示例代码类型：'</span><span class=\"token punctuation\">,</span>\n            choices<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n                <span class=\"token punctuation\">{</span>\n                    title<span class=\"token operator\">:</span> <span class=\"token string\">'san-store (推荐)'</span><span class=\"token punctuation\">,</span>\n                    value<span class=\"token operator\">:</span> <span class=\"token string\">'store'</span>\n                <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n                <span class=\"token punctuation\">{</span>\n                    title<span class=\"token operator\">:</span> <span class=\"token string\">'normal'</span><span class=\"token punctuation\">,</span>\n                    value<span class=\"token operator\">:</span> <span class=\"token string\">'normal'</span>\n                <span class=\"token punctuation\">}</span>\n            <span class=\"token punctuation\">]</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre> <h2 id=\"san.config.js\"><a class=\"header-anchor\" href=\"#san.config.js\">#</a> san.config.js</h2> <p>san.config.js 是 San-CLI 的配置文件，配置格式<a href=\"/config.md\">参考</a></p> <h2 id=\"%E7%9B%B8%E5%85%B3-dot-%E6%96%87%E4%BB%B6\"><a class=\"header-anchor\" href=\"#%E7%9B%B8%E5%85%B3-dot-%E6%96%87%E4%BB%B6\">#</a> 相关 dot 文件</h2> <p>模板中的<code>_xxx</code>文件会在安装之后，转换成<code>.xxx</code>文件，例如<code>template/_babelrc</code>经过<code>san init</code>之后，会变成<code>.babelrc</code>。</p> <p>常见 dot 文件：</p> <ul> <li>babelrc：babel 配置</li> <li>editorconfig：常见规范类的配置</li> <li>npmrc：npm 配置</li> <li>prettierrc：格式化插件</li> <li>gitignore：git 忽略</li> <li>fecsrc：fecs 格式化配置</li> </ul> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 30:
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
        "title": "脚手架项目必备的基础目录结构",
        "hash": "%E8%84%9A%E6%89%8B%E6%9E%B6%E9%A1%B9%E7%9B%AE%E5%BF%85%E5%A4%87%E7%9A%84%E5%9F%BA%E7%A1%80%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84"
      }, {
        "level": 2,
        "title": "meta.js/meta.json",
        "hash": "meta.js%2Fmeta.json"
      }, {
        "level": 2,
        "title": "san.config.js",
        "hash": "san.config.js"
      }, {
        "level": 2,
        "title": "相关 dot 文件",
        "hash": "%E7%9B%B8%E5%85%B3-dot-%E6%96%87%E4%BB%B6"
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        var injectStyles = [];

        var template = __webpack_require__(131);
        
        var script = __webpack_require__(30).default;
        module.exports = __webpack_require__(30);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

/******/ });