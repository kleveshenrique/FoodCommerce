import React from 'react';
import { Container } from './style';
import { useCart } from '../../hooks/useCart';
import { currencyFormat } from '../../helpers/currencyFormat';
import { FaMinusCircle,FaPlusCircle, FaTrashAlt } from 'react-icons/fa';


const TableCart: React.FC = () => {
    const {cart,removeSnackFromCart,addQuantitySnack,removeQuantitySnack} = useCart()
   

    
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
                <td> 
                    <span className='sectionQuantity'>   
                        <button onClick={()=>removeQuantitySnack(item._id)}><FaMinusCircle/></button>
                        {item.quantity}                    
                        <button onClick={()=>addQuantitySnack(item._id)}><FaPlusCircle/></button>
                    </span>
                </td>
                <td>
                   
                    {currencyFormat(item.subTotal)}
                    
                </td>
                <td>
                    <button onClick={()=>removeSnackFromCart(item._id)}>
                        <FaTrashAlt/>
                    </button>
                </td>
            </tr>          
            ))}
        
        </tbody>
        </table>
    </Container>
  );
}

export default TableCart;