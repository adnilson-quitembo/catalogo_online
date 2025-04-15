import axios from 'axios';

const api = axios.create({
  baseURL: '/api',   
  timeout: 5000, // Timeout de 5 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
