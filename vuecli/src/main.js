// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementui from 'element-ui'
// 1.取消 Vue 所有的日志与警告
    // Vue.config.silent = false;

// 2.自定义合并策略的选项
    // Vue.config.optionMergeStrategies._my_option = function (parent, child, vm) {
    //   return child + 1
    // }
    // const Profile = Vue.extend({
    //   _my_option: 1
    // })
    // Profile.options._my_option = 2

// 3.配置是否允许 vue-devtools 检查代码
    /*
      // 开发版本默认为 true，生产版本默认为 false。
      // 生产版本设为 true 可以启用检查。
      // 务必在加载 Vue 之后，立即同步设置以下内容
    */
    // Vue.config.devtools = false

// 4.指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和 Vue 实例。
    // handle error
    // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
    // 只在 2.2.0+ 可用
    // Vue.config.errorHandler = function (err, vm, info) {
    // }

// 5.为 Vue 的运行时警告赋予一个自定义处理函数。注意这只会在开发者环境下生效，在生产环境下它会被忽略。
    // Vue.config.warnHandler = function (msg, vm, trace) {
    //   // `trace` 是组件的继承关系追踪
    // }

// 6.使 Vue 忽略在 Vue 之外的自定义元素// 用一个 `RegExp` 忽略所有“ion-”开头的元素// 仅在 2.5+ 支持
    // Vue.config.ignoredElements = [
    //   'my-custom-web-component',
    //   'another-web-component',
    // ]

// 7.给 v-on 自定义键位别名。
    // <input type="text" @keyup.media-play-pause="method">
    // Vue.config.keyCodes = {
    //   v: 86,
    //   f1: 112,
    //   mediaPlayPause: 179,// camelCase 不可用
    //   "media-play-pause": 179,// 取而代之的是 kebab-case 且用双引号括起来
    //   up: [38, 87]
    // }
// 8.设置为 true 以在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪
    // 只适用于开发模式和支持 performance.mark API 的浏览器上。
    // Vue.config.performance = false
  
// 9.设置为 false 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false
// 10.Vue.version // 细节：提供字符串形式的 Vue 安装版本号。这对社区的插件和组件来说非常有用，你可以根据不同的版本号采取不同的策略。
    var version = Number(Vue.version.split('.')[0])
    if (version === 2) {
      // Vue v2.x.x
    } else if (version === 1) {
      // Vue v1.x.x
    } else {
      // Unsupported versions of Vue
    }

// 11.Vue.use( plugin )
  // 该方法需要在调用 new Vue() 之前被调用。
  // 当 install 方法被同一个插件多次调用，插件将只会被安装一次。
  Vue.use(elementui)

  const vm = new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
  console.log(vm);

