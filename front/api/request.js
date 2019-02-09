import axios from 'axios';

const host = process.env.API_URL || 'http://localhost:8000'
let request = axios.create({
  baseURL: `${host}/api`
});

export const authReq = (token) => axios.create({
  baseURL: `${host}/api`,
  headers: {
    Authorization: 'Bearer ' + token
  }
});

export default request
