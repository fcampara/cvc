import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { lorem } from 'faker'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Button from './Button'
import { IButton } from './types'

const renderComponent = (props?: IButton) => {
  return render(
    <ThemeProvider theme={theme}>
      <Button {...props} />
    </ThemeProvider>
  )
}

describe('Button', () => {
  describe('When click in button', () => {
    it('Must call event function onClick', async () => {
      const onClick = jest.fn()
      const testid = 'button'
      const screen = renderComponent({ 'data-testid': testid, onClick })
      const button = screen.getByTestId('button')
      await fireEvent.click(button)
      expect(onClick).toBeCalled()
    })
  })
  describe('When pass label', () => {
    it('Must be visible label', () => {
      const label = lorem.word()
      const screen = renderComponent({ label })
      expect(screen.queryByText(label)).toBeInTheDocument()
    })
  })
  describe('When pass icon', () => {
    it('Must be visible icon', () => {
      const icon = 'fas fa-times'
      const testid = 'button'
      const { container } = renderComponent({ 'data-testid': testid, icon })
      const [elementIcon]: any = container.getElementsByClassName(icon)
      expect(elementIcon).toBeInTheDocument()
    })
  })
})
