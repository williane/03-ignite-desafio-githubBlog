import { useParams } from 'react-router-dom'
import { Container } from './styles'

export function Post() {
  const params = useParams()

  return <Container>{params.slug}</Container>
}
