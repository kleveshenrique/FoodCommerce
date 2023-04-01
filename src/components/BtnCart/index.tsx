import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as CartIcon} from "../../assets/cart.svg"
import { Container } from './style';

import { CartContext} from "../../contexts/CartContext"





function countRequests(){
    const {cart} = useContext(CartContext)
    const total = cart.reduce((acc,item)=>item.quantity + acc, 0)
    return total
}

const BtnCart: React.FC = () => {
  return (
    <Container>        
        <Link to="/cart" className='link'>
           
                
                <CartIcon/>
                <span>
                    <span>{countRequests()} </span>
                    <span>items</span>
                </span>
           
        </Link>
    </Container>
  )
}

export default BtnCart;