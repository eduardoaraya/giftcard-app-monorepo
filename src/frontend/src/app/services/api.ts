import axios from "axios";
import { getToken, logout } from "./auth";

const api = axios.create({
  baseURL: "http://backend.localhost/api/",
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (_) => _,
  (err) => {
    if (err.response.status === 401) {
      logout();
      return err;
    }
    return err;
  }
);

export default api;
