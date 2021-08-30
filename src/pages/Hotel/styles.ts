import { styled } from '../../theme'

export const Container = styled.div`
  height: calc(100vh - 32px);
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  grid-gap: 32px;
  margin: 16px;

  @media (max-width: ${({ theme }) => theme.screenSize.small}) {
    grid-template-rows: max-content;
    margin: 8px;
    grid-template-columns: 1fr;
    height: calc(100vh - 16px);
  }
`
