import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../pages/Dashboard.vue";
import Auth from "../pages/Auth.vue";
import YourAccount from "../pages/YourAccount.vue"
// import { supabase } from "../supabase";
// import { useUserStore } from "../store/user.js";
// import { storeToRefs } from "pinia";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/auth",
    name: "Authentication",
    component: Auth,
  },
  {
    path: "/YourAccount",
    component: YourAccount,
  },

];
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
