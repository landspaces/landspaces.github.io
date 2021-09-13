import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/layout/layout.vue'
import layoutChilden from '@/router/layoutChilden'

Vue.use(Router)

const newRouter = new Router({
  routes: [
    {
      path: '/',
      redirect: '/layout'
    },
    {
      path: '/layout',
      name:'layout',
      redirect:'/layout/helloVue',
      component: layout,
      children: layoutChilden
    }
  ]
})
// 全局守卫：在路由跳转前触发，主要是用于登录验证，也就是路由还没跳转提前告知，以免跳转了再通知就为时已晚
newRouter.beforeEach((to, from, next) => {
  to.fullPath == '/helloVue' ? '' : console.log('全局守卫beforeEach', to, from)
  next()
})
// 全局解析守卫：在导航被确认之前，同时在所有路由独享守卫和异步路由组件被解析之后，解析守卫就被调用
newRouter.beforeResolve((to, from, next) => {
  to.fullPath == '/helloVue' ? '' : console.log('全局解析守卫beforeResolve', to, from)
  next()
})
// 全局后置守卫：在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用
newRouter.afterEach((to, from) => {
  to.fullPath == '/helloVue' ? '' : console.log('全局后置守卫afterEach', to, from)
})

console.log(newRouter);
export default newRouter
