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
/******/ 		28: 0,
/******/ 		73: 0
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
/******/ 	deferredModules.push([85,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 145:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"addon%E7%BB%84%E4%BB%B6\"><a class=\"header-anchor\" href=\"#addon%E7%BB%84%E4%BB%B6\">#</a> addon组件</h1> <h2 id=\"addon%E7%BB%84%E4%BB%B6%E7%9A%84%E5%AE%9A%E4%B9%89\"><a class=\"header-anchor\" href=\"#addon%E7%BB%84%E4%BB%B6%E7%9A%84%E5%AE%9A%E4%B9%89\">#</a> addon组件的定义</h2> <p><strong>addon组件</strong>：是一个动态加载到cli-ui的js包，其结构满足CLI插件的默认包结构。项目的仪表盘内显示的部件widget、任务内的显示视图view等，都称为addon，均以单独的npm包形式存在。</p> <p>外部addon的，主要借助两个api实现在cli ui内的显示：</p> <ol> <li><code>api.registerAddon</code>：注册一个addon，定义加载的addon id及路径。</li> <li><code>api.registerWidget</code>/<code>api.registerTask</code>：注册一个widget组件/view组件，用于将自定义组件加载到dashboard/task视图内。</li> </ol> <h2 id=\"addon%E6%8C%82%E8%BD%BD%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%AD%A5%E9%AA%A4\"><a class=\"header-anchor\" href=\"#addon%E6%8C%82%E8%BD%BD%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%AD%A5%E9%AA%A4\">#</a> addon挂载的基本步骤</h2> <ul> <li>创建：创建一个addon的项目，可以为单独的npm包或者在已有的插件内增加</li> <li>实现：编写index.js实现自定义组件，通过cli ui提供的<code>ClientAddonApi</code>将组件定义挂载到全局</li> <li>注册：在ui.js文件中调用<code>api.addClientAddon</code>指定构建后的js包加载路径</li> <li>显示：在ui.js文件中调用指定api挂载到指定视图内，例如api.registerWidget注册组件到dashboard</li> </ul> <p>在开发addon组件过程中，会涉及到以下api：</p> <ul> <li><code>api.registerAddon</code>：addon组件注册</li> <li><code>api.registerWidget</code>：widget部件注册</li> <li><code>api.callAction</code>：事件调用</li> <li><code>api.onAction</code>：事件监听</li> <li><code>ClientAddonApi.defineComponent</code>：组件定义</li> <li><code>ClientAddonApi.addLocales</code>：组件扩展语言</li> </ul> <p>接下来以实际例子来展示插件的开发过程。</p> <h2 id=\"dashboard%E6%8E%A5%E5%85%A5%E8%87%AA%E5%AE%9A%E4%B9%89%E9%83%A8%E4%BB%B6widget\"><a class=\"header-anchor\" href=\"#dashboard%E6%8E%A5%E5%85%A5%E8%87%AA%E5%AE%9A%E4%B9%89%E9%83%A8%E4%BB%B6widget\">#</a> Dashboard接入自定义部件widget</h2> <p>cli ui提供了将自定义组件挂载到项目仪表盘的方式，通过此功能，你可以定制属于自己的个性仪表盘，也可将小工具分享给更多的人使用。</p> <p>接下来以一个逐步讲解一个新增自定义widget部件的过程，这里以图片压缩小部件<code>san-cli-ui-widget-tiny-image</code>为例，点击下文的链接可随时点击查看源码。</p> <h3 id=\"1.-%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAaddon%E7%BB%84%E4%BB%B6%E7%9A%84%E5%B7%A5%E7%A8%8B\"><a class=\"header-anchor\" href=\"#1.-%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAaddon%E7%BB%84%E4%BB%B6%E7%9A%84%E5%B7%A5%E7%A8%8B\">#</a> 1. 创建一个addon组件的工程</h3> <p>推荐使用san cli创建一个新的项目，作为开发依赖安装san-cli-ui，在san.config.js中填写如下内容（<a href=\"https://github.com/amazing-js/san-cli-ui-widget-tiny-image/blob/master/san.config.js\">demo参考</a>）：</p> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\">const</span> clientAddonConfig <span class=\"token operator\">=</span> <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'san-cli-ui/client-addon-config'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nmodule<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token operator\">...</span><span class=\"token function\">clientAddonConfig</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        id<span class=\"token operator\">:</span> <span class=\"token string\">'san.webpack.client-addon.widget.tiny-image'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// 名称唯一</span>\n        port<span class=\"token operator\">:</span> <span class=\"token number\">8891</span> <span class=\"token comment\">// 端口可变</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <blockquote> <p>注意：id应设置正确的命名，且在所有插件中保持唯一</p> </blockquote> <p>通过<code>clientAddonConfig</code>可生成san.config.js的默认配置，打包出的代码输出到<code>./dist/index.js</code>。</p> <p>demo目录结构如下：</p> <pre class=\"language-js\"><code class=\"language-js\">san<span class=\"token operator\">-</span>cli<span class=\"token operator\">-</span>ui<span class=\"token operator\">-</span>widget<span class=\"token operator\">-</span>tiny<span class=\"token operator\">-</span>image\n├── <span class=\"token constant\">README</span><span class=\"token punctuation\">.</span>md\n├── src\n      ├──components\n│     └── index<span class=\"token punctuation\">.</span>js\n├── <span class=\"token keyword\">package</span><span class=\"token punctuation\">.</span>json\n├── san<span class=\"token punctuation\">.</span>config<span class=\"token punctuation\">.</span>js\n└── ui<span class=\"token punctuation\">.</span>js         <span class=\"token comment\">// San UI 集成（这里存放插件的配置信息）</span></code></pre> <p>在开发环境下可以运行<code>npm run serve</code>，发布时运行<code>npm run build</code>。</p> <h3 id=\"2.-%E5%AE%9E%E7%8E%B0\"><a class=\"header-anchor\" href=\"#2.-%E5%AE%9E%E7%8E%B0\">#</a> 2. 实现</h3> <p>实现自定义组件，在src/index.js中，通过cli ui提供的ClientAddonApi将组件定义挂载到全局，打开文件中的<a href=\"https://github.com/amazing-js/san-cli-ui-widget-tiny-image/blob/master/src/index.js\"><code>src/index.js</code></a></p> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\">import</span> TinyImage <span class=\"token keyword\">from</span> <span class=\"token string\">'./components/tiny-image'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> locales <span class=\"token keyword\">from</span> <span class=\"token string\">'./locales.json'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\">/* global ClientAddonApi */</span>\n<span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>window<span class=\"token punctuation\">.</span>ClientAddonApi<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// 扩展语言文案</span>\n    ClientAddonApi<span class=\"token punctuation\">.</span><span class=\"token function\">addLocales</span><span class=\"token punctuation\">(</span>locales<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token comment\">// 注册一个自定义组件</span>\n    ClientAddonApi<span class=\"token punctuation\">.</span><span class=\"token function\">defineComponent</span><span class=\"token punctuation\">(</span><span class=\"token string\">'san.widgets.components.tiny-image'</span><span class=\"token punctuation\">,</span> TinyImage<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span></code></pre> <blockquote> <p>注意：ClientAddonApi.defineComponent注册的id值在所有插件中唯一</p> </blockquote> <h3 id=\"3.-%E6%B3%A8%E5%86%8C\"><a class=\"header-anchor\" href=\"#3.-%E6%B3%A8%E5%86%8C\">#</a> 3. 注册</h3> <p>在<a href=\"https://github.com/amazing-js/san-cli-ui-widget-tiny-image/blob/master/ui.js\"><code>ui.js</code></a>中，使用 <code>api.addClientAddon</code> 方法并指定构建后加载的id和路径：</p> <pre class=\"language-js\"><code class=\"language-js\">\nmodule<span class=\"token punctuation\">.</span><span class=\"token function-variable function\">exports</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">api</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>process<span class=\"token punctuation\">.</span>env<span class=\"token punctuation\">.</span><span class=\"token constant\">SAN_CLI_UI_DEV</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span> <span class=\"token comment\">// 自定义的环境变量，在开发环境下</span>\n        api<span class=\"token punctuation\">.</span><span class=\"token function\">registerAddon</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n            id<span class=\"token operator\">:</span> <span class=\"token string\">'san.widgets.client-addon.dev1'</span><span class=\"token punctuation\">,</span>\n            url<span class=\"token operator\">:</span> <span class=\"token string\">'http://localhost:8891/index.js'</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">else</span> <span class=\"token punctuation\">{</span>\n        api<span class=\"token punctuation\">.</span><span class=\"token function\">registerAddon</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n            id<span class=\"token operator\">:</span> <span class=\"token string\">'san.widgets.tiny-image.client-addon'</span><span class=\"token punctuation\">,</span>\n            path<span class=\"token operator\">:</span> <span class=\"token string\">'san-cli-ui-widget-tiny-image'</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre> <p>可以在开发环境指定id和url，在正式环境指定npm包内的构建后的dist路径</p> <blockquote> <p>注意：此处开发环境的url端口应与第一步中san.config.js的port端口相同</p> </blockquote> <h3 id=\"4.-%E6%98%BE%E7%A4%BA\"><a class=\"header-anchor\" href=\"#4.-%E6%98%BE%E7%A4%BA\">#</a> 4. 显示</h3> <p>加载路径配置完毕，可以继续配置自定义的部件在显示位置，在<a href=\"https://github.com/amazing-js/san-cli-ui-widget-tiny-image/blob/master/ui.js\">ui.js</a>中，通过调用<code>api.registerWidget</code>来定义显示到dashboard的组件</p> <pre class=\"language-js\"><code class=\"language-js\">\t <span class=\"token comment\">// tiny-image</span>\n    api<span class=\"token punctuation\">.</span><span class=\"token function\">registerWidget</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        id<span class=\"token operator\">:</span> <span class=\"token string\">'san.widgets.tiny-image'</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">'san-cli-ui-widget-tiny-image.title'</span><span class=\"token punctuation\">,</span>\n        description<span class=\"token operator\">:</span> <span class=\"token string\">'san-cli-ui-widget-tiny-image.description'</span><span class=\"token punctuation\">,</span>\n        icon<span class=\"token operator\">:</span> <span class=\"token string\">'file-image'</span><span class=\"token punctuation\">,</span>\n        component<span class=\"token operator\">:</span> <span class=\"token string\">'san.widgets.components.tiny-image'</span><span class=\"token punctuation\">,</span>\n        minWidth<span class=\"token operator\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n        minHeight<span class=\"token operator\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n        maxWidth<span class=\"token operator\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n        maxHeight<span class=\"token operator\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n        maxCount<span class=\"token operator\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n        <span class=\"token comment\">// 增加压缩选项配置</span>\n        <span class=\"token function-variable function\">defaultConfig</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n            quality<span class=\"token operator\">:</span> <span class=\"token number\">0.8</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token keyword\">async</span> <span class=\"token function\">onConfigOpen</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n                prompts<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n                    <span class=\"token punctuation\">{</span>\n                        name<span class=\"token operator\">:</span> <span class=\"token string\">'quality'</span><span class=\"token punctuation\">,</span>\n                        type<span class=\"token operator\">:</span> <span class=\"token string\">'input'</span><span class=\"token punctuation\">,</span>\n                        message<span class=\"token operator\">:</span> <span class=\"token string\">'san-cli-ui-widget-tiny-image.prompts.quality'</span><span class=\"token punctuation\">,</span>\n                        <span class=\"token function-variable function\">validate</span><span class=\"token operator\">:</span> <span class=\"token parameter\">input</span> <span class=\"token operator\">=></span> <span class=\"token operator\">!</span><span class=\"token operator\">!</span>input\n                    <span class=\"token punctuation\">}</span>\n                <span class=\"token punctuation\">]</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre> <p>还可使用<code>api.onAction</code>用于监听组件内的事件，组件内的调用方式，例如（具体说明见<a href=\"https://ecomfe.github.io/san-cli/#/ui/start\">文档</a>）：</p> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>results<span class=\"token punctuation\">,</span> errors<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">await</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">$callPluginAction</span><span class=\"token punctuation\">(</span><span class=\"token string\">'san.widgets.actions.fetch-news'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    url<span class=\"token operator\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">get</span><span class=\"token punctuation\">(</span><span class=\"token string\">'widget.config.url'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    force\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre> <p>以上就是一个 addon 代码，注册了 <code>san.widgets.tiny-image</code> 组件</p> <h3 id=\"5.-%E5%9C%A8%E9%A1%B9%E7%9B%AE%E4%B8%AD%E5%8A%A0%E8%BD%BD%E5%8F%8A%E8%B0%83%E8%AF%95\"><a class=\"header-anchor\" href=\"#5.-%E5%9C%A8%E9%A1%B9%E7%9B%AE%E4%B8%AD%E5%8A%A0%E8%BD%BD%E5%8F%8A%E8%B0%83%E8%AF%95\">#</a> 5. 在项目中加载及调试</h3> <p><strong>原理</strong>：在每个安装好的 san-cli 插件里，cli-ui 都会尝试从其插件的根目录加载一个可选的 <code>ui.js</code> 文件。在插件的tab下安装的npm包，会将插件安装到具体项目的依赖中，plugin初始化查找时，会遍历package.json中的dependencies和devDependencies，找到插件后会读取<code>ui.js</code>进而加载新的插件。</p> <ol> <li> <p>插件包中执行<code>npm run start</code>启动插件本地服务</p> </li> <li> <p>由于已经安装的san-cli-ui是生产环境，因此需要对插件的ui.js进行修改：</p> <pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\">.</span><span class=\"token function-variable function\">exports</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">api</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// 直接加载本地调试端口地址，调试完成后再恢复</span>\n    api<span class=\"token punctuation\">.</span><span class=\"token function\">registerAddon</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        id<span class=\"token operator\">:</span> <span class=\"token string\">'san.widgets.client-addon.dev1'</span><span class=\"token punctuation\">,</span>\n        url<span class=\"token operator\">:</span> <span class=\"token string\">'http://localhost:8891/index.js'</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span></code></pre> </li> <li> <p>使得san-li可以加载到插件的ui.js配置，有两种方案选择其一即可：</p> <ul> <li> <p>通过san cli依赖读取：在cli打开的san项目对应的package.json的依赖中手动加入新包的名字，在项目的node_modules下增加新包文件夹，只需包含刚才修改的 <code>ui.js</code> 文件即可，目的是确保CLI在读取依赖时，可以读取到新增组件的配置，之后重启项目</p> </li> <li> <p>通过san cli ui读取默认插件配置：在san-cli依赖的包中找到san-cli-ui目录，修改<code>/xxx/san-cli/node_modules/san-cli-ui/plugins/index.js</code>，此文件为san cli ui的内置插件，增加待调试的插件配置项：</p> <pre class=\"language-js\"><code class=\"language-js\">module<span class=\"token punctuation\">.</span><span class=\"token function-variable function\">exports</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">api</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token operator\">...</span>\n    <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/xxx/san-cli-plugin-tools/ui'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>api<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// 引入新的npm包配置</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> </li> </ul> <p>以上任选一种只需确保cli ui可以读取到新包的ui配置即可</p> </li> </ol> <p>调试完毕后，恢复<code>ui.js</code> 的配置，执行<code>npm run build</code> + <code>npm publish</code>完成包的发布。在<code>san ui</code>的插件管理中搜索并安装插件即可。</p> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 44:
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
        "title": "addon组件的定义",
        "hash": "addon%E7%BB%84%E4%BB%B6%E7%9A%84%E5%AE%9A%E4%B9%89"
      }, {
        "level": 2,
        "title": "addon挂载的基本步骤",
        "hash": "addon%E6%8C%82%E8%BD%BD%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%AD%A5%E9%AA%A4"
      }, {
        "level": 2,
        "title": "Dashboard接入自定义部件widget",
        "hash": "dashboard%E6%8E%A5%E5%85%A5%E8%87%AA%E5%AE%9A%E4%B9%89%E9%83%A8%E4%BB%B6widget",
        "children": [{
          "level": 3,
          "title": "1. 创建一个addon组件的工程",
          "hash": "1.-%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAaddon%E7%BB%84%E4%BB%B6%E7%9A%84%E5%B7%A5%E7%A8%8B"
        }, {
          "level": 3,
          "title": "2. 实现",
          "hash": "2.-%E5%AE%9E%E7%8E%B0"
        }, {
          "level": 3,
          "title": "3. 注册",
          "hash": "3.-%E6%B3%A8%E5%86%8C"
        }, {
          "level": 3,
          "title": "4. 显示",
          "hash": "4.-%E6%98%BE%E7%A4%BA"
        }, {
          "level": 3,
          "title": "5. 在项目中加载及调试",
          "hash": "5.-%E5%9C%A8%E9%A1%B9%E7%9B%AE%E4%B8%AD%E5%8A%A0%E8%BD%BD%E5%8F%8A%E8%B0%83%E8%AF%95"
        }]
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        var injectStyles = [];

        var template = __webpack_require__(145);
        
        var script = __webpack_require__(44).default;
        module.exports = __webpack_require__(44);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

/******/ });