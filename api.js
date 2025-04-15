import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.27.152.80:3333/', // URL base da sua API
  timeout: 5000, // Timeout de 5 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
