import { Outlet } from 'react-router-dom'

import { Sidebar } from '../../components/Sidebar'

import { Container } from './styles'

import logoImg from '../../assets/logo.svg'
import cartImg from '../../assets/cart.svg'


export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <div className='header'>
          <img src={logoImg} />
          <div className='sectionCart'>
            <span>3</span>
            <img src={cartImg} />
          </div>
        </div>
        <Outlet />
      </section>
    </Container>
  )
}
