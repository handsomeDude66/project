import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/loginContent/ContianerLogin.vue')
    },
    {
      path: '/shopping',
      component: () => import('@/components/shoppingContent/ContainerShopping.vue')
    }
  ]
})

export default router
