import React from 'react'
import { IDialog } from './types'

const Dialog: React.FC<IDialog> = (props: IDialog) => {
  const { open, children } = props

  return (
    <dialog data-testid="dialog" open={open}>
      {open && children}
    </dialog>
  )
}

export default React.memo(Dialog)
