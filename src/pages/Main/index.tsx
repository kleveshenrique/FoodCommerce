import { Outlet,useLocation } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import { Container } from './styles'

import logoImg from '../../assets/logo.svg'
import BtnCart from '../../components/BtnCart'
import { useCart } from '../../hooks/useCart'
//import { useCart } from '../../hooks/useCart'




export default function Main() {  

  // pegando a url atual da pagina
  const location = useLocation().pathname
    
  const {cart}=useCart()

  return (
    <Container>
     
        <Sidebar />
        <section>
          <div className='header'>
            <img src={logoImg} alt="Logo da Empresa" />
            {/* <div className='sectionCart'>
              <span>{countRequests()}</span>
              <img src={CartImg} onClick={handleShowCart} />
            </div> */}
          </div>
          <Outlet />

          {(cart.length>0 && location!="/cart") && <BtnCart/>}
        </section>
     
    </Container>
  )
}
