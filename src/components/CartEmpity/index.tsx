import React from 'react';

import { Container } from './styles';
import { Link } from 'react-router-dom';


const CartEmpity: React.FC = () => {
  return (
    <Container>
        <h1>Ops, seu carrinho está vazio.</h1>
        <Link to='/' className='btnBack'>
          Quero um lanche 
        </Link>        
    </Container>
  );
}

export default CartEmpity;