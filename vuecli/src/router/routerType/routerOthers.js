export const otherRoute = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('@/layout/login.vue')
  }
]
export const notFound = [
  {
    path: '*',
    component: ()=>import('@/layout/404.vue')
  }
]