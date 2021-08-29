import React, { useEffect, useRef } from 'react'
import { IDialog } from './types'

const Dialog: React.FC<IDialog> = (props: IDialog) => {
  const { open, children } = props
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (open) ref.current?.show()
    else ref.current?.close()
  }, [ref, open])

  return <dialog ref={ref}>{children}</dialog>
}

export default React.memo(Dialog)
