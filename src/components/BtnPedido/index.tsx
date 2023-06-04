import React from 'react';
import { Container } from './styles';
import { useCart } from '../../hooks/useCart';
import { currencyFormat } from '../../helpers/currencyFormat';

function handleFecharPedido(valorPedido:number){
  alert('Pedido enviado com sucesso. R$: '+valorPedido)
}

const BtnPedido: React.FC = () => {
  const {cart} = useCart()
  const valorPedido = cart.reduce((acc,currente)=>acc+currente.subTotal,0)
  
  return (
    <Container onClick={()=>handleFecharPedido(valorPedido)}>   
    
        <span>Fechar Pedido</span>
        <span>{currencyFormat(valorPedido)}</span>    

    </Container>
  );
}

export default BtnPedido;