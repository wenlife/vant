import{o as a,a as t,z as n}from"./vue-libs-be453a05.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>IndexBar</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used for indexed sorting display and quick positioning of lists.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">IndexBar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">IndexBar</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">IndexAnchor</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-index-bar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-index-anchor</span> <span class="hljs-attr">index</span>=<span class="hljs-string">&quot;A&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">van-index-anchor</span> <span class="hljs-attr">index</span>=<span class="hljs-string">&quot;B&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>

  ...
<span class="hljs-tag">&lt;/<span class="hljs-name">van-index-bar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-index-list" tabindex="-1">Custom Index List</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-index-bar</span> <span class="hljs-attr">:index-list</span>=<span class="hljs-string">&quot;indexList&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-index-anchor</span> <span class="hljs-attr">index</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Title 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-index-anchor</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">van-index-anchor</span> <span class="hljs-attr">index</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Title 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-index-anchor</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>

  ...
<span class="hljs-tag">&lt;/<span class="hljs-name">van-index-bar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">indexList</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>],
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="indexbar-props" tabindex="-1">IndexBar Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>index-list</td><td>Index List</td><td><em>string[] | number[]</em></td><td><code>A-Z</code></td></tr><tr><td>z-index</td><td>z-index</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>sticky</td><td>Whether to enable anchor sticky top</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>sticky-offset-top</td><td>Anchor offset top when sticky</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td>highlight-color</td><td>Index character highlight color</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>teleport <code>v3.0.19</code></td><td>Specifies a target element where IndexBar will be mounted</td><td><em>string | Element</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="indexanchor-props" tabindex="-1">IndexAnchor Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>index</td><td>Index</td><td><em>number | string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="indexbar-events" tabindex="-1">IndexBar Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>select</td><td>Emitted when an index is selected</td><td><em>index: number | string</em></td></tr><tr><td>change</td><td>Emitted when active index changed</td><td><em>index: number | string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="indexbar-methods" tabindex="-1">IndexBar Methods</h3><p>Use <a href="https://v3.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> to get IndexBar instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>scrollTo</td><td>scroll to target element</td><td><em>index: number | string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">IndexBarProps</span>, <span class="hljs-title class_">IndexAnchorProps</span>, <span class="hljs-title class_">IndexBarInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>IndexBarInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">IndexBarInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> indexBarRef = ref&lt;<span class="hljs-title class_">IndexBarInstance</span>&gt;();

indexBarRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">scrollTo</span>(<span class="hljs-string">&#39;B&#39;</span>);
</code></pre></div><div class="van-doc-card"><h3 id="indexanchor-slots" tabindex="-1">IndexAnchor Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Anchor content, show index by default</td></tr></tbody></table></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-index-bar-sidebar-z-index</td><td><em>2</em></td><td>-</td></tr><tr><td>--van-index-bar-index-font-size</td><td><em>var(--van-font-size-xs)</em></td><td>-</td></tr><tr><td>--van-index-bar-index-line-height</td><td><em>var(--van-line-height-xs)</em></td><td>-</td></tr><tr><td>--van-index-bar-index-active-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-index-anchor-z-index</td><td><em>1</em></td><td>-</td></tr><tr><td>--van-index-anchor-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-index-anchor-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-index-anchor-font-weight</td><td><em>var(--van-font-bold)</em></td><td>-</td></tr><tr><td>--van-index-anchor-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-index-anchor-line-height</td><td><em>32px</em></td><td>-</td></tr><tr><td>--van-index-anchor-background</td><td><em>transparent</em></td><td>-</td></tr><tr><td>--van-index-anchor-sticky-text-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-index-anchor-sticky-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr></tbody></table></div>`,15),d=[l],o={__name:"README",setup(p,{expose:s}){return s({frontmatter:{}}),(c,h)=>(a(),t("div",e,d))}};export{o as default};
