import { styled } from '../../theme'

export const Stars = styled.div`
  display: flex;
  grid-gap: 2px;

  i {
    padding: ${({ theme }) => theme.spacing.micro};
  }

  button,
  i {
    color: #ffeb3b;
  }
`
