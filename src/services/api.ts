import axios from 'axios'
//import { SnackData } from '../interface/SnackData'

const api = axios.create({
  baseURL: 'https://api-food-service.vercel.app'
})

// export const getBurgers   = async () => await api.get('/snacks/burger')
// export const getDrinks    = async () =>await api.get('/snacks/drink')
// export const getPizzas    = async () =>await api.get('/snacks/pizza')
// export const getIceCreams = async () =>await api.get('/snacks/ice-cream')

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
