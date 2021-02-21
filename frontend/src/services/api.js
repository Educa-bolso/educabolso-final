import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_API || 'http://localhost:3333',
});

api.interceptors.request.use(async (config) => {
  const token = sessionStorage.getItem('@token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
