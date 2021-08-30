import { IHotel, IHotelFilter } from '../@types/hotel'
import instance from './instance'

const URL = '/hotels'

export const getHotels = async (filter: IHotelFilter): Promise<IHotel[]> => {
  const params = {
    broker: filter.broker,
    award: filter.award,
    isPreferential: filter.isPreferential ? true : undefined,
  }

  const { data } = await instance.get<IHotel[]>(URL, {
    params,
  })
  return data
}
