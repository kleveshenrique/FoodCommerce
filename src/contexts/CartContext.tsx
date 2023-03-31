import { createContext, ReactNode, useState } from 'react'
import { SnackData } from '../interface/SnackData'

interface Snack extends SnackData{
    quantity:number,
    subTotal:number
}

// interface IRemoveSnackFromCartProps{
//     _id : string,
//     snack:string
// }

// interface IUpdateCartProps{
//     id:string,
//     snack:string,
//     newQuantity:number
// }
interface cartContextProps{
   cart: Snack[]
   addSnackInToCart:(snack:SnackData)=>void
//    removeSnackFromCart:({_id,snack}:IRemoveSnackFromCartProps)=>void
//    updateCart:({id,snack,newQuantity}:IUpdateCartProps)=>void
}

interface CartProviderProps{
    children:ReactNode
}

export const CartContext = createContext({} as cartContextProps)

export function CartProvider({children}:CartProviderProps){

    const [cart,setCart] = useState<Snack[]>([])

    function addSnackInToCart(snack:SnackData):void{

        const snackInCart = cart.find((item)=>item._id == snack._id)        

        if (snackInCart) {
            const quantity = snackInCart.quantity+1
            const subTotal = quantity * snackInCart.price

            const snackUpdated = {...snack,quantity,subTotal}                        

           const newCart = cart.map((item)=>{  
                if ( item._id === snackUpdated._id ) {
                    return snackUpdated
                }          
                return item
            })

            setCart(newCart)
            console.log("snack updated :",newCart)

           return
        }

        const newSnack = {...snack,quantity:1,subTotal:snack.price}
        const newCart = [...cart,newSnack]
        


        setCart(newCart)

        console.log("Cart:",newCart)
        

    }

    return (
        <CartContext.Provider value={{cart,addSnackInToCart}}>
            {children}
        </CartContext.Provider>
    )
    
}