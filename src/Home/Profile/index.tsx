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
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
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
