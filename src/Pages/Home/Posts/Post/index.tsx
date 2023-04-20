import { Container, Description, TitleWrapper } from './styles'

interface PostsProps {
  id: number
  number: number
  title: string
  body: string
  updated_at: string
}

interface PostProps {
  post: PostsProps
}

export function Post({ post }: PostProps) {
  return (
    <Container>
      <TitleWrapper>
        <strong>{post.title}</strong>
        <time>Há 1 dia</time>
      </TitleWrapper>
      <Description>{post.body}</Description>
    </Container>
  )
}
