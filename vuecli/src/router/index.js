import Vue from 'vue'
import Router from 'vue-router'
import helloVue from '@/pages/helloword.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloVue',
      component: helloVue
    }
  ]
})
