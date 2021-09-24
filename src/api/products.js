import axios from "axios";
import { _routeGraphql } from "@/api";

export default {
  getProducts: async (query, variables) => {
    return axios
      .post(_routeGraphql(), {
        query: query,
        variables: variables,
      })
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
  },
  getCategories: async (query, variables) => {
    return axios
      .post(_routeGraphql(), {
        query: query,
        variables: variables,
      })
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
  },
};
