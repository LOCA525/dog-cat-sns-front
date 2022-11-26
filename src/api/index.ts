import axios from 'axios';
const PROXY = window.location.hostname === 'localhost' ? '/api' : '/proxy/api';

const api = axios.create({
  baseURL: PROXY,
});

export default api;
