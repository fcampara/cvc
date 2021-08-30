import axios from 'axios'
import enviroments from '../constants/enviroments'

const instance = axios.create({
  baseURL: enviroments.BASE_URL,
})

export default instance
