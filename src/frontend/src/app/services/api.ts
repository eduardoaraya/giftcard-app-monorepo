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

export default api;
