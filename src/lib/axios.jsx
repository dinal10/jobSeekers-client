import axios from "axios";
const baseURL = "https://portfoliojobsekeers-production.up.railway.app";

const instance = axios.create({
  baseURL: baseURL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
