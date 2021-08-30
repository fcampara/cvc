import React from 'react'
import { IRoom } from '../../../@types/hotel'
import Button from '../../../components/Button'
import { useAuth } from '../../../context/User/provider'
import { storeOrder } from '../../../services/order'
import Item from './Item'
import { ContainerRoom, ListRoom } from './styles'

const HotelRooms: React.FC<{ rooms: IRoom[]; onClose: () => void }> = (props: {
  rooms: IRoom[]
  onClose: () => void
}) => {
  const { sessionId, userId } = useAuth()
  const { rooms, onClose } = props

  const handleOrder = async (roomId: number) => {
    await storeOrder({ roomId, sessionId, userId })
    onClose()
  }

  return (
    <ContainerRoom>
      <Button icon="fas fa-times" rounded onClick={() => onClose()} />
      <ListRoom>
        {rooms.map((room) => (
          <Item key={room.roomId} {...room} onClick={handleOrder} />
        ))}
      </ListRoom>
    </ContainerRoom>
  )
}

export default React.memo(HotelRooms)
