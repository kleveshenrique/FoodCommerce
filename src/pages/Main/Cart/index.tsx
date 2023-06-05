import React from 'react';
import TableCart from '../../../components/TableCart';
import BtnPedido from '../../../components/BtnPedido';
import { Container } from './styles';
import { useCart } from '../../../hooks/useCart';
import CartEmpity from '../../../components/CartEmpity';

const Cart: React.FC = () => {    
  const { cart } = useCart()
return (  
  <>
    {cart.length==0 ? 
      <CartEmpity/>
    :
      <Container>       
        <TableCart/>
        <BtnPedido/>   
      </Container>
    }
  </> 
)
}

export default Cart;