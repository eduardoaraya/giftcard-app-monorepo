import axios from "axios";

const api = axios.create({
  baseURL: "http://backend.localhost/api/",
});

export default api;
