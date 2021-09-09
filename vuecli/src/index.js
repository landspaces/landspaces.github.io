// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {getElementUi} from './vue/elment'
// 按需加载element
  getElementUi(Vue)
// 设置为 false 以阻止 vue 在启动时生成生产提示。
  Vue.config.productionTip = false
  const vm = new Vue({
    el: '#app',
    router,
    render: h=>h(App)
  })
  console.log(vm);
