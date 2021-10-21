import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { getCookies } from "@/helpers/cookies";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Delivery Drinks: Entrega de bebidas geladas a preço baixo" },
  },
  {
    path: "/produtos",
    name: "Products",
    component: () => import("@/views/Products.vue"),
    meta: { title: "Delivery Drinks: Entrega de bebidas geladas a preço baixo" },
  },
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

router.beforeEach((to, from, next) => {
  // set title page
  document.title = to.meta.title;

  const userAddress = getCookies("userAddress");
  if (to.path != "/" && !userAddress) return next("/");

  next();
});

export default router;
