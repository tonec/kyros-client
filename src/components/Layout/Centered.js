import React from 'react'
import { string, node, oneOfType, arrayOf, number } from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

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
  className: string,
  title: string.isRequired,
  align: string,
  width: number,
  children: oneOfType([arrayOf(node), node]).isRequired,
}

Centered.defaultProps = {
  align: 'middle',
  width: null,
  className: '',
}

export default Centered
