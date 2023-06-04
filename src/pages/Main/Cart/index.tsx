import React from 'react';
import TableCart from '../../../components/TableCart';
import BtnPedido from '../../../components/BtnPedido';
import { Container } from './styles';



const Cart: React.FC = () => {    

  return (
      <Container>
        <TableCart/>
        <BtnPedido/>   
      </Container> 
  )
}

export default Cart;