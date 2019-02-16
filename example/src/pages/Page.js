import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { withRoutesObj, mapRoutesObjToArray } from 'react-router-object'
import styled from 'styled-components'

const Nav = withRoutesObj(({ routes: { all } }) => {
  const routesArr = mapRoutesObjToArray(all)
  const navLinkList = routesArr.map(route => (
    <NavLink to={route.path} key={route.key} exact>
      {route.title}
    </NavLink>
  ))
  return <Wrapper>{navLinkList}</Wrapper>
})

const Page = props => (
  <PageWrapper>
    <Nav />
    <h1>{props.title}</h1>
    <code>{`${JSON.stringify(props.routes.current)}`}</code>
  </PageWrapper>
)

Page.propTypes = {
  title: PropTypes.string.isRequired,
}

export default withRoutesObj(Page)

const PageWrapper = styled.div`
  padding: 1rem;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  a {
    color: white;
    padding: 1rem;
    background-color: black;
    margin-bottom: 0.4rem;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 300;
  }
  .active {
    background-color: tomato;
    font-weight: 600;
  }
`
