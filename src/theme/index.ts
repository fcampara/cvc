import baseStyled, { ThemedStyledInterface } from 'styled-components'
import palette from './palette'
import spacing from './spacing'
export { css } from 'styled-components'

const theme = {
  borderRadius: '4px',
  palette,
  spacing,
}

export type Theme = typeof theme
export const styled = baseStyled as ThemedStyledInterface<Theme>

export default theme
