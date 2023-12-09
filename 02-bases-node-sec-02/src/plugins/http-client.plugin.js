const axios = require('axios');

const httpClientPlugin = {
  get: async ({ url }) => {
    // const response = await fetch(url);
    // return await response.json();
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      throw new Error('Error al obtener el pokemon');
    }
  },
  post: async ({ url, body }) => { },
  put: async ({ url, body }) => { },
  delete: async ({ url }) => { }
}

module.exports = {
  http: httpClientPlugin,
}