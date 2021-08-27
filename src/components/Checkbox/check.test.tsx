import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { name } from 'faker'
import { Checkbox } from './index'

describe('Checkbox', () => {
  it('should call event onChange after click', async () => {
    const label = name.firstName()
    const onChange = jest.fn()
    render(
      <Checkbox.UnController label={label} value={false} onChange={onChange} />
    )
    const [checkbox] = await screen.getAllByLabelText(label)
    await fireEvent.click(checkbox)
    expect(onChange).toBeCalled()
  })
})
