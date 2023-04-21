import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  Container,
  InformationCard,
  InformationDetail,
  InformationDetails,
  Navigation,
  NavigationButton,
  ReadOnly,
  Title,
} from './styles'
import { api } from '../../lib/axios'
import { MarkdownHighlighter } from './MarkdownHighlighter'

interface PostProps {
  html_url: string
  title: string
  user: {
    login: string
  }
  comments: number
  updated_at: string
  body: string
}

export function Post() {
  const { slug } = useParams()
  const [post, setPost] = useState<PostProps>()
  const repository = '03-ignite-desafio-githubBlog'
  const githubLogin = 'williane'
  const apiUrl = `repos/${githubLogin}/${repository}/issues/${slug}`
  const markdown = post?.body ? post.body : ''

  async function fetchPost() {
    const response = await api.get(apiUrl)
    setPost(response.data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <Container>
      <InformationCard>
        <Navigation>
          <NavigationButton href="/">
            <i className="fa-solid fa-chevron-left fa-sm"></i>
            voltar
          </NavigationButton>
          <NavigationButton href={post?.html_url} target="_blank">
            ver no github
            <i className="fa-solid fa-arrow-up-right-from-square fa-sm"></i>
          </NavigationButton>
        </Navigation>
        <Title>{post?.title}</Title>
        <InformationDetails>
          <InformationDetail>
            <i className="fa-brands fa-github fa-sm"></i>
            {post?.user.login}
          </InformationDetail>
          <InformationDetail>
            <i className="fa-solid fa-calendar-day fa-sm"></i>
            Há 1 dia
          </InformationDetail>
          <InformationDetail>
            <i className="fa-solid fa-comment fa-sm"></i>
            {post?.comments} comentários
          </InformationDetail>
        </InformationDetails>
      </InformationCard>
      <ReadOnly>
        <MarkdownHighlighter markdown={markdown} />
      </ReadOnly>
    </Container>
  )
}
