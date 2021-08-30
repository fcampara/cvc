import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { CheckController } from '../../../components/Checkbox'
import { InputController } from '../../../components/Input'
import { SelectController } from '../../../components/Select'
import { Filter, Form } from './styles'
import Timer from './Timer'

const HotelFilters: React.FC = () => {
  const methods = useForm()
  const { control } = methods

  return (
    <FormProvider {...methods}>
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
          <CheckController
            control={control}
            name="isPreferential"
            label="Mostrar recomendados"
          />
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
          <SelectController control={control} name="broker" options={[]} />
        </Filter>
      </Form>
    </FormProvider>
  )
}

export default React.memo(HotelFilters)
