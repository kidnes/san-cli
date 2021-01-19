(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55,9],{

/***/ 127:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"command-%E6%8F%92%E4%BB%B6\"><a class=\"header-anchor\" href=\"#command-%E6%8F%92%E4%BB%B6\">#</a> Command 插件</h1> <p>在日常开发中，我们可能需要扩展团队的 CLI 命令，比如给<code>san</code>命令添加一个<code>san deploy</code>命令，用于将代码上传到对应开发机上进行联调，这时候可以直接添加 San CLI 的 Command 插件来实现。</p> <p>San CLI 的脚手架命令就是通过 Command 插件来实现的，详细代码可以参考<a href=\"TODO\">san-cli-init</a>对应的代码。</p> <p>San CLI 的命令行解析是使用的<a href=\"https://github.com/yargs/yargs/\">yargs</a>实现的，Command 插件需要遵循 <a href=\"https://github.com/yargs/yargs/blob/master/docs/api.md#commandmodule\">yargs command module 规范</a>，即按照下面的写法：</p> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token comment\">// 假设我们要给 san 添加一个 your_command_name</span>\nexports<span class=\"token punctuation\">.</span>command <span class=\"token operator\">=</span> <span class=\"token string\">'your_command_name [your_option]'</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\">// 这是命令的描述，or exports.desc</span>\nexports<span class=\"token punctuation\">.</span>describe <span class=\"token operator\">=</span> <span class=\"token string\">'command description'</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\">// 这是命令的别名，即 san alias_cmd === san your_command_name</span>\nexports<span class=\"token punctuation\">.</span>aliases <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'alias_cmd'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\">// 这是命令的 flag 配置</span>\nexports<span class=\"token punctuation\">.</span>builder <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    option1<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">default</span><span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n        type<span class=\"token operator\">:</span> <span class=\"token string\">'boolean'</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\">// builder 还支持函数写法，具体参见：</span>\n<span class=\"token comment\">// 1. https://github.com/yargs/yargs/blob/master/docs/api.md#positionalkey-opt</span>\n<span class=\"token comment\">// 2. https://github.com/yargs/yargs/blob/master/docs/api.md#commandmodule</span>\n<span class=\"token comment\">// 执行命令的 handler，得到 yargs 解析后的 argv 对象</span>\nexports<span class=\"token punctuation\">.</span><span class=\"token function-variable function\">handler</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">argv</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">setting </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>argv<span class=\"token punctuation\">.</span>key<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> to </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>argv<span class=\"token punctuation\">.</span>value<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <h2 id=\"command-%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE\"><a class=\"header-anchor\" href=\"#command-%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE\">#</a> Command 插件配置</h2> <p>将 Command 插件扩展到自己的 San CLI 中有两种方式：预设文件和<code>package.json</code>两种方式。</p> <div class=\"warning\"> <p>预设文件是放到电脑的 home 目录的，而且是全局的，所以个人配置的预设只是自己本人的，而不会影响到团队/项目；如果 Command 放到<code>package.json</code>，那么可以在这里执行 San CLI 命令，则会被执行。</p> </div> <h3 id=\"1.-%E9%A2%84%E8%AE%BE%E6%96%87%E4%BB%B6\"><a class=\"header-anchor\" href=\"#1.-%E9%A2%84%E8%AE%BE%E6%96%87%E4%BB%B6\">#</a> 1. 预设文件</h3> <p>Command 插件可以通过配置<a href=\"./presets.md\">预设文件</a><code>.sanrc</code>的<code>commands</code>字段，给 CLI 添加自定义 Command，这里添加的 Command 可以通过<code>san your_command_name [options]</code>方式使用。</p> <h3 id=\"2.-package.json\"><a class=\"header-anchor\" href=\"#2.-package.json\">#</a> 2. package.json</h3> <p>Command 插件在<code>package.json</code>的配置也有两种方式：依赖和<code>san</code>配置。</p> <ol> <li>如果遵循<code>san-cli-command-xxx</code>的命名方式，并且把依赖（<code>dependencies</code>, <code>devDependencies</code>）添加到项目的<code>package.json</code>那么在该项目中执行对应的 Command 就可以被执行；</li> <li>在<code>package.json</code>中添加<code>san.commands</code>数组，添加自己的 Command 插件路径。</li> </ol> <h2 id=\"command-%E6%8F%92%E4%BB%B6%E4%B8%BE%E4%BE%8B\"><a class=\"header-anchor\" href=\"#command-%E6%8F%92%E4%BB%B6%E4%B8%BE%E4%BE%8B\">#</a> Command 插件举例</h2> <p>下面以给 San CLI 扩展一个<code>hello</code>的命令为例，介绍下具体的代码用法和编写。</p> <p>首先创建一个 js 文件，内容如下：</p> <pre class=\"language-js\"><code class=\"language-js\"><span class=\"token comment\">// filename san-command.js</span>\nexports<span class=\"token punctuation\">.</span>command <span class=\"token operator\">=</span> <span class=\"token string\">'hello'</span><span class=\"token punctuation\">;</span>\nexports<span class=\"token punctuation\">.</span>builder <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    name<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        type<span class=\"token operator\">:</span> <span class=\"token string\">'string'</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\nexports<span class=\"token punctuation\">.</span>desc <span class=\"token operator\">=</span> <span class=\"token string\">'San Command Plugin Demo'</span><span class=\"token punctuation\">;</span>\nexports<span class=\"token punctuation\">.</span><span class=\"token function-variable function\">handler</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">argv</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">hello, </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>argv<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre> <p>然后在<code>package.json</code>中添加配置：</p> <pre class=\"language-json\"><code class=\"language-json\"><span class=\"token comment\">// package.json</span>\n<span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"demo\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token comment\">//下面是扩展配置</span>\n    <span class=\"token property\">\"san\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"commands\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">\"san-command.js\"</span><span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre> <p>这时候执行<code>san hello --name demo</code>就可以看到对应结果。</p> <blockquote> <p>在 San CLI 的项目代码中，san-cli-init 是 Command 插件，可以查看源码实现。</p> </blockquote> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 26:
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
        "title": "Command 插件配置",
        "hash": "command-%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE",
        "children": [{
          "level": 3,
          "title": "1. 预设文件",
          "hash": "1.-%E9%A2%84%E8%AE%BE%E6%96%87%E4%BB%B6"
        }, {
          "level": 3,
          "title": "2. package.json",
          "hash": "2.-package.json"
        }]
      }, {
        "level": 2,
        "title": "Command 插件举例",
        "hash": "command-%E6%8F%92%E4%BB%B6%E4%B8%BE%E4%BE%8B"
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        var injectStyles = [];

        var template = __webpack_require__(127);
        
        var script = __webpack_require__(26).default;
        module.exports = __webpack_require__(26);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);