import React from 'react'
import { Controller } from 'react-hook-form'
import { Label, Input } from './styles'
import {
  ICheckboxController,
  ICheckboxUnController,
  ICheckboxComponent,
} from './types'

const CheckboxUnController: React.FC<ICheckboxUnController> = (
  props: ICheckboxUnController
) => {
  const { label, value, onChange } = props

  return (
    <Label>
      <Input checked={value} onChange={onChange} />
      {label}
    </Label>
  )
}

const CheckController: React.FC<ICheckboxController> = (
  props: ICheckboxController
) => {
  const { label, name, control } = props

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field }) => <CheckboxUnController label={label} {...field} />}
    />
  )
}

export const Checkbox: ICheckboxComponent = {
  Controller: CheckController,
  UnController: CheckboxUnController,
}

export default React.memo(CheckboxUnController)
