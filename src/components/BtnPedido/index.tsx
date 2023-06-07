import React from 'react';
import { Container } from './styles';
import { useCart } from '../../hooks/useCart';
import { currencyFormat } from '../../helpers/currencyFormat';
import { useNavigate } from "react-router-dom";



const BtnPedido: React.FC = () => {
  const {cart} = useCart()
  const valorPedido = cart.reduce((acc,currente)=>acc+currente.subTotal,0)
  const navigate = useNavigate();

  function handleFecharPedido(){
    
    alert('Você precisa está logado,favor cadastre-se.')
    navigate("/payment")
  }
  
  return (
    <Container onClick={()=>handleFecharPedido()}>       
        <span>Fechar Pedido</span>
        <span>{currencyFormat(valorPedido)}</span>
    </Container>
  );
}

export default BtnPedido;