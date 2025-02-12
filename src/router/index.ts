import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeView
    },
    {
      name: '404',
      path: '/:pathMatch(.*)*',
      component: () => import('../views/404.vue')
    }
  ],
})

export default router
