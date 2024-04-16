import axios, { AxiosError } from 'axios';
import { API_BASE_URL } from 'constants/env';

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (axios.isCancel(error)) {
      window.console.log('Request canceled', error.message);
    }
    return Promise.reject(error);
  },
);
