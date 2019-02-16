# react-router-object

> Declarative object based routing for React Router

[![NPM](https://img.shields.io/npm/v/react-router-object.svg)](https://www.npmjs.com/package/react-router-object) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install with npm or yarn

```bash
yarn add react-router-object
```

## Usage

This is a basic routes configuration

```jsx
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { applyPathToRoutesObj, mapRoutesObjToArray } from 'react-router-object'
import Page from './pages/Page'

const routesConfig = {
  // index is a reserved key for root paths
  index: {
    component: () => <Page title="Index" />,
    key: 'index',
    exact: true,
  },
  blog: {
    index: {
      component: () => <Page title="Blog" />,
      key: 'blog',
      exact: true,
    },
    author: {
      component: () => <Page title="Blog > Author" />,
      key: 'blog-author',
    },
  },
}

// add the path based on the position within the objects keys tree
const routesObj = applyPathToRoutesObj(routesConfig)

// convert the routes object into an array and that's it!
const routesArr = [...mapRoutesObjToArray(routesObj)]

const Routes = () => (
  <Router>
    <Switch>
      {routesArr.map(route => (
        <Route {...route} />
      ))}
    </Switch>
  </Router>
)

export default Routes
```

### Provider

Using react's context api you can easily access your routes object, wrap with the `RoutesObjProvider` and then use the `withRoutesObj` HOC to wrap the component you want to access the routes.

#### Passes the `routes` prop containing:

| Property  | Type     | Description       |
| :-------- | :------- | :---------------- |
| `all`     | `object` | All routes        |
| `current` | `object` | The current route |

In your routes setup:

**Important** - `RoutesObjProvider` uses [`withRouter()`](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md), so make sure you place the provider inside the `<Router>`

```jsx
import { RoutesObjProvider } from 'react-router-object'

const routesObj = applyPathToRoutesObj(routesConfig)

<Router>
  <RoutesObjProvider routes={routesObj}>
    <Switch>
      {routesArr.map(route => (
        <Route {...route} />
      ))}
    </Switch>
  </RoutesObjProvider>
</Router>
```

Wrap the any child component with `withRoutesObj` and it will recieve the routes prop

```jsx
import { withRoutesObj } from 'react-router-object'

const Page = props => {
  console.log(props.routes)
  return <h1>{props.title}</h1>
}

export default withRoutesObj(Page)
```

## License

MIT © [antoniojps](https://github.com/antoniojps)
