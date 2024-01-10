import axios from 'axios';

export const api = axios.create({
  baseURL: "https://rocketnotes-api-6l2r.onrender.com"
});