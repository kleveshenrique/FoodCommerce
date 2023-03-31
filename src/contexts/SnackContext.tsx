import { SnackData } from '../interface/SnackData'
import { useState,createContext, useEffect, ReactNode } from 'react'
import { getBurgers, getDrinks, getIceCreams, getPizzas } from '../services/api'

interface SnackContextType {
  burgers: SnackData[]
  drinks: SnackData[]
  pizzas: SnackData[]
  icecreams: SnackData[]
}

interface SnackProviderProps {
    children : ReactNode
}


export const SnackContext = createContext({} as SnackContextType)

export function SnackProvider({children}:SnackProviderProps){

  const [burgers,setBurgers] = useState<SnackData[]>([])
  const [drinks,setDrinks] = useState<SnackData[]>([])
  const [pizzas,setPizzas] = useState<SnackData[]>([])
  const [icecreams,setIceCreams] = useState<SnackData[]>([])

  useEffect(()=>{
    (async()=>{
      const burgersData = await getBurgers() 
      const drinksData = await getDrinks() 
      const pizzasData = await getPizzas() 
      const iceCreamsData = await getIceCreams() 


      Promise.all([burgersData,drinksData,pizzasData,iceCreamsData]).then((res)=>{
        setBurgers(res[0].data)
        setDrinks(res[1].data)
        setPizzas(res[2].data)
        setIceCreams(res[3].data)
      })

    })()
  },[])


  return (
    <SnackContext.Provider value={{burgers,drinks,pizzas,icecreams}}>
        {children}
    </SnackContext.Provider>
  )


}