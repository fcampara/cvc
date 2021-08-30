import React from 'react'
import { Button } from './styles'
import { IButton } from './types'

const ButtoComponent: React.FC<IButton> = (props: IButton) => {
  const {
    label,
    icon,
    rounded = false,
    color = 'default',
    ...restProps
  } = props
  return (
    <Button rounded={rounded} color={color} {...restProps}>
      {icon && <i className={icon} />}
      {label}
    </Button>
  )
}

export default React.memo(ButtoComponent)
