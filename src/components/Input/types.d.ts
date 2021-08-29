import React from 'react'

export interface IInputUncontroller
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  prepend?: string
}
