import * as axios from 'axios'

const host = 'http://localhost:8000';

export const request = axios.create({
  baseURL: `${host}/api`,
  timeout: 5000
})

export default request
