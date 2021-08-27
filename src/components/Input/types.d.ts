import React from 'react'

export interface IInputController
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export interface ICheckboxComponent {
  Controller: React.FC<IInputController>
}
