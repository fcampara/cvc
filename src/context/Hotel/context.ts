import { createContext } from 'react'
import { IHotelContext } from './types'

const hotelContext = createContext<IHotelContext>({} as IHotelContext)

export default hotelContext
