import React from 'react'
import { Label, Input, Container } from './styles'

const InputUncontroller: React.FC = () => {
  return (
    <Label>
      Input
      <Container>
        R$ <Input />
      </Container>
    </Label>
  )
}

export default React.memo(InputUncontroller)
