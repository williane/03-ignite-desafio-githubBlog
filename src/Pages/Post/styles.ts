import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 54rem;
  margin: 0 auto;
`

export const InformationCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 10.5rem;

  margin-top: -5.5rem;
  padding: 2rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`

export const NavigationButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-weight: 700;
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;

  color: ${(props) => props.theme['brand-blue']};
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme['brand-blue']};
    cursor: pointer;
  }
`
export const Title = styled.strong`
  font-size: 1.5rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};

  margin-top: 1.25rem;
`

export const InformationDetails = styled.div`
  display: flex;

  gap: 2rem;

  width: 100%;

  margin-top: 0.5rem;
`

export const InformationDetail = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  text-align: center;
  color: ${(props) => props.theme['base-text']};

  & > i {
    color: ${(props) => props.theme['base-label']};
  }
`

export const ReadOnly = styled.div`
  width: 100%;

  padding: 2rem 2.5rem;
`
