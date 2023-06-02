import { Outlet,useLocation } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import { Container } from './styles'

import logoImg from '../../assets/logo.svg'
import BtnCart from '../../components/BtnCart'
import { useCart } from '../../hooks/useCart'

import { FaArrowLeft} from 'react-icons/fa';




export default function Main() {  

  // pegando a url atual da pagina
  const location = useLocation().pathname
    
  const {cart}=useCart()

  return (
    <Container>
     
        <Sidebar />
        <section>
          <div className='header'>
            <FaArrowLeft/>
            <img src={logoImg} alt="Logo da Empresa" />            
          </div>
          <Outlet />

          {(cart.length>0 && location!="/cart") && <BtnCart/>}
        </section>
     
    </Container>
  )
}
