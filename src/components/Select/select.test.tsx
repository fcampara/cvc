import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { name, datatype } from 'faker'
import Select from './index'

describe('Select', () => {
  it('should call event onChange after click option', async () => {
    const label = name.firstName()
    const options = Array(20)
      .fill(undefined)
      .map(() => ({ label: name.firstName(), value: datatype.number() }))

    const [firstOption] = options
    const onChange = jest.fn()
    render(
      <Select
        label={label}
        onChange={onChange}
        options={options}
        value={undefined}
      />
    )

    const [select] = await screen.getAllByLabelText(label)
    await fireEvent.change(select, { target: { value: firstOption.value } })
    expect(onChange).toBeCalled()
  })
})
