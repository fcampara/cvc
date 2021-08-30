import React, { useEffect, useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { IHotelFilter } from '../../../../@types/hotel'
import useDebounce from '../../../../hooks/useDebounce'
import { ContainerTimer } from './styles'

const ONE_SECOND = 1000
const FIFTEEN_MINUTOS_IN_SECOND = 900

const HolteFilterTime: React.FC = () => {
  const { control, setValue } = useFormContext()
  const [timeLeft, setTimeLeft] = useState(FIFTEEN_MINUTOS_IN_SECOND)
  const filter = useWatch({
    control,
  }) as IHotelFilter
  const debouncedValue = useDebounce<IHotelFilter>(filter)

  useEffect(() => {
    setTimeLeft(FIFTEEN_MINUTOS_IN_SECOND)
    const timer = setInterval(() => {
      setTimeLeft((oldTime) => {
        let nextTime = oldTime - 1
        if (nextTime < 0) nextTime = 0
        if (nextTime === 0) setValue('refresh', !filter.refresh)
        return nextTime
      })
    }, ONE_SECOND)

    return () => {
      clearInterval(timer)
    }
  }, [debouncedValue])

  const formatTime = (time: number) => {
    const minutes = String(~~((time % 3600) / 60))
    const seconds = String(~~time % 60)

    return `${minutes}:${seconds.padStart(2, '0')}`
  }
  return (
    <ContainerTimer>Pesquisa válida por {formatTime(timeLeft)}</ContainerTimer>
  )
}

export default React.memo(HolteFilterTime)
