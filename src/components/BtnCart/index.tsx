import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as CartIcon} from "../../assets/cart.svg"
import { Container } from './style';
import { CartContext} from "../../contexts/CartContext"
import { currencyFormat } from '../../helpers/currencyFormat';


function countRequests(){
    
    const {cart} = useContext(CartContext)
  
    let subTotal=0;
    let qtdItems=0;

    cart.forEach((snack)=>{
      subTotal = subTotal+(snack.quantity*snack.price)
      qtdItems = qtdItems + snack.quantity
       
    })
    return {qtdItems,subTotal}
}

const BtnCart: React.FC = () => {
  return (
    <Container>        
        <Link to="/cart" className='link'>           
                
                <CartIcon/>
                <span>
                    <span>{countRequests().qtdItems} {countRequests().qtdItems>1 ? 'items' : 'item'}</span>
                    <span>{currencyFormat(countRequests().subTotal)}</span>
                </span>
           
        </Link>
    </Container>
  )
}

export default BtnCart;