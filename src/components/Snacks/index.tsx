import { FiPlus } from 'react-icons/fi'

import { currencyFormat } from '../../helpers/currencyFormat'
import { useCart } from '../../hooks/useCart'
import { SnackData } from '../../interface/SnackData'
import { SkeletonSnack } from './SkeletonSnack'

import { Container } from './styles'

interface SnacksProps {
  snacks: SnackData[]
    
}


export function Snacks({snacks}: SnacksProps) {
  
  const {cart, addSnackInToCart} = useCart() 

    
  return (
    <Container>
      {!snacks.length
        ? [1, 2, 3, 4].map((n) => <SkeletonSnack key={n} />)
        : snacks.map((snack) =>{ 
          const snackExistInCart = cart.find((item)=>item._id===snack._id)
          return (
            <div key={snack._id} className='snack'>
              { snackExistInCart && <span>{snackExistInCart.quantity}</span>}
              <h2>{snack.name} - {snacks.length}</h2>
              <img src={snack.image} alt={snack.name} />
              <p>{snack.description}</p>
              <div>
                <strong>{currencyFormat(snack.price)}</strong>
                <button type='button' onClick={()=>addSnackInToCart(snack)}>
                  <FiPlus />
                </button>
                
              </div>
            </div>
          )
        }
        )}
    </Container>
  )
}
