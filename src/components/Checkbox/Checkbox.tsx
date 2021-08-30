import React from 'react'
import { Controller } from 'react-hook-form'
import { Label, Input } from './styles'
import { ICheckboxController, ICheckboxUncontroller } from './types'

const CheckboxUncontroller: React.FC<ICheckboxUncontroller> = (
  props: ICheckboxUncontroller
) => {
  const { label, value, onChange } = props

  return (
    <Label>
      <Input checked={value} onChange={onChange} />
      {label}
    </Label>
  )
}

export const CheckController: React.FC<ICheckboxController> = (
  props: ICheckboxController
) => {
  const { label, name, control } = props

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field }) => (
        <CheckboxUncontroller
          label={label}
          value={field.value}
          onChange={({ target }) => field.onChange(target.checked)}
        />
      )}
    />
  )
}

export default React.memo(CheckboxUncontroller)
