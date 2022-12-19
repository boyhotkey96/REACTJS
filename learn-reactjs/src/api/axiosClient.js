import axios from "axios";
import Qs from 'query-string';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  // paramsSerializer: (params) => {
  //   return Qs.stringify(params, { arrayFormat: 'brackets' })
  // },
});

axiosClient.interceptors.request.use(function (config) {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
