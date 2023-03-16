import axios from 'axios'
import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { SnackData } from '../../../interface/SnackData'

import { getPizzas } from '../../../services/api'

export default function Pizzas() {
  const [pizzas, setPizzas] = useState<SnackData[]>([])

  useEffect(() => {
    axios.get("http://localhost:3033/snacks/pizza")
    .then((res)=>{
      setPizzas(res.data)
     
    }).catch((err)=>{
      console.log(err)
    })    
  }, [])

  // useEffect(() => {
  //   ;(async () => {
  //     const pizzasRequest = await getPizzas()

  //     setPizzas(pizzasRequest.data)
  //   })()
  // }, [])

  return (
    <>
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
