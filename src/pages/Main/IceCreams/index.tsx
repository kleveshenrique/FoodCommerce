import axios from 'axios'
import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { SnackData } from '../../../interface/SnackData'

import { getIceCreams } from '../../../services/api'

export default function IceCreams() {
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])

  useEffect(() => {
    axios.get("http://localhost:3033/snacks/ice-cream")
    .then((res)=>{
      setIceCreams(res.data)
     
    }).catch((err)=>{
      console.log(err)
    })    
  }, [])

  // useEffect(() => {
  //   ;(async () => {
  //     const iceCreamsRequest = await getIceCreams()

  //     setIceCreams(iceCreamsRequest.data)
  //   })()
  // }, [])

  return (
    <>
      <Head title='Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
