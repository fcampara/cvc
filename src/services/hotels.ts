import { IHotel } from '../@types/hotel'
import instance from './instance'

const URL = '/hotels'

export const getHotels = async (): Promise<IHotel[]> => {
  const { data } = await instance.get<IHotel[]>(URL)
  return data
}
