import axios from 'axios'
import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { SnackData } from '../../../interface/SnackData'

export default function Pizzas() {
  const [pizzas, setPizzas] = useState<SnackData[]>([])

  useEffect(() => {  
    
    axios.get(`${process.env.REACT_APP_API_URL}/snacks/pizza`)
    .then((res)=>{
      setPizzas(res.data)
     
    }).catch((err)=>{
      console.log(err)
    }) 
  }, [])

  return (
    <>
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
