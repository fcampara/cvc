import React from 'react'
import Button from '../../../components/Button'
import { CardRoom } from './styles'
import { IHotelListRooms } from './types'

const RoomItem: React.FC<IHotelListRooms> = (props: IHotelListRooms) => {
  const { roomId, name, priceDailyOld, priceDaily, priceTotal, onClick } = props

  const formatPrice = (price: number) => {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  }
  return (
    <CardRoom>
      <div className="room__action">
        <span>{name}</span>
        <Button
          label="Comprar"
          color="primary"
          onClick={() => onClick(roomId)}
        />
      </div>
      <div className="room_information">
        <small>de {formatPrice(priceDailyOld)}</small>
        <h5>POR {formatPrice(priceDaily)}</h5>
        <small>total de x diária {formatPrice(priceTotal)}</small>
      </div>
    </CardRoom>
  )
}

export default React.memo(RoomItem)
