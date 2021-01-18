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
/******/ 		14: 0,
/******/ 		60: 0
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

/***/ 129:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E9%83%A8%E7%BD%B2\"><a class=\"header-anchor\" href=\"#%E9%83%A8%E7%BD%B2\">#</a> 部署</h1> <p>在应用 <code>san build [entry] --remote &lt;remote-name&gt;</code> 时，使用的就是此远程部署解决方案，支持从项目本地将生产环境编译产出直接远程部署到目标开发机。</p> <p>使用时，需要进行相应的 <strong>环境配置</strong> 以及 <strong>参数配置</strong>，下面具体说明如何配置。</p> <h2 id=\"%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE\"><a class=\"header-anchor\" href=\"#%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE\">#</a> 环境配置</h2> <p>remote-name 为一组开发机配置项集合的名称，开发配置项需要在 .env.production 文件中进行配置，具体写法方式参考<a href=\"./env.md\">环境变量</a>。</p> <h2 id=\"%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE\"><a class=\"header-anchor\" href=\"#%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE\">#</a> 参数配置</h2> <h3 id=\"%E5%9F%BA%E7%A1%80%E5%8F%82%E6%95%B0\"><a class=\"header-anchor\" href=\"#%E5%9F%BA%E7%A1%80%E5%8F%82%E6%95%B0\">#</a> 基础参数</h3> <h4 id=\"receiver\"><a class=\"header-anchor\" href=\"#receiver\">#</a> <code>receiver</code></h4> <p>远程服务 receiver.php 地址，receiver.php 文件内容<a href=\"https://github.com/fex-team/fis3-deploy-http-push/blob/master/receiver.php\">参考</a></p> <h4 id=\"templatepath\"><a class=\"header-anchor\" href=\"#templatepath\">#</a> <code>templatePath</code></h4> <p>远程服务模板存放地址，产出文件 .tpl 结尾的文件会上传到此路径下。</p> <h4 id=\"staticpath\"><a class=\"header-anchor\" href=\"#staticpath\">#</a> <code>staticPath</code></h4> <p>远程服务静态文件存放地址。</p> <h3 id=\"%E9%9D%99%E6%80%81%E5%9F%9F%E5%90%8D%E6%9B%BF%E6%8D%A2%E7%9B%B8%E5%85%B3\"><a class=\"header-anchor\" href=\"#%E9%9D%99%E6%80%81%E5%9F%9F%E5%90%8D%E6%9B%BF%E6%8D%A2%E7%9B%B8%E5%85%B3\">#</a> 静态域名替换相关</h3> <h4 id=\"staticdomain\"><a class=\"header-anchor\" href=\"#staticdomain\">#</a> <code>staticDomain</code></h4> <p>静态文件服务域名。</p> <h4 id=\"baseurl\"><a class=\"header-anchor\" href=\"#baseurl\">#</a> <code>baseUrl</code></h4> <p>需要被替换成远程静态文件服务域名的域名串</p> <h3 id=\"fsr-%E7%9B%B8%E5%85%B3%EF%BC%88%E7%99%BE%E5%BA%A6%E5%86%85%E9%83%A8%E4%BD%BF%E7%94%A8%EF%BC%8C%E5%8F%82%E8%80%83fsr%EF%BC%89\"><a class=\"header-anchor\" href=\"#fsr-%E7%9B%B8%E5%85%B3%EF%BC%88%E7%99%BE%E5%BA%A6%E5%86%85%E9%83%A8%E4%BD%BF%E7%94%A8%EF%BC%8C%E5%8F%82%E8%80%83fsr%EF%BC%89\">#</a> fsr 相关（百度内部使用，参考<a href=\"http://agroup.baidu.com/fis/md/article/196978?side=folder\">fsr</a>）</h3> <h4 id=\"disablefsr\"><a class=\"header-anchor\" href=\"#disablefsr\">#</a> <code>disableFsr</code></h4> <p>是否禁用 fsr 安全部署服务，值为 true 或 false，默认是 false ，使用 fsr 安全部署服务（除百度内部外，此字段必须设置为 true）</p> <h4 id=\"host\"><a class=\"header-anchor\" href=\"#host\">#</a> <code>host</code></h4> <p>配置此项前提是，disableFsr 为 false，启用了 fsr 安全部署服务，用于替换原来的 reciever 配置，拼接成该此项设置的域名。</p> <h6 id=\"%E4%BE%8B%E5%A6%82\"><a class=\"header-anchor\" href=\"#%E4%BE%8B%E5%A6%82\">#</a> <strong><em>例如</em></strong></h6> <pre class=\"language-bash\"><code class=\"language-bash\"><span class=\"token comment\"># 环境配置文件 .env.production</span>\n<span class=\"token assign-left variable\">SAN_REMOTE_XIAOMING_DISABLE_FSR</span><span class=\"token operator\">=</span>true\n<span class=\"token assign-left variable\">SAN_REMOTE_XIAOMING_RECEIVER</span><span class=\"token operator\">=</span>http://www.xiaoming.com:8080/receiver.php\n<span class=\"token assign-left variable\">SAN_REMOTE_XIAOMING_TEMPLATE_PATH</span><span class=\"token operator\">=</span>/home/work/nginx_static/html/test/template\n<span class=\"token assign-left variable\">SAN_REMOTE_XIAOMING_STATIC_PATH</span><span class=\"token operator\">=</span>/home/work/nginx_static/html/test/static\n<span class=\"token assign-left variable\">SAN_REMOTE_XIAOMING_STATIC_DOMAIN</span><span class=\"token operator\">=</span>http://test.bdstatic.com:8888\n<span class=\"token assign-left variable\">SAN_REMOTE_XIAOMING_BASE_URL</span><span class=\"token operator\">=</span>http://www.cdnstatic.com\n<span class=\"token assign-left variable\">SAN_REMOTE_XIAOMING_HOST</span><span class=\"token operator\">=</span>http://www.xiaoming.com:8080\n\n<span class=\"token comment\"># 执行</span>\nsan build --remote xiaoming</code></pre> <div class=\"warning\"><p class=\"info-title\">上例解读</p> <ol> <li>命名规则 <strong>SAN_REMOTE_（ remote-name 名称大写）_ (参数名称大写，驼峰处改用下划线分割)</strong>；</li> <li>将 tpl、js、css 文件代码中 http://www.cdnstatic.com 替换成 http://test.bdstatic.com:8888 。</li> </ol> </div> <h2 id=\"%E7%AE%80%E5%8D%95%E8%AF%B4%E5%AE%9E%E7%8E%B0\"><a class=\"header-anchor\" href=\"#%E7%AE%80%E5%8D%95%E8%AF%B4%E5%AE%9E%E7%8E%B0\">#</a> 简单说实现</h2> <p>使用<a href=\"https://github.com/jinzhan/deploy-files\">deploy-files</a>插件。</p> <p>安装 deploy-files：</p> <pre class=\"language-bash\"><code class=\"language-bash\"><span class=\"token function\">npm</span> i deploy-files</code></pre> <h3 id=\"%E5%86%99%E6%B3%95%E5%BC%95%E5%85%A5%E6%96%B9%E5%BC%8F\"><a class=\"header-anchor\" href=\"#%E5%86%99%E6%B3%95%E5%BC%95%E5%85%A5%E6%96%B9%E5%BC%8F\">#</a> 写法引入方式</h3> <p>webpack 插件方式使用引入：</p> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\">const</span> DeployPlugin <span class=\"token operator\">=</span> <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'deploy-files/webpack-plugin'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre> <p>方式一：webpack 链式使用方式</p> <pre class=\"language-js\"><code class=\"language-js\">chainConfig<span class=\"token punctuation\">.</span><span class=\"token function\">plugin</span><span class=\"token punctuation\">(</span><span class=\"token string\">'deploy-files'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">use</span><span class=\"token punctuation\">(</span>DeployPlugin<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">[</span>remoteObj<span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre> <p>方式二：webpack Config 中配置 plugins</p> <pre class=\"language-js\"><code class=\"language-js\">plugins<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token operator\">...</span><span class=\"token punctuation\">,</span>\n    <span class=\"token keyword\">new</span> <span class=\"token class-name\">DeployPlugin</span><span class=\"token punctuation\">(</span>remoteObj<span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">]</span></code></pre> <div class=\"warning\"> <p>remoteObj 即为上方部署中的相关配置参数。</p> </div> </div></div> ";
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
        "title": "环境配置",
        "hash": "%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE"
      }, {
        "level": 2,
        "title": "参数配置",
        "hash": "%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE",
        "children": [{
          "level": 3,
          "title": "基础参数",
          "hash": "%E5%9F%BA%E7%A1%80%E5%8F%82%E6%95%B0"
        }, {
          "level": 3,
          "title": "静态域名替换相关",
          "hash": "%E9%9D%99%E6%80%81%E5%9F%9F%E5%90%8D%E6%9B%BF%E6%8D%A2%E7%9B%B8%E5%85%B3"
        }, {
          "level": 3,
          "title": "fsr 相关（百度内部使用，参考fsr）",
          "hash": "fsr-%E7%9B%B8%E5%85%B3%EF%BC%88%E7%99%BE%E5%BA%A6%E5%86%85%E9%83%A8%E4%BD%BF%E7%94%A8%EF%BC%8C%E5%8F%82%E8%80%83fsr%EF%BC%89"
        }]
      }, {
        "level": 2,
        "title": "简单说实现",
        "hash": "%E7%AE%80%E5%8D%95%E8%AF%B4%E5%AE%9E%E7%8E%B0",
        "children": [{
          "level": 3,
          "title": "写法引入方式",
          "hash": "%E5%86%99%E6%B3%95%E5%BC%95%E5%85%A5%E6%96%B9%E5%BC%8F"
        }]
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

        var template = __webpack_require__(129);
        
        var script = __webpack_require__(28).default;
        module.exports = __webpack_require__(28);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

/******/ });