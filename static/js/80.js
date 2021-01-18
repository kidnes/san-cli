(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80,40],{

/***/ 167:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"cli-ui-%E6%8F%92%E4%BB%B6\"><a class=\"header-anchor\" href=\"#cli-ui-%E6%8F%92%E4%BB%B6\">#</a> CLI UI 插件</h1> <p>CLI插件是一个 npm 包，能够为 San CLI 创建的项目添加额外的功能。</p> <h2 id=\"%E6%8F%92%E4%BB%B6%E7%9A%84%E5%91%BD%E5%90%8D%E5%8F%8Anpm%E5%8C%85%E5%9F%BA%E6%9C%AC%E7%BB%93%E6%9E%84\"><a class=\"header-anchor\" href=\"#%E6%8F%92%E4%BB%B6%E7%9A%84%E5%91%BD%E5%90%8D%E5%8F%8Anpm%E5%8C%85%E5%9F%BA%E6%9C%AC%E7%BB%93%E6%9E%84\">#</a> 插件的命名及npm包基本结构</h2> <h3 id=\"%E5%91%BD%E5%90%8D\"><a class=\"header-anchor\" href=\"#%E5%91%BD%E5%90%8D\">#</a> 命名</h3> <p>为便于识别，组件应以<code>san-cli-plugin-&lt;name&gt;</code>作为的格式命名，这样做不仅便于cli识别，同时便于其他开发者搜索发现</p> <blockquote> <p><strong>note</strong>：创建新插件时需保证名称正确且不重复，使得插件可以正确安装和搜索使用</p> </blockquote> <h3 id=\"%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84\"><a class=\"header-anchor\" href=\"#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84\">#</a> 目录结构</h3> <p>如下所示，除满足一个npm包的基本要求外，每个插件需要包含一个ui.js文件，用于导出插件的相关配置信息</p> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token punctuation\">.</span>\n├── <span class=\"token constant\">README</span><span class=\"token punctuation\">.</span>md\n├── src\n│    └── index<span class=\"token punctuation\">.</span>js\n├── <span class=\"token keyword\">package</span><span class=\"token punctuation\">.</span>json\n└── ui<span class=\"token punctuation\">.</span>js         <span class=\"token comment\">// San UI 集成（这里存放插件的配置信息）</span></code></pre> <p>其中package.json中的以下字段，请尽量全部填写</p> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token punctuation\">{</span>\n  <span class=\"token string\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"san-cli-plugin-tools\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"version\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"0.0.2\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"description\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"san cli ui addon tools\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token operator\">...</span>\n<span class=\"token punctuation\">}</span></code></pre> <p>demo可供参考，地址如下：https://github.com/amazing-js/san-cli-plugin-tools</p> <h2 id=\"ui.js%E6%96%87%E4%BB%B6%E9%85%8D%E7%BD%AE\"><a class=\"header-anchor\" href=\"#ui.js%E6%96%87%E4%BB%B6%E9%85%8D%E7%BD%AE\">#</a> UI.js文件配置</h2> <p>在每个安装好的 san-cli 插件里，cli-ui 都会尝试从其插件的根目录加载一个可选的 <code>ui.js</code> 文件。(也可以使用文件夹形式，例如 <code>ui/index.js</code>)。</p> <p>该文件应该导出一个函数，函数会以 API 对象作为第一个参数：</p> <pre class=\"language-javascript\"><code class=\"language-javascript\">module<span class=\"token punctuation\">.</span><span class=\"token function-variable function\">exports</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">api</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\">// 在这里使用 API...</span>\n<span class=\"token punctuation\">}</span></code></pre> <p>其中api由cli ui传入，为PluginManager的实例，所有插件的扩展功能均基于此函数实现，例如：<code>api.registerConfig</code> 注册配置项、<code>api.registerWidget</code>注册widget部件、<code>api.registerAddon</code>客户端addon等。下文将重点介绍PluginManager对象及其方法</p> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 53:
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
        "title": "插件的命名及npm包基本结构",
        "hash": "%E6%8F%92%E4%BB%B6%E7%9A%84%E5%91%BD%E5%90%8D%E5%8F%8Anpm%E5%8C%85%E5%9F%BA%E6%9C%AC%E7%BB%93%E6%9E%84",
        "children": [{
          "level": 3,
          "title": "命名",
          "hash": "%E5%91%BD%E5%90%8D"
        }, {
          "level": 3,
          "title": "目录结构",
          "hash": "%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84"
        }]
      }, {
        "level": 2,
        "title": "UI.js文件配置",
        "hash": "ui.js%E6%96%87%E4%BB%B6%E9%85%8D%E7%BD%AE"
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(167);
        
        var script = __webpack_require__(53).default;
        module.exports = __webpack_require__(53);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);