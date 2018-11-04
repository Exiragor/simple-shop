import axios from 'axios'

const host = process.env.API_URL || 'http://localhost:8000'
export default axios.create({
  baseURL: `${host}/api`
})
