const axios = require('axios');

export const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/'
})