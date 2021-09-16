import Vue from 'vue'
import Router from 'vue-router'
import {routerPath} from '@/router/routerPath'
import {routerHook} from '@/router/routerHook'
Vue.use(Router)
const newRouter = new Router({
  routes:routerPath
})
// 路由守卫等操作
routerHook(newRouter)
export default newRouter
