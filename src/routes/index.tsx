import React from 'react'
import { Router as BrowserRouter, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
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
          <Route path={HOTEL} layout={LayoutMain} component={PageHotel} />
          <Route path="*" component={PageHotel} layout={LayoutMain} />
        </Switch>
      </UserProvider>
    </BrowserRouter>
  )
}

export default Routes
