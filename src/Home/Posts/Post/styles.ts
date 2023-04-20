import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  width: 100%;
  height: 16.25rem;

  padding: 2rem;

  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
`

export const TitleWrapper = styled.div`
  display: flex;

  gap: 1rem;

  & > strong {
    width: 17.6875rem;
    font-size: 1.25rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-title']};
  }

  & > time {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`

export const Description = styled.p`
  color: ${(props) => props.theme['base-text']};
  line-height: 160%;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  white-space: pre-wrap;
`
