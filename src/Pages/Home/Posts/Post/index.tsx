import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
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
        <time>
          {formatDistanceToNow(new Date(post.updated_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </time>
      </TitleWrapper>
      <Description>{post.body}</Description>
    </Container>
  )
}
