import React from 'react'
import { Controller } from 'react-hook-form'
import { Label, Input, Container } from './styles'
import { IInputUncontroller, IInputController } from './types'

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

export const InputController: React.FC<IInputController> = (
  props: IInputController
) => {
  const { label, name, control, ...restProps } = props

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field }) => (
        <InputUncontroller
          {...restProps}
          label={label}
          value={field.value}
          onChange={({ target }) => field.onChange(target.checked)}
        />
      )}
    />
  )
}

export default React.memo(InputUncontroller)
