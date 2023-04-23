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
      path: '/resourcefulness',
      name : 'skill-button',
      component: () => import('../views/Resourcefulness.vue')
    },
    {
      path: '/attentiontodetail',
      name : 'skill-button1',
      component: () => import('../views/AttentiontoDetail.vue')
    },
    {
      path: '/commitment',
      name : 'skill-button2',
      component: () => import('../views/Commitment.vue')
    },
    {
      path: '/consistency',
      name : 'skill-button3',
      component: () => import('../views/Consistency.vue')
    },
  ],
})




export default router