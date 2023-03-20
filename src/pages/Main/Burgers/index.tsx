import axios from 'axios'
import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { SnackData } from '../../../interface/SnackData'


export default function Burgers() {
  const [burgers, setBurgers] = useState<SnackData[]>([])

  useEffect(() => {
    
    axios.get(`${process.env.REACT_APP_API_URL}/snacks/burger`)
    .then((res)=>{
      setBurgers(res.data)
     
    }).catch((err)=>{
      console.log(err)
    })         
  }, [])

  

  return (
    <>
      <Head title='Hambúrgueres' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers} ></Snacks>
    </>
  )
}
