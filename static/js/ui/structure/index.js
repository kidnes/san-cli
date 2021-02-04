!function(n){function e(e){for(var s,c,p=e[0],i=e[1],r=e[2],d=0,u=[];d<p.length;d++)c=p[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&u.push(o[c][0]),o[c]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s]);for(l&&l(e);u.length;)u.shift()();return t.push.apply(t,r||[]),a()}function a(){for(var n,e=0;e<t.length;e++){for(var a=t[e],s=!0,p=1;p<a.length;p++){var i=a[p];0!==o[i]&&(s=!1)}s&&(t.splice(e--,1),n=c(c.s=a[0]))}return n}var s={},o={33:0},t=[];function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return n[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(){return Promise.resolve()},c.m=n,c.c=s,c.d=function(n,e,a){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var s in n)c.d(a,s,function(e){return n[e]}.bind(null,s));return a},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/san-cli/";var p=window.webpackJsonp=window.webpackJsonp||[],i=p.push.bind(p);p.push=e,p=p.slice();for(var r=0;r<p.length;r++)e(p[r]);var l=i;t.push([137,0]),a()}({102:function(n,e,a){var s=' <div class="content"><div class="markdown"><h1 id="san-cli-ui-%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B"><a class="header-anchor" href="#san-cli-ui-%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B">#</a> San CLI UI 工作流程</h1> <p>在介绍插件开发之前，我们首先了解一下<code>San CLI UI</code>的工作流程。</p> <p><img src="'+a(4)(a(103))+'" alt=""/></p> <p>如图所示<code>San CLI UI</code>数据流程，<code>San CLI UI</code>的架构设计参考了<a href="https://cli.vuejs.org/dev-guide/ui-api.html"><code>Vue CLI UI</code></a>，在实现上整体可以分为三部分：client端（也即浏览器端），server端（服务端），数据存储。前后端的通讯主要通过graphql实现，而插件的加载主要通过插件系统。</p> <p>图的右侧是插件包示意图，插件内主要包含两部分：用于<code>San CLI UI</code>的client端加载的前端组件，以及用于node端读取的ui.js插件配置。在<code>San CLI UI</code>启动后，首先调用plugin初始化方法，加载全部的内置插件及用户开发的插件，在client端通过<code>ClientAddonApi</code>注册并加载对应的组件，在server端则通过pluginManager读取各个插件包内ui.js描述的插件配置，在操作中涉及到对项目的配置，则会操作本地项目进行读取并修改。</p> <h2 id="san-cli-ui%E6%8F%92%E4%BB%B6%E7%B3%BB%E7%BB%9F"><a class="header-anchor" href="#san-cli-ui%E6%8F%92%E4%BB%B6%E7%B3%BB%E7%BB%9F">#</a> San CLI UI插件系统</h2> <p>在<code>San CLI UI</code>中，仪表盘、配置管理、任务管理都是基于插件系统实现的，我们先来了解一下插件系统的相关概念。</p> <h3 id="%E6%8F%92%E4%BB%B6%E7%B3%BB%E7%BB%9F%E7%9A%84%E6%A6%82%E5%BF%B5"><a class="header-anchor" href="#%E6%8F%92%E4%BB%B6%E7%B3%BB%E7%BB%9F%E7%9A%84%E6%A6%82%E5%BF%B5">#</a> 插件系统的概念</h3> <p><strong>定义</strong></p> <p><code>San CLI UI</code>插件是一个动态加载到<code>San CLI UI</code>中的JS包，能够为<code>San CLI UI</code>创建的项目添加额外的功能</p> <p><strong>插件的命名</strong></p> <p>为便于识别，插件包应以<code>san-cli-ui-&lt;type&gt;-&lt;name&gt;</code>作为的格式命名，这样做不仅便于San CLI UI识别，同时便于其他开发者搜索发现。</p> <p><strong>npm包基本结构</strong>：</p> <p>如下所示，除满足一个npm包的基本要求外，每个插件需要包含一个ui.js文件，用于导出插件的相关配置信息</p> <pre class="language-js"><code class="language-js"><span class="token punctuation">.</span>\n├── <span class="token constant">README</span><span class="token punctuation">.</span>md\n├── src\n│    └── index<span class="token punctuation">.</span>js <span class="token comment">// 组件注册</span>\n├── <span class="token keyword">package</span><span class="token punctuation">.</span>json\n└── ui<span class="token punctuation">.</span>js         <span class="token comment">// `San CLI UI` 集成（这里存放插件的配置信息）</span></code></pre> <p>其中最主要的两个文件：</p> <ul> <li>ui.js：用于server端插件的加载定义及描述，包含插件配置及数据操作的逻辑</li> <li>index.js：用于client端组件的定义</li> </ul> <p><strong>San CLI UI插件加载关键</strong></p> <p><code>San CLI UI</code>插件加载依赖于server端和client端的两个对象的配合，首先在server端加载插件的描述，将插件的id及路径返回到client端，client端负责加载并挂载组件到页面：</p> <ul> <li>在server端，由ui.js定义加载各类型插件和路由。通过api.registerAddon定义插件id及加载路径，api.register*定义插件所在视图</li> <li>在client端，由index.js定义挂载到页面的组件。通过ClientAddonApi将组件挂载到页面</li> </ul> <p><strong>ui.js文件配置</strong></p> <p>在每个安装好的 <code>San CLI UI</code> 插件里，<code>San CLI UI</code> 都会尝试从其插件的根目录加载一个可选的 <code>ui.js</code> 文件。(也可以使用文件夹形式，例如 <code>ui/index.js</code>)。</p> <p><code>ui.js</code>主要导出一个函数，函数会以 API 对象作为第一个参数：</p> <pre class="language-javascript"><code class="language-javascript">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token parameter">api</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// 在这里使用 API...</span>\n<span class="token punctuation">}</span></code></pre> <p>其中<code>api</code>由<code>San CLI UI</code>传入，为<code>PluginManager</code>的实例，所有插件的扩展功能都是基于这个对象来实现，例如：<code>api.registerConfig</code> 注册配置项、<code>api.registerWidget</code>注册widget部件、<code>api.registerAddon</code>注册插件id及加载路径等。</p> <p><strong>index.js</strong></p> <p>在用户自定义插件中，index文件主要负责自定义组件的注册，以便后面加载并显示在<code>San CLI UI</code>中，例如欢迎部件的定义：</p> <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> Welcome <span class="token keyword">from</span> <span class="token string">\'./components/welcome/welcome\'</span><span class="token punctuation">;</span>\n<span class="token comment">/* global ClientAddonApi */</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>ClientAddonApi<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    ClientAddonApi<span class="token punctuation">.</span><span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token string">\'san.widgets.components.welcome\'</span><span class="token punctuation">,</span> Welcome<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre> <p>其中<code>ClientAddonApi</code>为ClientAddon的实例，在<code>San CLI UI</code>启动时，通过实例化ClientAddon将ClientAddonApi挂载至全局，供插件加载使用。</p> <p>接下来将逐个讲解服务端对应的<code>PluginManager</code>对象及客户端对应的<code>ClientAddon</code>对象</p> </div></div> ';n.exports=s},103:function(n,e,a){"use strict";a.r(e),e.default=a.p+"static/img/workflow.png"},137:function(n,e,a){var s=a(1),o=a(102),t=a(38).default;n.exports=a(38),n.exports.default=s(t,o,[])},38:function(n,e,a){"use strict";a.r(e),function(n){a.d(e,"default",(function(){return p}));var s,o,t,c=a(0);class p extends c.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:2,title:"San CLI UI插件系统",hash:"san-cli-ui%E6%8F%92%E4%BB%B6%E7%B3%BB%E7%BB%9F",children:[{level:3,title:"插件系统的概念",hash:"%E6%8F%92%E4%BB%B6%E7%B3%BB%E7%BB%9F%E7%9A%84%E6%A6%82%E5%BF%B5"}]}]})}}t={},(o="components")in(s=p)?Object.defineProperty(s,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[o]=t}.call(this,a(2))}});