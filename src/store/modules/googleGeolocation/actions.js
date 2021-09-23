import apiGoogle from "@/api/googleGeolocation";

export default {
  async getStreetAddressFrom({ commit }, params) {
    const data = await apiGoogle.getStreetAddressFrom(params);
    commit("SET_ADDRESS", data.results[0].formatted_address);
    return data;
  },
};
