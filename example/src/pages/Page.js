import React from 'react'
import PropTypes from 'prop-types'
import { withRoutesObj } from 'react-router-object'

const Page = props => {
  console.log(props)
  return <h1>{props.title}</h1>
}

Page.propTypes = {
  title: PropTypes.string.isRequired
}

export default withRoutesObj(Page)
