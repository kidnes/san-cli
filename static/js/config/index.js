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
/******/ 		11: 0,
/******/ 		57: 0
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
/******/ 	deferredModules.push([68,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 126:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"san-cli-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6\"><a class=\"header-anchor\" href=\"#san-cli-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6\">#</a> San CLI 配置文件</h1> <p>San CLI 的配置文件为<code>san.config.js</code>，该文件放在项目的根目录下，当执行 San CLI 命令的时候，CLI 会自动读取 san.config.js 的内容，当然我们也是支持传入 Config 文件，当使用 CLI 的时候，使用<code>--config</code>传入自定义的 Config 文件路径即可。</p> <h2 id=\"%E9%BB%98%E8%AE%A4%E9%85%8D%E7%BD%AE%E5%A6%82%E4%B8%8B\"><a class=\"header-anchor\" href=\"#%E9%BB%98%E8%AE%A4%E9%85%8D%E7%BD%AE%E5%A6%82%E4%B8%8B\">#</a> 默认配置如下</h2> <p><code>san.config.js</code>的内容是一个 Node.js 的 CommandJS 格式，默认配置是：</p> <pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    polyfill<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    pages<span class=\"token operator\">:</span> <span class=\"token keyword\">undefined</span><span class=\"token punctuation\">,</span>\n    outputDir<span class=\"token operator\">:</span> <span class=\"token string\">'output'</span><span class=\"token punctuation\">,</span>\n    assetsDir<span class=\"token operator\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    publicPath<span class=\"token operator\">:</span> <span class=\"token string\">'/'</span><span class=\"token punctuation\">,</span>\n    filenameHashing<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    devServer<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        watchContentBase<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        hot<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n        hotOnly<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        logLevel<span class=\"token operator\">:</span> <span class=\"token string\">'silent'</span><span class=\"token punctuation\">,</span>\n        clientLogLevel<span class=\"token operator\">:</span> <span class=\"token string\">'silent'</span><span class=\"token punctuation\">,</span>\n        overlay<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>warnings<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span> errors<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        stats<span class=\"token operator\">:</span> <span class=\"token string\">'errors-only'</span><span class=\"token punctuation\">,</span>\n        inline<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        lazy<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        index<span class=\"token operator\">:</span> <span class=\"token string\">'index.html'</span><span class=\"token punctuation\">,</span>\n        watchOptions<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            aggregateTimeout<span class=\"token operator\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span>\n            ignored<span class=\"token operator\">:</span> <span class=\"token regex\"><span class=\"token regex-delimiter\">/</span><span class=\"token regex-source language-regex\">node_modules</span><span class=\"token regex-delimiter\">/</span></span><span class=\"token punctuation\">,</span>\n            poll<span class=\"token operator\">:</span> <span class=\"token number\">100</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        disableHostCheck<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n        compress<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        host<span class=\"token operator\">:</span> <span class=\"token string\">'0.0.0.0'</span><span class=\"token punctuation\">,</span>\n        port<span class=\"token operator\">:</span> <span class=\"token number\">8899</span><span class=\"token punctuation\">,</span>\n        https<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    sourceMap<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <h2 id=\"%E9%85%8D%E7%BD%AE%E9%A1%B9\"><a class=\"header-anchor\" href=\"#%E9%85%8D%E7%BD%AE%E9%A1%B9\">#</a> 配置项</h2> <p>下面来详细说下配置项。</p> <h3 id=\"%E9%A1%B5%E9%9D%A2%E5%92%8C%E4%BA%A7%E5%87%BA%E7%9B%B8%E5%85%B3%E9%85%8D%E7%BD%AE\"><a class=\"header-anchor\" href=\"#%E9%A1%B5%E9%9D%A2%E5%92%8C%E4%BA%A7%E5%87%BA%E7%9B%B8%E5%85%B3%E9%85%8D%E7%BD%AE\">#</a> 页面和产出相关配置</h3> <h4 id=\"polyfill\"><a class=\"header-anchor\" href=\"#polyfill\">#</a> <code>polyfill</code></h4> <p>设置为<code>true</code>，则会自动使用Babel的<code>useBuiltIns='usage'</code>，使用core-js自动添加polyfill，默认是<code>true</code>。</p> <h4 id=\"pages\"><a class=\"header-anchor\" href=\"#pages\">#</a> <code>pages</code></h4> <p>多页面配置，为页面配置项（为 html-webpack-plugin 中的相应配置项）如下：</p> <pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    pages<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        entry<span class=\"token operator\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n        template<span class=\"token operator\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n        filename<span class=\"token operator\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n        chunks<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <p>主要配置项说明如下：</p> <ul> <li><code>entry</code> 页面入口文件相对地址。 <em>String 或 Array 数组项为 String</em></li> <li><code>template</code> 页面模板文件相对地址。 <em>String</em></li> <li><code>filename</code> 页面模板文件产出地址。 <em>String</em></li> <li><code>title</code> 用于生成的 HTML 文档的标题。 <em>String</em></li> <li><code>chunks</code> 允许插入到模板中的一些 chunk，不配置此项会默认将 entry 中所有的 chunk 注入到模板中；如果配置，需要跟 mode 里面的 splitChunks 遥相呼应。 <em>String 或 Array 数组项为 String</em></li> </ul> <blockquote> <p>这里的 pages 内的配置项除了 entry 为特殊指定的 Webpack <code>entry</code>外，其他的都是 html-webpack-plugin 的配置项。</p> </blockquote> <p><strong>例如</strong></p> <pre class=\"language-js\"><code class=\"language-js\">pages<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    index<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        entry<span class=\"token operator\">:</span> <span class=\"token string\">'./src/pages/index/index.js'</span><span class=\"token punctuation\">,</span>\n        template<span class=\"token operator\">:</span> <span class=\"token string\">'./template/index.tpl'</span><span class=\"token punctuation\">,</span>\n        filename<span class=\"token operator\">:</span> <span class=\"token string\">'index.tpl'</span><span class=\"token punctuation\">,</span>\n        chunks<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'common'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'vendors'</span><span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token operator\">...</span>\n<span class=\"token punctuation\">}</span></code></pre> <h4 id=\"copy\"><a class=\"header-anchor\" href=\"#copy\">#</a> <code>copy</code></h4> <p>San CLI 内置了<a href=\"https://github.com/webpack-contrib/copy-webpack-plugin\">copy-webpack-plugin</a>，并且在配置中使用<code>copy</code>来进行配置：</p> <p><code>copy</code> 模板拷贝。 <em>Object 或 Array 数组项为 Object</em></p> <ul> <li><code>from</code> 拷贝模板的源路径。 <em>String</em></li> <li><code>to</code> 拷贝模板到 outputDir 中的目标路径。 <em>String</em> -<code>compress</code> 模板内联 js、css 是否压缩，默认为 true。 <em>Boolean</em></li> <li><code>ignore</code> 忽略的模板路径，不会被拷贝。 <em>String 或 RegExp</em></li> </ul> <p><strong>例如</strong></p> <pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    copy<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">from</span><span class=\"token operator\">:</span> <span class=\"token string\">'template'</span><span class=\"token punctuation\">,</span>\n        to<span class=\"token operator\">:</span> <span class=\"token string\">'template/gem-h5/page'</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\">// 或者支持数组：</span>\n<span class=\"token punctuation\">{</span>\n    copy<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">from</span><span class=\"token operator\">:</span> <span class=\"token string\">'template'</span><span class=\"token punctuation\">,</span>\n            to<span class=\"token operator\">:</span> <span class=\"token string\">'template/gem-h5/page'</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">from</span><span class=\"token operator\">:</span> <span class=\"token string\">'hybrid'</span><span class=\"token punctuation\">,</span>\n            to<span class=\"token operator\">:</span> <span class=\"token string\">'template/gem-h5/hybrid'</span><span class=\"token punctuation\">,</span>\n            ignore<span class=\"token operator\">:</span> <span class=\"token regex\"><span class=\"token regex-delimiter\">/</span><span class=\"token regex-source language-regex\">md</span><span class=\"token regex-delimiter\">/</span></span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span></code></pre> <h4 id=\"outputdir-%E4%BA%A7%E5%87%BA%E7%9B%AE%E5%BD%95\"><a class=\"header-anchor\" href=\"#outputdir-%E4%BA%A7%E5%87%BA%E7%9B%AE%E5%BD%95\">#</a> <code>outputDir</code> 产出目录</h4> <p><code>outputDir</code> 是产出目录地址。</p> <p><strong>例如</strong></p> <pre class=\"language-bash\"><code class=\"language-bash\">module.exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    outputDir: <span class=\"token string\">'ouput'</span>\n<span class=\"token punctuation\">}</span></code></pre> <h4 id=\"assetsdir%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E8%B7%AF%E5%BE%84\"><a class=\"header-anchor\" href=\"#assetsdir%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E8%B7%AF%E5%BE%84\">#</a> <code>assetsDir</code>静态资源路径</h4> <p><code>assetsDir</code> 是静态文件 outputDir 中的产出目录地址。</p> <p><strong>例如</strong></p> <pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    assetsDir<span class=\"token operator\">:</span> <span class=\"token string\">'static/gem-h5'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <p>这样打包出来的静态资源（图片、字体、音视频等）会被放到<code>outputDir/assetsDir</code>路径中。</p> <h4 id=\"publicpath-%E5%BC%95%E7%94%A8%E7%9A%84%E5%85%AC%E5%85%B1-url\"><a class=\"header-anchor\" href=\"#publicpath-%E5%BC%95%E7%94%A8%E7%9A%84%E5%85%AC%E5%85%B1-url\">#</a> <code>publicPath</code> 引用的公共 URL</h4> <p><code>publicPath</code> 指定在浏览器中引用时输出目录的公共 URL，此选项的值在大多数情况下以<code>/</code>结尾。</p> <pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    publicPath<span class=\"token operator\">:</span> <span class=\"token string\">'/'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <blockquote> <p>常用的方式是将静态资源放到 CDN，那么可以配置<code>publicPath</code>为 CDN 的路径。</p> </blockquote> <h3 id=\"%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%BC%98%E5%8C%96%E7%9B%B8%E5%85%B3\"><a class=\"header-anchor\" href=\"#%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%BC%98%E5%8C%96%E7%9B%B8%E5%85%B3\">#</a> 生产环境优化相关</h3> <ol> <li>sourcemap：js 的 sourcemap 使用<code>sourceMap</code>，css 的使用<code>css.sourceMap</code>；</li> <li>filenameHashing：给文件路径添加 hash 值；</li> <li>largeAssetSize：小于这个配置的图片和文件会被编译成 base64 放到 css 中。</li> </ol> <p><strong>例如</strong></p> <pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    sourceMap<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    css<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        sourceMap<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    filenameHashing<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    largeAssetSize<span class=\"token operator\">:</span> <span class=\"token number\">4e3</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <h3 id=\"webpack-%E7%9B%B8%E5%85%B3\"><a class=\"header-anchor\" href=\"#webpack-%E7%9B%B8%E5%85%B3\">#</a> webpack 相关</h3> <h4 id=\"alias\"><a class=\"header-anchor\" href=\"#alias\">#</a> <code>alias</code></h4> <p>alias 是 Webpack 的 <code>resolve.alias</code> 配置项。 <strong>例如</strong></p> <pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    alias<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'@assets'</span><span class=\"token operator\">:</span> <span class=\"token string\">'src/assets'</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <h4 id=\"loaderoptions\"><a class=\"header-anchor\" href=\"#loaderoptions\">#</a> <code>loaderOptions</code></h4> <p>在 San CLI 中内置很多 Loader，都有默认配置，如果修改默认配置可以使用<code>loaderOptions</code>，其中 css 中的 loader（例如 style-loader 、css-loader 等）则可以通过<code>css.loaderOptions</code>进行修改，例如：</p> <p><strong>例如</strong></p> <pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">//...</span>\n    loaderOptions<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        babel<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            plugins<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n                <span class=\"token punctuation\">[</span>\n                    <span class=\"token comment\">// @baidu/nano的按需引入</span>\n                    require<span class=\"token punctuation\">.</span><span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span><span class=\"token string\">'babel-plugin-import'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n                    <span class=\"token punctuation\">{</span>\n                        libraryName<span class=\"token operator\">:</span> <span class=\"token string\">'@baidu/nano'</span><span class=\"token punctuation\">,</span>\n                        libraryDirectory<span class=\"token operator\">:</span> <span class=\"token string\">'es'</span><span class=\"token punctuation\">,</span>\n                        style<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span>\n                    <span class=\"token punctuation\">}</span>\n                <span class=\"token punctuation\">]</span>\n            <span class=\"token punctuation\">]</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <div class=\"warning\"> <p>但是，我们推荐使用<code>babel.config.js</code>或者<code>.babelrc</code>进行 Babel 配置。</p> </div> <h3 id=\"css-%E7%9B%B8%E5%85%B3\"><a class=\"header-anchor\" href=\"#css-%E7%9B%B8%E5%85%B3\">#</a> css 相关</h3> <p>San CLI 中跟 CSS 相关的配置都统一放置在<code>css</code>中。例如：</p> <pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    css<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\">// css 相关配置</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <p>下面来说下相关的配置。</p> <h4 id=\"csspreprocessor\"><a class=\"header-anchor\" href=\"#csspreprocessor\">#</a> <code>cssPreprocessor</code></h4> <p><code>css.cssPreprocessor</code> css 预处理器白名单，值只能为'less', 'sass', 'styl', 'stylus', 'scss'，例如写了 less，那么只编译 less、css 代码，默认全编译。</p> <p><strong>例如</strong></p> <pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    css<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        cssPreprocessor<span class=\"token operator\">:</span> <span class=\"token string\">'less'</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <div class=\"warning\"> <p>推荐根据项目实际情况进行配置，这样只会添加对应的 loader。</p> </div> <h4 id=\"extract\"><a class=\"header-anchor\" href=\"#extract\">#</a> <code>extract</code></h4> <p><code>extract</code> 是否提取 css 代码到产出文件中，在 production 情况下是 true，在 development 情况下是 false。</p> <h4 id=\"sourcemap\"><a class=\"header-anchor\" href=\"#sourcemap\">#</a> <code>sourceMap</code></h4> <p>产出是否生成 sourceMap，默认与外层的（js 的 sourceMap） sourceMap 值一样。</p> <h4 id=\"requiremoduleextension\"><a class=\"header-anchor\" href=\"#requiremoduleextension\">#</a> <code>requireModuleExtension</code></h4> <p>是否不使用 css module，默认是<code>true</code>，使用的。</p> <h4 id=\"loaderoptions-2\"><a class=\"header-anchor\" href=\"#loaderoptions-2\">#</a> <code>loaderOptions</code></h4> <p>css 相关的 loader 配置项，支持：</p> <ul> <li><code>css</code> 需要新增的 css-loader 配置项；</li> <li><code>sass</code> 需要新增的 sass-loader 配置项；</li> <li><code>less</code> 需要新增的 less-loader 配置项；</li> <li><code>stylus</code> 需要新增的 stylus-loader 配置项；</li> <li><code>postcss</code> 需要新增的 postcss-loader 配置项，默认支持 postcss.config.js 的配置。</li> </ul> <div class=\"warning\"> <p>这里介绍的是一般配置，更多高级的配置以及优化相关的配置可以继续阅读<a href=\"./advanced.md\">高级配置</a>内容。</p> </div> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 27:
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
        "title": "默认配置如下",
        "hash": "%E9%BB%98%E8%AE%A4%E9%85%8D%E7%BD%AE%E5%A6%82%E4%B8%8B"
      }, {
        "level": 2,
        "title": "配置项",
        "hash": "%E9%85%8D%E7%BD%AE%E9%A1%B9",
        "children": [{
          "level": 3,
          "title": "页面和产出相关配置",
          "hash": "%E9%A1%B5%E9%9D%A2%E5%92%8C%E4%BA%A7%E5%87%BA%E7%9B%B8%E5%85%B3%E9%85%8D%E7%BD%AE"
        }, {
          "level": 3,
          "title": "生产环境优化相关",
          "hash": "%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%BC%98%E5%8C%96%E7%9B%B8%E5%85%B3"
        }, {
          "level": 3,
          "title": "webpack 相关",
          "hash": "webpack-%E7%9B%B8%E5%85%B3"
        }, {
          "level": 3,
          "title": "css 相关",
          "hash": "css-%E7%9B%B8%E5%85%B3"
        }]
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(126);
        
        var script = __webpack_require__(27).default;
        module.exports = __webpack_require__(27);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

/******/ });