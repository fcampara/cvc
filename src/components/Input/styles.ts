import { styled } from '../../theme'

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  grid-gap: ${({ theme }) => theme.spacing.micro};
`

export const Container = styled.div`
  display: flex;
  grid-gap: ${({ theme }) => theme.spacing['extra-small']};
  border: 1px solid;
  align-items: center;
  padding-left: 8px;
  border: 1px solid ${({ theme }) => theme.palette.common.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: border-color 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const Input = styled.input`
  flex: 1;
  height: 20px;
  padding: 4px 8px;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.palette.common.white};

  &::focus {
    border: none;
  }
`
