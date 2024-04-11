import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // welcome = home
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})

export default router
