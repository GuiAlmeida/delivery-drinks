import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Zé Delivery: Entrega de bebidas geladas a preço baixo" },
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("@/views/Products.vue"),
    meta: { title: "Zé Delivery: Entrega de bebidas geladas a preço baixo" },
  },
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

router.beforeEach((to, from, next) => {
  // seta o title dinamicamente
  document.title = to.meta.title;
  next();
});

export default router;
