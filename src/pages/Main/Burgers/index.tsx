import axios from 'axios'
import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { SnackData } from '../../../interface/SnackData'
//import api from '../../../services/api'

//const BASE_URL = api

export default function Burgers() {
  const [burgers, setBurgers] = useState<SnackData[]>([])

  useEffect(() => {
    // try {
    //   const resp = getSnacks('burger')
    //   setBurgers(resp)
    // } catch (error) {
    //   console.log(error)
    //   return error
    // }
    
    axios.get(`${process.env.REACT_APP_API_URL}/snacks/burger`)
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

    function handleaddSnack(Snack:SnackData) {
      console.log(Snack)
    }

  return (
    <>
      <Head title='Hambúrgueres' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers} ></Snacks>
    </>
  )
}
