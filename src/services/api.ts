import axios from 'axios'
import { SnackData } from '../interface/SnackData'
//import { SnackData } from '../interface/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export const getBurgers   = () => api.get<SnackData[]>('/snacks/burger')
export const getDrinks    = () => api.get<SnackData[]>('/snacks/drink')
export const getPizzas    = () => api.get<SnackData[]>('/snacks/pizza')
export const getIceCreams = () => api.get<SnackData[]>('/snacks/ice-cream')

// const endpoints = [
//  `${process.env.REACT_APP_API_URL}/snacks/burger`,
//  `${process.env.REACT_APP_API_URL}/snacks/drink`,
//  `${process.env.REACT_APP_API_URL}/snacks/pizza`,
//  `${process.env.REACT_APP_API_URL}/snacks/ice-cream`
// ]

// export async function getSnacks(){

//   const [burgers,setBurgers] = useState([])
//   const [drinks,setDrinks] = useState([])
//   const [pizzas,setPizzas] = useState([])
//   const [icecreams,setIceCreams] = useState([])

    
//   axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
//     (snacks) => {
      
//       setBurgers(snacks[0].data)
//       setDrinks(snacks[1].data)
//       setPizzas(snacks[2].data)
//       setIceCreams(snacks[3].data)
//     }
   
//   )
    
// }

export default api
