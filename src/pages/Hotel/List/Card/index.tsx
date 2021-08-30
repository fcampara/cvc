import React from 'react'
import { IHotel } from '../../../../@types/hotel'
import Starts from '../../../../components/Stars'
import { useHotel } from '../../../../context/Hotel/provider'
import { Card } from './styles'

const HotelListCard: React.FC<IHotel> = (props: IHotel) => {
  const { setSelectedRooms } = useHotel()
  const { rooms, name, isPreferential, broker } = props
  return (
    <Card onClick={() => setSelectedRooms(rooms)}>
      <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/a8/90/83/cobertura.jpg?w=900&h=-1&s=1"
        className="card__image"
      />
      <div className="card__information">
        <h5>{name}</h5>
        <Starts maxAwards={props.award} />
      </div>
      <div className="card__broker">
        {isPreferential && <span>É recomendado</span>}
        <span>{broker}</span>
      </div>
    </Card>
  )
}

export default React.memo(HotelListCard)
