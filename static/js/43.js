(window.webpackJsonp=window.webpackJsonp||[]).push([[43,24],{135:function(e,n,c){var o=c(1),t=c(97),a=c(36).default;e.exports=c(36),e.exports.default=o(a,t,[])},36:function(e,n,c){"use strict";c.r(n),function(e){c.d(n,"default",(function(){return s}));var o,t,a,d=c(0);class s extends d.a{inited(){e.hub&&e.hub.fire&&e.hub.fire("changed",{level:0})}}a={},(t="components")in(o=s)?Object.defineProperty(o,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[t]=a}.call(this,c(2))},4:function(e,n,c){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(n.hash&&(e+=n.hash),n.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e)}},97:function(e,n,c){var o=' <div class="content"><div class="markdown"><h1 id="%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86"><a class="header-anchor" href="#%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86">#</a> 配置管理</h1> <p><code>San CLI</code> 的配置文件为<code>san.config.js</code>，该文件放在项目的根目录下，当执行 <code>San CLI</code> 命令时，<code>San CLI</code> 会自动读取<code>san.config.js</code>的内容，在项目创建后，首先需要修改<code>san.config.js</code>来配置文件打包等选项。<code>San CLI UI</code> 将配置的每一项转换为表单，同时将配置项的语义直观的展示在页面，无需查找文档，直接在<code>San CLI UI</code>中修改表单，保存后即可看到<code>san.config.js</code>对应位置的修改。</p> <p>在<code>San CLI UI</code>中，通过配置管理来集中查看、修改项目的各种配置文件。默认的可进行管理的配置文件有 san 项目配置文件和 eslint 配置文件。当然也支持用户定义其他可配置项，配置的自定义参见插件开发部分。</p> <img src="'+c(4)(c(98))+'" style="width:80%;max-width:1000px"/> </div></div> ';e.exports=o},98:function(e,n,c){"use strict";c.r(n),n.default=c.p+"static/img/configuration.png"}}]);