import React from 'react'
import { Control } from 'react-hook-form'

type BaseCheckbox = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'>

export interface ICheckboxController
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  control: Control
}

export interface ICheckboxUncontroller extends BaseCheckbox {
  label: string
  value: boolean
  name?: string
}
