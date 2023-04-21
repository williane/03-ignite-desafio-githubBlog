import { Post } from './Post'
import { Container } from './styles'

interface PostProps {
  id: number
  number: number
  title: string
  body: string
  updated_at: string
}

interface PostsProps {
  posts: PostProps[]
}

export function Posts({ posts }: PostsProps) {
  return (
    <Container>
      {posts?.length > 0 &&
        posts.map((post) => <Post key={post.id} post={post} />)}
    </Container>
  )
}
