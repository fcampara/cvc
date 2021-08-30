import { IRoom } from '../../../@types/hotel'

export interface IHotelListRooms extends IRoom {
  onClick: (roomId: number) => void
}
