import React, { createContext, Component } from 'react'
import memoize from 'lodash.memoize'
import PropTypes from 'prop-types'
import mapRoutesObjToArray from './../mapRoutesObjToArray/mapRoutesObjToArray'

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

  getCurrentRoute = () => {
    const { routes } = this.props
    const currentPath = window.location.pathname
    const routesArr = mapRoutesObjToArray(routes)
    const currentRoute = routesArr.find(route => route.path === currentPath)
    if (!currentRoute) return null
    return currentRoute
  }

  render() {
    const all = this.getRoutes()
    const current = this.getCurrentRoute()
    const value = {
      all,
      current
    }
    const { children } = this.props
    return (
      <RoutesObjContext.Provider value={value}>
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
