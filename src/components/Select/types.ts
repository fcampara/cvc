import { Control } from 'react-hook-form'

type IselectOptionValue = string | number | undefined

export type ISelectOption = {
  label: string
  value: IselectOptionValue
}

export interface ISelectUncontroller {
  label?: string
  options: ISelectOption[]
  value: IselectOptionValue
  onChange: (value: IselectOptionValue) => void
}

export interface ISelectController
  extends Omit<ISelectUncontroller, 'onChange' | 'value'> {
  control: Control
  name: string
}
