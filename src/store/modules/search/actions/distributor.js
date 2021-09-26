import search from "@/api/search";
import { PocSearch } from "@/graphql/PocSearch";
import store from "@/store";
import { setCookies } from "@/helpers/cookies";

const distributorFetch = async ({ commit }, variables) => {
  const data = await search.getDistributor(PocSearch, variables);
  commit("SET_DISTRIBUTOR", data);
  return data;
};

const setDistributor = async ({ dispatch, commit }, variables) => {
  setCookies("userAddress", variables, "1h");
  store.commit("user/SET_ADDRESS", variables);
  store.commit("loading/SET_LOADING", true);

  const variable = { pocSearchLong: JSON.stringify(variables.lng), pocSearchLat: JSON.stringify(variables.lat) };
  const data = await dispatch("distributorFetch", variable);

  if (data) {
    const variable = {
      pocId: data.pocSearch.length ? data.pocSearch[0].id : "",
      productsSearch: null,
      productsCategoryId: null,
    };
    store.dispatch("products/getProducts", variable);
    store.dispatch("products/getCategories", variable);
    store.commit("loading/SET_LOADING", false);
  }
};

export { distributorFetch, setDistributor };
