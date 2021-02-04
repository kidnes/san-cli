!function(t){function e(e){for(var n,l,a=e[0],u=e[1],s=e[2],p=0,f=[];p<a.length;p++)l=a[p],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&f.push(i[l][0]),i[l]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(c&&c(e);f.length;)f.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,a=1;a<r.length;a++){var u=r[a];0!==i[u]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=r[0]))}return t}var n={},i={26:0},o=[];function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(){return Promise.resolve()},l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/san-cli/";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var c=u;o.push([132,0]),r()}({132:function(t,e,r){var n=r(1),i=r(86),o=r(33).default;t.exports=r(33),t.exports.default=n(o,i,[])},33:function(t,e,r){"use strict";r.r(e),function(t){r.d(e,"default",(function(){return a}));var n,i,o,l=r(0);class a extends l.a{inited(){t.hub&&t.hub.fire&&t.hub.fire("changed",{level:0,children:[{level:2,title:"仪表盘",hash:"%E4%BB%AA%E8%A1%A8%E7%9B%98",children:[{level:3,title:"自定义仪表盘",hash:"%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BB%AA%E8%A1%A8%E7%9B%98"}]}]})}}o={},(i="components")in(n=a)?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o}.call(this,r(2))},86:function(t,e,r){var n=r(4),i=r(87),o=r(88),l=r(89),a=r(90),u=' <div class="content"><div class="markdown"><h1 id="%E5%B7%A5%E5%85%B7%E6%89%A9%E5%B1%95"><a class="header-anchor" href="#%E5%B7%A5%E5%85%B7%E6%89%A9%E5%B1%95">#</a> 工具扩展</h1> <p>工具扩展主要体现在项目仪表盘上。</p> <h2 id="%E4%BB%AA%E8%A1%A8%E7%9B%98"><a class="header-anchor" href="#%E4%BB%AA%E8%A1%A8%E7%9B%98">#</a> 仪表盘</h2> <p>在仪表盘，可以找到各种实用的小部件：</p> <ul> <li><strong>欢迎部件</strong>：显示<code>San CLI UI</code>欢迎窗口及简要功能介绍。</li> <li><strong>终止端口</strong>部件：输入本地启动的端口，点击终止即可执行终止本地端口命令。</li> </ul> <p><img src="'+n(i)+'" alt=""/></p> <ul> <li><strong>运行任务</strong>部件：在运行任务部件中，配置一个任务，比如 start 任务，就可以快捷地运行start任务了。“运行任务”部件支持配置多个，也即可以配置多个不同任务同时运行。</li> </ul> <p><img src="'+n(o)+'" alt=""/></p> <ul> <li><strong>新闻</strong>部件：在新闻部件，可以配置喜欢的RSS源直接阅读，无需跳转第三方网站（ 默认配置的 RSS 源是 <a href="https://ecomfe.github.io/atom.xml">https://ecomfe.github.io/atom.xml</a> ）。点击右上角的“全屏”按钮还可以获得最佳的阅读体检。</li> </ul> <p><img src="'+n(l)+'" alt=""/></p> <h3 id="%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BB%AA%E8%A1%A8%E7%9B%98"><a class="header-anchor" href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BB%AA%E8%A1%A8%E7%9B%98">#</a> 自定义仪表盘</h3> <p>点击右上角的“自定义”按钮后，可以进入自定义仪表盘的编辑界面，该界面：</p> <ul> <li>支持增、删、移动小部件，为每个项目定制不同的仪表盘</li> <li>支持通过下载安装或开发等方式增加个性化的小部件</li> </ul> <p><img src="'+n(a)+'" alt=""/></p> <p>可以看到，除了默认的“欢迎”部件和“终止端口”部件，目前还可以添加的部件有“运行任务”部件和“新闻”部件。</p> </div></div> ';t.exports=u},87:function(t,e,r){"use strict";r.r(e),e.default=r.p+"static/img/dashboard.png"},88:function(t,e,r){"use strict";r.r(e),e.default=r.p+"static/img/run-task-widget.png"},89:function(t,e,r){"use strict";r.r(e),e.default=r.p+"static/img/news-widget.png"},90:function(t,e,r){"use strict";r.r(e),e.default=r.p+"static/img/custom-dashboard.png"}});