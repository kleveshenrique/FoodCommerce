import React from 'react';

import { Container } from './styles';
import { Link } from 'react-router-dom';

import manAndBurger from '../../assets/man-and-burger.svg'

const CartEmpity: React.FC = () => {
  return (
    <Container>
        <h1>Ops, seu carrinho está vazio.</h1>
        <img src={manAndBurger} alt='Imagem homem com hamburguer' />
        <Link to='/' className='btnBack'>
          Quero um lanche 
        </Link>   
        
    </Container>
  );
}

export default CartEmpity;