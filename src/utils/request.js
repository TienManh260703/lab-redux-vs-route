import axios from "axios";
import { getToken } from "../service/localStorageService";
const API_DOMAIN = "http://localhost:3000/";

const axiosInstance = axios.create({
  baseURL: API_DOMAIN,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const get = async (path) => {
  try {
    const response = await axiosInstance.get(path);
    return response.data;
  } catch (error) {
    console.error("GET request error:", error);
    throw error;
  }
};

export const post = async (path, data) => {
  try {
    const response = await axiosInstance.post(path, data);
    return response.data;
  } catch (error) {
    console.error("POST request error:", error);
    throw error;
  }
};

export const del = async (path) => {
  try {
    const response = await axiosInstance.delete(path);
    return response.data;
  } catch (error) {
    console.error("DELETE request error:", error);
    throw error;
  }
};

export const patch = async (path, data) => {
  try {
    const response = await axiosInstance.patch(path, data);
    return response.data;
  } catch (error) {
    console.error("PATCH request error:", error);
    throw error;
  }
};
