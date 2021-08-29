import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { lorem } from 'faker'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Input from './index'
import { IInputUncontroller } from './types'

const renderComponent = (props?: IInputUncontroller) => {
  return render(
    <ThemeProvider theme={theme}>
      <Input {...props} />
    </ThemeProvider>
  )
}

describe('Input', () => {
  describe('When pass props label', () => {
    it('Must be visible', () => {
      const label = lorem.word()

      const { getByLabelText } = renderComponent({ label })
      const existLabel = getByLabelText(label)
      expect(existLabel).toBeDefined()
    })
  })
  describe('When type text in input', () => {
    it('Must call event onChange', async () => {
      const onChange = jest.fn()
      const value = lorem.word()
      const screen = renderComponent({ onChange })

      const input = screen.getByTestId('input') as HTMLInputElement
      await fireEvent.change(input, { target: { value } })
      expect(input.value).toEqual(value)
      expect(onChange).toBeCalled()
    })
  })
})
