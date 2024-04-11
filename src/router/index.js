import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Chatroom from '../views/Chatroom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // welcome = home
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/chatroom',
      name: 'Chatroom',
      component: Chatroom
    }
  ]
})

export default router
