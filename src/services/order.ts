import { OrderStore } from '../@types/order'
import instance from './instance'

const URL = '/hotels'

export const storeOrder = async (payload: OrderStore) => {
  const { data } = await instance.post(URL, payload)
  return data
}
