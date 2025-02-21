import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import RegisterView from "@/views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeView
    },
    {
      name: 'login',
      path: '/login',
      component: LoginView
    },
    {
      name: 'register',
      path: '/get-started',
      component: RegisterView
    },
    {
      name: '404',
      path: '/:pathMatch(.*)*',
      component: NotFoundView
    }
  ],
})

export default router
