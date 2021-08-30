import React, { useEffect, useRef } from 'react'
import { Dialog } from './styles'
import { IDialog } from './types'

const DialogComponent: React.FC<IDialog> = (props: IDialog) => {
  const { open, children } = props
  const dialog = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (open) dialog.current?.showModal()
    else dialog.current?.close()

    const html = document.querySelector('html')
    if (!html) return
    const HIDDEN = 'hidden'
    const SCROLL = 'initial'
    const overflowY = open ? HIDDEN : SCROLL
    html.style.overflowY = overflowY
  }, [open, dialog])

  return (
    <Dialog data-testid="dialog" ref={dialog}>
      {open && children}
    </Dialog>
  )
}

export default React.memo(DialogComponent)
