(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63,17],{

/***/ 141:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h2 id=\"docit-sanbox-demo\"><a class=\"header-anchor\" href=\"#docit-sanbox-demo\">#</a> Docit Sanbox Demo</h2> <sanbox> ::: #### What's Docit? san docit 命令是放在`packages/san-cli-docit`中实现的，它是一个 Commander 插件，如果要编写自己的 Commander 插件可以参考它的代码。 ::: <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>hello-sanbox<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>hello</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h2</span><span class=\"token punctuation\">></span></span>&#123;&#123;text}}<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h2</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>style</span> <span class=\"token attr-name\">lang</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>less<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token style\"><span class=\"token language-css\">\n    <span class=\"token atrule\"><span class=\"token rule\">@red</span><span class=\"token punctuation\">:</span> red<span class=\"token punctuation\">;</span></span>\n    <span class=\"token selector\">#hello-sanbox</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token selector\">h1</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> 18px<span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n        <span class=\"token selector\">h2</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> 16px<span class=\"token punctuation\">;</span>\n            <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token atrule\"><span class=\"token rule\">@red</span><span class=\"token punctuation\">;</span></span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>style</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n    <span class=\"token keyword\">import</span> Hello <span class=\"token keyword\">from</span> <span class=\"token string\">'./component.js'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token function\">initData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n                text<span class=\"token operator\">:</span> <span class=\"token string\">'Red, Less enabled!'</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            hello<span class=\"token operator\">:</span> Hello\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </sanbox> <h2 id=\"sanbox-%E5%A4%8D%E6%9D%82%E7%8E%A9%E6%B3%95%EF%BC%8C%E9%80%82%E5%90%88%E8%87%AA%E5%AE%9A%E4%B9%89\"><a class=\"header-anchor\" href=\"#sanbox-%E5%A4%8D%E6%9D%82%E7%8E%A9%E6%B3%95%EF%BC%8C%E9%80%82%E5%90%88%E8%87%AA%E5%AE%9A%E4%B9%89\">#</a> Sanbox 复杂玩法，适合自定义</h2> <sanbox> ::: #### 说明 上面的内容是来自`./sanbox.js`，通过 picker 的 loader 单独引入对应模块来展现的。 ::: <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>sanbox-demo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h1</span><span class=\"token punctuation\">></span></span>↓ 来自`?san-md-picker&amp;get=sanbox&amp;eq=0`<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h1</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>sanbox</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>hr</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h1</span><span class=\"token punctuation\">></span></span>↓ 来自`?san-md-picker&amp;get=text-tag&amp;eq=0`<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h1</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>text-tag</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>hr</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h1</span><span class=\"token punctuation\">></span></span>↓ 来自`?san-md-picker&amp;get=highlight-code&amp;eq=0`<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h1</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>highlight-code</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>hr</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h1</span><span class=\"token punctuation\">></span></span>↓ 来自`?san-md-picker&amp;get=san-component&amp;eq=0`<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h1</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>san-code</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>style</span> <span class=\"token attr-name\">lang</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>less<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token style\"><span class=\"token language-css\">\n    <span class=\"token atrule\"><span class=\"token rule\">@red</span><span class=\"token punctuation\">:</span> red<span class=\"token punctuation\">;</span></span>\n    <span class=\"token selector\">.markdown .sanbox-demo</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token selector\">h1</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> 16px<span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>style</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n    <span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Sanbox<span class=\"token punctuation\">,</span> TextTag<span class=\"token punctuation\">,</span> HighlightCode<span class=\"token punctuation\">,</span> SanCode<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'./sanbox.js'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token function\">initData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            sanbox<span class=\"token operator\">:</span> Sanbox<span class=\"token punctuation\">,</span>\n            <span class=\"token string\">'text-tag'</span><span class=\"token operator\">:</span> TextTag<span class=\"token punctuation\">,</span>\n            <span class=\"token string\">'highlight-code'</span><span class=\"token operator\">:</span> HighlightCode<span class=\"token punctuation\">,</span>\n            <span class=\"token string\">'san-code'</span><span class=\"token operator\">:</span> SanCode\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </sanbox> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 40:
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
        "title": "Docit Sanbox Demo",
        "hash": "docit-sanbox-demo"
      }, {
        "level": 2,
        "title": "Sanbox 复杂玩法，适合自定义",
        "hash": "sanbox-%E5%A4%8D%E6%9D%82%E7%8E%A9%E6%B3%95%EF%BC%8C%E9%80%82%E5%90%88%E8%87%AA%E5%AE%9A%E4%B9%89"
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(141);
        
        var script = __webpack_require__(40).default;
        module.exports = __webpack_require__(40);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);