import axios, { InternalAxiosRequestConfig } from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;
const token = btoa(
  `${process.env.REACT_APP_API_USERNAME}:${process.env.REACT_APP_API_PASSWORD}`
);

console.log("BASE_URL", BASE_URL, token);

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${token}`,
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
