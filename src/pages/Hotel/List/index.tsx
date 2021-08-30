import React, { useEffect, useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { IHotel, IHotelFilter } from '../../../@types/hotel'
import useDebounce from '../../../hooks/useDebounce'
import { getHotels } from '../../../services/hotels'
import Card from './Card'

const HotelList: React.FC = () => {
  const [hotels, setHotels] = useState<IHotel[]>([])
  const { control } = useFormContext()
  const filter = useWatch({
    control,
  }) as IHotelFilter
  const debouncedValue = useDebounce<IHotelFilter>(filter)

  const handleListHotels = async () => {
    const hotels = await getHotels(filter)
    setHotels(hotels)
  }

  useEffect(() => {
    handleListHotels()
  }, [debouncedValue])

  return (
    <div>
      {hotels.map((hotel) => (
        <Card key={hotel.id} {...hotel} />
      ))}
    </div>
  )
}

export default React.memo(HotelList)
