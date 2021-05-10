// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 全局配置
/*
  // 取消 Vue 所有的日志与警告
  Vue.config.silent = true;

  // 自定义合并策略的选项
  {待学习}

  // 配置是否允许 vue-devtools 检查代码
  // 开发版本默认为 true，生产版本默认为 false。
  // 生产版本设为 true 可以启用检查。
  // 务必在加载 Vue 之后，立即同步设置以下内容
  Vue.config.devtools = true

  // 指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和 Vue 实例。
  Vue.config.errorHandler = function (err, vm, info) {
    // handle error
    // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
    // 只在 2.2.0+ 可用
  }

  // 为 Vue 的运行时警告赋予一个自定义处理函数。注意这只会在开发者环境下生效，在生产环境下它会被忽略。
  Vue.config.warnHandler = function (msg, vm, trace) {
    // `trace` 是组件的继承关系追踪
  }

  // 使 Vue 忽略在 Vue 之外的自定义元素
  Vue.config.ignoredElements = [
    'my-custom-web-component',
    'another-web-component',
    // 用一个 `RegExp` 忽略所有“ion-”开头的元素
    // 仅在 2.5+ 支持
    /^ion-/
  ]

  // 给 v-on 自定义键位别名。
  // <input type="text" @keyup.media-play-pause="method">
  Vue.config.keyCodes = {
    v: 86,
    f1: 112,
    // camelCase 不可用
    mediaPlayPause: 179,
    // 取而代之的是 kebab-case 且用双引号括起来
    "media-play-pause": 179,
    up: [38, 87]
  }
  // 设置为 true 以在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪
  // 只适用于开发模式和支持 performance.mark API 的浏览器上。
  Vue.config.performance = false
*/
Vue.config.productionTip = false
/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
console.log(vm);

