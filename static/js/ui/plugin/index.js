!function(e){function t(t){for(var n,a,l=t[0],s=t[1],u=t[2],d=0,p=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(c&&c(t);p.length;)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={29:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(){return Promise.resolve()},a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/san-cli/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;i.push([133,0]),r()}({133:function(e,t,r){var n=r(1),o=r(91),i=r(34).default;e.exports=r(34),e.exports.default=n(i,o,[])},34:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"default",(function(){return l}));var n,o,i,a=r(0);class l extends a.a{inited(){e.hub&&e.hub.fire&&e.hub.fire("changed",{level:0,children:[{level:2,title:"安装插件",hash:"%E5%AE%89%E8%A3%85%E6%8F%92%E4%BB%B6"},{level:2,title:"安装 devtools",hash:"%E5%AE%89%E8%A3%85-devtools"}]})}}i={},(o="components")in(n=l)?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i}.call(this,r(2))},91:function(e,t,r){var n=r(4),o=r(92),i=r(93),a=' <div class="content"><div class="markdown"><h1 id="%E6%8F%92%E4%BB%B6%E7%AE%A1%E7%90%86"><a class="header-anchor" href="#%E6%8F%92%E4%BB%B6%E7%AE%A1%E7%90%86">#</a> 插件管理</h1> <p>在插件管理，可以查看项目已安装的插件列表，也可以在上方的搜索框中搜索项目已安装的插件，然后更新或卸载它们。</p> <img src="'+n(o)+'" style="width:80%;max-width:1000px"/> <h2 id="%E5%AE%89%E8%A3%85%E6%8F%92%E4%BB%B6"><a class="header-anchor" href="#%E5%AE%89%E8%A3%85%E6%8F%92%E4%BB%B6">#</a> 安装插件</h2> <p>点击右上角的“安装插件”按钮后，我们可以浏览所有的插件，这里我们将<code>San CLI</code>插件和<code>San CLI UI</code>插件进行了分类展示，提升搜索效率。</p> <img src="'+n(i)+'" style="width:80%;max-width:1000px"/> <h2 id="%E5%AE%89%E8%A3%85-devtools"><a class="header-anchor" href="#%E5%AE%89%E8%A3%85-devtools">#</a> 安装 devtools</h2> <p>右上角还提供了安装 devtools 的快捷入口。注：devtools 是用于调试 san.js 应用的开发工具。</p> <p>配置和依赖确认完毕后，接下来需要启动本地服务进行调试了。</p> </div></div> ';e.exports=a},92:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/img/plugins.png"},93:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/img/install-plugin.png"}});