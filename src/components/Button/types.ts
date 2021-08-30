/* eslint-disable no-unused-vars */
import React from 'react'
import { DefaultTheme, ThemedCssFunction } from 'styled-components'

export type ButtonColors = 'default' | 'primary' | 'transparent'

export interface IButtonStyle {
  color: ButtonColors
  rounded: boolean
}

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  color?: ButtonColors
  icon?: string
  rounded?: boolean
  ['data-testid']?: string
}
