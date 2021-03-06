import { styled } from '../../../theme'

export const Form = styled.form`
  height: 100%;
  border: 1px solid black;
  height: fit-content;
  position: sticky;
  top: 10px;

  @media (max-width: ${({ theme }) => theme.screenSize.small}) {
    position: relative;
    top: 0;
  }
`

export const Filter = styled.section`
  padding: 8px 16px;
  & > h5 {
    font-size: 16px;
    margin: 0;
  }

  & > hr {
    margin-left: -16px;
    margin-right: -16px;
  }

  .filter__price {
    display: flex;
    grid-gap: 16px;

    @media (max-width: ${({ theme }) => theme.screenSize.small}) {
      flex-direction: column;
    }
  }
`
