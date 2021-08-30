import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { name, datatype } from 'faker'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Select from './Select'
import { ISelectUncontroller } from './types'

const renderComponent = (props: ISelectUncontroller) => {
  return render(
    <ThemeProvider theme={theme}>
      <Select {...props} />
    </ThemeProvider>
  )
}

describe('Select', () => {
  describe('When change option', () => {
    it('Must be call event onChange', async () => {
      const label = name.firstName()
      const options = Array(20)
        .fill(undefined)
        .map(() => ({ label: name.firstName(), value: datatype.number() }))

      const [firstOption] = options
      const onChange = jest.fn()
      renderComponent({ label, onChange, options, value: undefined })

      const [select] = await screen.getAllByLabelText(label)
      await fireEvent.change(select, { target: { value: firstOption.value } })
      expect(onChange).toBeCalled()
    })
    it('Must return selected value', async () => {
      const label = name.firstName()
      const options = Array(20)
        .fill(undefined)
        .map(() => ({
          label: name.firstName(),
          value: String(datatype.number()),
        }))

      const [firstOption] = options
      const onChange = jest.fn()
      renderComponent({ label, onChange, options, value: undefined })

      const [select] = await screen.getAllByLabelText(label)
      await fireEvent.change(select, { target: { value: firstOption.value } })
      expect(onChange).toBeCalledWith(firstOption.value)
    })
  })
})
