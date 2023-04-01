import React from 'react';
import { useCart } from '../../../hooks/useCart';


const Cart: React.FC = () => {
    const { cart } = useCart()
    

  return (
    <>
    <h1>Página ainda em desenvolvimento</h1>
    <ul>{cart.map((snack)=><li key={snack._id}>{snack.quantity}-{snack.name}</li>)}</ul>
    </>
  )
}

export default Cart;