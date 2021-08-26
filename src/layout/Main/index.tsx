import React from 'react'
import { ILayoutMain } from './props'

const LayoutMain: React.FC<ILayoutMain> = (props: ILayoutMain) => {
  const { children } = props
  return <main>{children}</main>
}

export default LayoutMain
