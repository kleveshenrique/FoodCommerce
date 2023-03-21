import axios from 'axios'
import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { SnackData } from '../../../interface/SnackData'


export default function IceCreams() {
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])

  useEffect(() => {    
    axios.get(`http://api-food-service-nnmbhrgta-kleveshenrique.vercel.app/snacks/ice-cream`)
    .then((res)=>{
      setIceCreams(res.data)
     
    }).catch((err)=>{
      console.log(err)
    }) 
       
  }, [])

  return (
    <>
      <Head title='Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
