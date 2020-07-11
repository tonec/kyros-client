import React from 'react'
import { object } from 'prop-types'

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

NotFound.propTypes = {
  staticContext: object
}

NotFound.defaultProps = {
  staticContext: {}
}

export default NotFound
