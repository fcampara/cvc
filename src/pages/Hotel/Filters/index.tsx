import React, { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { CheckController } from '../../../components/Checkbox'
import { InputController } from '../../../components/Input'
import { SelectController, ISelectOption } from '../../../components/Select'
import Stars from '../../../components/Stars'
import { getBrokers } from '../../../services/brokers'
import { Filter, Form } from './styles'
import Timer from './Timer'

const HotelFilters: React.FC = () => {
  const { control, setValue } = useFormContext()
  const [brokers, setBrokers] = useState<ISelectOption[]>([])

  const handleListBrokers = async () => {
    const brokers = await getBrokers()
    const formattedBrokers = brokers.map(({ name }) => ({
      label: name,
      value: name,
    }))
    setBrokers(formattedBrokers)
  }

  const handleSelectAdward = (award: number) => {
    console.log(award)
    setValue('award', award)
  }

  useEffect(() => {
    handleListBrokers()
  }, [])

  return (
    <Form>
      <Timer />
      <Filter>
        <h5>Hotéis recomendados</h5>
        <hr />
        <CheckController
          control={control}
          name="isPreferential"
          label="Mostrar recomendados"
        />
      </Filter>
      <Filter>
        <h5>Estrelas</h5>
        <hr />
        <Stars maxAwards={3} onClick={(award) => handleSelectAdward(award)} />
      </Filter>
      <Filter>
        <h5>Preço</h5>
        <hr />
        <div className="filter__price">
          <InputController
            control={control}
            name="priceMin"
            label="de"
            type="number"
            prepend="R$"
          />
          <InputController
            control={control}
            name="priceMax"
            label="até"
            type="number"
            prepend="R$"
          />
        </div>
      </Filter>
      <Filter>
        <h5>Broker</h5>
        <hr />
        <SelectController control={control} name="broker" options={brokers} />
      </Filter>
    </Form>
  )
}

export default React.memo(HotelFilters)
