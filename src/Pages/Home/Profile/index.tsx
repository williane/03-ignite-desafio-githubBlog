import { useEffect, useState } from 'react'
import {
  Github,
  ProfileBox,
  ProfileDescription,
  ProfileDetail,
  ProfileDetails,
  ProfileImage,
  ProfileInformation,
  ProfileTitle,
} from './styles'
import { api } from '../../../lib/axios'

interface User {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: number
}

export function Profile() {
  const [user, setUser] = useState<User>()

  async function fetchProfileFromGithub() {
    const response = await api.get('/users/williane')
    const data = await response.data

    setUser(data)
  }

  useEffect(() => {
    fetchProfileFromGithub()
  }, [])

  return (
    <ProfileBox>
      <ProfileImage src={user?.avatar_url} />
      <ProfileInformation>
        <ProfileTitle>
          <span>{user?.name}</span>
          <Github href={user?.html_url} target="_blank">
            <span>GITHUB</span>
            <i className="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
          </Github>
        </ProfileTitle>
        <ProfileDescription>{user?.bio}</ProfileDescription>
        <ProfileDetails>
          <ProfileDetail>
            <i className="fa-brands fa-github fa-lg"></i>
            {user?.login}
          </ProfileDetail>
          <ProfileDetail>
            <i className="fa-solid fa-building"></i>
            {user?.company}
          </ProfileDetail>
          <ProfileDetail>
            <i className="fa-solid fa-user-group"></i>
            {user?.followers} seguidores
          </ProfileDetail>
        </ProfileDetails>
      </ProfileInformation>
    </ProfileBox>
  )
}
