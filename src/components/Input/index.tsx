import React from 'react'
import { Label, Input, Container } from './styles'
import { IInputUncontroller } from './types'

const InputUncontroller: React.FC<IInputUncontroller> = (
  props: IInputUncontroller
) => {
  const { label, prepend, ...restProps } = props

  return (
    <Label>
      {label}
      <Container>
        {prepend} <Input data-testid="input" {...restProps} />
      </Container>
    </Label>
  )
}

export default React.memo(InputUncontroller)
