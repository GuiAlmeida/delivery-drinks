import router from "@/router";
import store from "@/store";
import products from "@/api/products";
import { PocProducts } from "@/graphql/PocProducts";
import { PocCategories } from "@/graphql/PocCategories";
export default {
  async getProducts({ commit }, variables) {
    const data = await products.getProducts(PocProducts, variables);
    commit("SET_PRODUCTS", data.poc.products);
    if (data) {
      store.commit("user/SET_LOGGED", true);
      if (router.history.current.path !== "/produtos") {
        router.push("/produtos");
      }
    }
  },
  async getCategories({ commit }, variables) {
    const data = await products.getCategories(PocCategories, variables);
    commit("SET_CATEGORIES", data.categories);
  },
};
