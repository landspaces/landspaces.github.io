import helloVue from '@/pages/vueDemos/helloVue.vue'
import vueRouteLife from '@/pages/vueDemos/vueRouteLife.vue'
import vueMethods from '@/pages/vueDemos/vueMethods.vue'

export const vueDemos = [
  {
    path: '/layout/helloVue',
    name:'helloVue',
    component: helloVue
  },
  {
    path: '/layout/vueRouteLife',
    name:'vueRouteLife',
    component: vueRouteLife,
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      console.log('router内独享守卫beforeEnter', to, from)
      next()
    }
  },
  {
    path: '/layout/vueMethods',
    name:'vueMethods',
    component: vueMethods,
  }
]