import axios from 'axios'
import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { SnackData } from '../../../interface/SnackData'

//import { getIceCreams } from '../../../services/api'

export default function IceCreams() {
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])

  useEffect(() => {
    
    axios.get(`${process.env.REACT_APP_API_URL}/snacks/ice-cream`)
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
