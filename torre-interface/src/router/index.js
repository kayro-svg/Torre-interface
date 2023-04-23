import { createRouter, createWebHistory } from 'vue-router'
import TorreView from '../views/TorreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: TorreView
    },
    {
      path: '/signin',
      name: 'SIGN IN',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/jobsrelated',
      name : 'skill-button',
      component: () => import('../views/JobsRelated.vue')
    }

  ]
})


export default router