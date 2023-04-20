import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 54rem;
  height: 100%;

  margin: 0 auto;
`

export const SearchFormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  width: 100%;

  margin-top: 4.5rem;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  & > strong {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 160%;

    color: ${(props) => props.theme['base-subtitle']};
  }

  & > span {
    font-size: 0.875rem;
    line-height: 160%;

    color: ${(props) => props.theme['base-span']};
  }
`

export const Form = styled.form`
  display: flex;

  width: 100%;

  & > input {
    width: 100%;

    padding: 0.75rem 1rem;

    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
