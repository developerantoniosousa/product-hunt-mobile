import axios from 'axios';

const api = axios.create({
  baseURL: 'https://node-api-hunt.herokuapp.com/api',
});

export default api;
