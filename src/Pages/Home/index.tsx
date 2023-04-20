import { Posts } from './Posts'
import { Profile } from './Profile'
import { Container, Form, SearchFormWrapper, TitleWrapper } from './styles'

export function Home() {
  return (
    <Container>
      <Profile />
      <SearchFormWrapper>
        <TitleWrapper>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </TitleWrapper>
        <Form>
          <input type="text" placeholder="Buscar conteúdo" />
        </Form>
      </SearchFormWrapper>
      <Posts />
    </Container>
  )
}
