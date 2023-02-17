import{o as a,a as n,z as t}from"./vue-libs-be453a05.js";const e={class:"van-doc-markdown-body"},l=t(`<h1>ConfigProvider</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to configure Vant components globally, providing dark mode, theme customization and other capabilities.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ConfigProvider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ConfigProvider</span>);
</code></pre></div><h2 id="dark-mode" tabindex="-1">Dark Mode</h2><div class="van-doc-card"><h3 id="enable-dark-mode" tabindex="-1">Enable Dark Mode</h3><p>Enabling dark mode by setting the <code>theme</code> prop of the ConfigProvider component to <code>dark</code>.</p><p>In takes effect globally, making all Vant components on the page dark.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>
</code></pre><p>The theme prop will not change the text-color or background-color of the page, you can set it manually like this:</p><pre><code class="language-css"><span class="hljs-selector-class">.van-theme-dark</span> <span class="hljs-selector-tag">body</span> {
  text-<span class="hljs-attribute">color</span>: <span class="hljs-number">#f5f5f5</span>;
  <span class="hljs-attribute">background-color</span>: black;
}
</code></pre><blockquote><p>Tips: The theme prop will not change the background color of the page, you need to set it manually.</p></blockquote></div><div class="van-doc-card"><h3 id="switch-theme" tabindex="-1">Switch Theme</h3><p>Switching between light and dark theme by dynamically setting the <code>theme</code> property.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span> <span class="hljs-attr">:theme</span>=<span class="hljs-string">&quot;theme&quot;</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> theme = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;light&#39;</span>);

    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      theme.<span class="hljs-property">value</span> = <span class="hljs-string">&#39;dark&#39;</span>;
    }, <span class="hljs-number">1000</span>);

    <span class="hljs-keyword">return</span> { theme };
  },
};
</code></pre></div><h2 id="custom-theme" tabindex="-1">Custom Theme</h2><div class="van-doc-card"><h3 id="intro-1" tabindex="-1">Intro</h3><p>Vant organize component styles through <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties" target="_blank">CSS Variables</a>, you can custom themes by overriding these CSS Variables.</p><h4 id="demo" tabindex="-1">Demo</h4><p>Looking at the style of the Button component, you can see that the following variables exist on the <code>.van-button--primary</code> class:</p><pre><code class="language-css"><span class="hljs-selector-class">.van-button--primary</span> {
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--van-button-primary-color);
  <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">var</span>(--van-button-primary-background);
}
</code></pre><p>The default values of these variables are defined on the <code>:root</code> node:</p><pre><code class="language-css"><span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--van-white</span>: <span class="hljs-number">#fff</span>;
  <span class="hljs-attr">--van-blue</span>: <span class="hljs-number">#1989fa</span>;
  <span class="hljs-attr">--van-button-primary-color</span>: <span class="hljs-built_in">var</span>(--van-white);
  <span class="hljs-attr">--van-button-primary-background</span>: <span class="hljs-built_in">var</span>(--van-primary-color);
}
</code></pre></div><div class="van-doc-card"><h3 id="custom-css-variables" tabindex="-1">Custom CSS Variables</h3><h4 id="override-by-css" tabindex="-1">Override by CSS</h4><p>You can directly override these CSS variables in the code, and the style of the Button component will change accordingly:</p><pre><code class="language-css"><span class="hljs-comment">/* the Primary Button will turn red */</span>
<span class="hljs-selector-pseudo">:root</span><span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--van-button-primary-background</span>: red;
}
</code></pre><blockquote><p>Note: Why write two duplicate <code>:root</code>?</p><p>Since the theme variables in vant are also declared under <code>:root</code>, in some cases they cannot be successfully overwritten due to priority issues. Through <code>:root:root</code> you can explicitly make the content you write a higher priority to ensure the successful coverage of the theme variables.</p></blockquote><h4 id="override-by-configprovider" tabindex="-1">Override by ConfigProvider</h4><p>The <code>ConfigProvider</code> component provides the ability to override CSS variables. You need to wrap a <code>ConfigProvider</code> component at the root node and configure some CSS variables through the <code>theme-vars</code> property.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span> <span class="hljs-attr">:theme-vars</span>=<span class="hljs-string">&quot;themeVars&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-form</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;rate&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Rate&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;rate&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;slider&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Slider&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;slider&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 16px&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">round</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">native-type</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>
        Submit
      <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-form</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> rate = <span class="hljs-title function_">ref</span>(<span class="hljs-number">4</span>);
    <span class="hljs-keyword">const</span> slider = <span class="hljs-title function_">ref</span>(<span class="hljs-number">50</span>);

    <span class="hljs-comment">// ThemeVars will be converted to the corresponding CSS variable</span>
    <span class="hljs-comment">// For example, sliderBarHeight will be converted to \`--van-slider-bar-height\`</span>
    <span class="hljs-keyword">const</span> themeVars = <span class="hljs-title function_">reactive</span>({
      <span class="hljs-attr">rateIconFullColor</span>: <span class="hljs-string">&#39;#07c160&#39;</span>,
      <span class="hljs-attr">sliderBarHeight</span>: <span class="hljs-string">&#39;4px&#39;</span>,
      <span class="hljs-attr">sliderButtonWidth</span>: <span class="hljs-string">&#39;20px&#39;</span>,
      <span class="hljs-attr">sliderButtonHeight</span>: <span class="hljs-string">&#39;20px&#39;</span>,
      <span class="hljs-attr">sliderActiveBackground</span>: <span class="hljs-string">&#39;#07c160&#39;</span>,
      <span class="hljs-attr">buttonPrimaryBackground</span>: <span class="hljs-string">&#39;#07c160&#39;</span>,
      <span class="hljs-attr">buttonPrimaryBorderColor</span>: <span class="hljs-string">&#39;#07c160&#39;</span>,
    });

    <span class="hljs-keyword">return</span> {
      rate,
      slider,
      themeVars,
    };
  },
};
</code></pre><blockquote><p>Tips: ConfigProvider only affects its child components.</p></blockquote><h4 id="use-in-typescript" tabindex="-1">Use In TypeScript</h4><p>Using <code>ConfigProviderThemeVars</code> type to get code intellisense.</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ConfigProviderThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> <span class="hljs-attr">themeVars</span>: <span class="hljs-title class_">ConfigProviderThemeVars</span> = {
  <span class="hljs-attr">sliderBarHeight</span>: <span class="hljs-string">&#39;4px&#39;</span>,
};
</code></pre></div><div class="van-doc-card"><h3 id="combining-dark-mode-with-css-variables" tabindex="-1">Combining dark mode with CSS variables</h3><p>If you need to define CSS variables for dark mode or light mode separately, you can use the <code>theme-vars-dark</code> and <code>theme-vars-light</code> props.</p><ul><li><code>theme-vars-dark</code>: define CSS variables that only take effect in dark mode, will override the variables defined in <code>theme-vars</code>.</li><li><code>theme-vars-light</code>: define CSS variables that only take effect in light mode, will override the variables defined in <code>theme-vars</code>.</li></ul><h4 id="example" tabindex="-1">Example</h4><p>Take the <code>buttonPrimaryBackground</code> variable below as an example, the value will be <code>blue</code> in dark mode, and <code>green</code> in light mode.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span>
  <span class="hljs-attr">:theme-vars</span>=<span class="hljs-string">&quot;themeVars&quot;</span>
  <span class="hljs-attr">:theme-vars-dark</span>=<span class="hljs-string">&quot;themeVarsDark&quot;</span>
  <span class="hljs-attr">:theme-vars-light</span>=<span class="hljs-string">&quot;themeVarsLight&quot;</span>
&gt;</span>
  ...
<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> themeVars = <span class="hljs-title function_">reactive</span>({ <span class="hljs-attr">buttonPrimaryBackground</span>: <span class="hljs-string">&#39;red&#39;</span> });
    <span class="hljs-keyword">const</span> themeVarsDark = <span class="hljs-title function_">reactive</span>({ <span class="hljs-attr">buttonPrimaryBackground</span>: <span class="hljs-string">&#39;blue&#39;</span> });
    <span class="hljs-keyword">const</span> themeVarsLight = <span class="hljs-title function_">reactive</span>({ <span class="hljs-attr">buttonPrimaryBackground</span>: <span class="hljs-string">&#39;green&#39;</span> });

    <span class="hljs-keyword">return</span> {
      themeVars,
      themeVarsDark,
      themeVarsLight,
    };
  },
};
</code></pre></div><h2 id="variables" tabindex="-1">Variables</h2><div class="van-doc-card"><h3 id="basic-variables" tabindex="-1">Basic Variables</h3><p>CSS variables in Vant are divided into <strong>basic variables</strong> and <strong>component variables</strong>. Component variables will inherit the basic variables. After modifying the basic variables, all related components will be affected.</p><h4 id="modify-basic-variables" tabindex="-1">Modify Basic Variables</h4><ul><li>The basic variables can only be modified through the <code>:root</code> selector.</li><li>The component variables can be modified through the <code>:root</code> selector and <code>ConfigProvider</code> component.</li></ul><p>You can also use the <code>.van-theme-light</code> and <code>.van-theme-dark</code> class selector to modify basic or component variables in light or dark mode individually.</p><h4 id="variables-list" tabindex="-1">Variables List</h4><p>There are all <strong>Basic Variables</strong> below, for component CSS Variables, please refer to the documentation of each component.</p><pre><code class="language-less"><span class="hljs-comment">// Color Palette</span>
<span class="hljs-attr">--van-black</span>: #000;
<span class="hljs-attr">--van-white</span>: #fff;
<span class="hljs-attr">--van-gray-1</span>: #f7f8fa;
<span class="hljs-attr">--van-gray-2</span>: #f2f3f5;
<span class="hljs-attr">--van-gray-3</span>: #ebedf0;
<span class="hljs-attr">--van-gray-4</span>: #dcdee0;
<span class="hljs-attr">--van-gray-5</span>: #c8c9cc;
<span class="hljs-attr">--van-gray-6</span>: #969799;
<span class="hljs-attr">--van-gray-7</span>: #646566;
<span class="hljs-attr">--van-gray-8</span>: #323233;
<span class="hljs-attr">--van-red</span>: #ee0a24;
<span class="hljs-attr">--van-blue</span>: #1989fa;
<span class="hljs-attr">--van-orange</span>: #ff976a;
<span class="hljs-attr">--van-orange-dark</span>: #ed6a0c;
<span class="hljs-attr">--van-orange-light</span>: #fffbe8;
<span class="hljs-attr">--van-green</span>: #07c160;

<span class="hljs-comment">// Gradient Colors</span>
<span class="hljs-attr">--van-gradient-red</span>: linear-gradient(to <span class="hljs-attribute">right, #ff6034, #ee0a24);
--van-gradient-orange</span>: <span class="hljs-built_in">linear-gradient</span>(to right, <span class="hljs-number">#ffd01e</span>, <span class="hljs-number">#ff8917</span>);

<span class="hljs-comment">// Component Colors</span>
<span class="hljs-attr">--van-primary-color</span>: var(<span class="hljs-attr">--van-blue</span>);
<span class="hljs-attr">--van-success-color</span>: var(<span class="hljs-attr">--van-green</span>);
<span class="hljs-attr">--van-danger-color</span>: var(<span class="hljs-attr">--van-red</span>);
<span class="hljs-attr">--van-warning-color</span>: var(<span class="hljs-attr">--van-orange</span>);
<span class="hljs-attr">--van-text-color</span>: var(<span class="hljs-attr">--van-gray-8</span>);
<span class="hljs-attr">--van-text-color-2</span>: var(<span class="hljs-attr">--van-gray-6</span>);
<span class="hljs-attr">--van-text-color-3</span>: var(<span class="hljs-attr">--van-gray-5</span>);
<span class="hljs-attr">--van-active-color</span>: var(<span class="hljs-attr">--van-gray-2</span>);
<span class="hljs-attr">--van-active-opacity</span>: 0.6;
<span class="hljs-attr">--van-disabled-opacity</span>: 0.5;
<span class="hljs-attr">--van-background</span>: var(<span class="hljs-attr">--van-gray-1</span>);
<span class="hljs-attr">--van-background-2</span>: var(<span class="hljs-attr">--van-white</span>);

<span class="hljs-comment">// Padding</span>
<span class="hljs-attr">--van-padding-base</span>: 4px;
<span class="hljs-attr">--van-padding-xs</span>: 8px;
<span class="hljs-attr">--van-padding-sm</span>: 12px;
<span class="hljs-attr">--van-padding-md</span>: 16px;
<span class="hljs-attr">--van-padding-lg</span>: 24px;
<span class="hljs-attr">--van-padding-xl</span>: 32px;

<span class="hljs-comment">// Font</span>
<span class="hljs-attr">--van-font-size-xs</span>: 10px;
<span class="hljs-attr">--van-font-size-sm</span>: 12px;
<span class="hljs-attr">--van-font-size-md</span>: 14px;
<span class="hljs-attr">--van-font-size-lg</span>: 16px;
<span class="hljs-attr">--van-font-bold</span>: 600;
<span class="hljs-attr">--van-line-height-xs</span>: 14px;
<span class="hljs-attr">--van-line-height-sm</span>: 18px;
<span class="hljs-attr">--van-line-height-md</span>: 20px;
<span class="hljs-attr">--van-line-height-lg</span>: 22px;
<span class="hljs-attr">--van-base-font</span>: -apple-system, BlinkMacSystemFont, &#39;Helvetica Neue&#39;, Helvetica,
  Segoe UI, Arial, Roboto, &#39;PingFang SC&#39;, &#39;miui&#39;, &#39;Hiragino Sans GB&#39;, &#39;Microsoft Yahei&#39;,
  sans-serif;
<span class="hljs-attr">--van-price-font</span>: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif;

<span class="hljs-comment">// Animation</span>
<span class="hljs-attr">--van-duration-base</span>: 0.3s;
<span class="hljs-attr">--van-duration-fast</span>: 0.2s;
<span class="hljs-attr">--van-ease-out</span>: ease-out;
<span class="hljs-attr">--van-ease-in</span>: ease-in;

<span class="hljs-comment">// Border</span>
<span class="hljs-attr">--van-border-color</span>: var(<span class="hljs-attr">--van-gray-3</span>);
<span class="hljs-attr">--van-border-width</span>: 1px;
<span class="hljs-attr">--van-radius-sm</span>: 2px;
<span class="hljs-attr">--van-radius-md</span>: 4px;
<span class="hljs-attr">--van-radius-lg</span>: 8px;
<span class="hljs-attr">--van-radius-max</span>: 999px;
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>theme</td><td>Theme mode, can be set to <code>dark</code></td><td><em>ConfigProviderTheme</em></td><td><code>light</code></td></tr><tr><td>theme-vars</td><td>Theme variables</td><td><em>object</em></td><td>-</td></tr><tr><td>theme-vars-dark</td><td>Theme variables that work in dark mode，will override <code>theme-vars</code></td><td><em>object</em></td><td>-</td></tr><tr><td>theme-vars-light</td><td>Theme variables that work in light mode, will override <code>theme-vars</code></td><td><em>object</em></td><td>-</td></tr><tr><td>z-index <code>v3.6.0</code></td><td>Set the z-index of all popup components, this property takes effect globally</td><td><em>number</em></td><td><code>2000</code></td></tr><tr><td>tag <code>v3.1.2</code></td><td>HTML Tag of root element</td><td><em>string</em></td><td><code>div</code></td></tr><tr><td>icon-prefix <code>v3.1.3</code></td><td>Icon className prefix</td><td><em>string</em></td><td><code>van-icon</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">ConfigProviderProps</span>,
  <span class="hljs-title class_">ConfigProviderTheme</span>,
  <span class="hljs-title class_">ConfigProviderThemeVars</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div>`,15),p=[l],d={__name:"README",setup(r,{expose:s}){return s({frontmatter:{}}),(c,i)=>(a(),n("div",e,p))}};export{d as default};
