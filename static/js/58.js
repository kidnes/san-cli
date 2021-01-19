(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58,12],{

/***/ 130:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E5%88%9D%E5%A7%8B%E5%8C%96%E9%A1%B9%E7%9B%AE\"><a class=\"header-anchor\" href=\"#%E5%88%9D%E5%A7%8B%E5%8C%96%E9%A1%B9%E7%9B%AE\">#</a> 初始化项目</h1> <h2 id=\"%E6%B2%A1%E6%9C%89%E5%AE%89%E8%A3%85-san-cli-%E9%9C%80%E8%A6%81%E5%AE%89%E8%A3%85\"><a class=\"header-anchor\" href=\"#%E6%B2%A1%E6%9C%89%E5%AE%89%E8%A3%85-san-cli-%E9%9C%80%E8%A6%81%E5%AE%89%E8%A3%85\">#</a> 没有安装 San-CLI 需要安装</h2> <pre class=\"language-bash\"><code class=\"language-bash\"><span class=\"token function\">npm</span> i -g san-cli</code></pre> <h2 id=\"%E5%BF%AB%E9%80%9F%E5%88%9B%E5%BB%BA\"><a class=\"header-anchor\" href=\"#%E5%BF%AB%E9%80%9F%E5%88%9B%E5%BB%BA\">#</a> 快速创建</h2> <pre class=\"language-bash\"><code class=\"language-bash\">san init <span class=\"token operator\">&lt;</span>app-name<span class=\"token operator\">></span></code></pre> <blockquote> <ol> <li>创建的是 san 项目。</li> <li>app-name 是要创建的工程项目目录，可以为<code>.</code>（即在当前目录下创建）。</li> </ol> </blockquote> <h2 id=\"%E6%8C%87%E5%AE%9A%E8%84%9A%E6%89%8B%E6%9E%B6%E5%88%9B%E5%BB%BA\"><a class=\"header-anchor\" href=\"#%E6%8C%87%E5%AE%9A%E8%84%9A%E6%89%8B%E6%9E%B6%E5%88%9B%E5%BB%BA\">#</a> 指定脚手架创建</h2> <pre class=\"language-bash\"><code class=\"language-bash\">san init <span class=\"token operator\">&lt;</span>template<span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>app-name<span class=\"token operator\">></span></code></pre> <blockquote> <ol> <li>template 是工程项目脚手架地址，支持 github、icode、gitlab 等 repo 作为脚手架直接创建项目，并且可以指定 template 的 alias，详见下方的 <strong>san remote</strong></li> <li>为了方便，我们创建了一个 San 的基础脚手架 ksky521/san-project，不指定脚手架创建时（即快速创建时），用的就是这个基础脚手架。</li> </ol> </blockquote> <h3 id=\"%E4%BE%8B%E5%A6%82\"><a class=\"header-anchor\" href=\"#%E4%BE%8B%E5%A6%82\">#</a> 例如</h3> <pre class=\"language-bash\"><code class=\"language-bash\"><span class=\"token comment\"># 1. 支持传入完整repo地址:</span>\nsan init ksky521/san-project demo\n<span class=\"token comment\"># 下面的示例请换成自己的地址和 username</span>\nsan init https://github.com/ksky521/san-project.git demo\n<span class=\"token comment\"># 下面的示例请换成自己的地址和 username (百度内部建议使用如下模板地址)</span>\nsan init ssh://<span class=\"token variable\">${username}</span>@icode.baidu.com:8235/baidu/hulk/san-project-base demo\n<span class=\"token comment\"># 2. 默认是从 github repo 安装</span>\n<span class=\"token comment\"># 所以 git@github.com:ksky521/simple.git 这个 repo到 demo 文件，可以使用：</span>\nsan init simple demo\n<span class=\"token comment\">#  3. 支持 github，icode，gitlab 等简写方式</span>\nsan init github:ksky521/san-project demo\nsan init icode:baidu/hulk/san-project-base demo\nsan init coding:ksky521/san-project demo\n<span class=\"token comment\"># 4. 分支写法</span>\nsan init template<span class=\"token comment\">#branch demo</span>\n<span class=\"token comment\"># 5. 项目生成在当前目录</span>\nsan init template<span class=\"token comment\">#branch .</span></code></pre> <h2 id=\"init-%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E\"><a class=\"header-anchor\" href=\"#init-%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E\">#</a> <code>init</code> 参数说明</h2> <ul> <li><code>--useCache，--cache</code> 优先使用本地已经下载过的脚手架缓存</li> <li><code>--install</code> 初始化成功后，进入目录安装依赖</li> <li><code>--offline</code> 标示 template 是离线脚手架</li> <li><code>--force</code> 跳过提醒，强制删除已存在的目录，默认会提醒</li> <li><code>--username，--u</code> 指定 Git 用户名，默认：git</li> <li><code>--registry</code> 设置 npm registry</li> </ul> <h2 id=\"%E4%BD%BF%E7%94%A8-remote-%E7%AE%A1%E7%90%86%E8%84%9A%E6%89%8B%E6%9E%B6%E6%A8%A1%E6%9D%BF%E5%88%AB%E5%90%8D\"><a class=\"header-anchor\" href=\"#%E4%BD%BF%E7%94%A8-remote-%E7%AE%A1%E7%90%86%E8%84%9A%E6%89%8B%E6%9E%B6%E6%A8%A1%E6%9D%BF%E5%88%AB%E5%90%8D\">#</a> 使用 remote 管理脚手架模板别名</h2> <p>初始化的时候，项目脚手架路径较长，不容易记忆，可以使用 remote 命令来管理脚手架模板的别名。remote 方法包括三个：</p> <ul> <li>add：添加</li> <li>remove/rm：删除，</li> <li>list/ls：列出脚手架模板 alias</li> </ul> <h4 id=\"1.-%E6%B7%BB%E5%8A%A0%E4%B8%80%E7%BB%84-alias\"><a class=\"header-anchor\" href=\"#1.-%E6%B7%BB%E5%8A%A0%E4%B8%80%E7%BB%84-alias\">#</a> 1. 添加一组 alias</h4> <pre class=\"language-bash\"><code class=\"language-bash\"><span class=\"token comment\"># 基本语法</span>\nsan remote <span class=\"token function\">add</span> <span class=\"token operator\">&lt;</span>name<span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>url<span class=\"token operator\">></span></code></pre> <h6 id=\"%E4%BE%8B%E5%A6%82-2\"><a class=\"header-anchor\" href=\"#%E4%BE%8B%E5%A6%82-2\">#</a> <strong><em>例如</em></strong></h6> <pre class=\"language-bash\"><code class=\"language-bash\">san remote <span class=\"token function\">add</span> hello github:yyt/HelloWorld\nsan remote <span class=\"token function\">add</span> project ssh://git@icode.baidu.com:8235/baidu/hulk/san-project-base</code></pre> <h4 id=\"2.-%E7%A7%BB%E9%99%A4%E4%B8%80%E7%BB%84-alias\"><a class=\"header-anchor\" href=\"#2.-%E7%A7%BB%E9%99%A4%E4%B8%80%E7%BB%84-alias\">#</a> 2. 移除一组 alias</h4> <pre class=\"language-bash\"><code class=\"language-bash\">san remote remove <span class=\"token operator\">&lt;</span>name<span class=\"token operator\">></span></code></pre> <p>从预设文件中将你输入的映射的关系移除</p> <h6 id=\"%E4%BE%8B%E5%A6%82-3\"><a class=\"header-anchor\" href=\"#%E4%BE%8B%E5%A6%82-3\">#</a> <strong><em>例如</em></strong></h6> <pre class=\"language-bash\"><code class=\"language-bash\">san remote <span class=\"token function\">rm</span> hello</code></pre> <h4 id=\"3.-%E6%9F%A5%E7%9C%8B-alias-%E5%88%97%E8%A1%A8\"><a class=\"header-anchor\" href=\"#3.-%E6%9F%A5%E7%9C%8B-alias-%E5%88%97%E8%A1%A8\">#</a> 3. 查看 alias 列表</h4> <pre class=\"language-bash\"><code class=\"language-bash\">san remote list</code></pre> <p>查看目前的映射关系表</p> <h6 id=\"%E4%BE%8B%E5%A6%82-4\"><a class=\"header-anchor\" href=\"#%E4%BE%8B%E5%A6%82-4\">#</a> <strong>例如</strong></h6> <pre class=\"language-bash\"><code class=\"language-bash\">san remote list\n<span class=\"token comment\"># or</span>\nsan remote <span class=\"token function\">ls</span></code></pre> <p>更多类似用法和配置方式查看<a href=\"/presets.md\">预设文件</a>。</p> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 29:
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        var injectStyles = [];

        var template = __webpack_require__(130);
        
        var script = __webpack_require__(29).default;
        module.exports = __webpack_require__(29);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);