import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 18.5rem;

  background-color: ${(props) => props.theme['base-profile']};
`

export const Logo = styled.img`
  margin-bottom: 6rem;
`
