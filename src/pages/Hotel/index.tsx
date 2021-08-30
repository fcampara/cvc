import React from 'react'
import HotelFilters from './Filters'
import HotelList from './List'
import { Container } from './styles'

const PageHome: React.FC = () => {
  return (
    <Container>
      <HotelFilters />
      <HotelList />
    </Container>
  )
}

export default PageHome
