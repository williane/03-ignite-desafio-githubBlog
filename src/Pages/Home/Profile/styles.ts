import styled from 'styled-components'

export const ProfileBox = styled.div`
  display: flex;

  gap: 2rem;

  width: 100%;
  height: 13.25rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  margin-top: -5.5rem;

  padding: 2rem;
`

export const ProfileImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;

  margin-left: 0.5rem;
`

export const ProfileInformation = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  width: 38.25rem;

  margin-top: 0.5rem;
`

export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  & > span {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
`
export const Github = styled.a`
  display: flex;
  align-items: center;

  margin-bottom: 0.5rem;

  gap: 0.5rem;

  border-bottom: 1px solid transparent;
  text-decoration: none;
  outline: none;

  & > span {
    font-family: 'Nunito';

    font-weight: 700;
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;

    color: ${(props) => props.theme['brand-blue']};
  }

  & > i {
    color: ${(props) => props.theme['brand-blue']};
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme['brand-blue']};
    cursor: pointer;
  }
`

export const ProfileDescription = styled.p`
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};
`

export const ProfileDetails = styled.div`
  display: flex;

  gap: 1.5rem;

  width: 24.5625rem;

  margin-top: 1rem;
`

export const ProfileDetail = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  text-align: center;
  color: ${(props) => props.theme['base-text']};

  & > i {
    color: ${(props) => props.theme['base-label']};
  }
`
