(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66,21],{

/***/ 135:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E6%9F%A5%E7%9C%8Bwebpack%E5%86%85%E7%BD%AE%E4%BF%A1%E6%81%AF\"><a class=\"header-anchor\" href=\"#%E6%9F%A5%E7%9C%8Bwebpack%E5%86%85%E7%BD%AE%E4%BF%A1%E6%81%AF\">#</a> 查看webpack内置信息</h1> <h2 id=\"%E6%9F%A5%E7%9C%8B-webpack-rule\"><a class=\"header-anchor\" href=\"#%E6%9F%A5%E7%9C%8B-webpack-rule\">#</a> 查看 webpack rule</h2> <h3 id=\"%E6%9F%A5%E7%9C%8B%E6%89%80%E6%9C%89%E5%86%85%E7%BD%AE-webpack-rules-list\"><a class=\"header-anchor\" href=\"#%E6%9F%A5%E7%9C%8B%E6%89%80%E6%9C%89%E5%86%85%E7%BD%AE-webpack-rules-list\">#</a> 查看所有内置 webpack rules list</h3> <pre class=\"language-bash\"><code class=\"language-bash\">san inspect --rules</code></pre> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token punctuation\">[</span>\n  <span class=\"token string\">'san'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'js'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'ejs'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'html'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'svg'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'img'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'media'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'fonts'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'css'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'postcss'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'less'</span>\n<span class=\"token punctuation\">]</span></code></pre> <h3 id=\"%E6%9F%A5%E7%9C%8B%E5%85%B7%E4%BD%93%E5%86%85%E7%BD%AE-webpack-rule-%E4%BF%A1%E6%81%AF\"><a class=\"header-anchor\" href=\"#%E6%9F%A5%E7%9C%8B%E5%85%B7%E4%BD%93%E5%86%85%E7%BD%AE-webpack-rule-%E4%BF%A1%E6%81%AF\">#</a> 查看具体内置 webpack rule 信息</h3> <pre class=\"language-bash\"><code class=\"language-bash\">san inspect --rule postcss</code></pre> <h2 id=\"%E6%9F%A5%E7%9C%8B-webpack-plugin\"><a class=\"header-anchor\" href=\"#%E6%9F%A5%E7%9C%8B-webpack-plugin\">#</a> 查看 webpack plugin</h2> <h3 id=\"%E6%9F%A5%E7%9C%8B%E6%89%80%E6%9C%89%E5%86%85%E7%BD%AE-webpack-plugins-list\"><a class=\"header-anchor\" href=\"#%E6%9F%A5%E7%9C%8B%E6%89%80%E6%9C%89%E5%86%85%E7%BD%AE-webpack-plugins-list\">#</a> 查看所有内置 webpack plugins list</h3> <pre class=\"language-bash\"><code class=\"language-bash\">san inspect --plugins</code></pre> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token punctuation\">[</span>\n  <span class=\"token string\">'san'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'case-sensitive-paths'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'define'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'hmr'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'no-emit-on-errors'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'html-index'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'san-html-index'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'html-demo-store'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'san-html-demo-store'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'html-webpack-harddisk-plugin'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'copy-webpack-plugin'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'progress'</span>\n<span class=\"token punctuation\">]</span></code></pre> <h3 id=\"%E6%9F%A5%E7%9C%8B%E5%85%B7%E4%BD%93%E5%86%85%E7%BD%AE-webpack-plugin-%E4%BF%A1%E6%81%AF\"><a class=\"header-anchor\" href=\"#%E6%9F%A5%E7%9C%8B%E5%85%B7%E4%BD%93%E5%86%85%E7%BD%AE-webpack-plugin-%E4%BF%A1%E6%81%AF\">#</a> 查看具体内置 webpack plugin 信息</h3> <pre class=\"language-bash\"><code class=\"language-bash\">san inspect --plugin copy-webpack-plugin</code></pre> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token keyword\">new</span> <span class=\"token class-name\">CopyPlugin</span><span class=\"token punctuation\">(</span>\n  <span class=\"token punctuation\">{</span>\n    patterns<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token function-variable function\">transform</span><span class=\"token operator\">:</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span> <span class=\"token comment\">/* omitted long function */</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token keyword\">from</span><span class=\"token operator\">:</span> <span class=\"token string\">'/Users/baidu/Desktop/baidu/xxx/template'</span><span class=\"token punctuation\">,</span>\n        to<span class=\"token operator\">:</span> <span class=\"token string\">'/Users/baidu/Desktop/baidu/xxx/output/template'</span><span class=\"token punctuation\">,</span>\n        globOptions<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n          ignore<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n            <span class=\"token string\">'index.html'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token string\">'.DS_Store'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token string\">'index/index.tpl'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token string\">'demo-store/index.tpl'</span>\n          <span class=\"token punctuation\">]</span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">)</span></code></pre> </div></div> ";
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
        "title": "查看 webpack rule",
        "hash": "%E6%9F%A5%E7%9C%8B-webpack-rule",
        "children": [{
          "level": 3,
          "title": "查看所有内置 webpack rules list",
          "hash": "%E6%9F%A5%E7%9C%8B%E6%89%80%E6%9C%89%E5%86%85%E7%BD%AE-webpack-rules-list"
        }, {
          "level": 3,
          "title": "查看具体内置 webpack rule 信息",
          "hash": "%E6%9F%A5%E7%9C%8B%E5%85%B7%E4%BD%93%E5%86%85%E7%BD%AE-webpack-rule-%E4%BF%A1%E6%81%AF"
        }]
      }, {
        "level": 2,
        "title": "查看 webpack plugin",
        "hash": "%E6%9F%A5%E7%9C%8B-webpack-plugin",
        "children": [{
          "level": 3,
          "title": "查看所有内置 webpack plugins list",
          "hash": "%E6%9F%A5%E7%9C%8B%E6%89%80%E6%9C%89%E5%86%85%E7%BD%AE-webpack-plugins-list"
        }, {
          "level": 3,
          "title": "查看具体内置 webpack plugin 信息",
          "hash": "%E6%9F%A5%E7%9C%8B%E5%85%B7%E4%BD%93%E5%86%85%E7%BD%AE-webpack-plugin-%E4%BF%A1%E6%81%AF"
        }]
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        var injectStyles = [];

        var template = __webpack_require__(135);
        
        var script = __webpack_require__(34).default;
        module.exports = __webpack_require__(34);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);