import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Chatroom from "../views/Chatroom.vue";
import { auth } from "@/firebase/config";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // welcome = home
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter(to, from, next) {
        let user = auth.currentUser;
        if (!user) {
          next();
        } else {
          next({ name: "Chatroom" });
        }
      },
    },
    {
      path: "/chatroom",
      name: "Chatroom",
      component: Chatroom,

      beforeEnter(to, from, next) {
        let user = auth.currentUser;
        if (user) {
          next();
        } else {
          next({ name: "home" });
        }
      },
    },
  ],
});

export default router;
