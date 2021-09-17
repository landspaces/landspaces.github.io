
import NProgress from 'nprogress';
const whiteList = [
  '/login'
]
export const routerHook = (router) => {
  // 全局守卫：在路由跳转前触发，主要是用于登录验证，也就是路由还没跳转提前告知，以免跳转了再通知就为时已晚
  router.beforeEach((to, from, next) => {
    // 打印路由守卫信息
    to.path == '/layout/vueRouteLife' ? console.log('全局守卫beforeEach', to, from) : ''
    // 进度条
    NProgress.configure({showSpinner: false});
    NProgress.start();
    // 登陆校验
    let token = localStorage.getItem('token')
    console.log('守卫检查token：', token);
    if (whiteList.includes(to.path)) { // 白名单不走登陆逻辑
      console.log('发现了啥白名单',to.path);
      next()
    } else {
      !token ? next({path: '/login'}) : next()
    }
  })

  // 全局解析守卫：在导航被确认之前，同时在所有路由独享守卫和异步路由组件被解析之后，解析守卫就被调用
  router.beforeResolve((to, from, next) => {
    to.path == '/layout/vueRouteLife' ? console.log('全局解析守卫beforeResolve', to, from) : ''
    next()
  })
  // 全局后置守卫：在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用
  router.afterEach((to, from) => {
    NProgress.done();
    to.path == '/layout/vueRouteLife' ? console.log('全局后置守卫afterEach', to, from) : ''
  })  
}
