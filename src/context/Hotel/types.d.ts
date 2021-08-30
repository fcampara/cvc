import { ReactNode } from 'react'
import { IRoom } from '../../@types/hotel'

export interface IHotelContext {
  setSelectedRooms: (rooms: IRoom[]) => void
}

export interface IHotelProvider {
  children: ReactNode
}
