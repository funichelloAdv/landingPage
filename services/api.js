import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.funichelloadvogados.com',
})

export default api
