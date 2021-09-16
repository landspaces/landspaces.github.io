import login from '@/layout/login.vue'
import notFoundPage from '@/layout/404.vue'

export const otherRoute = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]
export const notFound = [
  {
    path: '*',
    component: notFoundPage
  }
]