import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: 'https://api.finna.fi/api/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
