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
/******/ 		4: 0,
/******/ 		54: 0
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
/******/ 	deferredModules.push([62,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 114:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE\"><a class=\"header-anchor\" href=\"#%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE\">#</a> 高级配置</h1> <p>这篇文章介绍一些高级配置的配置项，这些配置项虽然在日常项目中配置的较少，但是对于项目来说这些配置项往往是可以解决日常常见的问题。</p> <h2 id=\"%E4%BD%BF%E7%94%A8%E6%8B%86%E5%8C%85\"><a class=\"header-anchor\" href=\"#%E4%BD%BF%E7%94%A8%E6%8B%86%E5%8C%85\">#</a> 使用拆包</h2> <p>在项目中，不合理的 Bundle 是致命的。在 Webpack 中，总共提供了三种方式来实现代码拆分（Code Splitting）：</p> <ul> <li>entry 配置：通过多个 entry 文件来实现；</li> <li>动态加载（按需加载）：通过写代码时主动使用<code>import()</code>或者<code>require.ensure</code>来动态加载；</li> <li>抽取公共代码：使用<code>splitChunks</code>配置来抽取公共代码。</li> </ul> <p>在 San CLI 中可以通过<code>splitChunks</code>抽取公共代码。<code>splitChunks</code>的配置项跟 Webpack 中 <code>optimization</code>的<code>splitChunks</code>是完全相同的。例如下面的配置：</p> <pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// ...</span>\n    splitChunks<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        cacheGroups<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            vendors<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n                name<span class=\"token operator\">:</span> <span class=\"token string\">'vendors'</span><span class=\"token punctuation\">,</span>\n                test<span class=\"token operator\">:</span> <span class=\"token regex\"><span class=\"token regex-delimiter\">/</span><span class=\"token regex-source language-regex\">[\\\\/]node_modules(?!\\/@baidu)[\\\\/]</span><span class=\"token regex-delimiter\">/</span></span><span class=\"token punctuation\">,</span>\n                <span class=\"token comment\">// minChunks: 1,</span>\n                priority<span class=\"token operator\">:</span> <span class=\"token operator\">-</span><span class=\"token number\">10</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            common<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n                name<span class=\"token operator\">:</span> <span class=\"token string\">'common'</span><span class=\"token punctuation\">,</span>\n                test<span class=\"token operator\">:</span> <span class=\"token regex\"><span class=\"token regex-delimiter\">/</span><span class=\"token regex-source language-regex\">([\\/]src\\/components(-open)?|[\\\\/]node_modules\\/@baidu\\/nano)</span><span class=\"token regex-delimiter\">/</span></span><span class=\"token punctuation\">,</span>\n                priority<span class=\"token operator\">:</span> <span class=\"token operator\">-</span><span class=\"token number\">20</span><span class=\"token punctuation\">,</span>\n                minChunks<span class=\"token operator\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n                chunks<span class=\"token operator\">:</span> <span class=\"token string\">'initial'</span>\n            <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <blockquote> <p>同时 San CLI 内置了 <a href=\"https://github.com/NMFR/optimize-css-assets-webpack-plugin\">optimize-css-assets-webpack-plugin</a>，也就是说支持使用 splitChunks 来拆分 CSS 文件。</p> </blockquote> <h2 id=\"%E4%BB%A3%E7%A0%81%E5%8E%8B%E7%BC%A9%E5%92%8C%E4%BC%98%E5%8C%96\"><a class=\"header-anchor\" href=\"#%E4%BB%A3%E7%A0%81%E5%8E%8B%E7%BC%A9%E5%92%8C%E4%BC%98%E5%8C%96\">#</a> 代码压缩和优化</h2> <p>在项目中可以对产出的代码中压缩和优化，在 San CLI 的 JS 使用了 terserjs 和 CSS 使用 cssnano。支持默认 San CLI 的配置是：</p> <p>默认 cssnano 配置：</p> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token punctuation\">{</span>\n    mergeLonghand<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    cssDeclarationSorter<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    normalizeUrl<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    discardUnused<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    <span class=\"token comment\">// 避免 cssnano 重新计算 z-index</span>\n    zindex<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    reduceIdents<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    safe<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token comment\">// cssnano 集成了autoprefixer的功能</span>\n    <span class=\"token comment\">// 会使用到autoprefixer进行无关前缀的清理</span>\n    <span class=\"token comment\">// 关闭autoprefixer功能</span>\n    <span class=\"token comment\">// 使用postcss的autoprefixer功能</span>\n    autoprefixer<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    discardComments<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        removeAll<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre> <p>在 San CLI 的配置文件中，所有跟 CSS 的相关的配置是放在了<code>css</code>配置项中，所以对 cssnano 的修改也是在<code>css.cssnanoOptions</code>中进行修改：</p> <pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// ...</span>\n    css<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        cssnanoOptions<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token comment\">// 自定义的配置</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <p>默认 terserjs 配置：</p> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token punctuation\">{</span>\n    comments<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    compress<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        unused<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n        <span class=\"token comment\">// 删掉 debugger</span>\n        drop_debugger<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// eslint-disable-line</span>\n        <span class=\"token comment\">// 移除 console</span>\n        drop_console<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// eslint-disable-line</span>\n        <span class=\"token comment\">// 移除无用的代码</span>\n        dead_code<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span> <span class=\"token comment\">// eslint-disable-line</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    ie8<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    safari10<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    warnings<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    toplevel<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span>\n<span class=\"token punctuation\">}</span></code></pre> <p>San CLI 的配置文件中使用<code>terserOptions</code>可以对默认的配置进行修改：</p> <pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// ...</span>\n    terserOptions<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\">// 自定义的配置</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <h3 id=\"html-minifier-%E9%85%8D%E7%BD%AE\"><a class=\"header-anchor\" href=\"#html-minifier-%E9%85%8D%E7%BD%AE\">#</a> html-minifier 配置</h3> <p>除此之外，San CLI 中使用的 html-webpack-plugin 的配置项中可以使用 html-minifier，在 San CLi 中默认的配置如下：</p> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token punctuation\">{</span>\n    removeComments<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    collapseWhitespace<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    removeAttributeQuotes<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    collapseBooleanAttributes<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    removeScriptTypeAttributes<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    minifyCSS<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token comment\">// more options:</span>\n    <span class=\"token comment\">// https://github.com/kangax/html-minifier#options-quick-reference</span>\n<span class=\"token punctuation\">}</span></code></pre> <p>使用者可以在<code>pages</code>中的<code>html-minifier</code>进行配置，具体配置可以<a href=\"https://github.com/DanielRuf/html-minifier-terser#options-quick-reference\">参考这里</a>。</p> <h2 id=\"%E7%BC%96%E8%AF%91-npm-%E5%8C%85%E4%B8%AD%E7%9A%84-es6-%E8%AF%AD%E6%B3%95\"><a class=\"header-anchor\" href=\"#%E7%BC%96%E8%AF%91-npm-%E5%8C%85%E4%B8%AD%E7%9A%84-es6-%E8%AF%AD%E6%B3%95\">#</a> 编译 NPM 包中的 ES6 语法</h2> <p>在项目中，我们推荐使用 ESM 语法的模块，ESM 语法的模块在使用的同时，可以使用统一 的 Webpack 配置，并且基于 Tree-shaking，打出的包体积更加合理。但是在 San CLI 中，默认是不会编译 NPM 包中的 ES6 语法的代码，这时候依赖的 NPM 包中使用 ES6 语法，需要使用<code>transpileDependencies</code>。</p> <p><code>transpileDependencies</code>可接受的类型为<code>Array</code>、<code>String</code>或者<code>RegExp</code>。例如我们项目依赖<code>@baidu/nano</code>这个 UI 基础库，则可以设置配置如下：</p> <pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// ...</span>\n    transpileDependencies<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'@baidu/nano'</span><span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <p>这样<code>nano</code>这个模块就会被 Webpack 编译了。</p> <h2 id=\"%E4%BD%BF%E7%94%A8-chainwebpack-%E5%92%8C-configwebpack-%E8%BF%9B%E8%A1%8C%E4%B8%AA%E6%80%A7%E5%8C%96%E9%85%8D%E7%BD%AE\"><a class=\"header-anchor\" href=\"#%E4%BD%BF%E7%94%A8-chainwebpack-%E5%92%8C-configwebpack-%E8%BF%9B%E8%A1%8C%E4%B8%AA%E6%80%A7%E5%8C%96%E9%85%8D%E7%BD%AE\">#</a> 使用 chainWebpack 和 configWebpack 进行个性化配置</h2> <p>如果要更加自主的进行个性化的配置，那么可以在 San CLI 配置文件中的 chainWebpack 和 configWebpack 进行修改，<code>chainWebpack</code> 接受的参数是 <a href=\"https://github.com/neutrinojs/webpack-chain\">webpack-chain</a> 语法的配置，<code>configWebpack</code>接受的参数是 Webpack 的配置对象。</p> <p>例如：</p> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token comment\">// 静态文件域名</span>\n<span class=\"token keyword\">const</span> <span class=\"token constant\">CDN</span> <span class=\"token operator\">=</span> <span class=\"token string\">'https://s.bdstatic.com/'</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\">// 生产环境下的静态目录</span>\n<span class=\"token keyword\">const</span> <span class=\"token constant\">STATIC_PRO</span> <span class=\"token operator\">=</span> <span class=\"token string\">'static/pro'</span><span class=\"token punctuation\">;</span>\n\nmodule<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function-variable function\">chainWebpack</span><span class=\"token operator\">:</span> <span class=\"token parameter\">config</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\">// 这里可以用来扩展 webpack 的配置，使用的是 webpack-chain 语法</span>\n        config<span class=\"token punctuation\">.</span>module\n            <span class=\"token punctuation\">.</span><span class=\"token function\">rule</span><span class=\"token punctuation\">(</span><span class=\"token string\">'img'</span><span class=\"token punctuation\">)</span>\n            <span class=\"token punctuation\">.</span><span class=\"token function\">test</span><span class=\"token punctuation\">(</span><span class=\"token regex\"><span class=\"token regex-delimiter\">/</span><span class=\"token regex-source language-regex\">\\.(png|jpe?g|gif)(\\?.*)?$</span><span class=\"token regex-delimiter\">/</span></span><span class=\"token punctuation\">)</span>\n            <span class=\"token punctuation\">.</span><span class=\"token function\">use</span><span class=\"token punctuation\">(</span><span class=\"token string\">'url-loader'</span><span class=\"token punctuation\">)</span>\n            <span class=\"token punctuation\">.</span><span class=\"token function\">loader</span><span class=\"token punctuation\">(</span>require<span class=\"token punctuation\">.</span><span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span><span class=\"token string\">'url-loader'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span>\n            <span class=\"token punctuation\">.</span><span class=\"token function\">options</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n                limit<span class=\"token operator\">:</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">,</span>\n                name<span class=\"token operator\">:</span> <span class=\"token constant\">STATIC_PRO</span> <span class=\"token operator\">+</span> <span class=\"token string\">'/img/[name].[hash:7].[ext]'</span><span class=\"token punctuation\">,</span>\n                publicPath<span class=\"token operator\">:</span> __isProduction <span class=\"token operator\">?</span> <span class=\"token constant\">CDN</span> <span class=\"token operator\">:</span> <span class=\"token string\">''</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n        config<span class=\"token punctuation\">.</span>module\n            <span class=\"token punctuation\">.</span><span class=\"token function\">rule</span><span class=\"token punctuation\">(</span><span class=\"token string\">'svg'</span><span class=\"token punctuation\">)</span>\n            <span class=\"token punctuation\">.</span><span class=\"token function\">use</span><span class=\"token punctuation\">(</span><span class=\"token string\">'svg-url-loader'</span><span class=\"token punctuation\">)</span>\n            <span class=\"token punctuation\">.</span><span class=\"token function\">loader</span><span class=\"token punctuation\">(</span>require<span class=\"token punctuation\">.</span><span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span><span class=\"token string\">'svg-url-loader'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span>\n            <span class=\"token punctuation\">.</span><span class=\"token function\">options</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n                limit<span class=\"token operator\">:</span> <span class=\"token number\">2500</span><span class=\"token punctuation\">,</span>\n                name<span class=\"token operator\">:</span> <span class=\"token constant\">STATIC_PRO</span> <span class=\"token operator\">+</span> <span class=\"token string\">'/svg/[name].[hash:7].[ext]'</span><span class=\"token punctuation\">,</span>\n                publicPath<span class=\"token operator\">:</span> __isProduction <span class=\"token operator\">?</span> <span class=\"token constant\">CDN</span> <span class=\"token operator\">:</span> <span class=\"token string\">''</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <h2 id=\"%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E6%B7%BB%E5%8A%A0-service-%E6%8F%92%E4%BB%B6\"><a class=\"header-anchor\" href=\"#%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E6%B7%BB%E5%8A%A0-service-%E6%8F%92%E4%BB%B6\">#</a> 在配置文件中添加 Service 插件</h2> <p><code>plugins</code> 增加自定义插件，例如：</p> <pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    plugins<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n            id<span class=\"token operator\">:</span> <span class=\"token string\">'built-in:plugin-progress'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token function\">apply</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">api<span class=\"token punctuation\">,</span> projectOptions<span class=\"token punctuation\">,</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n                api<span class=\"token punctuation\">.</span><span class=\"token function\">chainWebpack</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">webpackConfig</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n                    options<span class=\"token punctuation\">.</span>color <span class=\"token operator\">=</span> <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'san-cli-utils/randomColor'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>color<span class=\"token punctuation\">;</span>\n                    webpackConfig<span class=\"token punctuation\">.</span><span class=\"token function\">plugin</span><span class=\"token punctuation\">(</span><span class=\"token string\">'progress'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">use</span><span class=\"token punctuation\">(</span><span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'webpackbar'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">[</span>options<span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'san-plugin.js'</span>\n    <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <h2 id=\"%E6%B7%BB%E5%8A%A0-dev-server-%E4%B8%AD%E9%97%B4%E4%BB%B6\"><a class=\"header-anchor\" href=\"#%E6%B7%BB%E5%8A%A0-dev-server-%E4%B8%AD%E9%97%B4%E4%BB%B6\">#</a> 添加 dev server 中间件</h2> <p>添加 dev server 中间件，需要使用 Service 的插件的<code>addDevServerMiddleware</code>方法，例如：</p> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\">const</span> plugins <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n        id<span class=\"token operator\">:</span> <span class=\"token string\">'middleware1'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token function\">apply</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">api</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token comment\">// 使用 api 配置dev server 中间件</span>\n            api<span class=\"token punctuation\">.</span><span class=\"token function\">middleware</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span>\n                <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'hulk-mock-server'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n                    <span class=\"token comment\">// 配置contentBase</span>\n                    contentBase<span class=\"token operator\">:</span> path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'./'</span> <span class=\"token operator\">+</span> outputDir <span class=\"token operator\">+</span> <span class=\"token string\">'/'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n                    <span class=\"token comment\">// 配置 mock 路径</span>\n                    rootDir<span class=\"token operator\">:</span> path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'./mock'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n                    <span class=\"token comment\">// 配置解析器相关内容</span>\n                    processors<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n                        <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">smarty?router=/template/*&amp;baseDir=</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span>\n                            __dirname<span class=\"token punctuation\">,</span>\n                            <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">./</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>outputDir<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">/template</span><span class=\"token template-punctuation string\">`</span></span>\n                        <span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">&amp;dataDir=</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'./mock/_data_'</span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span>\n                    <span class=\"token punctuation\">]</span> <span class=\"token comment\">// eslint-disable-line</span>\n                <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n            <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\nmodule<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    plugins\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <div class=\"warning\"> <p>这里特殊说明下，<code>middleware</code>传入的是一个 function，并且<strong>返回</strong>一个中间件。</p> </div> <h2 id=\"%E6%9B%B4%E5%A4%9A\"><a class=\"header-anchor\" href=\"#%E6%9B%B4%E5%A4%9A\">#</a> 更多</h2> <p>如果想了解更多 Service 插件相关内容，那么请浏览<a href=\"./srv-plugin.md\">这个文档</a></p> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 21:
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
        "title": "使用拆包",
        "hash": "%E4%BD%BF%E7%94%A8%E6%8B%86%E5%8C%85"
      }, {
        "level": 2,
        "title": "代码压缩和优化",
        "hash": "%E4%BB%A3%E7%A0%81%E5%8E%8B%E7%BC%A9%E5%92%8C%E4%BC%98%E5%8C%96",
        "children": [{
          "level": 3,
          "title": "html-minifier 配置",
          "hash": "html-minifier-%E9%85%8D%E7%BD%AE"
        }]
      }, {
        "level": 2,
        "title": "编译 NPM 包中的 ES6 语法",
        "hash": "%E7%BC%96%E8%AF%91-npm-%E5%8C%85%E4%B8%AD%E7%9A%84-es6-%E8%AF%AD%E6%B3%95"
      }, {
        "level": 2,
        "title": "使用 chainWebpack 和 configWebpack 进行个性化配置",
        "hash": "%E4%BD%BF%E7%94%A8-chainwebpack-%E5%92%8C-configwebpack-%E8%BF%9B%E8%A1%8C%E4%B8%AA%E6%80%A7%E5%8C%96%E9%85%8D%E7%BD%AE"
      }, {
        "level": 2,
        "title": "在配置文件中添加 Service 插件",
        "hash": "%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E6%B7%BB%E5%8A%A0-service-%E6%8F%92%E4%BB%B6"
      }, {
        "level": 2,
        "title": "添加 dev server 中间件",
        "hash": "%E6%B7%BB%E5%8A%A0-dev-server-%E4%B8%AD%E9%97%B4%E4%BB%B6"
      }, {
        "level": 2,
        "title": "更多",
        "hash": "%E6%9B%B4%E5%A4%9A"
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(114);
        
        var script = __webpack_require__(21).default;
        module.exports = __webpack_require__(21);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

/******/ });