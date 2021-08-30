import React from 'react'
import { Controller } from 'react-hook-form'
import { Label, Select } from './styles'
import { ISelectController, ISelectUncontroller } from './types'

const SelectUncontroller: React.FC<ISelectUncontroller> = (
  props: ISelectUncontroller
) => {
  const { label, options = [], onChange, ...restProps } = props

  return (
    <Label>
      {label}
      <Select
        {...restProps}
        onChange={({ currentTarget }) => {
          onChange(currentTarget.value)
        }}>
        {options.map(({ label, value }) => (
          <option data-testid={value} key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </Label>
  )
}

export const SelectController: React.FC<ISelectController> = (
  props: ISelectController
) => {
  const { control, name, ...restProps } = props

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <SelectUncontroller {...restProps} {...field} />}
    />
  )
}
export default React.memo(SelectUncontroller)
