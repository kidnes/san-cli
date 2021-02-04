(window.webpackJsonp=window.webpackJsonp||[]).push([[57,16],{127:function(e,a,n){var i=n(1),c=n(80),d=n(28).default;e.exports=n(28),e.exports.default=i(d,c,[])},28:function(e,a,n){"use strict";n.r(a),function(e){n.d(a,"default",(function(){return l}));var i,c,d,o=n(0);class l extends o.a{inited(){e.hub&&e.hub.fire&&e.hub.fire("changed",{level:0,children:[{level:3,title:"深入阅读",hash:"%E6%B7%B1%E5%85%A5%E9%98%85%E8%AF%BB"}]})}}d={},(c="components")in(i=l)?Object.defineProperty(i,c,{value:d,enumerable:!0,configurable:!0,writable:!0}):i[c]=d}.call(this,n(2))},80:function(e,a){e.exports=' <div class="content"><div class="markdown"><h1 id="%E6%8F%92%E4%BB%B6"><a class="header-anchor" href="#%E6%8F%92%E4%BB%B6">#</a> 插件</h1> <p>San CLI 是灵活可扩展的，我们可以通过编写插件来扩展 San CLI 的功能。San CLI 的插件分为两类：</p> <ul> <li>Command 插件：命令行插件，指通过给 Command 添加自定义命令的方式，添加 Command 插件，这样的插件可以使用<code>san your_command_name [options]</code>方式在主流程触发；</li> <li>Service 插件：Service 层的插件，用于对 Webpack 构建流程进行扩展。</li> </ul> <div class="warning"> <p>Command 插件在执行时机上要比 Service 插件更加提前，并且在读取 <code>san.config.js</code> 之前；而 Service 插件主要是针对 Webpack 相关的，会加载内置 Webpack 配置和<code>san.config.js</code>配置。</p> </div> <h3 id="%E6%B7%B1%E5%85%A5%E9%98%85%E8%AF%BB"><a class="header-anchor" href="#%E6%B7%B1%E5%85%A5%E9%98%85%E8%AF%BB">#</a> 深入阅读</h3> <ul> <li><a href="/cmd-plugin.md">Command 插件</a></li> <li><a href="/srv-plugin.md">Service 插件</a></li> </ul> </div></div> '}}]);