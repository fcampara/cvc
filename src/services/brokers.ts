import { IBroker } from '../@types/broker'
import instance from './instance'

const URL = '/brokers'

export const getBrokers = async (): Promise<IBroker[]> => {
  const { data } = await instance.get<IBroker[]>(URL)
  return data
}
