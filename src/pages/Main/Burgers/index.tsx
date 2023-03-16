import axios from 'axios'
import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { SnackData } from '../../../interface/SnackData'

import { getBurgers } from '../../../services/api'

export default function Burgers() {
  const [burgers, setBurgers] = useState<SnackData[]>([])

  useEffect(() => {
    axios.get("http://localhost:3033/snacks/burger")
    .then((res)=>{
      setBurgers(res.data)
    
    }).catch((err)=>{
      console.log(err)
    })    
  }, [])

  // ;(async () => {
    //   const burgerRequest = await getBurgers()
    //   console.log(burgerRequest)

    //   setBurgers(burgerRequest.data)
    // })()

  return (
    <>
      <Head title='Hambúrgueres' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
