import axios from 'axios'

export const iEchoApi = axios.create({
  baseURL: 'https://cp-challenge-back.herokuapp.com' // 'http://127.0.0.1:4000'
})
