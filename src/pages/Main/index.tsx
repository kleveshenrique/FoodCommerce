import { Outlet } from 'react-router-dom'

import { Sidebar } from '../../components/Sidebar'

import { Container } from './styles'

import logoImg from '../../assets/logo.svg'
import CartImg from '../../assets/cart.svg'
import { SnackData } from '../../interface/SnackData'


export default function Main() {

  function handleShowCart(){
    alert("Mostrar Carrinho -Ainda em desenvolvimento")
  }  
  return (
    <Container>
      <Sidebar />
      <section>
        <div className='header'>
          <img src={logoImg} alt="Logo da Empresa" />
          <div className='sectionCart'>
            <span>3</span>
            <img src={CartImg} onClick={handleShowCart} />
          </div>
        </div>
        <Outlet />
      </section>
    </Container>
  )
}
