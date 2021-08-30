import { lighten } from 'polished'
import { styled, css } from '../../theme'
import { IButtonStyle } from './types'

const buttonDefault = css`
  color: ${({ theme }) => theme.palette.common.black};
  background-color: ${({ theme }) => theme.palette.common.gray};

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${({ theme }) =>
      lighten(0.02, theme.palette.common.gray)};
  }
`
const buttonPrimary = css`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.primary.main};

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${({ theme }) =>
      lighten(0.05, theme.palette.primary.main)};
  }
`
const buttonRounded = css`
  border-radius: 50%;
  display: block;
  height: 32px;
  width: 32px;
  grid-gap: 0;
`

const colorsOptions = {
  default: buttonDefault,
  primary: buttonPrimary,
}

export const Button = styled.button<IButtonStyle>`
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 3px;
  font-weight: 300;
  display: flex;
  align-items: center;
  grid-gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.none};
  text-align: center;
  transition: border 0.2s linear, color 0.2s linear, width 0.2s linear,
    background-color 0.2s linear, filter 0.2s;

  ${({ color }) => colorsOptions[color]}

  ${({ rounded }) => rounded && buttonRounded}
`