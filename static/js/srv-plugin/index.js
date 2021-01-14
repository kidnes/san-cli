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
/******/ 		27: 0,
/******/ 		72: 0
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
/******/ 	deferredModules.push([79,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 138:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA-serivce-%E6%8F%92%E4%BB%B6\"><a class=\"header-anchor\" href=\"#%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA-serivce-%E6%8F%92%E4%BB%B6\">#</a> 编写一个 Serivce 插件</h1> <p>San CLI 在实现可扩展 Webpack 配置的设计上，借鉴了 Vue CLI 的 Service 机制。Service 主要是对 Webpack 的配置进行统一处理和封装，当 Service 实例化之时，会依次将 Service 的插件进行注册执行，对 Webpack 的配置进行修改。</p> <p>一个 Service 插件的定义结构如下：</p> <pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// 插件 id</span>\n    id<span class=\"token operator\">:</span> <span class=\"token string\">'plugin-id'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token comment\">// 插件的入口函数</span>\n    <span class=\"token function\">apply</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">api<span class=\"token punctuation\">,</span> projectOptions<span class=\"token punctuation\">,</span> options</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        api<span class=\"token punctuation\">.</span><span class=\"token function\">chainWebpack</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">webpackConfig</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n            console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>projectOptions<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            webpackConfig<span class=\"token punctuation\">.</span><span class=\"token function\">entry</span><span class=\"token punctuation\">(</span><span class=\"token comment\">/*...*/</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token comment\">// gui 预留接口</span>\n    <span class=\"token function\">ui</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <h2 id=\"%E6%8F%92%E4%BB%B6%E7%9A%84apply%E5%87%BD%E6%95%B0\"><a class=\"header-anchor\" href=\"#%E6%8F%92%E4%BB%B6%E7%9A%84apply%E5%87%BD%E6%95%B0\">#</a> 插件的<code>apply</code>函数</h2> <p>插件的<code>apply</code>函数接受三个参数：</p> <ol> <li><code>api</code>是 PluginAPI 实例，会提供一些 api（下面详细介绍）；</li> <li><code>projectOptions</code>是 san.config.js 处理后的项目配置；</li> <li><code>options</code> 是插件自己的参数，使用插件时：</li> </ol> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token comment\">// san.config.js</span>\nmodule<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    plugins<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">[</span><span class=\"token function\">requie</span><span class=\"token punctuation\">(</span><span class=\"token string\">'plugin'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\">// 或者使用 service addPlugin</span>\nserviceInstance<span class=\"token punctuation\">.</span><span class=\"token function\">addPlugin</span><span class=\"token punctuation\">(</span><span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'plugin'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> options<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre> <blockquote> <p>在插件中，可以直接使用<code>__isProduction</code>变量，代表是否为<code>mode==='production'</code>，即生产环境打包。</p> </blockquote> <h2 id=\"%E5%9C%A8%E6%8F%92%E4%BB%B6%E5%86%85%E4%BF%AE%E6%94%B9-webpack-%E9%85%8D%E7%BD%AE\"><a class=\"header-anchor\" href=\"#%E5%9C%A8%E6%8F%92%E4%BB%B6%E5%86%85%E4%BF%AE%E6%94%B9-webpack-%E9%85%8D%E7%BD%AE\">#</a> 在插件内修改 Webpack 配置</h2> <p>在插件内有两种方法可以修改 Webpack 配置：</p> <ol> <li>通过<code>api.chainWebpack</code>获取<a href=\"https://github.com/neutrinojs/webpack-chain\">webpack-chain</a>链式调用的对象，然后进行 Webpack 配置；</li> <li>通过<code>api.configWebpack</code>获取对象形式的 Webpack Config。</li> </ol> <p>例如：</p> <pre class=\"language-js\"><code class=\"language-js\">api<span class=\"token punctuation\">.</span><span class=\"token function\">chainWebpack</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">webpackChain</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>projectOptions<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    webpackChain<span class=\"token punctuation\">.</span><span class=\"token function\">entry</span><span class=\"token punctuation\">(</span><span class=\"token comment\">/*...*/</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\napi<span class=\"token punctuation\">.</span><span class=\"token function\">configWebpack</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">webpackConfig</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>projectOptions<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>webpackConfig<span class=\"token punctuation\">.</span>entry<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre> <h2 id=\"%E6%8F%92%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8\"><a class=\"header-anchor\" href=\"#%E6%8F%92%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8\">#</a> 插件的使用</h2> <p>插件可以发布到 npm 上，命名规范建议使用<code>san-cli-plugin-*</code>来命名。不发布到 npm 中也可以本地使用。Service 插件的使用有两种配置方法：</p> <ol> <li>在<code>san.config.js</code>的 plugins 字段添加对应的路径或者直接<code>require</code>进来；</li> <li>在项目的<code>package.json</code>的<code>san.plugins</code>中添加路径或者 npm 插件包名</li> </ol> <p>san.config.js 中举例：</p> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token comment\">// san.config.js 文件</span>\n\n<span class=\"token keyword\">const</span> plugins <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token comment\">// 这个是直接手写的 plugin</span>\n    <span class=\"token punctuation\">{</span>\n        id<span class=\"token operator\">:</span> <span class=\"token string\">'smarty-middleware'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token function\">apply</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">api</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            api<span class=\"token punctuation\">.</span><span class=\"token function\">middleware</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span>\n                <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'hulk-mock-server'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n                    contentBase<span class=\"token operator\">:</span> path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'./'</span> <span class=\"token operator\">+</span> outputDir <span class=\"token operator\">+</span> <span class=\"token string\">'/'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n                    rootDir<span class=\"token operator\">:</span> path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'./mock'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n                    processors<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n                        <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">smarty?router=/template/*&amp;baseDir=</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span>\n                            __dirname<span class=\"token punctuation\">,</span>\n                            <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">./</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>outputDir<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">/template</span><span class=\"token template-punctuation string\">`</span></span>\n                        <span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">&amp;dataDir=</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'./mock/_data_'</span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span>\n                    <span class=\"token punctuation\">]</span> <span class=\"token comment\">// eslint-disable-line</span>\n                <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n            <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token comment\">// require进来</span>\n    <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'san-cli-plugin-x'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token comment\">// 这个是相对路径</span>\n    <span class=\"token string\">'./san-plugin'</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\nmodule<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">//...</span>\n    <span class=\"token comment\">// 添加插件配置</span>\n    plugins\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <h2 id=\"service-%E6%8F%92%E4%BB%B6-api\"><a class=\"header-anchor\" href=\"#service-%E6%8F%92%E4%BB%B6-api\">#</a> Service 插件 API</h2> <p>属性：</p> <ul> <li><code>.id</code>：插件 id；</li> <li><code>.service</code>：service 实例；</li> <li><code>.log/logger</code>：日志对象，包含： <ul> <li>debug</li> <li>done</li> <li>error</li> <li>warn</li> <li>log</li> <li>fatal</li> <li>trace</li> <li>time</li> <li>timeEnd</li> <li>textColor</li> <li>bgColor 等；</li> </ul> </li> <li><code>.version</code>：San CLI 版本号。</li> </ul> <p>常见方法包括：</p> <ul> <li><code>.isProd()</code>：是不是生产环境打包，<code>process.NODD_ENV==='production'</code>；</li> <li><code>.configWebpack(fn)</code>：将<code>fn</code> 压入 webpackConfig 回调栈，<code>fn</code>会在出栈执行时接收 webpackConfig，用于修改 webpack config；</li> <li><code>.chainWebpack(fn)</code>：将<code>fn</code> 压入 webpackChain 回调栈，<code>fn</code>会在出栈执行时接收 chainableConfig，用于 webpack-chain 语法修改 webpack config；</li> <li><code>.resolve(p)</code>：获取 CLI 执行目录的完整路径；</li> <li><code>.getWebpackChainConfig()</code>：获取 webpack-chain 格式的 config；</li> <li><code>.getWebpackConfig([chainableConfig])</code>：将传入的 webpack-chain 格式 config 处理成 webpackConfig 返回；</li> <li><code>.getCwd()</code>：获取 CLI 的执行目录；</li> <li><code>.getProjectOption()</code>：获取项目的配置内容；</li> <li><code>.getPkg()</code>：获取当前项目<code>package.json</code>内容；</li> <li><code>.addPlugin(plugin, options)</code>：添加插件；</li> <li><code>.middleware()</code>：添加 dev-server 中间件，<strong>这里注意：中间件需要使用 factory 函数返回</strong></li> </ul> <p><strong><code>.middleware()</code>示例：</strong></p> <pre class=\"language-js\"><code class=\"language-js\">api<span class=\"token punctuation\">.</span><span class=\"token function\">middleware</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span>\n    <span class=\"token comment\">// return 一个 Expressjs 中间件</span>\n    <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'hulk-mock-server'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        contentBase<span class=\"token operator\">:</span> path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'./'</span> <span class=\"token operator\">+</span> outputDir <span class=\"token operator\">+</span> <span class=\"token string\">'/'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        rootDir<span class=\"token operator\">:</span> path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'./mock'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        processors<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n            <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">smarty?router=/template/*&amp;baseDir=</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">./</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>outputDir<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">/template</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">&amp;dataDir=</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span>\n                __dirname<span class=\"token punctuation\">,</span>\n                <span class=\"token string\">'./mock/_data_'</span>\n            <span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span>\n        <span class=\"token punctuation\">]</span> <span class=\"token comment\">// eslint-disable-line</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre> <blockquote> <p>详细的使用方法可以查看<code>san-cli-plugin-progress</code>的代码。</p> </blockquote> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 38:
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
        "title": "插件的apply函数",
        "hash": "%E6%8F%92%E4%BB%B6%E7%9A%84apply%E5%87%BD%E6%95%B0"
      }, {
        "level": 2,
        "title": "在插件内修改 Webpack 配置",
        "hash": "%E5%9C%A8%E6%8F%92%E4%BB%B6%E5%86%85%E4%BF%AE%E6%94%B9-webpack-%E9%85%8D%E7%BD%AE"
      }, {
        "level": 2,
        "title": "插件的使用",
        "hash": "%E6%8F%92%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8"
      }, {
        "level": 2,
        "title": "Service 插件 API",
        "hash": "service-%E6%8F%92%E4%BB%B6-api"
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        var injectStyles = [];

        var template = __webpack_require__(138);
        
        var script = __webpack_require__(38).default;
        module.exports = __webpack_require__(38);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

/******/ });