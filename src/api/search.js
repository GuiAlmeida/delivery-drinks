import axios from "axios";
import { _routeGraphql } from "@/api";

export default {
  getDistributor: async (query, variables) => {
    return axios
      .post(_routeGraphql(), {
        operationName: "PocSearch",
        query: query,
        variables: variables,
      })
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
  },
};
