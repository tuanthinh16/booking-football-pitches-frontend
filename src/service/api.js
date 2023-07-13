import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

export const getAPI = (url, params = {}) => {
  return instance.get(url, params);
};

export const postAPI = (url, data) => {
  return instance.post(url, data);
};
export const putAPI = (url, data) => {
  return instance.put(url, data);
};