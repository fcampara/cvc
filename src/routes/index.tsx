import React from 'react'
import { Router as BrowserRouter, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { UserProvider } from '../context/User'
import LayoutMain from '../layout/Main'
import PageHome from '../pages/Home'
import { HOME } from './constants'
import Route from './Route'

export const history = createBrowserHistory()
const Routes: React.FC = () => {
  const history = createBrowserHistory()
  return (
    <BrowserRouter history={history}>
      <UserProvider>
        <Switch>
          <Route path={HOME} layout={LayoutMain} component={PageHome} />
        </Switch>
      </UserProvider>
    </BrowserRouter>
  )
}

export default Routes
