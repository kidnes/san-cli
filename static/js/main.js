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
/******/ 		21: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "static/js/" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
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
/******/ 	deferredModules.push([182,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'tree-node': 'self'
  },
  dataTypes: {
    treeNode: san__WEBPACK_IMPORTED_MODULE_0__["DataTypes"].object,
    selectedNodes: san__WEBPACK_IMPORTED_MODULE_0__["DataTypes"].array
  },

  initData() {
    return {
      isActive: false
    };
  },

  inited() {
    this.watch('selectedNodes', val => {
      const treeNode = this.data.get('treeNode');
      let finded = val.find(item => item === treeNode);
      const isActive = finded !== undefined;

      if (isActive !== this.data.get('isActive')) {
        this.data.set('isActive', isActive);
      }
    });
  }

});
/* san-hmr disable */

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  initData() {
    return {
      isExpand: false
    };
  },

  toggleExpand() {
    this.data.set('isExpand', !this.data.get('isExpand'));
  }

});
/* san-hmr disable */

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});
/* san-hmr disable */

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        __webpack_require__(173);
var injectStyles = [];

        var template = __webpack_require__(174);
        
        var script = __webpack_require__(97).default;
        module.exports = __webpack_require__(97);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        var injectStyles = [];

        var template = __webpack_require__(175);
        
        var script = __webpack_require__(98).default;
        module.exports = __webpack_require__(98);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        var injectStyles = [];

        var template = __webpack_require__(177);
        
        var script = __webpack_require__(100).default;
        module.exports = __webpack_require__(100);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        __webpack_require__(178);
var injectStyles = [];

        var template = __webpack_require__(179);
        
        var script = __webpack_require__(101).default;
        module.exports = __webpack_require__(101);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var san_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var san_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var NProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var NProgress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(NProgress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_hub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _views_not_found_san__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(110);
/* harmony import */ var _views_not_found_san__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_not_found_san__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(181);




 // Webpack Inject

const config = {"title":"San CLI","base":"/san-cli/","themeConfig":{"nav":[{"text":"San","link":"https://baidu.github.io/san/"},{"text":"Santd","link":"https://ecomfe.github.io/santd/"}],"sidebar":{"/":{"children":[{"path":"/","filename":"/Volumes/Source/san/san-cli-github/docs/README.md","title":"介绍"},{"title":"基础命令","children":[{"path":"/create-project/","filename":"/Volumes/Source/san/san-cli-github/docs/create-project.md","title":"初始化项目"},{"path":"/serve/","filename":"/Volumes/Source/san/san-cli-github/docs/serve.md","title":"开发打包"},{"path":"/build/","filename":"/Volumes/Source/san/san-cli-github/docs/build.md","title":"生产打包"}]},{"title":"配置","children":[{"path":"/config/","filename":"/Volumes/Source/san/san-cli-github/docs/config.md","title":"San CLI 配置文件"},{"path":"/advanced/","filename":"/Volumes/Source/san/san-cli-github/docs/advanced.md","title":"高级配置"},{"path":"/presets/","filename":"/Volumes/Source/san/san-cli-github/docs/presets.md","title":"Presets 预设"},{"path":"/env/","filename":"/Volumes/Source/san/san-cli-github/docs/env.md","title":"环境变量"}]},{"title":"常见解决方案","children":[{"path":"/modern-mode/","filename":"/Volumes/Source/san/san-cli-github/docs/modern-mode.md","title":"现在的浏览器打包模式"},{"path":"/bundle-analyze/","filename":"/Volumes/Source/san/san-cli-github/docs/bundle-analyze.md","title":"Bundle 分析"},{"path":"/component/","filename":"/Volumes/Source/san/san-cli-github/docs/component.md","title":"San Component 组件开发"},{"path":"/smarty/","filename":"/Volumes/Source/san/san-cli-github/docs/smarty.md","title":"Smarty 相关"},{"path":"/deployment/","filename":"/Volumes/Source/san/san-cli-github/docs/deployment.md","title":"部署"},{"path":"/hulk-cli-migration/","filename":"/Volumes/Source/san/san-cli-github/docs/hulk-cli-migration.md","title":"hulk-cli升级san-cli"}]},{"title":"二次开发","children":[{"path":"/architecture/","filename":"/Volumes/Source/san/san-cli-github/docs/architecture.md","title":"内部实现"},{"path":"/create-scaffold/","filename":"/Volumes/Source/san/san-cli-github/docs/create-scaffold.md","title":"如何创建一个脚手架项目"},{"title":"插件机制","path":"/plugin/","children":[{"path":"/cmd-plugin/","filename":"/Volumes/Source/san/san-cli-github/docs/cmd-plugin.md","title":"Command 插件"},{"path":"/srv-plugin/","filename":"/Volumes/Source/san/san-cli-github/docs/srv-plugin.md","title":"编写一个 Serivce 插件"}]}]},{"title":"CLI UI","children":[{"title":"开始使用","path":"/ui/start/","children":[{"title":"功能简介","children":[{"path":"/ui/project-list/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/project-list.md","title":"项目列表"},{"path":"/ui/dashboard/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/dashboard.md","title":"仪表盘"},{"path":"/ui/plugin/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/plugin.md","title":"插件管理"},{"path":"/ui/dependency/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/dependency.md","title":"依赖管理"},{"path":"/ui/configuration/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/configuration.md","title":"配置管理"},{"path":"/ui/task/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/task.md","title":"任务管理"}]},{"title":"插件开发","children":[{"path":"/ui/structure/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/structure.md","title":"CLI UI 插件"},{"path":"/ui/plugin-object/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/plugin-object.md","title":"PluginManager对象"},{"path":"/ui/add-addon/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/add-addon.md","title":"addon组件"},{"path":"/ui/add-config/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/add-config.md","title":"添加项目配置"},{"path":"/ui/task/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/task.md","title":"任务管理"},{"path":"/ui/add-view/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/add-view.md","title":"添加自定义视图"},{"path":"/ui/static/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/static.md","title":"公共静态文件"}]}]}]}]}}}};
const baseUrl = "/san-cli/";
const components = {
  "/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(51)]).then(__webpack_require__.t.bind(null, 57, 7)),
  "/_navbar/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(52)]).then(__webpack_require__.t.bind(null, 59, 7)),
  "/_sidebar/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(53)]).then(__webpack_require__.t.bind(null, 60, 7)),
  "/advanced/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(54)]).then(__webpack_require__.t.bind(null, 61, 7)),
  "/architecture/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(42)]).then(__webpack_require__.t.bind(null, 62, 7)),
  "/build/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(48)]).then(__webpack_require__.t.bind(null, 63, 7)),
  "/bundle-analyze/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(49)]).then(__webpack_require__.t.bind(null, 64, 7)),
  "/cmd-plugin/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(55)]).then(__webpack_require__.t.bind(null, 65, 7)),
  "/component/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(56)]).then(__webpack_require__.t.bind(null, 66, 7)),
  "/config/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(57)]).then(__webpack_require__.t.bind(null, 67, 7)),
  "/create-project/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(58)]).then(__webpack_require__.t.bind(null, 68, 7)),
  "/create-scaffold/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(59)]).then(__webpack_require__.t.bind(null, 69, 7)),
  "/deployment/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(60)]).then(__webpack_require__.t.bind(null, 70, 7)),
  "/env/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(64)]).then(__webpack_require__.t.bind(null, 71, 7)),
  "/hulk-cli-migration/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(65)]).then(__webpack_require__.t.bind(null, 72, 7)),
  "/inspect/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(66)]).then(__webpack_require__.t.bind(null, 73, 7)),
  "/modern-mode/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(67)]).then(__webpack_require__.t.bind(null, 74, 7)),
  "/plugin/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(68)]).then(__webpack_require__.t.bind(null, 75, 7)),
  "/presets/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(69)]).then(__webpack_require__.t.bind(null, 76, 7)),
  "/serve/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(70)]).then(__webpack_require__.t.bind(null, 77, 7)),
  "/smarty/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(71)]).then(__webpack_require__.t.bind(null, 78, 7)),
  "/srv-plugin/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(72)]).then(__webpack_require__.t.bind(null, 79, 7)),
  "/docit/_sanbox/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(61)]).then(__webpack_require__.t.bind(null, 80, 7)),
  "/docit/markdownit/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(62)]).then(__webpack_require__.t.bind(null, 81, 7)),
  "/docit/sanbox-demo/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(63)]).then(__webpack_require__.t.bind(null, 82, 7)),
  "/ui/add-addon/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(73)]).then(__webpack_require__.t.bind(null, 83, 7)),
  "/ui/add-config/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(74)]).then(__webpack_require__.t.bind(null, 84, 7)),
  "/ui/add-view/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(75)]).then(__webpack_require__.t.bind(null, 85, 7)),
  "/ui/configuration/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(50)]).then(__webpack_require__.t.bind(null, 86, 7)),
  "/ui/cover-task/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(76)]).then(__webpack_require__.t.bind(null, 87, 7)),
  "/ui/dashboard/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(43)]).then(__webpack_require__.t.bind(null, 88, 7)),
  "/ui/dependency/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(45)]).then(__webpack_require__.t.bind(null, 89, 7)),
  "/ui/plugin-object/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(77)]).then(__webpack_require__.t.bind(null, 90, 7)),
  "/ui/plugin/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(46)]).then(__webpack_require__.t.bind(null, 91, 7)),
  "/ui/project-list/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(44)]).then(__webpack_require__.t.bind(null, 92, 7)),
  "/ui/start/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(78)]).then(__webpack_require__.t.bind(null, 93, 7)),
  "/ui/static/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(79)]).then(__webpack_require__.t.bind(null, 94, 7)),
  "/ui/structure/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(80)]).then(__webpack_require__.t.bind(null, 95, 7)),
  "/ui/task/": () => Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(47)]).then(__webpack_require__.t.bind(null, 96, 7))
};
const sidebar = config.themeConfig.sidebar;
const base = baseUrl.length > 1 ? baseUrl.slice(0, -1) : baseUrl;

const addRouter = path => {
  if (components[path]) {
    const component = components[path];
    san_router__WEBPACK_IMPORTED_MODULE_0__["router"].add({
      rule: base + path,
      Component: component,
      target: '#router-view'
    });
  }
};

const parseRouter = (root, callback) => {
  if (!root) {
    return;
  }

  callback(root);

  if (!root.children) {
    return;
  }

  root.children.forEach(item => {
    callback(item);

    if (item && item.children) {
      parseRouter(item, callback);
    }
  });
}; // router.add 注册路由


Object.keys(sidebar).forEach(name => {
  parseRouter(sidebar[name], node => node && node.path && addRouter(node.path));
});
const routes = [{
  path: '/notfound/',
  component: _views_not_found_san__WEBPACK_IMPORTED_MODULE_3___default.a
}];
routes.forEach(route => {
  san_router__WEBPACK_IMPORTED_MODULE_0__["router"].add({
    rule: base + route.path,
    Component: route.component,
    target: '#router-view'
  });
});
san_router__WEBPACK_IMPORTED_MODULE_0__["router"].setMode('html5');
san_router__WEBPACK_IMPORTED_MODULE_0__["router"].listen(function (e) {
  if (!components[e.path.substr(base.length)]) {
    // e.stop();
    // this.locator.stop();
    setTimeout(() => {
      this.locator.redirect(base + '/notfound/');
    }, 0);
    return;
  }

  if (e.path === e.referrer) {
    e.stop();
    return;
  } // 加载进度条


  if (NProgress__WEBPACK_IMPORTED_MODULE_1___default.a.isRendered) {
    NProgress__WEBPACK_IMPORTED_MODULE_1___default.a.remove();
  }

  NProgress__WEBPACK_IMPORTED_MODULE_1___default.a.inc();
  _common_hub__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].fire('RouterChanged', e);
});
global.hub.on('changed', () => {
  NProgress__WEBPACK_IMPORTED_MODULE_1___default.a.done(true);
});
/* harmony default export */ __webpack_exports__["a"] = (san_router__WEBPACK_IMPORTED_MODULE_0__["router"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        var injectStyles = [];

        var template = __webpack_require__(176);
        
        var script = __webpack_require__(99).default;
        module.exports = __webpack_require__(99);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        var injectStyles = [];

        var template = __webpack_require__(180);
        
        var script = __webpack_require__(102).default;
        module.exports = __webpack_require__(102);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const treeWalk = (root, callback) => {
  if (!root) {
    return;
  }

  callback(root);

  if (!root.children) {
    return;
  }

  root.children.forEach(item => {
    callback(item);

    if (item.children) {
      treeWalk(item, callback);
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  treeWalk
});

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#site {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html {\n  font-family: Trebuchet MS, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  font-size: 16px;\n}\nbody {\n  margin: 0;\n}\na {\n  color: #236EFF;\n  background-color: transparent;\n  text-decoration: none;\n  outline: none;\n  cursor: pointer;\n  -webkit-transition: color 0.3s;\n  transition: color 0.3s;\n  -webkit-text-decoration-skip: objects;\n}\n:not(pre) > code[class*='language-'],\npre[class*='language-'] {\n  background: #fff;\n  font-size: 16px;\n}\ncode[class*='language-'],\npre[class*='language-'] {\n  font-size: 16px;\n}\n#header {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  background: #fff;\n  border-bottom: 1px solid #f0f1f2;\n  box-shadow: 0 2px 8px #f0f1f2;\n  transition: all 0.3s;\n  padding: 12px 20px;\n}\n#header .navbar {\n  display: inline-block;\n  overflow: hidden;\n  line-height: 28px;\n  height: 28px;\n  text-decoration: none;\n  white-space: nowrap;\n  font-size: 20px;\n}\n#header .navbar .logo {\n  width: 28px;\n  height: 28px;\n  vertical-align: middle;\n  margin-right: 8px;\n}\n#header ul {\n  padding-left: 1.5rem;\n  box-sizing: border-box;\n  background-color: #fff;\n  white-space: nowrap;\n  position: absolute;\n  right: 60px;\n  top: 0;\n  display: flex;\n}\n#header ul li {\n  position: relative;\n  display: inline-block;\n  margin-left: 32px;\n  line-height: 32px;\n  font-size: 20px;\n}\n#header ul a {\n  color: #314659;\n}\n#header ul a:hover {\n  color: #236EFF;\n}\naside#sidebar {\n  background-color: #fff;\n  width: 300px;\n  position: fixed;\n  z-index: 10;\n  margin: 0;\n  top: 68px;\n  left: 0;\n  bottom: 0;\n  padding: 10px 0;\n  box-sizing: border-box;\n  border-right: 1px solid #eaecef;\n  overflow-y: auto;\n  border-radius: 6px;\n}\naside#sidebar ul {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\naside#sidebar li {\n  line-height: 40px;\n  padding: 0 0 0 20px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n}\naside#sidebar li a {\n  color: #314659;\n}\naside#sidebar li a:hover {\n  color: #236EFF;\n}\naside#sidebar li.active {\n  background-color: #e6f7ff;\n  color: #236EFF;\n  border-right: 4px solid #236EFF;\n}\naside#sidebar li.active a {\n  color: #236EFF;\n}\naside#sidebar li ul {\n  margin-left: -20px;\n}\naside#sidebar li ul > li {\n  padding-left: 40px;\n  font-weight: normal;\n}\naside#sidebar li ul > li ul > li {\n  padding-left: 40px;\n}\n.markdown {\n  /**\n * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML\n * Based on https://github.com/chriskempson/tomorrow-theme\n * @author Rose Pritchard\n */\n  /* Code blocks */\n  /* Inline code */\n}\n.markdown code[class*='language-'],\n.markdown pre[class*='language-'] {\n  color: #314659;\n  background: none;\n  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n  border: none;\n}\n.markdown pre[class*='language-']::-moz-selection,\n.markdown pre[class*='language-'] ::-moz-selection,\n.markdown code[class*='language-']::-moz-selection,\n.markdown code[class*='language-'] ::-moz-selection {\n  text-shadow: none;\n  background: #b3d4fc;\n}\n.markdown pre[class*='language-']::selection,\n.markdown pre[class*='language-'] ::selection,\n.markdown code[class*='language-']::selection,\n.markdown code[class*='language-'] ::selection {\n  text-shadow: none;\n  background: #b3d4fc;\n}\n@media print {\n  .markdown code[class*='language-'],\n  .markdown pre[class*='language-'] {\n    text-shadow: none;\n  }\n}\n.markdown pre[class*='language-'] {\n  padding: 1em;\n  margin: 0.5em 0;\n  overflow: auto;\n}\n.markdown :not(pre) > code[class*='language-'],\n.markdown pre[class*='language-'] {\n  background: #f2f4f5;\n}\n.markdown :not(pre) > code[class*='language-'] {\n  padding: 0.1em;\n  border-radius: 0.3em;\n  white-space: normal;\n}\n.markdown .token.comment,\n.markdown .token.prolog,\n.markdown .token.doctype,\n.markdown .token.cdata {\n  color: slategray;\n}\n.markdown .token.punctuation {\n  color: #999;\n}\n.markdown .namespace {\n  opacity: 0.7;\n}\n.markdown .token.property,\n.markdown .token.tag,\n.markdown .token.boolean,\n.markdown .token.number,\n.markdown .token.constant,\n.markdown .token.symbol,\n.markdown .token.deleted {\n  color: #f81d22;\n}\n.markdown .token.selector,\n.markdown .token.attr-name,\n.markdown .token.string,\n.markdown .token.char,\n.markdown .token.builtin,\n.markdown .token.inserted {\n  color: #0b8235;\n}\n.markdown .token.operator,\n.markdown .token.entity,\n.markdown .token.url,\n.markdown .language-css .token.string,\n.markdown .style .token.string {\n  color: #0b8235;\n}\n.markdown .token.atrule,\n.markdown .token.attr-value,\n.markdown .token.keyword {\n  color: #008dff;\n}\n.markdown .token.function {\n  color: #f81d22;\n}\n.markdown .token.regex,\n.markdown .token.important,\n.markdown .token.variable {\n  color: #e90;\n}\n.markdown .token.important,\n.markdown .token.bold {\n  font-weight: bold;\n}\n.markdown .token.italic {\n  font-style: italic;\n}\n.markdown .token.entity {\n  cursor: help;\n}\n.markdown pre[class*='language-'].line-numbers {\n  position: relative;\n  padding-left: 3.8em;\n  counter-reset: linenumber;\n}\n.markdown pre[class*='language-'].line-numbers > code {\n  position: relative;\n  white-space: inherit;\n}\n.markdown .line-numbers .line-numbers-rows {\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  font-size: 100%;\n  left: -3.8em;\n  width: 3em;\n  /* works for line-numbers below 1000 lines */\n  letter-spacing: -1px;\n  border-right: 1px solid #999;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown .line-numbers-rows > span {\n  pointer-events: none;\n  display: block;\n  counter-increment: linenumber;\n}\n.markdown .line-numbers-rows > span:before {\n  content: counter(linenumber);\n  color: #999;\n  display: block;\n  padding-right: 0.8em;\n  text-align: right;\n}\n.markdown img[alt='avatar'] {\n  width: 420px;\n}\n.markdown table {\n  margin: 8px 0 16px;\n  border: 1px solid #ebedf0;\n  empty-cells: show;\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown table th {\n  font-weight: 500;\n  white-space: nowrap;\n  color: #5c6b77;\n  background: rgba(0, 0, 0, 0.02);\n}\n.markdown table th,\n.markdown table td {\n  padding: 16px 24px;\n  border: 1px solid #ebedf0;\n  text-align: left;\n}\n.markdown pre code {\n  overflow: auto;\n  padding: 12px 20px;\n}\n.markdown img {\n  max-width: calc(100% - 32px);\n}\n.markdown p > img {\n  margin: 34px 0;\n  box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);\n}\n.markdown h1 {\n  color: #0d1a26;\n  font-weight: 500;\n  margin-bottom: 20px;\n  margin-top: 8px;\n  font-family: Lato, Trebuchet MS, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  font-size: 30px;\n  line-height: 38px;\n}\n.markdown h1 .subtitle {\n  margin-left: 12px;\n}\n.markdown h2 {\n  font-size: 24px;\n  line-height: 32px;\n}\n.markdown h2,\n.markdown h3,\n.markdown h4,\n.markdown h5,\n.markdown h6 {\n  color: #0d1a26;\n  font-family: Lato, Trebuchet MS, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  margin: 1.6em 0 0.6em;\n  font-weight: 500;\n  clear: both;\n}\n.markdown h3 {\n  font-size: 18px;\n}\n.markdown h4 {\n  font-size: 16px;\n}\n.markdown h5 {\n  font-size: 14px;\n}\n.markdown h6 {\n  font-size: 12px;\n}\n.markdown a.header-anchor {\n  font-size: 0.85em;\n  float: left;\n  margin-left: -0.87em;\n  padding-right: 0.23em;\n  margin-top: 0.125em;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.markdown h1:hover .header-anchor,\n.markdown h2:hover .header-anchor,\n.markdown h3:hover .header-anchor,\n.markdown h4:hover .header-anchor,\n.markdown h5:hover .header-anchor,\n.markdown h6:hover .header-anchor {\n  opacity: 1;\n}\n.markdown hr {\n  height: 1px;\n  border: 0;\n  background: #ebedf0;\n  margin: 72px 0;\n  clear: both;\n}\n.markdown p,\n.markdown pre {\n  margin: 0 0 0.5em;\n}\n.markdown ul,\n.markdown ol {\n  padding-left: 1.5rem;\n}\n.markdown ul > li {\n  list-style-type: circle;\n  margin-left: 20px;\n  padding-left: 4px;\n}\n.markdown ul > li:empty {\n  display: none;\n}\n.markdown ol > li {\n  list-style-type: decimal;\n  margin-left: 20px;\n  padding-left: 4px;\n}\n.markdown ul > li > p,\n.markdown ol > li > p {\n  margin: 0.2em 0;\n}\n.markdown code {\n  white-space: pre-wrap;\n  margin: 0 1px;\n  padding: 0.2em 0.4em;\n  font-size: 0.9em;\n  background: #f2f4f5;\n  border: 1px solid #eee;\n  border-radius: 3px;\n}\n.markdown code[class*='language-'] {\n  padding: 0;\n  border-radius: 0;\n  margin: 0;\n}\n.markdown pre {\n  font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n}\n.markdown strong,\n.markdown b {\n  font-weight: 500;\n}\n.markdown a {\n  margin: 0 6px;\n}\n.markdown blockquote,\n.markdown div.warning,\n.markdown div.error,\n.markdown div.danger,\n.markdown div.tip,\n.markdown div.success,\n.markdown div.info {\n  font-size: 90%;\n  background-color: #e8f7fe;\n  color: #697b8c;\n  border-left: 4px solid #2196f3;\n  padding: 0.8em;\n  margin: 1em 0;\n  border-radius: 6px 0 0 6px;\n}\n.markdown blockquote p,\n.markdown div.warning p,\n.markdown div.error p,\n.markdown div.danger p,\n.markdown div.tip p,\n.markdown div.success p,\n.markdown div.info p {\n  margin: 0;\n}\n.markdown div.warning p.info-title,\n.markdown div.error p.info-title,\n.markdown div.danger p.info-title,\n.markdown div.tip p.info-title,\n.markdown div.success p.info-title,\n.markdown div.info p.info-title {\n  display: block;\n  margin-bottom: 4px;\n  font-size: 100%;\n  font-weight: bold;\n  color: #0d1a26;\n}\n.markdown div.warning {\n  background-color: #fffbe6;\n  color: #697b8c;\n  border-left: 4px solid #ffe58f;\n}\n.markdown div.error,\n.markdown div.danger {\n  background-color: #fff1f0;\n  color: #697b8c;\n  border-left: 4px solid #ffa39e;\n}\n.markdown div.info,\n.markdown div.tip {\n  background-color: #e6f7ff;\n  color: #697b8c;\n  border-left: 4px solid #2196f3;\n}\n.markdown div.success {\n  background-color: #f6ffed;\n  color: #697b8c;\n  border-left: 4px solid #b7eb8f;\n}\n#single #content {\n  padding-left: 0;\n  margin: 40px;\n}\n#content {\n  margin-top: 68px;\n  padding-left: 300px;\n  padding-right: 24px;\n  display: flex;\n  flex-direction: row;\n  background-color: #f9f9f9;\n  min-height: calc(100% - 68px);\n}\n#content .router-view {\n  flex: 1 1 200px;\n  width: 200px;\n  min-width: 200px;\n  color: #314659;\n  font-size: 16px;\n  line-height: 1.75;\n  background-color: #fff;\n  border-radius: 6px;\n  padding: 10px 20px 20px;\n  margin-left: 12px;\n  margin-right: 270px;\n}\n#content .toc {\n  flex: 0 0 280px;\n  position: fixed;\n  right: 0;\n  max-width: 280px;\n  min-width: 280px;\n  width: 280px;\n  background-color: #fff;\n  border-radius: 6px;\n  height: 100%;\n  overflow-y: scroll;\n}\n#content .toc > ul {\n  padding-left: 10px;\n}\n#content .toc a {\n  color: #314659;\n}\n#content .toc a:hover {\n  color: #236EFF;\n}\n#content .toc .active > a {\n  color: #236EFF;\n}\n#content .toc ul,\n#content .toc li {\n  list-style-type: none;\n}\n#content .toc li {\n  margin: 8px;\n}\n#content .toc li ul {\n  padding-left: 8px;\n}\n#content .fixed {\n  position: fixed;\n  top: 68px;\n}\n#content h1:target,\n#content h2:target,\n#content h3:target {\n  padding-top: 70px;\n}\n.code-box {\n  border: 1px solid #ebedf0;\n  border-radius: 2px;\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  margin: 0 0 16px;\n  transition: all 0.2s;\n}\n.code-box:target {\n  border: 1px solid #236EFF;\n}\n.code-box-expand-trigger {\n  cursor: pointer;\n  font-size: 14px;\n  color: #9199ac;\n  margin-left: 5px;\n  opacity: 0.8;\n  transition: all 0.3s;\n  top: -2px;\n  position: relative;\n}\n.code-box-expand-trigger-active {\n  color: #3b4357;\n}\n.code-box-title {\n  position: absolute;\n  top: -14px;\n  padding: 1px 8px;\n  margin-left: -8px;\n  color: #777;\n  border-radius: 2px 2px 0 0;\n  background: #fff;\n  transition: background-color 0.4s;\n}\n.code-box-title a,\n.code-box-title a:hover {\n  color: #314659;\n  font-size: 16px;\n  font-weight: 500;\n}\n.code-box a.edit-button {\n  position: absolute;\n  right: -16px;\n  top: 7px;\n  font-size: 12px;\n  transform: scale(0.9);\n  background: #fff;\n  padding-right: 6px;\n  text-decoration: none;\n}\n.code-box-demo {\n  border-bottom: 1px solid #ebedf0;\n  padding: 42px 24px 50px;\n  color: rgba(0, 0, 0, 0.65);\n}\n.code-box iframe {\n  width: 100%;\n  border: 0;\n}\n.code-box-meta {\n  position: relative;\n  padding: 18px 32px;\n  border-radius: 0 0 2px 2px;\n  transition: background-color 0.4s;\n  font-size: 16px;\n}\n.code-box-meta section > h4,\n.code-box-meta section > h3,\n.code-box-meta > h4,\n.code-box-meta > h3 {\n  margin: 0;\n  position: absolute;\n  top: -14px;\n  width: auto;\n  margin-left: -8px;\n  padding: 1px 8px;\n  font-size: 14px;\n  color: #777;\n  border-radius: 2px 2px 0 0;\n  background: #fff;\n}\n.code-box-meta section > h4 a.header-anchor,\n.code-box-meta section > h3 a.header-anchor,\n.code-box-meta > h4 a.header-anchor,\n.code-box-meta > h3 a.header-anchor {\n  opacity: 0;\n  display: none;\n}\n.code-box-meta section > h4:hover a.header-anchor,\n.code-box-meta section > h3:hover a.header-anchor,\n.code-box-meta > h4:hover a.header-anchor,\n.code-box-meta > h3:hover a.header-anchor {\n  opacity: 0;\n  display: none;\n}\n.code-box-meta-copy {\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  opacity: 1;\n}\n.code-box-meta blockquote {\n  margin: 0;\n}\nsection.code-box-meta p {\n  margin: 0;\n  width: 98%;\n}\n.code-box-meta > p {\n  font-size: 12px;\n  margin: 0.5em 0;\n  padding-right: 25px;\n  width: 100%;\n  word-break: break-word;\n}\n.code-box.expand .code-box-meta {\n  border-radius: 0;\n  border-bottom: 1px dashed #ebedf0;\n}\n.code-box .code-expand-icon {\n  position: absolute;\n  right: 16px;\n  bottom: 23px;\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n  text-align: center;\n}\n.code-box .code-expand-icon-show,\n.code-box .code-expand-icon-hide {\n  transition: all 0.4s;\n  user-select: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 0;\n  max-width: 100%;\n  vertical-align: baseline;\n  box-shadow: none;\n}\n.code-box .code-expand-icon-show {\n  opacity: 0.55;\n  pointer-events: auto;\n}\n.code-box .code-expand-icon-show:hover {\n  opacity: 1;\n}\n.code-box .code-expand-icon.ant-tooltip-open .code-expand-icon-show {\n  opacity: 1;\n}\n.code-box .code-expand-icon-hide {\n  opacity: 0;\n  pointer-events: none;\n}\n.code-box .highlight-wrapper {\n  display: none;\n  overflow: auto;\n  border-radius: 0 0 2px 2px;\n}\n.code-box .highlight-wrapper-expand {\n  display: block;\n}\n.code-box .highlight-wrapper pre[class*='language-'] {\n  margin: 0;\n}\n.code-box .highlight {\n  position: relative;\n}\n.code-box .highlight pre {\n  margin: 0;\n  padding: 0;\n  background: #fff;\n}\n.code-box .highlight:not(:first-child) {\n  border-top: 1px dashed #ebedf0;\n}\n.code-box-actions {\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  text-align: right;\n}\n.code-box-actions > i,\n.code-box-actions > form {\n  display: inline-block;\n  margin-left: 8px;\n}\n.code-box pre {\n  margin: 0;\n  width: auto;\n  font-size: 16px;\n  padding: 16px 32px;\n  line-height: 2;\n}\n.code-box pre code {\n  border: none;\n  background: #fff;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".code-box {\n  border: 1px solid #ebedf0;\n  border-radius: 2px;\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  margin: 0 0 16px;\n  transition: all 0.2s;\n}\n.code-box:target {\n  border: 1px solid #236EFF;\n}\n.code-box-expand-trigger {\n  cursor: pointer;\n  font-size: 14px;\n  color: #9199ac;\n  margin-left: 5px;\n  opacity: 0.8;\n  transition: all 0.3s;\n  top: -2px;\n  position: relative;\n}\n.code-box-expand-trigger-active {\n  color: #3b4357;\n}\n.code-box-title {\n  position: absolute;\n  top: -14px;\n  padding: 1px 8px;\n  margin-left: -8px;\n  color: #777;\n  border-radius: 2px 2px 0 0;\n  background: #fff;\n  transition: background-color 0.4s;\n}\n.code-box-title a,\n.code-box-title a:hover {\n  color: #314659;\n  font-size: 16px;\n  font-weight: 500;\n}\n.code-box a.edit-button {\n  position: absolute;\n  right: -16px;\n  top: 7px;\n  font-size: 12px;\n  transform: scale(0.9);\n  background: #fff;\n  padding-right: 6px;\n  text-decoration: none;\n}\n.code-box-demo {\n  border-bottom: 1px solid #ebedf0;\n  padding: 42px 24px 50px;\n  color: rgba(0, 0, 0, 0.65);\n}\n.code-box iframe {\n  width: 100%;\n  border: 0;\n}\n.code-box-meta {\n  position: relative;\n  padding: 18px 32px;\n  border-radius: 0 0 2px 2px;\n  transition: background-color 0.4s;\n  font-size: 16px;\n}\n.code-box-meta section > h4,\n.code-box-meta section > h3,\n.code-box-meta > h4,\n.code-box-meta > h3 {\n  margin: 0;\n  position: absolute;\n  top: -14px;\n  width: auto;\n  margin-left: -8px;\n  padding: 1px 8px;\n  font-size: 14px;\n  color: #777;\n  border-radius: 2px 2px 0 0;\n  background: #fff;\n}\n.code-box-meta section > h4 a.header-anchor,\n.code-box-meta section > h3 a.header-anchor,\n.code-box-meta > h4 a.header-anchor,\n.code-box-meta > h3 a.header-anchor {\n  opacity: 0;\n  display: none;\n}\n.code-box-meta section > h4:hover a.header-anchor,\n.code-box-meta section > h3:hover a.header-anchor,\n.code-box-meta > h4:hover a.header-anchor,\n.code-box-meta > h3:hover a.header-anchor {\n  opacity: 0;\n  display: none;\n}\n.code-box-meta-copy {\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  opacity: 1;\n}\n.code-box-meta blockquote {\n  margin: 0;\n}\nsection.code-box-meta p {\n  margin: 0;\n  width: 98%;\n}\n.code-box-meta > p {\n  font-size: 12px;\n  margin: 0.5em 0;\n  padding-right: 25px;\n  width: 100%;\n  word-break: break-word;\n}\n.code-box.expand .code-box-meta {\n  border-radius: 0;\n  border-bottom: 1px dashed #ebedf0;\n}\n.code-box .code-expand-icon {\n  position: absolute;\n  right: 16px;\n  bottom: 23px;\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n  text-align: center;\n}\n.code-box .code-expand-icon-show,\n.code-box .code-expand-icon-hide {\n  transition: all 0.4s;\n  user-select: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 0;\n  max-width: 100%;\n  vertical-align: baseline;\n  box-shadow: none;\n}\n.code-box .code-expand-icon-show {\n  opacity: 0.55;\n  pointer-events: auto;\n}\n.code-box .code-expand-icon-show:hover {\n  opacity: 1;\n}\n.code-box .code-expand-icon.ant-tooltip-open .code-expand-icon-show {\n  opacity: 1;\n}\n.code-box .code-expand-icon-hide {\n  opacity: 0;\n  pointer-events: none;\n}\n.code-box .highlight-wrapper {\n  display: none;\n  overflow: auto;\n  border-radius: 0 0 2px 2px;\n}\n.code-box .highlight-wrapper-expand {\n  display: block;\n}\n.code-box .highlight-wrapper pre[class*='language-'] {\n  margin: 0;\n}\n.code-box .highlight {\n  position: relative;\n}\n.code-box .highlight pre {\n  margin: 0;\n  padding: 0;\n  background: #fff;\n}\n.code-box .highlight:not(:first-child) {\n  border-top: 1px dashed #ebedf0;\n}\n.code-box-actions {\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  text-align: right;\n}\n.code-box-actions > i,\n.code-box-actions > form {\n  display: inline-block;\n  margin-left: 8px;\n}\n.code-box pre {\n  margin: 0;\n  width: auto;\n  font-size: 16px;\n  padding: 16px 32px;\n  line-height: 2;\n}\n.code-box pre code {\n  border: none;\n  background: #fff;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_san_loader_index_js_layout_san_lang_less_san_type_style_index_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_san_loader_index_js_layout_san_lang_less_san_type_style_index_0__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_san_loader_index_js_layout_san_lang_less_san_type_style_index_0__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

// Module
var code = " <div id=\"site\"> <header id=\"header\"> <a href=\"{{docit.base}}\" class=\"navbar\"> <img src=\"{{docit.base + 'logo.svg'}}\" alt=\"Home\" class=\"logo\"/> <span>{{docit.title}}</span> </a> <ul> <li s-for=\"nav in docit.themeConfig.nav\"> <a target=\"{{nav.target || '_blank'}}\" href=\"{{nav.link}}\"> {{nav.text}} </a> </li> </ul> </header> <aside id=\"sidebar\"> <tree treeData=\"{{sidebar}}\" selectedNodes=\"{{selectedNodes}}\"> <router-link s-if=\"treeNode.path\" to=\"{{getPath(treeNode.path)}}\">{{treeNode.title}}</router-link> <span s-else>{{treeNode.title}}</span> </tree> </aside> <content-area docit=\"{{docit}}\"></content-area> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

// Module
var code = " <article id=\"content\"> <div id=\"router-view\" class=\"router-view\" s-ref=\"view\"></div> <aside class=\"toc\"> <tree treeData=\"{{toc}}\" selectedNodes=\"{{selectedNodes}}\"> <a href=\"{{getHash(treeNode.hash)}}\">{{treeNode.title}}</a> </tree> </aside> </article> ";
// Exports
module.exports = code;

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

// Module
var code = " <ul class=\"tree\"> <tree-node s-for=\"treeNode in treeData.children\" treeNode=\"{{treeNode}}\" selectedNodes=\"{{selectedNodes}}\"> <slot var-treeNode=\"treeNode\"></slot> </tree-node> </ul> ";
// Exports
module.exports = code;

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

// Module
var code = " <li class=\"treeNode {{isActive ? 'active' : ''}}\"> <slot var-treeNode=\"treeNode\"></slot> <ul s-if=\"treeNode.children\"> <tree-node s-for=\"node in treeNode.children\" treeNode=\"{{node}}\" selectedNodes=\"{{selectedNodes}}\"> <slot var-treeNode=\"treeNode\"></slot> </tree-node> </ul> </li> ";
// Exports
module.exports = code;

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_san_loader_index_js_codebox_san_lang_less_san_type_style_index_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_san_loader_index_js_codebox_san_lang_less_san_type_style_index_0__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_san_loader_index_js_codebox_san_lang_less_san_type_style_index_0__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

// Module
var code = " <section class=\"code-box {{isExpand ? 'expand' : ''}}\"> <section class=\"code-box-demo\"> <slot name=\"code-preview\"></slot> </section> <section class=\"code-box-meta\"> <slot name=\"text-place-holder\"></slot> <span class=\"code-expand-icon\" on-click=\"toggleExpand\"> <img alt=\"expand code\" src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\" class=\"{{isExpand ? 'code-expand-icon-hide':'code-expand-icon-show'}}\"> <img alt=\"expand code\" src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\" class=\"{{isExpand ? 'code-expand-icon-show' : 'code-expand-icon-hide'}}\"> </span> </section> <section class=\"highlight-wrapper {{isExpand ? 'highlight-wrapper-expand' : ''}}\"> <slot name=\"code-place-holder\"></slot> </section> </section> ";
// Exports
module.exports = code;

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

// Module
var code = " <div>Not Found</div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/san-component/src/index.js
var src = __webpack_require__(10);

// EXTERNAL MODULE: ../node_modules/san/dist/san.dev.js
var san_dev = __webpack_require__(3);

// EXTERNAL MODULE: ../src/views/layout.san
var layout = __webpack_require__(103);
var layout_default = /*#__PURE__*/__webpack_require__.n(layout);

// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--4-2!../src/styles/index.less
var styles = __webpack_require__(14);

// CONCATENATED MODULE: ../src/styles/index.less

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(styles["a" /* default */], options);



/* harmony default export */ var src_styles = (styles["a" /* default */].locals || {});
// EXTERNAL MODULE: ../src/common/hub.js
var hub = __webpack_require__(8);

// EXTERNAL MODULE: ../plugins/components/codebox.san
var codebox = __webpack_require__(108);
var codebox_default = /*#__PURE__*/__webpack_require__.n(codebox);

// CONCATENATED MODULE: ../src/common/registerComponents.js


const components = {
  "codebox": codebox_default.a
};
Object(src["b" /* registerComponents */])(components);
// CONCATENATED MODULE: ../src/index.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class src_Index extends san_dev["Component"] {}

_defineProperty(src_Index, "components", {
  layout: layout_default.a
});

_defineProperty(src_Index, "dataTypes", {
  docit: san_dev["DataTypes"].object
});

_defineProperty(src_Index, "template", '<layout docit="{{docit}}"><layout>');

_defineProperty(src_Index, "computed", {
  docit() {
    return this.data.get('docit');
  }

});

;
// EXTERNAL MODULE: ../src/router/index.js
var router = __webpack_require__(109);

// CONCATENATED MODULE: ../src/main.js
function main_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class main_App extends src["a" /* SanComponent */] {
  attached() {
    // router.listen(this.onChange.bind(this));
    router["a" /* default */].start();
  }

}

main_defineProperty(main_App, "components", {
  index: src_Index
});

main_defineProperty(main_App, "template", '<index docit="{{docit}}"><index>');

main_defineProperty(main_App, "computed", {
  docit() {
    // webpack.DefinePlugin SAN_DOCIT
    return {"title":"San CLI","base":"/san-cli/","themeConfig":{"nav":[{"text":"San","link":"https://baidu.github.io/san/"},{"text":"Santd","link":"https://ecomfe.github.io/santd/"}],"sidebar":{"/":{"children":[{"path":"/","filename":"/Volumes/Source/san/san-cli-github/docs/README.md","title":"介绍"},{"title":"基础命令","children":[{"path":"/create-project/","filename":"/Volumes/Source/san/san-cli-github/docs/create-project.md","title":"初始化项目"},{"path":"/serve/","filename":"/Volumes/Source/san/san-cli-github/docs/serve.md","title":"开发打包"},{"path":"/build/","filename":"/Volumes/Source/san/san-cli-github/docs/build.md","title":"生产打包"}]},{"title":"配置","children":[{"path":"/config/","filename":"/Volumes/Source/san/san-cli-github/docs/config.md","title":"San CLI 配置文件"},{"path":"/advanced/","filename":"/Volumes/Source/san/san-cli-github/docs/advanced.md","title":"高级配置"},{"path":"/presets/","filename":"/Volumes/Source/san/san-cli-github/docs/presets.md","title":"Presets 预设"},{"path":"/env/","filename":"/Volumes/Source/san/san-cli-github/docs/env.md","title":"环境变量"}]},{"title":"常见解决方案","children":[{"path":"/modern-mode/","filename":"/Volumes/Source/san/san-cli-github/docs/modern-mode.md","title":"现在的浏览器打包模式"},{"path":"/bundle-analyze/","filename":"/Volumes/Source/san/san-cli-github/docs/bundle-analyze.md","title":"Bundle 分析"},{"path":"/component/","filename":"/Volumes/Source/san/san-cli-github/docs/component.md","title":"San Component 组件开发"},{"path":"/smarty/","filename":"/Volumes/Source/san/san-cli-github/docs/smarty.md","title":"Smarty 相关"},{"path":"/deployment/","filename":"/Volumes/Source/san/san-cli-github/docs/deployment.md","title":"部署"},{"path":"/hulk-cli-migration/","filename":"/Volumes/Source/san/san-cli-github/docs/hulk-cli-migration.md","title":"hulk-cli升级san-cli"}]},{"title":"二次开发","children":[{"path":"/architecture/","filename":"/Volumes/Source/san/san-cli-github/docs/architecture.md","title":"内部实现"},{"path":"/create-scaffold/","filename":"/Volumes/Source/san/san-cli-github/docs/create-scaffold.md","title":"如何创建一个脚手架项目"},{"title":"插件机制","path":"/plugin/","children":[{"path":"/cmd-plugin/","filename":"/Volumes/Source/san/san-cli-github/docs/cmd-plugin.md","title":"Command 插件"},{"path":"/srv-plugin/","filename":"/Volumes/Source/san/san-cli-github/docs/srv-plugin.md","title":"编写一个 Serivce 插件"}]}]},{"title":"CLI UI","children":[{"title":"开始使用","path":"/ui/start/","children":[{"title":"功能简介","children":[{"path":"/ui/project-list/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/project-list.md","title":"项目列表"},{"path":"/ui/dashboard/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/dashboard.md","title":"仪表盘"},{"path":"/ui/plugin/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/plugin.md","title":"插件管理"},{"path":"/ui/dependency/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/dependency.md","title":"依赖管理"},{"path":"/ui/configuration/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/configuration.md","title":"配置管理"},{"path":"/ui/task/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/task.md","title":"任务管理"}]},{"title":"插件开发","children":[{"path":"/ui/structure/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/structure.md","title":"CLI UI 插件"},{"path":"/ui/plugin-object/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/plugin-object.md","title":"PluginManager对象"},{"path":"/ui/add-addon/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/add-addon.md","title":"addon组件"},{"path":"/ui/add-config/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/add-config.md","title":"添加项目配置"},{"path":"/ui/task/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/task.md","title":"任务管理"},{"path":"/ui/add-view/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/add-view.md","title":"添加自定义视图"},{"path":"/ui/static/","filename":"/Volumes/Source/san/san-cli-github/docs/ui/static.md","title":"公共静态文件"}]}]}]}]}}}};
  }

});

const app = new main_App();
app.attach(document.getElementById('app'));

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @file Event Hub
 */

const hub = new san__WEBPACK_IMPORTED_MODULE_0__["Component"]({});
global.hub = hub;
/* harmony default export */ __webpack_exports__["a"] = (hub);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var san_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var san_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(san_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(104);
/* harmony import */ var _content_area__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_area__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tree__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_hub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'router-link': san_router__WEBPACK_IMPORTED_MODULE_1__["Link"],
    'content-area': _content_area__WEBPACK_IMPORTED_MODULE_2___default.a,
    tree: (_tree__WEBPACK_IMPORTED_MODULE_3___default())
  },
  dataTypes: {
    docit: san__WEBPACK_IMPORTED_MODULE_0__["DataTypes"].object
  },
  computed: {
    sidebar() {
      const docit = this.data.get('docit');
      const sidebar = docit.themeConfig.sidebar;
      const current = location.pathname;

      if (sidebar[current]) {
        return sidebar[current];
      }

      for (let route in sidebar) {
        let list = sidebar[route];

        for (let i = 0; i < list.length; i++) {
          if (list[i].path === current) {
            return list;
          }
        }
      }

      return sidebar['/'] || [];
    }

  },

  initData() {
    return {
      selectedNode: []
    };
  },

  inited() {
    _common_hub__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].on('RouterChanged', this.isActive.bind(this));
  },

  isActive(e) {
    const selected = [];
    const sidebar = this.data.get('sidebar');
    _common_utils__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].treeWalk(sidebar, item => {
      if (item.path === e.path) {
        selected.push(item);
      }
    });
    this.data.set('selectedNodes', selected);
  },

  getPath(path) {
    const baseUrl = "/san-cli/";
    const base = baseUrl.length > 1 ? baseUrl.slice(0, -1) : baseUrl;
    return base + path;
  }

});
/* san-hmr disable */

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var san_src_browser_on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var san_src_browser_on__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san_src_browser_on__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var san_src_browser_un__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(106);
/* harmony import */ var san_src_browser_un__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(san_src_browser_un__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tree__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    tree: (_tree__WEBPACK_IMPORTED_MODULE_2___default())
  },

  initData() {
    return {
      toc: {},
      selectedNodes: []
    };
  },

  inited() {
    // router 子组件无法通过组件事件或DOM树向上传递事件
    global.hub.on('changed', this.onChanged.bind(this));
    this.__onScroll = this.onScroll.bind(this);
    san_src_browser_on__WEBPACK_IMPORTED_MODULE_0___default()(global, 'scroll', this.__onScroll);
  },

  getHash(hash) {
    return location.pathname + '#' + hash;
  },

  onChanged(evt) {
    this.data.set('toc', evt);
    this.nextTick(this.initScroll.bind(this));
  },

  initScroll() {
    const view = this.ref('view');
    const doms = view.querySelectorAll('H2, H3');

    if (!doms) {
      return;
    }

    this.postions = [];
    this.hashs = [];
    doms.forEach(dom => {
      this.postions.push(dom.offsetTop);
      this.hashs.push(dom.id);
    });
    const len = this.hashs.length;
    this.postions[len] = Number.MAX_VALUE;
    this.hashs[len] = this.hashs[this.hashs.length - 1];
    const toc = this.data.get('toc');

    if (toc && toc.children && toc.children.length > 0) {
      this.data.set('selectedNodes', [toc.children[0]]);
    }
  },

  onScroll(evt) {
    if (this.timer) {
      global.clearTimeout(this.timer);
    }

    this.timer = global.setTimeout(() => {
      this.scrollPostion();
      this.timer = null;
    }, 10);
  },

  scrollPostion() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const index = this.postions.findIndex(pos => pos >= scrollTop);

    if (index !== -1) {
      this.changeSelected(this.hashs[index]);
    }
  },

  changeSelected(hash) {
    if (this.selected === hash) {
      return;
    }

    const selected = [];
    const toc = this.data.get('toc');
    _common_utils__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].treeWalk(toc, item => {
      if (item.hash === hash) {
        selected.push(item);
      }
    });
    this.data.set('selectedNodes', selected);
    this.selected = hash;
  },

  detached() {
    san_src_browser_un__WEBPACK_IMPORTED_MODULE_1___default()(global, 'scroll', this.__onScroll);
  }

});
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tree_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(107);
/* harmony import */ var _tree_node__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tree_node__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'tree-node': _tree_node__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  dataTypes: {
    treeData: san__WEBPACK_IMPORTED_MODULE_0__["DataTypes"].object,
    selectedNodes: san__WEBPACK_IMPORTED_MODULE_0__["DataTypes"].array
  }
});
/* san-hmr disable */

/***/ })

/******/ });