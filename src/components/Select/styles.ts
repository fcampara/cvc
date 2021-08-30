import styled from 'styled-components'

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  grid-gap: 2px;
`

export const Select = styled.select`
  cursor: pointer;
  height: 32px;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.palette.common.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: border-color 0.2s;
  background-color: white;
  outline: none;

  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }

  &:focus {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }
`
