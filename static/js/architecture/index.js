!function(n){function a(a){for(var e,c,p=a[0],i=a[1],l=a[2],r=0,d=[];r<p.length;r++)c=p[r],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(n[e]=i[e]);for(u&&u(a);d.length;)d.shift()();return t.push.apply(t,l||[]),s()}function s(){for(var n,a=0;a<t.length;a++){for(var s=t[a],e=!0,p=1;p<s.length;p++){var i=s[p];0!==o[i]&&(e=!1)}e&&(t.splice(a--,1),n=c(c.s=s[0]))}return n}var e={},o={2:0},t=[];function c(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return n[a].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(){return Promise.resolve()},c.m=n,c.c=e,c.d=function(n,a,s){c.o(n,a)||Object.defineProperty(n,a,{enumerable:!0,get:s})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,a){if(1&a&&(n=c(n)),8&a)return n;if(4&a&&"object"==typeof n&&n&&n.__esModule)return n;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:n}),2&a&&"string"!=typeof n)for(var e in n)c.d(s,e,function(a){return n[a]}.bind(null,e));return s},c.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(a,"a",a),a},c.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},c.p="/san-cli/";var p=window.webpackJsonp=window.webpackJsonp||[],i=p.push.bind(p);p.push=a,p=p.slice();for(var l=0;l<p.length;l++)a(p[l]);var u=i;t.push([125,0]),s()}({125:function(n,a,s){var e=s(1),o=s(74),t=s(26).default;n.exports=s(26),n.exports.default=e(t,o,[])},26:function(n,a,s){"use strict";s.r(a),function(n){s.d(a,"default",(function(){return p}));var e,o,t,c=s(0);class p extends c.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:2,title:"核心模块介绍",hash:"%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D",children:[{level:3,title:"san-cli-utils 重点方法介绍",hash:"san-cli-utils-%E9%87%8D%E7%82%B9%E6%96%B9%E6%B3%95%E4%BB%8B%E7%BB%8D"},{level:3,title:"san-cli-webpack 模块介绍",hash:"san-cli-webpack-%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D"}]},{level:2,title:"核心概念介绍",hash:"%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5%E4%BB%8B%E7%BB%8D"},{level:2,title:"主流程：命令行实现",hash:"%E4%B8%BB%E6%B5%81%E7%A8%8B%EF%BC%9A%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%AE%9E%E7%8E%B0"},{level:2,title:"san-cli-init：脚手架实现",hash:"san-cli-init%EF%BC%9A%E8%84%9A%E6%89%8B%E6%9E%B6%E5%AE%9E%E7%8E%B0"},{level:2,title:"插件机制",hash:"%E6%8F%92%E4%BB%B6%E6%9C%BA%E5%88%B6",children:[{level:3,title:"Command 插件",hash:"command-%E6%8F%92%E4%BB%B6"},{level:3,title:"Service",hash:"service"}]}]})}}t={},(o="components")in(e=p)?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t}.call(this,s(2))},74:function(n,a,s){var e=s(4),o=s(75),t=s(76),c=s(77),p=s(78),i=' <div class="content"><div class="markdown"><h1 id="%E5%86%85%E9%83%A8%E5%AE%9E%E7%8E%B0"><a class="header-anchor" href="#%E5%86%85%E9%83%A8%E5%AE%9E%E7%8E%B0">#</a> 内部实现</h1> <p>San CLI 是一个命令行工具，其次它是一个内置 Webpack 的前端工程化构建工具。San CLI 在架构设计上采取了微核心和插件化的设计思想，我们可以通过插件机制添加命令行命令，还可以通过插件机制定制 Webpack 构建工具，从而满足不同 San 环境的前端工程化需求。</p> <p>San CLI 在兼顾 San 生态的同时，尽量做到通用化配置，在设计之初，我们希望不局限于 San 的应用范畴，做可定制化的前端开发工具集。</p> <p>下面分别从模块、命令行实现、脚手架和插件机制四大方面来介绍下 San CLI 的内部实现。</p> <h2 id="%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D"><a class="header-anchor" href="#%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D">#</a> 核心模块介绍</h2> <p>San CLI 的核心模块包含：</p> <ul> <li>san-cli：核心模块，负责整合整个工作流程和实现核心功能</li> <li>san-cli-utils：工具类</li> <li>san-cli-service：service 层</li> <li>san-cli-webpack：webpack build 和 dev-server 通用逻辑和 webpack 自研插件等</li> <li>san-cli-init：init 命令，脚手架</li> <li>san-loader：<code>.san</code>文件 webpack loader</li> <li>san-hot-loader：给 san 组件添加 HMR 功能</li> <li>san-cli-plugin-*：对应 service 的 plugin</li> </ul> <p>结合模块的主流程可以如下图所示：</p> <p><img src="'+e(o)+'" alt=""/></p> <h3 id="san-cli-utils-%E9%87%8D%E7%82%B9%E6%96%B9%E6%B3%95%E4%BB%8B%E7%BB%8D"><a class="header-anchor" href="#san-cli-utils-%E9%87%8D%E7%82%B9%E6%96%B9%E6%B3%95%E4%BB%8B%E7%BB%8D">#</a> san-cli-utils 重点方法介绍</h3> <p>utils 中用的最多的是<code>ttyLogger.js</code>中跟 tty 输出相关的函数，常见的有：</p> <ul> <li>ora</li> <li>chalk</li> <li>logger <ul> <li>log</li> <li>debug</li> <li>info</li> <li>done/success</li> <li>warning/warn</li> <li>error</li> <li>fatal</li> <li>time/timeEnd：用于检测时间段耗时，需要配合<code>DEBUG=san-cli:perf</code>环境变量使用</li> </ul> </li> </ul> <p>San CLI 中的 logger 是通过自定义的 Consola Reporter 实现的，在插件中也可以直接调用这些方法使用。</p> <blockquote> <p>如果要使用彩色突出显示 San CLI 的终端内容，强烈建议使用<code>randomColor.js</code>中的<code>textColor</code>和<code>bgColor</code>两个方法。</p> </blockquote> <h3 id="san-cli-webpack-%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D"><a class="header-anchor" href="#san-cli-webpack-%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D">#</a> san-cli-webpack 模块介绍</h3> <p>为了方便 Webpack 打包命令和 dev-server 相关的代码逻辑复用，我们将<code>build</code>和<code>serve</code>用到的两个方法进行了统一封装。这俩方法是<code>promisify</code>的。除此之外该模块还包含了下面 Webpack 相关插件：</p> <ul> <li><code>lib/formatStats.js</code>：在<code>build</code> 之后分析<code>Stats</code>对象，在终端中输出分析结果；</li> <li><code>lib/HTMLPlugin.js</code>：html-webpack-plugin 的插件，给 html 页面增加打包后的 bundle 和在 head 中增加<code>preload</code>和<code>prefetch</code>的<code>meta</code>；（主要增加对 smarty 的支持）；</li> <li><code>lib/ModernModePlugin.js</code>：modern mode 打包插件；</li> <li><code>lib/SanFriendlyErrorsPlugin.js</code>：扩展 friendly-errors-webpack-plugin 的错误类型，统一终端 log。</li> </ul> <p>另外<code>utils.js</code>里面有一些工具函数可能在二次开发中会用得到。</p> <h2 id="%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5%E4%BB%8B%E7%BB%8D"><a class="header-anchor" href="#%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5%E4%BB%8B%E7%BB%8D">#</a> 核心概念介绍</h2> <p>为了方便理解下面的内容，在介绍 San CLI 的工作流程之前，先介绍下 San CLI 的核心概念：</p> <ol> <li>流程：CLI 的流程分为两段，主流程和 Service 流程； <ol> <li>主流程：<code>index.js</code>的流程，是整个 CLI 的工作流程，如果有自定义的 command，则会执行对应的 handler；如果主流程没有相关命令，则会走到<code>default</code>，<code>default</code>会实例化 Service，进入 Service 流程；</li> <li>Service 流程：CLI 的 Service 层设计，主要进行 Webpack 构建相关的处理逻辑；</li> <li>P.S：<code>build</code>、<code>serve</code>、<code>inspect</code>都是走的 Service 流程。</li> </ol> </li> <li>Command：指的是通过<a href="https://github.com/yargs/yargs/">yargs</a>创建的命令行 bin 工具，它可以通过<code>.sanrc</code>的<code>commands</code>字段对命令进行扩展；</li> <li>Command 插件：指通过给 Command 添加自定义命令的方式，添加 Command 插件，这样的插件可以使用<code>san your_command_name [options]</code>方式在主流程触发；</li> <li>Service：CLI 的 Service 层设计，主要进行 Webpack 构建相关的处理逻辑；</li> <li>Service 插件：Service 层的插件。</li> </ol> <p>主流程通过 command handler 触发 Service 流程，如果存在对应的 command（通过<code>.sanrc</code>扩展） 则会直接在主流程中执行对应的 handle。</p> <h2 id="%E4%B8%BB%E6%B5%81%E7%A8%8B%EF%BC%9A%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%AE%9E%E7%8E%B0"><a class="header-anchor" href="#%E4%B8%BB%E6%B5%81%E7%A8%8B%EF%BC%9A%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%AE%9E%E7%8E%B0">#</a> 主流程：命令行实现</h2> <p>San CLI 的命令行使用了<a href="https://github.com/yargs/yargs/">yargs</a>。在<code>lib/commander.js</code>中，创建一个 yargs 实例，通过中间件机制添加了常用的方法和属性到<code>argv</code>对象中，方便下游 handler 直接使用。</p> <p>整个 CLI 的工作流程在<code>index.js</code>中，大致流程如下：</p> <ol> <li>检查 node 版本；</li> <li>添加最新版本检查器；</li> <li>调用<code>lib/command.js</code>创建 Command 实例 cli： <ol> <li>添加全局 option</li> <li>添加中间件： <ol> <li>设置全局 <code>logLevel</code></li> <li>设置<code>NODE_ENV</code>环境变量</li> <li>给 <code>argv</code>添加日志等属性方法</li> </ol> </li> </ol> </li> <li>加载内部命令：<code>init</code>、<code>build</code>、<code>serve</code>、<code>inspect</code>和<code>default</code>： <ol> <li><code>default</code>中定义没被直接定义的命令会走 Service 层的 Command 实现</li> <li><code>default</code>中会实例化 Service，然后执行<code>Service.run(commandName, argv)</code></li> </ol> </li> <li>加载<code>.sanrc</code>文件 <ol> <li>添加<code>.sanrc</code>中的 command，实现 CLI 的命令行插件</li> <li>将<code>.sanrc</code>中跟 Service 相关配置通过 Command 中间件添加到 <code>argv</code>对象</li> </ol> </li> <li>触发<code>process.argv</code>解析执行，开始 CLI 的正式执行。</li> </ol> <p><img src="'+e(t)+'" alt=""/></p> <h2 id="san-cli-init%EF%BC%9A%E8%84%9A%E6%89%8B%E6%9E%B6%E5%AE%9E%E7%8E%B0"><a class="header-anchor" href="#san-cli-init%EF%BC%9A%E8%84%9A%E6%89%8B%E6%9E%B6%E5%AE%9E%E7%8E%B0">#</a> san-cli-init：脚手架实现</h2> <p>项目脚手架初始化是在<code>san-cli-init</code>中实现的，原理是通过 git 命令拉取对应 github/icode/gitlab 等脚手架模板的 repo 到本地，然后使用<a href="https://github.com/gulpjs/vinyl-fs">vinyl-fs</a>依次将文件进行处理后生成项目代码。</p> <p><code>san-cli-init</code>的核心是一个<code>TaskList</code>类，通过四步串行任务完成：</p> <ol> <li>检查目录和离线包状态：检查模板的本地路径和离线包是否可用；</li> <li>下载项目脚手架模板：从 github 等线上下载模板到 user-home 的模板缓存路径；</li> <li>生成项目目录结构：使用<code>vinyl-fs</code>把模板从缓存目录遍历处理到对应的项目目录；</li> <li>安装项目依赖：询问是否安装<code>package.json</code>的依赖。</li> </ol> <h2 id="%E6%8F%92%E4%BB%B6%E6%9C%BA%E5%88%B6"><a class="header-anchor" href="#%E6%8F%92%E4%BB%B6%E6%9C%BA%E5%88%B6">#</a> 插件机制</h2> <p>San CLI 支持 Command 插件和 Service 插件。</p> <h3 id="command-%E6%8F%92%E4%BB%B6"><a class="header-anchor" href="#command-%E6%8F%92%E4%BB%B6">#</a> Command 插件</h3> <p>San CLI 的命令行插件指的是通过配置<code>.sanrc</code>的<code>commands</code>字段，给 CLI 添加自定义 Command，这里添加的 Command 可以通过<code>san your_command_name [options]</code>方式使用。</p> <p>Command 的插件需要遵循 yargs command module 规范，即按照下面的写法：</p> <pre class="language-js"><code class="language-js"><span class="token comment">// Commander 定义</span>\n<span class="token comment">// name</span>\nexports<span class="token punctuation">.</span>command <span class="token operator">=</span> <span class="token string">\'your_command_name [your_option]\'</span><span class="token punctuation">;</span>\n<span class="token comment">// description</span>\nexports<span class="token punctuation">.</span>description <span class="token operator">=</span> <span class="token string">\'command description\'</span><span class="token punctuation">;</span>\n<span class="token comment">// options</span>\nexports<span class="token punctuation">.</span>builder <span class="token operator">=</span> <span class="token punctuation">{</span>\n    option1<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        type<span class="token operator">:</span> <span class="token string">\'boolean\'</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// handler 接收 commanderAPI 实例 cliAPI</span>\nexports<span class="token punctuation">.</span><span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token parameter">cliAPI</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">setting </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>cliAPI<span class="token punctuation">.</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>cliAPI<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cliAPI<span class="token punctuation">.</span><span class="token function">getPresets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h3 id="service"><a class="header-anchor" href="#service">#</a> Service</h3> <p>San CLI 在实现可扩展 Webpack 配置的设计上，借鉴了 Vue CLI 的 Service 机制。</p> <p>Service 的使用方式如下：</p> <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Service</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token comment">// cwd 目录</span>\n    cwd<span class="token punctuation">,</span>\n    <span class="token comment">// config 文件路径</span>\n    configFile<span class="token punctuation">,</span>\n    <span class="token comment">// 是否 watch</span>\n    watch<span class="token punctuation">,</span>\n    <span class="token comment">// mode production/development</span>\n    mode<span class="token punctuation">,</span>\n    <span class="token comment">// 是否使用内置 Plugin</span>\n    useBuiltInPlugin<span class="token punctuation">,</span>\n    <span class="token comment">// 项目配置，这里是从 sanrc 读取内容传入</span>\n    <span class="token comment">// 优先级比 san.config.js 低</span>\n    projectOptions<span class="token punctuation">,</span>\n    <span class="token comment">// 传入的插件 list</span>\n    plugins<span class="token punctuation">,</span>\n    <span class="token comment">// 是否使用 progress</span>\n    useProgress<span class="token punctuation">,</span>\n    <span class="token comment">// 是否使用 Profiler</span>\n    useProfiler\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 开始执行，执行结果回调，callback 传入 PluginAPI 实例</span>\nservice<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p>现在以<code>san serve</code>命令执行流程为例，讲解下整个工作流程：</p> <ol> <li>首先 CLI 通过主流程的 Command 解析 bin 命令，进入<code>commands/serve</code>的 handler；</li> <li>handler 主要是实例化 Service，实例化会将配置项和插件进行处理</li> <li>然后执行<code>service.run(callback)</code>，进入 service 流程，这部分代码主要在<code>service.run</code>中： <ol> <li><code>loadEnv</code>：加载 env 文件；</li> <li><code>loadProjectOptions</code>：加载<code>san.config.js</code>；</li> <li><code>init</code>：service 启动： <ol> <li>初始化插件，并且依次执行；</li> <li>依次执行 webpackChain 回调栈；</li> <li>依次执行 webpackConfig 回调栈；</li> </ol> </li> </ol> </li> <li>执行 <code>callback</code>。</li> </ol> <p><img src="'+e(c)+'" alt=""/></p> <blockquote> <p><strong>webpackChain 回调栈</strong>存储的是接收<a href="https://github.com/neutrinojs/webpack-chain">webpack-chain</a>格式的 webpack 配置文件的处理函数； <strong>webpackConfig 回调栈</strong>存储的是接受普通 webpack 配置文件对象的处理函数。 P.S：handler 中可以通过 service 插件的 API 获取最终的 webpack config，然后结合<code>san-cli-webpack</code>的<code>build</code>/<code>serve</code>执行对应的打包操作。</p> </blockquote> <h4 id="service-%E6%8F%92%E4%BB%B6"><a class="header-anchor" href="#service-%E6%8F%92%E4%BB%B6">#</a> Service 插件</h4> <p>插件的定义方法如下：</p> <pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    id<span class="token operator">:</span> <span class="token string">\'plugin-id\'</span><span class="token punctuation">,</span>\n    <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">api<span class="token punctuation">,</span> projectOptions<span class="token punctuation">,</span> pluginOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        api<span class="token punctuation">.</span><span class="token function">chainWebpack</span><span class="token punctuation">(</span><span class="token parameter">webpackConfig</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>projectOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            webpackConfig<span class="token punctuation">.</span><span class="token function">entry</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">ui</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h4 id="service-plugin-%E6%B5%81%E7%A8%8B"><a class="header-anchor" href="#service-plugin-%E6%B5%81%E7%A8%8B">#</a> Service Plugin 流程</h4> <p><img src="'+e(p)+'" alt=""/></p> <h4 id="service-%E6%8F%92%E4%BB%B6-api"><a class="header-anchor" href="#service-%E6%8F%92%E4%BB%B6-api">#</a> Service 插件 API</h4> <p>属性：</p> <ul> <li><code>.id</code>：插件 id；</li> <li><code>.service</code>：service 实例；</li> <li><code>.log/logger</code>：日志对象，包含 debug/done/error/warn/log/fatal/trace/time/timeEnd/textColor/bgColor 等；</li> <li><code>.version</code>：San CLI 版本号。</li> </ul> <p>常见方法包括：</p> <ul> <li><code>.isProd()</code>：是不是生产环境打包，<code>process.NODD_ENV===\'production\'</code>；</li> <li><code>.configWebpack(fn)</code>：将<code>fn</code> 压入 webpackConfig 回调栈，<code>fn</code>会在出栈执行时接收 webpackConfig，用于修改 webpack config；</li> <li><code>.chainWebpack(fn)</code>：将<code>fn</code> 压入 webpackChain 回调栈，<code>fn</code>会在出栈执行时接收 chainableConfig，用于 webpack-chain 语法修改 webpack config；</li> <li><code>.resolve(p)</code>：获取 CLI 执行目录的完整路径；</li> <li><code>.getWebpackChainConfig()</code>：获取 webpack-chain 格式的 config；</li> <li><code>.getWebpackConfig([chainableConfig])</code>：将传入的 webpack-chain 格式 config 处理成 webpackConfig 返回；</li> <li><code>.getCwd()</code>：获取 CLI 的执行目录；</li> <li><code>.getVersion()</code>：获取 CLI 版本；</li> <li><code>.getPkg()</code>：获取当前项目<code>package.json</code>内容；</li> <li><code>.addPlugin(plugin, options)</code>：添加插件；</li> <li><code>.middleware()</code>：添加 dev-server 中间件，<strong>这里注意：中间件需要使用 factory 函数返回</strong></li> </ul> <p><strong><code>.middleware()</code>示例：</strong></p> <pre class="language-js"><code class="language-js">api<span class="token punctuation">.</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n    <span class="token comment">// return 一个 Expressjs 中间件</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'hulk-mock-server\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        contentBase<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'./\'</span> <span class="token operator">+</span> outputDir <span class="token operator">+</span> <span class="token string">\'/\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        rootDir<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'./mock\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        processors<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">smarty?router=/template/*&amp;baseDir=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">./</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>outputDir<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/template</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;dataDir=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>\n                __dirname<span class="token punctuation">,</span>\n                <span class="token string">\'./mock/_data_\'</span>\n            <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n        <span class="token punctuation">]</span> <span class="token comment">// eslint-disable-line</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <blockquote> <p>P.S：Service 是继承<code>EventEmitter</code>的，具有事件机制，不过目前还没有使用，sad~。</p> </blockquote> </div></div> ';n.exports=i},75:function(n,a,s){"use strict";s.r(a),a.default=s.p+"static/img/flow.png"},76:function(n,a,s){"use strict";s.r(a),a.default=s.p+"static/img/core-flow.png"},77:function(n,a,s){"use strict";s.r(a),a.default=s.p+"static/img/service-flow.png"},78:function(n,a,s){"use strict";s.r(a),a.default=s.p+"static/img/service-plugin.png"}});