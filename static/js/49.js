(window.webpackJsonp=window.webpackJsonp||[]).push([[49,7],{121:function(e,n,a){var o=a(1),s=a(70),c=a(22).default;e.exports=a(22),e.exports.default=o(c,s,[])},22:function(e,n,a){"use strict";a.r(n),function(e){a.d(n,"default",(function(){return l}));var o,s,c,t=a(0);class l extends t.a{inited(){e.hub&&e.hub.fire&&e.hub.fire("changed",{level:0,children:[{level:2,title:"组件开发",hash:"%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91"}]})}}c={},(s="components")in(o=l)?Object.defineProperty(o,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[s]=c}.call(this,a(2))},70:function(e,n){e.exports=' <div class="content"><div class="markdown"><h1 id="san-component-%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91"><a class="header-anchor" href="#san-component-%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91">#</a> San Component 组件开发</h1> <blockquote> <p>组件要求是不涉及具体业务的逻辑、粒度合理的单元。</p> </blockquote> <p>一般来讲，组件分为项目公共组件、全局组件和页面级别组件三类。</p> <ul> <li>公共组件：通过 npm 维护，项目使用<code>package.json</code>引入</li> <li>全局组件：放到项目的<code>src/components/</code>，主要是全局性的，或通用性很强的组件，具备良好的封装性</li> <li>页面级别组件：放在页面的<code>pages/*/components</code>下面维护，仅限本页面内使用</li> </ul> <div class="warning"> <p>百度公司内部更加详细的组件开发规范或者开发 Nano 组件，请参考 <a href="http://hulk.baidu-int.com/docs/nano">Nano 组件库</a>规范！</p> </div> <h2 id="%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91"><a class="header-anchor" href="#%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91">#</a> 组件开发</h2> <p>组件项目目录结构可以将自己团队的 Component 规范<a href="./create-scaffold.md">创建一个脚手架</a>，然后使用 San CLI 的<code>init</code>命令在对应的组件路径中创建一个组件项目结构：</p> <pre class="language-bash"><code class="language-bash">san init component-scaffold <span class="token operator">&lt;</span>folder-name<span class="token operator">></span></code></pre> <p>例如我们的 Component 目录结构如下：</p> <pre class="language-text"><code class="language-text">├── README.md          # 组件介绍\n├── __tests__          # 测试相关\n│   └── index.spec.js\n├── docs               # 文档相关\n│   ├── basic.md\n│   └── index.js\n├── index.js\n├── package.json\n└── style\n    └── index.less</code></pre> </div></div> '}}]);