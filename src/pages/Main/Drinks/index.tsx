import axios from 'axios'
import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { SnackData } from '../../../interface/SnackData'


export default function Drinks() {
  const [drinks, setDrinks] = useState<SnackData[]>([])

  useEffect(() => {    
    axios.get(`https://api-food-service-nnmbhrgta-kleveshenrique.vercel.app/snacks/drink`)
    .then((res)=>{
      setDrinks(res.data)
     
    }).catch((err)=>{
      console.log(err)
    })    
  }, [])
  
  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}
