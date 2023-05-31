import React, { useContext } from 'react';
import { Container } from './style';
import { useCart } from '../../hooks/useCart';
import { currencyFormat } from '../../helpers/currencyFormat';
import { FaMinusCircle,FaPlusCircle, FaTrash } from 'react-icons/fa';
import { CartContext } from '../../contexts/CartContext';



const TableCart: React.FC = () => {
    const {cart,removeSnackFromCart} = useCart()
   

    const handleRemoveSnack = (_id:string)=>{
        removeSnackFromCart(_id)
    }
    
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
                        <button><FaMinusCircle/></button>
                        {item.quantity}                    
                        <button><FaPlusCircle/></button>
                    </span>
                </td>
                <td>
                   
                    {currencyFormat(item.quantity*item.price)}
                    
                </td>
                <td>
                    <button onClick={()=>handleRemoveSnack(item._id)}>
                        <FaTrash/>
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