(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65,19],{

/***/ 134:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"hulk-cli%E5%8D%87%E7%BA%A7san-cli\"><a class=\"header-anchor\" href=\"#hulk-cli%E5%8D%87%E7%BA%A7san-cli\">#</a> hulk-cli升级san-cli</h1> <h2 id=\"%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%8D%87%E7%BA%A7\"><a class=\"header-anchor\" href=\"#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%8D%87%E7%BA%A7\">#</a> 为什么要升级</h2> <p>San CLI 在架构设计上采取了微核心和插件化的设计思想，可以通过插件机制添加命令行命令，还可以通过插件机制定制 Webpack 构建工具，从而满足不同 San 环境的前端工程化需求。<a href=\"/architecture.md\">了解更多</a></p> <p>San CLI的可定制化，让我们和其他优秀开发者一起享受扩展插件、工具带来的开发体验和效率的提升。<a href=\"/plugin.md\">了解更多</a></p> <h2 id=\"%E5%8D%87%E7%BA%A7%E6%AD%A5%E9%AA%A4\"><a class=\"header-anchor\" href=\"#%E5%8D%87%E7%BA%A7%E6%AD%A5%E9%AA%A4\">#</a> 升级步骤</h2> <p>hulk-cli升级到san-cli非常方便，无需修改业务代码，只需要修改<code>package.json</code>和<code>配置文件</code>就能轻松完成升级。</p> <h3 id=\"1.-%E5%9C%A8%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%E5%AE%89%E8%A3%85san-cli%E4%BE%9D%E8%B5%96\"><a class=\"header-anchor\" href=\"#1.-%E5%9C%A8%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%E5%AE%89%E8%A3%85san-cli%E4%BE%9D%E8%B5%96\">#</a> 1. 在项目目录安装san-cli依赖</h3> <p>Install with npm（当然也可以用yarn）:</p> <pre class=\"language-text\"><code class=\"language-text\">npm install san-cli</code></pre> <p>然后，修改 package.json</p> <ol> <li>修改scripts命令：把原来的<code>hulk</code>修改为<code>san</code>;</li> <li>去掉hulk相关依赖：移除<code>@baidu/hulk-cli</code>和<code>@baidu/hulk-mock-server</code>;</li> </ol> <h3 id=\"2.-%E6%A0%B9%E6%8D%AE%E4%BD%A0%E7%9A%84css%E9%A2%84%E5%A4%84%E7%90%86%E8%AF%AD%E8%A8%80%EF%BC%8C%E5%9C%A8%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%E5%AE%89%E8%A3%85%E5%AF%B9%E5%BA%94%E7%9A%84loader\"><a class=\"header-anchor\" href=\"#2.-%E6%A0%B9%E6%8D%AE%E4%BD%A0%E7%9A%84css%E9%A2%84%E5%A4%84%E7%90%86%E8%AF%AD%E8%A8%80%EF%BC%8C%E5%9C%A8%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%E5%AE%89%E8%A3%85%E5%AF%B9%E5%BA%94%E7%9A%84loader\">#</a> 2. 根据你的CSS预处理语言，在项目目录安装对应的loader</h3> <ol> <li>如果使用<code>less</code>，执行</li> </ol> <pre class=\"language-text\"><code class=\"language-text\">npm install less less-loader --save-dev</code></pre> <ol start=\"2\"> <li>如果使用<code>sass</code>，执行</li> </ol> <pre class=\"language-text\"><code class=\"language-text\">npm install sass-loader sass --save-dev</code></pre> <ol start=\"3\"> <li>如果使用<code>stylus</code>，执行</li> </ol> <pre class=\"language-text\"><code class=\"language-text\">npm install stylus stylus-loader --save-dev</code></pre> <h3 id=\"3.-%E4%BF%AE%E6%94%B9%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6\"><a class=\"header-anchor\" href=\"#3.-%E4%BF%AE%E6%94%B9%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6\">#</a> 3. 修改配置文件</h3> <p>把 <code>hulk.config.js</code> 重命名为 <code>san.config.js</code>；</p> <h4 id=\"%E6%B3%A8%E6%84%8F\"><a class=\"header-anchor\" href=\"#%E6%B3%A8%E6%84%8F\">#</a> 注意</h4> <p><code>san-cli</code>默认是不编译node_modules里面的模块，如果你依赖包默认使用es6（如：<code>@baidu/nano</code>），需要把依赖包添加到<code>transpileDependencies</code></p> <pre class=\"language-text\"><code class=\"language-text\">module.exports = {\n    ...\n    \n    transpileDependencies: [&#39;@baidu/nano&#39;, &#39;@baidu/xbox-native&#39;, &#39;@baidu/xbox&#39;],\n\n    ....\n}</code></pre> <h3 id=\"4.-(%E5%8F%AF%E9%80%89)%E6%96%B0%E5%A2%9Epostcss%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6-.postcssrc.js\"><a class=\"header-anchor\" href=\"#4.-(%E5%8F%AF%E9%80%89)%E6%96%B0%E5%A2%9Epostcss%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6-.postcssrc.js\">#</a> 4. (可选)新增postcss配置文件 .postcssrc.js</h3> <ol> <li>为了使用<code>pr</code>单位，配置文件 <code>.postcssrc.js</code> 里要写入以下代码（需要安装<code>postcss-plugin-pr2rem</code>）：</li> </ol> <pre class=\"language-text\"><code class=\"language-text\">// https://github.com/michael-ciniawsky/postcss-load-config\n\nmodule.exports = {\n    &quot;plugins&quot;: {\n        &quot;postcss-plugin-pr2rem&quot;: {\n            // 视觉稿宽度为1242px\n            rootValue: 124.2,\n            unitPrecision: 5\n        }\n    }\n};</code></pre> <ol start=\"2\"> <li>为了自动补全兼容不同厂商浏览器前缀，配置文件 <code>.postcssrc.js</code> 里还要加个<code>autoprefixer</code>（10版本如果有问题，换9版本试试），加完之后的 <code>.postcssrc.js</code> 如下：</li> </ol> <pre class=\"language-text\"><code class=\"language-text\">// https://github.com/michael-ciniawsky/postcss-load-config\n\nmodule.exports = {\n    &quot;plugins&quot;: {\n        &quot;autoprefixer&quot;: {},\n        &quot;postcss-plugin-pr2rem&quot;: {\n            // 视觉稿宽度为1242px\n            rootValue: 124.2,\n            unitPrecision: 5\n        }\n    }\n};</code></pre> <ol start=\"3\"> <li>同时，和 <code>.postcssrc.js</code> 同级的目录要加多一个配置文件 <code>.browserslistrc</code>：</li> </ol> <pre class=\"language-text\"><code class=\"language-text\">defaults\nlast 2 versions\niOS &gt;= 9\nandroid &gt;= 5</code></pre> <p>更多参考：https://browserl.ist</p> <h3 id=\"5.-%E5%90%ABsmarty%E6%A8%A1%E6%9D%BF%E7%9A%84%E9%A1%B9%E7%9B%AE\"><a class=\"header-anchor\" href=\"#5.-%E5%90%ABsmarty%E6%A8%A1%E6%9D%BF%E7%9A%84%E9%A1%B9%E7%9B%AE\">#</a> 5. 含smarty模板的项目</h3> <p>（如果你的项目中未使用到smarty模板，请忽略）</p> <ol> <li>安装并配置 <code>hulk-mock-server</code></li> </ol> <pre class=\"language-text\"><code class=\"language-text\">npm install hulk-mock-server --save-dev</code></pre> <p>修改 <code>san.config.js</code> 配置：</p> <pre class=\"language-text\"><code class=\"language-text\">module.exports = {\n    ...\n    \n     plugins: [{\n        id: &#39;hulk-mock-server&#39;,\n        apply(api) {\n            // 这里使用接管了{output}/template 路径\n            // 详细 hulk mock server 配置说明：https://www.npmjs.com/package/hulk-mock-server\n            api.middleware(() =&gt; require(&#39;hulk-mock-server&#39;)({\n                contentBase: path.join(__dirname, &#39;./&#39; + outputDir + &#39;/&#39;),\n                rootDir: path.join(__dirname, &#39;./mock&#39;),\n                processors: [`smarty?router=/template/*&amp;baseDir=${path.join(__dirname, `./${outputDir}/template`)}&amp;dataDir=${path.join(__dirname, &#39;./mock/_data_&#39;)}`] // eslint-disable-line\n            }));\n        }\n    }],\n\n    ....\n}</code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 33:
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
        "title": "为什么要升级",
        "hash": "%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%8D%87%E7%BA%A7"
      }, {
        "level": 2,
        "title": "升级步骤",
        "hash": "%E5%8D%87%E7%BA%A7%E6%AD%A5%E9%AA%A4",
        "children": [{
          "level": 3,
          "title": "1. 在项目目录安装san-cli依赖",
          "hash": "1.-%E5%9C%A8%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%E5%AE%89%E8%A3%85san-cli%E4%BE%9D%E8%B5%96"
        }, {
          "level": 3,
          "title": "2. 根据你的CSS预处理语言，在项目目录安装对应的loader",
          "hash": "2.-%E6%A0%B9%E6%8D%AE%E4%BD%A0%E7%9A%84css%E9%A2%84%E5%A4%84%E7%90%86%E8%AF%AD%E8%A8%80%EF%BC%8C%E5%9C%A8%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%E5%AE%89%E8%A3%85%E5%AF%B9%E5%BA%94%E7%9A%84loader"
        }, {
          "level": 3,
          "title": "3. 修改配置文件",
          "hash": "3.-%E4%BF%AE%E6%94%B9%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"
        }, {
          "level": 3,
          "title": "4. (可选)新增postcss配置文件 .postcssrc.js",
          "hash": "4.-(%E5%8F%AF%E9%80%89)%E6%96%B0%E5%A2%9Epostcss%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6-.postcssrc.js"
        }, {
          "level": 3,
          "title": "5. 含smarty模板的项目",
          "hash": "5.-%E5%90%ABsmarty%E6%A8%A1%E6%9D%BF%E7%9A%84%E9%A1%B9%E7%9B%AE"
        }]
      }]
    });
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(1);
        var injectStyles = [];

        var template = __webpack_require__(134);
        
        var script = __webpack_require__(33).default;
        module.exports = __webpack_require__(33);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);