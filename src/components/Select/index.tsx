import React from 'react'
import { Controller } from 'react-hook-form'
import { Label, Select as StyledSelect } from './styles'
import {
  ISelectController,
  ISelectUncontroller,
  ISelectComponent,
} from './types'

const SelectUncontroller: React.FC<ISelectUncontroller> = (
  props: ISelectUncontroller
) => {
  const { label, options = [], ...restProps } = props

  return (
    <Label>
      {label}
      <StyledSelect {...restProps}>
        {options.map(({ label, value }) => (
          <option data-testid={value} key={value} value={value}>
            {label}
          </option>
        ))}
      </StyledSelect>
    </Label>
  )
}

const SelectController: React.FC<ISelectController> = (
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

export const Select: ISelectComponent = {
  Controller: SelectController,
  Uncontroller: SelectUncontroller,
}

export default React.memo(SelectUncontroller)
