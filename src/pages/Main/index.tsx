import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import { Container } from './styles'

import logoImg from '../../assets/logo.svg'
import CartImg from '../../assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'



export default function Main() {   
  
  const { cart } = useContext(CartContext)

  function handleShowCart(){
    alert("Em Desenvolvimento")
  }  

  function countRequests(){
    const total = cart.reduce((acc,item)=>item.quantity + acc, 0)
    return total
  }

 
    
  return (
    <Container>
     
        <Sidebar />
        <section>
          <div className='header'>
            <img src={logoImg} alt="Logo da Empresa" />
            <div className='sectionCart'>
              <span>{countRequests()}</span>
              <img src={CartImg} onClick={handleShowCart} />
            </div>
          </div>
          <Outlet />
        </section>
     
    </Container>
  )
}
