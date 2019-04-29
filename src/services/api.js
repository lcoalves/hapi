import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5cb133258bdfe80014e97e2e.mockapi.io/api',
});

export default api;
