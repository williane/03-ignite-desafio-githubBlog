import { Container, Logo } from './styles'
import Effect01 from '../../assets/effect01.svg'
import Effect02 from '../../assets/effect02.svg'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <img src={Effect01} alt="" />
      <Logo src={logo} alt="" />
      <img src={Effect02} alt="" />
    </Container>
  )
}
