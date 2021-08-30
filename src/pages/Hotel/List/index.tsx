import React, { useEffect, useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { IHotel } from '../../../@types/hotel'
import useDebounce from '../../../hooks/useDebounce'
import { getHotels } from '../../../services/hotels'
import Card from './Card'

const HotelList: React.FC = () => {
  const [hotels, setHotels] = useState<IHotel[]>([])
  const { control } = useFormContext()
  const filter = useWatch({
    control,
  })
  const debouncedValue = useDebounce<any>(filter, 500)

  const handleListHotels = async () => {
    const hotels = await getHotels()
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
