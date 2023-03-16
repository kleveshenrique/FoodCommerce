import axios from 'axios'
import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { SnackData } from '../../../interface/SnackData'

import { getDrinks } from '../../../services/api'

export default function Drinks() {
  const [drinks, setDrinks] = useState<SnackData[]>([])

  useEffect(() => {
    axios.get("http://localhost:3033/snacks/drink")
    .then((res)=>{
      setDrinks(res.data)
     
    }).catch((err)=>{
      console.log(err)
    })    
  }, [])

  // useEffect(() => {
  //   ;(async () => {
  //     const drinksRequest = await getDrinks()

  //     setDrinks(drinksRequest.data)
  //   })()
  // }, [])

  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}
