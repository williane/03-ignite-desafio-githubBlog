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

export function Profile() {
  return (
    <ProfileBox>
      <ProfileImage src="https://github.com/williane.png" />
      <ProfileInformation>
        <ProfileTitle>
          <span>Williane Marques</span>
          <Github>
            <span>GITHUB</span>
            <i className="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
          </Github>
        </ProfileTitle>
        <ProfileDescription>
          Formada em Analise e desenvolvimento de sistemas, apaixonada por
          desenvolvimento e inovação. E fascinada em solucionar problemas
          através da logica.
        </ProfileDescription>
        <ProfileDetails>
          <ProfileDetail>
            <i className="fa-brands fa-github fa-lg"></i>
            williane
          </ProfileDetail>
          <ProfileDetail>
            <i className="fa-solid fa-building"></i>
            DHL
          </ProfileDetail>
          <ProfileDetail>
            <i className="fa-solid fa-user-group"></i>
            32 seguidores
          </ProfileDetail>
        </ProfileDetails>
      </ProfileInformation>
    </ProfileBox>
  )
}
