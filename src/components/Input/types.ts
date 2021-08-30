import React from 'react'
import { Control } from 'react-hook-form'

export interface IInputUncontroller
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  prepend?: string
}

export interface IInputController
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  control: Control
}
