import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Container } from './styles'
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

  return <Container></Container>
}
