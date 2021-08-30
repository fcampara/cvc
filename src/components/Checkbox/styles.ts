import styled from 'styled-components'

export const Label = styled.label`
  display: flex;
  cursor: pointer;
  align-items: center;
  flex-direction: row;
  grid-gap: 2px;
`

export const Input = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
`
