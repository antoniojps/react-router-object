import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  applyPathToRoutesObj,
  mapRoutesObjToArray,
  RoutesObjProvider,
} from 'react-router-object'
import Page from './pages/Page'

const routesConfig = {
  index: {
    component: () => <Page title="Index" />,
    key: 'index',
    exact: true,
    title: 'Homepage',
  },
  blog: {
    index: {
      component: () => <Page title="Blog" />,
      key: 'blog',
      exact: true,
      title: 'Blog',
    },
    author: {
      component: () => <Page title="Blog > Author" />,
      key: 'blog-author',
      title: 'Blog author',
    },
  },
}

const routesObj = applyPathToRoutesObj(routesConfig)
const routesArr = [...mapRoutesObjToArray(routesObj)]

const Routes = () => (
  <Router>
    <RoutesObjProvider routes={routesObj}>
      <Switch>
        {routesArr.map(route => (
          <Route {...route} />
        ))}
      </Switch>
    </RoutesObjProvider>
  </Router>
)

export const routes = routesObj

export default Routes
