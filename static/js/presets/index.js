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
/******/ 		24: 0,
/******/ 		69: 0
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

/***/ 135:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"presets-%E9%A2%84%E8%AE%BE\"><a class=\"header-anchor\" href=\"#presets-%E9%A2%84%E8%AE%BE\">#</a> Presets 预设</h1> <p>为了方便个人和团队使用，San CLI 支持<code>sanrc.json</code>的预设文件，该文件存储在<code>homedir/.san/sanrc.json</code>，这个文件因为存储在个人的 home 文件夹，所以不会被同步到项目中，适应场景是自己定制的 San CLI 配置。</p> <p>团队或者项目中如果要统一 San CLI 的预设配置，可以修改项目的<code>package.json</code>的<code>san</code>字段，添加对应的配置项。</p> <blockquote> <p>更精确的表达是：sanrc.json 是 CLI 的配置文件，san.config.js 是项目的配置文件。</p> </blockquote> <h2 id=\"%E9%85%8D%E7%BD%AE%E9%A1%B9\"><a class=\"header-anchor\" href=\"#%E9%85%8D%E7%BD%AE%E9%A1%B9\">#</a> 配置项</h2> <p><code>sanrc.json</code>的文件配置项如下：</p> <ul> <li>commands：<strong>Array</strong>，添加的 <a href=\"/cmd-plugin.md\">Command 插件</a>，数组内存储的是<code>String</code>类型，支持路径或者插件的 NPM 包名；</li> <li>plugins：<strong>Array</strong>，添加的 <a href=\"/srv-plugin.md\">Service 插件</a>，数组内存储的是<code>String</code>类型，支持路径或者插件的 NPM 包名；</li> <li>useBuiltInPlugin：<strong>Boolean</strong>，表示初始化 Service 时，是否使用内置插件，默认是<code>true</code>；</li> <li>templateAlias：<strong>Object</strong>，脚手架模板的 alias Map，例如下面的配置，在使用<code>san init project target_path</code>时，会去对应的<code>icode</code>地址拉取脚手架模板。</li> </ul> <pre class=\"language-json\"><code class=\"language-json\"><span class=\"token comment\">// sanrc.json 举例</span>\n<span class=\"token punctuation\">{</span><span class=\"token property\">\"templateAlias\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span><span class=\"token property\">\"project\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"ssh://git@icode.baidu.com:8235/baidu/foo/bar\"</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></code></pre> <p>配置在<code>package.json</code>的<code>san</code>字段举例：</p> <pre class=\"language-json\"><code class=\"language-json\"><span class=\"token comment\">// 项目的 package.json</span>\n<span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"san-project\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token comment\">// ..其他 package.json 配置</span>\n    <span class=\"token comment\">// san 字段</span>\n    <span class=\"token property\">\"san\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"commands\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">\"san-command.js\"</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"plugins\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">\"san-plugin.js\"</span><span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre> <h2 id=\"san-cli-%E4%B8%AD%E4%BC%9A%E4%BF%AE%E6%94%B9sanrc.json%E7%9A%84%E5%91%BD%E4%BB%A4\"><a class=\"header-anchor\" href=\"#san-cli-%E4%B8%AD%E4%BC%9A%E4%BF%AE%E6%94%B9sanrc.json%E7%9A%84%E5%91%BD%E4%BB%A4\">#</a> San CLI 中会修改<code>sanrc.json</code>的命令</h2> <p>San CLI 中有一些命令可以修改<code>sanrc.json</code>的配置。</p> <h3 id=\"san-command-add%2Fremove%2Flist\"><a class=\"header-anchor\" href=\"#san-command-add%2Fremove%2Flist\">#</a> <code>san command add/remove/list</code></h3> <p><code>san command</code>是添加和管理 CLI Command 插件的命令：</p> <ul> <li>add：添加</li> <li>remove/rm：删除，</li> <li>list/ls：列出 command 列表</li> </ul> <p><strong>用法举例：</strong></p> <pre class=\"language-bash\"><code class=\"language-bash\">san <span class=\"token builtin class-name\">command</span> <span class=\"token function\">add</span> san-command.js\nsan <span class=\"token builtin class-name\">command</span> <span class=\"token function\">ls</span>\nsan <span class=\"token builtin class-name\">command</span> <span class=\"token function\">rm</span> san-command.js\nsan <span class=\"token builtin class-name\">command</span> <span class=\"token function\">add</span> san-command.js -g</code></pre> <div class=\"warning\"> <ol> <li><code>--global</code>,<code>-g</code>：默认写到项目的 package.json 的 san 字段，使用<code>-g</code>则写到 home 文件夹的<code>sanrc.json</code>文件。</li> <li>command 实际是操作的<code>sanrc.json</code>或者 package.json <code>san</code> 的 commands 字段</li> </ol> </div> <h3 id=\"san-plugin-add%2Fremove%2Flist\"><a class=\"header-anchor\" href=\"#san-plugin-add%2Fremove%2Flist\">#</a> san plugin add/remove/list</h3> <p><code>san plugin</code>是添加和管理 CLI plugin 插件的命令：</p> <ul> <li>add：添加</li> <li>remove/rm：删除，</li> <li>list/ls：列出 plugin 列表</li> </ul> <p><strong>用法举例：</strong></p> <pre class=\"language-bash\"><code class=\"language-bash\">san plugin <span class=\"token function\">add</span> san-plugin.js\nsan plugin <span class=\"token function\">ls</span>\nsan plugin <span class=\"token function\">rm</span> san-plugin.js\nsan plugin <span class=\"token function\">add</span> san-plugin.js -g</code></pre> <div class=\"warning\"> <ol> <li><code>--global</code>,<code>-g</code>：默认写到项目的 package.json 的 san 字段，使用<code>-g</code>则写到 home 文件夹的<code>sanrc.json</code>文件。</li> <li>plugin 实际是操作的<code>sanrc.json</code>或者 package.json <code>san</code> 的 plugins 字段</li> </ol> </div> <h3 id=\"san-remote-add%2Fremove%2Flist\"><a class=\"header-anchor\" href=\"#san-remote-add%2Fremove%2Flist\">#</a> san remote add/remove/list</h3> <p>每次初始化项目的时候，都输出长长的脚手架地址，使用<code>san remote</code>可以给脚手架模板创建一个短别名：</p> <ul> <li>add：添加</li> <li>remove/rm：删除，</li> <li>list/ls：列出脚手架模板 alias</li> </ul> <p><strong>用法举例：</strong></p> <pre class=\"language-bash\"><code class=\"language-bash\"><span class=\"token comment\"># san remote add &lt;name> &lt;url></span>\nsan remote <span class=\"token function\">add</span> project ssh://git@icode.baidu.com:8235/baidu/foo/bar\nsan remote <span class=\"token function\">ls</span>\nsan remote <span class=\"token function\">rm</span> project</code></pre> <div class=\"warning\"> <ol> <li><code>remote</code>的命令不支持<code>--global</code>，操作的实际是<code>sanrc.json</code>的 <code>templateAlias</code> 字段。</li> <li>不建议在<code>package.json</code>中添加<code>templateAlias</code>。</li> </ol> </div> </div></div> ";
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
        "title": "配置项",
        "hash": "%E9%85%8D%E7%BD%AE%E9%A1%B9"
      }, {
        "level": 2,
        "title": "San CLI 中会修改sanrc.json的命令",
        "hash": "san-cli-%E4%B8%AD%E4%BC%9A%E4%BF%AE%E6%94%B9sanrc.json%E7%9A%84%E5%91%BD%E4%BB%A4",
        "children": [{
          "level": 3,
          "title": "san command add/remove/list",
          "hash": "san-command-add%2Fremove%2Flist"
        }, {
          "level": 3,
          "title": "san plugin add/remove/list",
          "hash": "san-plugin-add%2Fremove%2Flist"
        }, {
          "level": 3,
          "title": "san remote add/remove/list",
          "hash": "san-remote-add%2Fremove%2Flist"
        }]
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

        var template = __webpack_require__(135);
        
        var script = __webpack_require__(34).default;
        module.exports = __webpack_require__(34);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

/******/ });