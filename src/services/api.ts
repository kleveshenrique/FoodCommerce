import axios from 'axios'
import { SnackData } from '../interface/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'X-Custom-Header': 'foobar',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
})

export const getBurgers = async () => await api.get<SnackData[]>('/snacks/burger')
export const getPizzas = async () =>await api.get<SnackData[]>('/pizzas')
export const getDrinks = async () =>await api.get<SnackData[]>('/drinks')
export const getIceCreams = async () =>await api.get<SnackData[]>('/ice-creams')

// export function getSnacks(snackName:string){
//     axios.get(`${process.env.REACT_APP_API_URL}/snacks/${snackName}`)
//     .then((response)=>{
//       return response.data
//     })
//     .catch((err)=>{
//       console.log(err)
//       return err
//     })
// }

export default api
