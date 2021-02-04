(window.webpackJsonp=window.webpackJsonp||[]).push([[66,31],{130:function(a,e,n){var s=n(1),c=n(83),o=n(31).default;a.exports=n(31),a.exports.default=s(o,c,[])},31:function(a,e,n){"use strict";n.r(e),function(a){n.d(e,"default",(function(){return d}));var s,c,o,l=n(0);class d extends l.a{inited(){a.hub&&a.hub.fire&&a.hub.fire("changed",{level:0,children:[{level:2,title:"安装",hash:"%E5%AE%89%E8%A3%85"},{level:2,title:"使用",hash:"%E4%BD%BF%E7%94%A8"},{level:2,title:"特点",hash:"%E7%89%B9%E7%82%B9"}]})}}o={},(c="components")in(s=d)?Object.defineProperty(s,c,{value:o,enumerable:!0,configurable:!0,writable:!0}):s[c]=o}.call(this,n(2))},83:function(a,e){a.exports=' <div class="content"><div class="markdown"><h1 id="san-cli-ui"><a class="header-anchor" href="#san-cli-ui">#</a> San CLI UI</h1> <p><code>San CLI UI</code>是<code>San CLI</code>的图形化操作界面，实现<code>San CLI</code>工程项目的可视化管理；<code>San CLI UI</code>的功能定位是一款可视化的项目管理和构建的工具，在设计之初借鉴了业界比较优秀的可视化工具<a href="https://cli.vuejs.org/dev-guide/ui-api.html">Vue-CLI-UI</a>和<a href="https://github.com/kitze/JSUI">JSUI</a>的功能设计，以期更加适应用户的使用习惯，降低接入门槛，带来更好的使用体验，进而令工具更广泛地传播。</p> <p>其次，<code>San CLI UI</code>附加了插件化设计，使得<code>San CLI UI</code>在功能增强的基础上更易于扩展，为更多功能集成提供了可能。随着插件建设的丰富，比如集成各种构建流程、小工具等，最终目标实现千人千面的个性化工作台，用户无需辗转各种网站工具，可以在<code>San CLI UI</code>处理一切工作相关的事情。</p> <h2 id="%E5%AE%89%E8%A3%85"><a class="header-anchor" href="#%E5%AE%89%E8%A3%85">#</a> 安装</h2> <p>作为<code>San CLI</code>的图形化界面，安装<code>san-cli@3</code>以上版本即可尽情享用。</p> <p>!&gt; 使用<code>San CLI UI</code>功能，请尽量保证 Node.js 版本 <code>&gt;= 10.13.0</code>。</p> <p>全局安装<code>San CLI</code></p> <pre class="language-bash"><code class="language-bash"><span class="token comment"># use npm </span>\n<span class="token operator">></span> <span class="token function">npm</span> <span class="token function">install</span> -g san-cli\n\n<span class="token comment"># or use yarn </span>\n<span class="token operator">></span> <span class="token function">yarn</span> global <span class="token function">add</span> san-cli</code></pre> <h2 id="%E4%BD%BF%E7%94%A8"><a class="header-anchor" href="#%E4%BD%BF%E7%94%A8">#</a> 使用</h2> <p>执行命令启动工作台</p> <pre class="language-bash"><code class="language-bash"><span class="token operator">></span> san ui</code></pre> <p>在打开一个浏览器窗口体验<code>San CLI UI</code>的功能。</p> <h2 id="%E7%89%B9%E7%82%B9"><a class="header-anchor" href="#%E7%89%B9%E7%82%B9">#</a> 特点</h2> <p>基于<code>San CLI UI</code>的图形化和插件化，可以概括以下特点：</p> <ul> <li>操作简单，新手友好</li> <li>可视化操作</li> <li>集成项目管理</li> <li>自带配置语义</li> <li>构建过程更直观</li> <li>自定义工具集</li> </ul> </div></div> '}}]);