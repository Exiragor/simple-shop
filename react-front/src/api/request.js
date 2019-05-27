import axios from 'axios';

const host = process.env.REACT_APP_API_HOST || 'http://localhost:8000';
let request = axios.create({
  baseURL: `${host}/api`
});

export const authReq = (token) => axios.create({
  baseURL: `${host}/api`,
  headers: {
    Authorization: 'Bearer ' + token
  }
});

export default request;
