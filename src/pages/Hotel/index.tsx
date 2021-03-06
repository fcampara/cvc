import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { IHotelFilter } from '../../@types/hotel'
import HotelFilters from './Filters'
import HotelList from './List'
import { Container } from './styles'

const PageHome: React.FC = () => {
  const methods = useForm<IHotelFilter>()

  return (
    <FormProvider {...methods}>
      <Container>
        <HotelFilters />
        <HotelList />
      </Container>
    </FormProvider>
  )
}

export default PageHome
