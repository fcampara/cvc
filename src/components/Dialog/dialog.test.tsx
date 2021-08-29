import React from 'react'
import { render } from '@testing-library/react'
import { lorem } from 'faker'
import Dialog from './Dialog'

type IDialogTesting = {
  open: boolean
  childrenText: string
}

const renderComponent = (props: IDialogTesting) => {
  const { childrenText, open } = props
  return render(
    <Dialog open={open}>
      <div data-testid="children">{childrenText}</div>
    </Dialog>
  )
}

describe('Dialog', () => {
  describe('When Dialog is open', () => {
    it('Children must be visible', () => {
      const childrenText = lorem.words(20)
      const dialog = renderComponent({ open: true, childrenText })
      const existChildren = dialog.getByText(childrenText)
      expect(existChildren).toBeVisible()
    })
  })
  describe('When Dialog is close', () => {
    it('Children must be not visible', () => {
      const childrenText = lorem.words(20)
      const dialog = renderComponent({ open: false, childrenText })
      expect(dialog.queryByText(childrenText)).not.toBeInTheDocument()
    })
  })
})
