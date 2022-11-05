import axios from 'axios';

const api = axios.create({
 baseURL: 'https://contabilidade-facil-api.herokuapp.com',
});

export default api;