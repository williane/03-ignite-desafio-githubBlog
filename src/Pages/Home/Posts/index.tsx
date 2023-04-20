import { useEffect, useState } from 'react'
import { api } from '../../../lib/axios'
import { Post } from './Post'
import { Container } from './styles'

interface PostsProps {
  id: number
  number: number
  title: string
  body: string
  updated_at: string
}

export function Posts() {
  const [posts, setPosts] = useState<PostsProps[]>([])

  async function fetchPostDataFromGithub() {
    const response = await api.get(
      'repos/williane/03-ignite-desafio-githubBlog/issues',
    )

    setPosts(response.data)
  }
  useEffect(() => {
    fetchPostDataFromGithub()
  }, [])

  return (
    <Container>
      {posts?.length > 0 &&
        posts.map((post) => <Post key={post.id} post={post} />)}
    </Container>
  )
}
