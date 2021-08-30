import { lighten } from 'polished'
import { styled, css } from '../../theme'
import { IButtonStyle } from './types'

const buttonDefault = css`
  color: ${({ theme }) => theme.palette.common.black};
  background-color: ${({ theme }) => theme.palette.common.gray};

  &:hover {
    background-color: ${({ theme }) =>
      lighten(0.02, theme.palette.common.gray)};
  }
`
const buttonPrimary = css`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.primary.main};

  &:hover {
    background-color: ${({ theme }) =>
      lighten(0.05, theme.palette.primary.main)};
  }
`

const buttonTransparent = css`
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) =>
      lighten(0.03, theme.palette.common.gray)};
  }
`

const buttonRounded = css`
  border-radius: 50%;
  display: block;
  height: 32px;
  width: 32px;
  grid-gap: 0;
  min-width: auto;
`

const colorsOptions = {
  default: buttonDefault,
  primary: buttonPrimary,
  transparent: buttonTransparent,
}

export const Button = styled.button<IButtonStyle>`
  cursor: pointer;
  height: 32px;
  border: 1px solid transparent;
  border-radius: 3px;
  font-weight: 300;
  display: flex;
  align-items: center;
  min-width: 110px;
  align-items: center;
  justify-content: center;
  grid-gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.none};
  text-align: center;
  transition: border 0.2s linear, color 0.2s linear, width 0.2s linear,
    background-color 0.2s linear, filter 0.2s;

  &:disabled {
    cursor: not-allowed;
  }

  ${({ color }) => colorsOptions[color]}

  ${({ rounded }) => rounded && buttonRounded}
`
