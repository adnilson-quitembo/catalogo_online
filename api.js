import axios from 'axios';

const api = axios.create({
  baseURL: 'https://00000.loca.lt/', // URL base da sua API
  timeout: 5000, // Timeout de 5 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
