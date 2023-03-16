import axios from 'axios'
import { SnackData } from '../interface/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  //baseURL: "http://localhost:3033",
  headers: {'X-Custom-Header': 'foobar'}
})

export const getBurgers = async () => api.get<SnackData[]>('/burgers')
export const getPizzas = async () =>await api.get<SnackData[]>('/pizzas')
export const getDrinks = async () =>await api.get<SnackData[]>('/drinks')
export const getIceCreams = async () =>await api.get<SnackData[]>('/ice-creams')

export default api
