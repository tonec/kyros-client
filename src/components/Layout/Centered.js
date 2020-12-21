import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { childrenType } from '../../types'

const Layout = styled.div`
  display: table;
  width: 100%;
  height: 100%;
  max-width: 416px;
  padding: 0 20px;
  table-layout: fixed;
  margin: 0 auto;
`

const Content = styled.div`
  display: table-cell;
  position: relative;
  width: 100%;
  max-width: 416px;
  margin: 0 auto;

  > div {
    width: 100%;
  }
`

function Centered({ className, title, align, width, children, ...props }) {
  return (
    <Layout style={{ maxWidth: width }} {...props} inpt="red">
      <Helmet title={title} />
      <Content style={{ verticalAlign: align }}>{children}</Content>
    </Layout>
  )
}

Centered.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  align: PropTypes.string,
  width: PropTypes.number,
  children: childrenType.isRequired,
}

Centered.defaultProps = {
  align: 'middle',
  width: null,
  className: '',
}

export default Centered
