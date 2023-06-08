import { createContext, ReactNode, useState } from 'react'
import { SnackData } from '../interface/SnackData'
import { Toastify } from '../helpers/toastify'
import { getEmojiSnack } from '../helpers/SnackEmoji'


interface Snack extends SnackData{
    quantity:number,
    subTotal:number
}

// interface IRemoveSnackFromCartProps{
//     _id : string
//    // snack:string
// }

// interface IUpdateQuantityProps{
//     _id:string      
// }

interface cartContextProps{
   cart: Snack[]
   newCart:()=>void
   addSnackInToCart:(snack:SnackData)=>void
   removeSnackFromCart:(_id:string)=>void
   addQuantitySnack:(_id:string)=>void
   removeQuantitySnack:(_id:string)=>void
}

interface CartProviderProps{
    children:ReactNode
}

export const CartContext = createContext({} as cartContextProps)

export function CartProvider({children}:CartProviderProps){

    const [cart,setCart] = useState<Snack[]>([])

    function newCart():void{
        setCart([])
    }

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
           
            
            Toastify({message:`${getEmojiSnack(snackInCart.snack)} ${snackInCart.name} adicionado(a) ao carrinho.`,type:'success'})
           
           return
        }

        const newSnack = {...snack,quantity:1,subTotal:snack.price}
        const newCart = [...cart,newSnack]
        


        setCart(newCart)
        Toastify({message:`${getEmojiSnack(newSnack.snack)} ${newSnack.name} adicionado(a) ao carrinho.`,type:'success'})
              
        

    }

    function removeSnackFromCart(_id:string):void{
        
        const newCart = cart.filter((item:Snack)=> item._id !== _id)
        setCart(newCart)
    }

    function addQuantitySnack(_id:string):void{
      
        const newCart = cart.map((item:Snack) => {
            
            if( item._id == _id){                
                const newSnack = {...item,quantity:item.quantity+1,subTotal:(item.quantity+1)*item.price}               
                return newSnack
            
            }else{             
            
                return item   
            }

        })

        setCart(newCart)
                       
    }

    function removeQuantitySnack(_id:string):void{
      
        const newCart = cart.map((item:Snack) => {
            
            if(item._id == _id && item.quantity>1){                                
                const newSnack = {...item,quantity:item.quantity-1,subTotal:(item.quantity-1)*item.price}               
                return newSnack
            
            }else{             
            
                return item   
            }

        })
        

        setCart(newCart)
                       
    }

    return (
        <CartContext.Provider value={{cart,newCart,addSnackInToCart,removeSnackFromCart,addQuantitySnack,removeQuantitySnack}}>
            {children}
        </CartContext.Provider>
    )
    
}
