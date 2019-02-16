import React from 'react'
import { RoutesObjConsumer } from './RoutesObjProvider'

export default function withRoutesObj(Component) {
  return function WrapperComponent(props) {
    return (
      <RoutesObjConsumer>
        {routes => <Component {...props} routes={routes} />}
      </RoutesObjConsumer>
    )
  }
}
