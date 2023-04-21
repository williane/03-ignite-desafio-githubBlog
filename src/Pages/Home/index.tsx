import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Posts } from './Posts'
import { Profile } from './Profile'
import { Container, Form, SearchFormWrapper, TitleWrapper } from './styles'
import { api } from '../../lib/axios'

interface PostProps {
  id: number
  number: number
  title: string
  body: string
  updated_at: string
}

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [filter, setFilter] = useState('')
  const totalPosts = posts.length
  const repository = '03-ignite-desafio-githubBlog'
  const githubLogin = 'williane'

  async function fetchPostsDataFiltered() {
    const response = await api.get('search/issues', {
      params: {
        q: `${filter}repo:${githubLogin}/${repository}`,
      },
    })

    setPosts(response.data.items)
  }

  async function fetchPostDataFromGithub() {
    const response = await api.get(`repos/${githubLogin}/${repository}/issues`)

    setPosts(response.data)
  }

  useEffect(() => {
    fetchPostDataFromGithub()
  }, [])

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    fetchPostsDataFiltered()
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setFilter(event.target?.value)
  }

  return (
    <Container>
      <Profile />
      <SearchFormWrapper>
        <TitleWrapper>
          <strong>Publicações</strong>
          <span>{totalPosts} publicações</span>
        </TitleWrapper>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            onChange={handleInputChange}
            value={filter}
          />
        </Form>
      </SearchFormWrapper>
      <Posts posts={posts} />
    </Container>
  )
}
