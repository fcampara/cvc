import React from 'react'
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
} from 'react-router-dom'

interface IRouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  layout: React.ComponentType
  component: React.ComponentType
  context?: React.FC<any>
}

const Route: React.FC<IRouteProps> = (props: IRouteProps) => {
  const {
    component: Component,
    context: Context,
    layout: Layout,
    ...rest
  } = props

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return (
          <Layout>
            {Context ? (
              <Context>
                <Component />
              </Context>
            ) : (
              <Component />
            )}
          </Layout>
        )
      }}
    />
  )
}

export default Route
