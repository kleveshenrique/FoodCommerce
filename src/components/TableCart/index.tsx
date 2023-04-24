import React from 'react';
import { Container } from './style';
import { useCart } from '../../hooks/useCart';
import { currencyFormat } from '../../helpers/currencyFormat';

// import { Container } from './styles';

const TableCart: React.FC = () => {
    const {cart} = useCart()
  return (
    <Container>
        <table>
        <thead>
            <tr>
            <th></th>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {cart.map(item=>(
            <tr key={item._id}>
                <td>
                   <img src={item.image}/>
                </td>
                <td>
                    <h4>{item.name}</h4>
                    <span>{currencyFormat(item.price)}</span>
                </td>
                <td>{item.quantity}</td>
                <td>{currencyFormat(item.quantity*item.price)}</td>
                <td>x</td>
            </tr>          
            ))}
        
        </tbody>
        </table>
    </Container>
  );
}

export default TableCart;