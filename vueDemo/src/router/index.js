import Vue from 'vue'
import Router from 'vue-router'
import helloVue from '@/view/helloword.vue'

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
