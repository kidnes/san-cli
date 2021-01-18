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
/******/ 		12: 0,
/******/ 		58: 0
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
/******/ 	deferredModules.push([69,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 127:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E5%88%9D%E5%A7%8B%E5%8C%96%E9%A1%B9%E7%9B%AE\"><a class=\"header-anchor\" href=\"#%E5%88%9D%E5%A7%8B%E5%8C%96%E9%A1%B9%E7%9B%AE\">#</a> 初始化项目</h1> <h2 id=\"%E6%B2%A1%E6%9C%89%E5%AE%89%E8%A3%85-san-cli-%E9%9C%80%E8%A6%81%E5%AE%89%E8%A3%85\"><a class=\"header-anchor\" href=\"#%E6%B2%A1%E6%9C%89%E5%AE%89%E8%A3%85-san-cli-%E9%9C%80%E8%A6%81%E5%AE%89%E8%A3%85\">#</a> 没有安装 San-CLI 需要安装</h2> <pre class=\"language-bash\"><code class=\"language-bash\"><span class=\"token function\">npm</span> i -g san-cli</code></pre> <h2 id=\"%E5%BF%AB%E9%80%9F%E5%88%9B%E5%BB%BA\"><a class=\"header-anchor\" href=\"#%E5%BF%AB%E9%80%9F%E5%88%9B%E5%BB%BA\">#</a> 快速创建</h2> <pre class=\"language-bash\"><code class=\"language-bash\">san init <span class=\"token operator\">&lt;</span>app-name<span class=\"token operator\">></span></code></pre> <blockquote> <ol> <li>创建的是 san 项目。</li> <li>app-name 是要创建的工程项目目录，可以为<code>.</code>（即在当前目录下创建）。</li> </ol> </blockquote> <h2 id=\"%E6%8C%87%E5%AE%9A%E8%84%9A%E6%89%8B%E6%9E%B6%E5%88%9B%E5%BB%BA\"><a class=\"header-anchor\" href=\"#%E6%8C%87%E5%AE%9A%E8%84%9A%E6%89%8B%E6%9E%B6%E5%88%9B%E5%BB%BA\">#</a> 指定脚手架创建</h2> <pre class=\"language-bash\"><code class=\"language-bash\">san init <span class=\"token operator\">&lt;</span>template<span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>app-name<span class=\"token operator\">></span></code></pre> <blockquote> <ol> <li>template 是工程项目脚手架地址，支持 github、icode、gitlab 等 repo 作为脚手架直接创建项目，并且可以指定 template 的 alias，详见下方的 <strong>san remote</strong></li> <li>为了方便，我们创建了一个 San 的基础脚手架 ksky521/san-project，不指定脚手架创建时（即快速创建时），用的就是这个基础脚手架。</li> </ol> </blockquote> <h3 id=\"%E4%BE%8B%E5%A6%82\"><a class=\"header-anchor\" href=\"#%E4%BE%8B%E5%A6%82\">#</a> 例如</h3> <pre class=\"language-bash\"><code class=\"language-bash\"><span class=\"token comment\"># 1. 支持传入完整repo地址:</span>\nsan init ksky521/san-project demo\n<span class=\"token comment\"># 下面的示例请换成自己的地址和 username</span>\nsan init https://github.com/ksky521/san-project.git demo\n<span class=\"token comment\"># 下面的示例请换成自己的地址和 username (百度内部建议使用如下模板地址)</span>\nsan init ssh://<span class=\"token variable\">${username}</span>@icode.baidu.com:8235/baidu/hulk/san-project-base demo\n<span class=\"token comment\"># 2. 默认是从 github repo 安装</span>\n<span class=\"token comment\"># 所以 git@github.com:ksky521/simple.git 这个 repo到 demo 文件，可以使用：</span>\nsan init simple demo\n<span class=\"token comment\">#  3. 支持 github，icode，gitlab 等简写方式</span>\nsan init github:ksky521/san-project demo\nsan init icode:baidu/hulk/san-project-base demo\nsan init coding:ksky521/san-project demo\n<span class=\"token comment\"># 4. 分支写法</span>\nsan init template<span class=\"token comment\">#branch demo</span>\n<span class=\"token comment\"># 5. 项目生成在当前目录</span>\nsan init template<span class=\"token comment\">#branch .</span></code></pre> <h2 id=\"init-%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E\"><a class=\"header-anchor\" href=\"#init-%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E\">#</a> <code>init</code> 参数说明</h2> <ul> <li><code>--useCache，--cache</code> 优先使用本地已经下载过的脚手架缓存</li> <li><code>--install</code> 初始化成功后，进入目录安装依赖</li> <li><code>--offline</code> 标示 template 是离线脚手架</li> <li><code>--force</code> 跳过提醒，强制删除已存在的目录，默认会提醒</li> <li><code>--username，--u</code> 指定 Git 用户名，默认：git</li> <li><code>--registry</code> 设置 npm registry</li> </ul> <h2 id=\"%E4%BD%BF%E7%94%A8-remote-%E7%AE%A1%E7%90%86%E8%84%9A%E6%89%8B%E6%9E%B6%E6%A8%A1%E6%9D%BF%E5%88%AB%E5%90%8D\"><a class=\"header-anchor\" href=\"#%E4%BD%BF%E7%94%A8-remote-%E7%AE%A1%E7%90%86%E8%84%9A%E6%89%8B%E6%9E%B6%E6%A8%A1%E6%9D%BF%E5%88%AB%E5%90%8D\">#</a> 使用 remote 管理脚手架模板别名</h2> <p>初始化的时候，项目脚手架路径较长，不容易记忆，可以使用 remote 命令来管理脚手架模板的别名。remote 方法包括三个：</p> <ul> <li>add：添加</li> <li>remove/rm：删除，</li> <li>list/ls：列出脚手架模板 alias</li> </ul> <h4 id=\"1.-%E6%B7%BB%E5%8A%A0%E4%B8%80%E7%BB%84-alias\"><a class=\"header-anchor\" href=\"#1.-%E6%B7%BB%E5%8A%A0%E4%B8%80%E7%BB%84-alias\">#</a> 1. 添加一组 alias</h4> <pre class=\"language-bash\"><code class=\"language-bash\"><span class=\"token comment\"># 基本语法</span>\nsan remote <span class=\"token function\">add</span> <span class=\"token operator\">&lt;</span>name<span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>url<span class=\"token operator\">></span></code></pre> <h6 id=\"%E4%BE%8B%E5%A6%82-2\"><a class=\"header-anchor\" href=\"#%E4%BE%8B%E5%A6%82-2\">#</a> <strong><em>例如</em></strong></h6> <pre class=\"language-bash\"><code class=\"language-bash\">san remote <span class=\"token function\">add</span> hello github:yyt/HelloWorld\nsan remote <span class=\"token function\">add</span> project ssh://git@icode.baidu.com:8235/baidu/hulk/san-project-base</code></pre> <h4 id=\"2.-%E7%A7%BB%E9%99%A4%E4%B8%80%E7%BB%84-alias\"><a class=\"header-anchor\" href=\"#2.-%E7%A7%BB%E9%99%A4%E4%B8%80%E7%BB%84-alias\">#</a> 2. 移除一组 alias</h4> <pre class=\"language-bash\"><code class=\"language-bash\">san remote remove <span class=\"token operator\">&lt;</span>name<span class=\"token operator\">></span></code></pre> <p>从预设文件中将你输入的映射的关系移除</p> <h6 id=\"%E4%BE%8B%E5%A6%82-3\"><a class=\"header-anchor\" href=\"#%E4%BE%8B%E5%A6%82-3\">#</a> <strong><em>例如</em></strong></h6> <pre class=\"language-bash\"><code class=\"language-bash\">san remote <span class=\"token function\">rm</span> hello</code></pre> <h4 id=\"3.-%E6%9F%A5%E7%9C%8B-alias-%E5%88%97%E8%A1%A8\"><a class=\"header-anchor\" href=\"#3.-%E6%9F%A5%E7%9C%8B-alias-%E5%88%97%E8%A1%A8\">#</a> 3. 查看 alias 列表</h4> <pre class=\"language-bash\"><code class=\"language-bash\">san remote list</code></pre> <p>查看目前的映射关系表</p> <h6 id=\"%E4%BE%8B%E5%A6%82-4\"><a class=\"header-anchor\" href=\"#%E4%BE%8B%E5%A6%82-4\">#</a> <strong>例如</strong></h6> <pre class=\"language-bash\"><code class=\"language-bash\">san remote list\n<span class=\"token comment\"># or</span>\nsan remote <span class=\"token function\">ls</span></code></pre> <p>更多类似用法和配置方式查看<a href=\"/presets.md\">预设文件</a>。</p> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 28:
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
        "title": "没有安装 San-CLI 需要安装",
        "hash": "%E6%B2%A1%E6%9C%89%E5%AE%89%E8%A3%85-san-cli-%E9%9C%80%E8%A6%81%E5%AE%89%E8%A3%85"
      }, {
        "level": 2,
        "title": "快速创建",
        "hash": "%E5%BF%AB%E9%80%9F%E5%88%9B%E5%BB%BA"
      }, {
        "level": 2,
        "title": "指定脚手架创建",
        "hash": "%E6%8C%87%E5%AE%9A%E8%84%9A%E6%89%8B%E6%9E%B6%E5%88%9B%E5%BB%BA",
        "children": [{
          "level": 3,
          "title": "例如",
          "hash": "%E4%BE%8B%E5%A6%82"
        }]
      }, {
        "level": 2,
        "title": "init 参数说明",
        "hash": "init-%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E"
      }, {
        "level": 2,
        "title": "使用 remote 管理脚手架模板别名",
        "hash": "%E4%BD%BF%E7%94%A8-remote-%E7%AE%A1%E7%90%86%E8%84%9A%E6%89%8B%E6%9E%B6%E6%A8%A1%E6%9D%BF%E5%88%AB%E5%90%8D"
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(127);
        
        var script = __webpack_require__(28).default;
        module.exports = __webpack_require__(28);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

/******/ });