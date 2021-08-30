import React from 'react'
import Button from '../Button'
import { Stars } from './styles'
import { IStars } from './types'

const StarsComponent: React.FC<IStars> = (props: IStars) => {
  const { maxAwards, onClick } = props
  const awards = Array(maxAwards).fill(undefined)
  return (
    <Stars>
      {awards.map((_, index) =>
        onClick ? (
          <Button
            key={index}
            icon="fas fa-star"
            rounded
            color="transparent"
            onClick={(event) => {
              event.preventDefault()
              onClick(index + 1)
            }}
          />
        ) : (
          <i key={index} className="fas fa-star" />
        )
      )}
    </Stars>
  )
}

export default React.memo(StarsComponent)
