import React from 'react'
import { object } from 'prop-types'

const propTypes = {
  staticContext: object
}

const defaultProps = {
  staticContext: {}
}

const NotFound = ({ staticContext }) => {
  staticContext.notFound = true

  return (
    <div className="container">
      <h1>Doh! 404!</h1>
      <p>
        These are not the droids you are looking for!
      </p>
    </div>
  )
}

NotFound.propTypes = propTypes
NotFound.defaultProps = defaultProps

export default NotFound
