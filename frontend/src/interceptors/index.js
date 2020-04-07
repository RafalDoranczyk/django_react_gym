import axios from "axios";
import { refreshTokenURL } from "urls/urls";

const ACCESS = "access";
const REFRESH = "refresh";

const errorHandler = (error) => {
  return Promise.reject({ ...error });
};

const configHandler = (config) => {
  let token = localStorage.getItem(ACCESS);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

// Add a request interceptor
axios.interceptors.request.use(
  (config) => configHandler(config),
  (error) => errorHandler(error)
);

axios.interceptors.response.use(
  (response) => {
    if (response.data.access) {
      localStorage.setItem(ACCESS, response.data.access);
    }
    if (response.data.refresh) {
      localStorage.setItem(REFRESH, response.data.refresh);
    }
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      const refresh = localStorage.getItem(REFRESH);
      console.log("error axiosa");
      try {
        await axios.post(refreshTokenURL, { refresh });
        console.log("otrzymałem ponowny token");
      } catch (error) {
        console.log("no i error");
        console.log(error);
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
