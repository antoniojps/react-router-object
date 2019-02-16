import React, { createContext, Component } from 'react'
import memoize from 'lodash.memoize'
import PropTypes from 'prop-types'

export const RoutesObjContext = createContext()

export const RoutesObjConsumer = RoutesObjContext.Consumer

class RoutesObjProvider extends Component {
  constructor(props) {
    super(props)
    this.getRoutes = memoize(this.getRoutes.bind(this))
  }

  getRoutes = () => {
    const { routes } = this.props
    if (typeof routes !== 'object') {
      console.error('RoutesProvider routes prop must be an object')
      return null
    }
    return routes
  }

  render() {
    const routes = this.getRoutes()
    const { children } = this.props
    return (
      <RoutesObjContext.Provider value={routes}>
        {children}
      </RoutesObjContext.Provider>
    )
  }
}

RoutesObjProvider.propTypes = {
  children: PropTypes.node.isRequired,
  routes: PropTypes.shape({}).isRequired
}

export default RoutesObjProvider
