import client from "@/api/client";
import { _routeGoogleGeolocation } from "@/api/_pathsApi";

export default {
  getStreetAddressFrom: async (params) => {
    return client.get(_routeGoogleGeolocation(params.lat, params.long, params.key)).then(resp => resp.data);
  },
};
