import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";
import TermsAndConditionsView from "@/views/TermsAndConditionsView.vue";
import CalendarView from "@/views/CalendarView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeView,
    },
    {
      name: 'login',
      path: '/login',
      component: LoginView,
    },
    {
      name: 'forgot password',
      path: '/forgot-password',
      component: ForgotPasswordView,
    },
    {
      name: 'register',
      path: '/get-started',
      component: RegisterView,
    },
    {
      name: 'terms and conditions',
      path: '/terms-and-conditions',
      component: TermsAndConditionsView,

    },
    {
      name: 'calendar',
      path: '/calendar',
      component: CalendarView,
    },
    {
      name: '404',
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
    }
  ],
})

export default router
