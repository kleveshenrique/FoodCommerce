import React from 'react';
import { Container } from './styles';
import { useCart } from '../../hooks/useCart';
import { currencyFormat } from '../../helpers/currencyFormat';
import { useNavigate } from "react-router-dom";



const BtnPayOrder: React.FC = () => {
  const {cart,newCart} = useCart()
  const valorPedido = cart.reduce((acc,currente)=>acc+currente.subTotal,0)
  const navigate = useNavigate();

  function handleFecharPedido(payValue:number){    
    alert(`Pedido salvo com sucesso, obrigado pela preferência: ${payValue}`)
    newCart()
    navigate("/")
  }
  
  return (
    <Container type='submit' onClick={()=>handleFecharPedido(valorPedido)}>       
        <span>Pagar</span>
        <span>{currencyFormat(valorPedido)}</span>
    </Container>
  );
}

export default BtnPayOrder;