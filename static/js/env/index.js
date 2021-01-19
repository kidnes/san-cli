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
/******/ 		18: 0,
/******/ 		64: 0
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

/***/ 133:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F\"><a class=\"header-anchor\" href=\"#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F\">#</a> 环境变量</h1> <p>San CLI 会按照下面的优先级在<strong>项目的根目录</strong>中读取环境变量：</p> <pre class=\"language-text\"><code class=\"language-text\">.env.${mode}.local\n.env.${mode}\n.env.local\n.env</code></pre> <blockquote> <p>mode 取值范围为<code>production</code>和<code>development</code>。</p> </blockquote> <p><code>.env</code>文件内的格式为每行一个键值对数据，举例如下：</p> <pre class=\"language-text\"><code class=\"language-text\">ONE=1\nSAN_VAR_TRUE=true</code></pre> <p>在<code>.env</code>的键值对 San CLI 会根据优先级进行合并，然后复制给<code>process.env</code>。例如上面的赋值之后结果是<code>process.env.ONE=1</code>。<code>.env</code>文件的读取是在加载<code>san.config.js</code>之前的，所以在<code>san.config.js</code>中可以直接使用<code>.env</code>文件设置的<code>process.env</code>变量。</p> <p><strong>注意</strong>：对于<code>NODE_ENV</code>和<code>BABEL_ENV</code>这两个 webpack 和 Babel 用到的环境变量，如果<code>.env</code>中不指定，则会根据<code>build</code>或者<code>serve</code>命令的<code>--mode</code>来指定。</p> <p>环境变量除了上面的功能之外，还可以做一些其他的用法使用，比如在插件中可以使用<code>.env</code>中指定的环境变量，也可以在前端代码中使用环境变量的赋值。</p> <h2 id=\"build%E5%91%BD%E4%BB%A4%E4%B8%AD%E4%BD%BF%E7%94%A8%E8%BF%9C%E7%A8%8B%E9%83%A8%E7%BD%B2---remote-%E7%9A%84%E9%85%8D%E7%BD%AE%E9%A1%B9\"><a class=\"header-anchor\" href=\"#build%E5%91%BD%E4%BB%A4%E4%B8%AD%E4%BD%BF%E7%94%A8%E8%BF%9C%E7%A8%8B%E9%83%A8%E7%BD%B2---remote-%E7%9A%84%E9%85%8D%E7%BD%AE%E9%A1%B9\">#</a> <code>build</code>命令中使用远程部署 <code>--remote</code> 的配置项</h2> <p>在<code>san build</code>命令中，我们可以使用<code>--remote &lt;remote-name&gt;</code>的方式来将构建结果通过<a href=\"https://github.com/jinzhan/deploy-files\">deploy-files</a>插件上传到对应的开发机，方便进行测试和部署。而这里传入的<code>remote-name</code>实际是一个对应的开发机名称，比如小明的开发机可以配置在在<code>.env.production</code>中配置一个<code>xiaoming</code>机器相关的上传数据：</p> <pre class=\"language-bash\"><code class=\"language-bash\"><span class=\"token comment\"># .env.production</span>\n<span class=\"token assign-left variable\">SAN_REMOTE_XIAOMING_RECEIVER</span><span class=\"token operator\">=</span>http://www.xiaoming.com:8080/receiver.php\n<span class=\"token assign-left variable\">SAN_REMOTE_XIAOMING_TEMPLATE_PATH</span><span class=\"token operator\">=</span>/home/work/nginx_static/html/test/template\n<span class=\"token assign-left variable\">SAN_REMOTE_XIAOMING_STATIC_PATH</span><span class=\"token operator\">=</span>/home/work/nginx_static/html/test/static\n<span class=\"token assign-left variable\">SAN_REMOTE_XIAOMING_STATIC_DOMAIN</span><span class=\"token operator\">=</span>http://test.bdstatic.com:8888</code></pre> <p>这样，当我们执行<code>san build --remote xiaoming</code>的时候会自动去寻找<code>.env.production</code>的 remote 配置，打包结束后会调用<code>deploy-files</code>上传数据到自己的开发机。</p> <blockquote> <p>插件中使用环境变量，也可以按照这个思路来用，因为插件的调用也是在加载<code>.env</code>文件之后的。</p> </blockquote> <h2 id=\"%E5%89%8D%E7%AB%AF%E4%BB%A3%E7%A0%81%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E7%9A%84%E8%B5%8B%E5%80%BC\"><a class=\"header-anchor\" href=\"#%E5%89%8D%E7%AB%AF%E4%BB%A3%E7%A0%81%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E7%9A%84%E8%B5%8B%E5%80%BC\">#</a> 前端代码中使用环境变量的赋值</h2> <p>在<code>.env</code>中定义的以<code>SAN_VAR_*</code>开头的变量会被<a href=\"https://webpack.js.org/plugins/define-plugin/\"><code>DefinePlugin</code></a>作为变量直接解析成对应的值，即：</p> <pre class=\"language-bash\"><code class=\"language-bash\"><span class=\"token comment\"># .env 中环境变量设置为</span>\n<span class=\"token assign-left variable\">SAN_VAR_HELLO</span><span class=\"token operator\">=</span>hello</code></pre> <p>则在代码中直接使用<code>console.log(HELLO)</code>会经过编译后会变成<code>console.log('hello')</code>。</p> <div class=\"warning\"> <ol> <li><code>SAN_VAR_*</code>的定义不仅仅是在<code>.env</code>文件中，还可以在其他在打包之前的地方定义，比如在<code>san.config.js</code>中；</li> <li>在代码中可以继续使用类似<code>process.env.NODE_ENV</code>这类变量。</li> </ol> </div> <h2 id=\"%E5%B8%B8%E8%A7%81%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF%E4%B8%BE%E4%BE%8B\"><a class=\"header-anchor\" href=\"#%E5%B8%B8%E8%A7%81%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF%E4%B8%BE%E4%BE%8B\">#</a> 常见应用场景举例</h2> <ol> <li>使用某个常量，需要在线下环境使用不同的变量，例如线下请求的数据接口是后端工程师的一个线下地址，那么可以使用环境变量定义常量；</li> <li>部署代码到自己的开发机，可以将环境变量写到<code>.env.local</code>中，并且将该文件添加到<code>.gitignore</code>中；</li> <li>任何需要在打包之前就计算好得到的变量，可以直接在<code>san.config.js</code>中直接赋值。</li> </ol> </div></div> ";
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
        "title": "build命令中使用远程部署 --remote 的配置项",
        "hash": "build%E5%91%BD%E4%BB%A4%E4%B8%AD%E4%BD%BF%E7%94%A8%E8%BF%9C%E7%A8%8B%E9%83%A8%E7%BD%B2---remote-%E7%9A%84%E9%85%8D%E7%BD%AE%E9%A1%B9"
      }, {
        "level": 2,
        "title": "前端代码中使用环境变量的赋值",
        "hash": "%E5%89%8D%E7%AB%AF%E4%BB%A3%E7%A0%81%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E7%9A%84%E8%B5%8B%E5%80%BC"
      }, {
        "level": 2,
        "title": "常见应用场景举例",
        "hash": "%E5%B8%B8%E8%A7%81%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF%E4%B8%BE%E4%BE%8B"
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

        var template = __webpack_require__(133);
        
        var script = __webpack_require__(32).default;
        module.exports = __webpack_require__(32);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

/******/ });