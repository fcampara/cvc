import React from 'react'
import { Control } from 'react-hook-form'

export interface ICheckboxController
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  control: Control
}

export interface ICheckboxUncontroller
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  value: boolean
  name?: string
}

export interface ICheckboxComponent {
  Controller: React.FC<ICheckboxController>
  Uncontroller: React.FC<ICheckboxUncontroller>
}
