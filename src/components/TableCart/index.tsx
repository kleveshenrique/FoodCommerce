import React from 'react';
import { Container } from './style';
import { useCart } from '../../hooks/useCart';

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
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.quantity*item.price}</td>
                <td>x</td>
            </tr>          
            ))}
        
        </tbody>
        </table>
    </Container>
  );
}

export default TableCart;