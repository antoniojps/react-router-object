import React, { createContext, Component } from 'react'
import memoize from 'lodash.memoize'
import PropTypes from 'prop-types'
import mapRoutesObjToArray from './../mapRoutesObjToArray/mapRoutesObjToArray'
import { withRouter } from 'react-router-dom'

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
    const { routes, location } = this.props
    if (!location) {
      console.error(
        'RoutesObjProvider must be inside BrowserRouter to have access to the current route'
      )
      return null
    }
    const currentPath = location.pathname
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
  routes: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired
}

export default withRouter(RoutesObjProvider)
