export type IRoom = {
  roomId: number
  name: string
  priceDailyOld: number
  priceDaily: number
  priceTotal: number
  discountPercent: number
  hasPromotion: boolean
}

export type IHotel = {
  id: number
  name: string
  broker: string
  description: string
  award: number
  isPreferential: boolean
  totalDailys: number
  rooms: IRoom[]
}
