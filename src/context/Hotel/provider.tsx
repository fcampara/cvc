import React, { useContext, useState } from 'react'
import { IRoom } from '../../@types/hotel'
import Dialog from '../../components/Dialog'
import HotelRooms from '../../pages/Hotel/Rooms'
import HotelContext from './context'
import { IHotelContext, IHotelProvider } from './types'

const HotelProvider: React.FC<IHotelProvider> = (props: IHotelProvider) => {
  const { children } = props
  const [modalRooms, setModalRooms] = useState<{
    open: boolean
    rooms: IRoom[]
  }>({
    open: false,
    rooms: [],
  })

  const setSelectedRooms = (rooms: IRoom[]) => {
    setModalRooms({
      open: true,
      rooms,
    })
  }

  const clearRooms = () => {
    setModalRooms({
      open: false,
      rooms: [],
    })
  }

  return (
    <HotelContext.Provider
      value={{
        setSelectedRooms,
      }}>
      <Dialog open={modalRooms.open}>
        <HotelRooms rooms={modalRooms.rooms} onClose={clearRooms} />
      </Dialog>
      {children}
    </HotelContext.Provider>
  )
}

export const useHotel = (): IHotelContext => {
  const context = useContext(HotelContext)
  return context
}

export default HotelProvider
