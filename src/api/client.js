import axios from "axios";

const client = axios.create({
  baseURL: process.env.VUE_APP_API_BASE,
});

client.interceptors.request.use(config => {
  return config;
});

client.interceptors.request.use(config => {
  if (localStorage.getItem("token")) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  config.headers["Access-Control-Allow-Origin"] = "*";
  config.headers.crossdomain = true;
  return config;
});

client.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      if (error.response.status === 401) {
        window.localStorage.removeItem("token");
        location.reload();
      }
    }
    return Promise.reject(error);
  }
);

export default client;
