import React from 'react'
import { Router as BrowserRouter, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { HotelProvider } from '../context/Hotel'
import { UserProvider } from '../context/User'
import LayoutMain from '../layout/Main'
import PageHotel from '../pages/Hotel'
import { HOTEL } from './constants'
import Route from './Route'

export const history = createBrowserHistory()
const Routes: React.FC = () => {
  const history = createBrowserHistory()
  return (
    <BrowserRouter history={history}>
      <UserProvider>
        <Switch>
          <Route
            path={HOTEL}
            context={HotelProvider}
            layout={LayoutMain}
            component={PageHotel}
          />
        </Switch>
      </UserProvider>
    </BrowserRouter>
  )
}

export default Routes
