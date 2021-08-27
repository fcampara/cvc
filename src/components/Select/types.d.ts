import React, { SelectHTMLAttributes } from 'react'
import { Control } from 'react-hook-form'

type IselectOptionValue = string | number | undefined

type ISelectOption = {
  label: string
  value: IselectOptionValue
}

export interface ISelectUncontroller
  extends React.SelectHTMLAttributes<SelectHTMLAttributes> {
  label?: string
  options: ISelectOption[]
  value: IselectOptionValue
}

export interface ISelectController extends ISelectUncontroller {
  control: Control
  name: string
}

export interface ISelectComponent {
  Controller: React.FC<ISelectController>
  Uncontroller: React.FC<ISelectUncontroller>
}
