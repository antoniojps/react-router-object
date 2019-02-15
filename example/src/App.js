import React, { Component, Fragment } from 'react'
import Style from './Style'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Routes />
        <Style />
      </Fragment>
    )
  }
}

export default App
