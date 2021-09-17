import { vueDemos } from "./routerType/routerMenus"
import { otherRoute, notFound } from "./routerType/routerOthers"
export const routerPath = [
  ...otherRoute, // 404 等
  {
    path: '/layout', // 入口
    name:'layout',
    component: ()=> import('@/layout/layout.vue'),
    children: [...vueDemos] // 菜单栏等一级子路由
  },
  ...notFound
]