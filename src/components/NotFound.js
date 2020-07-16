import React from 'react'
import PropTypes from 'prop-types'

function NotFound({ staticContext }) {
  staticContext.notFound = true

  return (
    <div className="container">
      <h1>Doh! 404!</h1>
      <p>These are not the droids you are looking for!</p>
    </div>
  )
}

NotFound.propTypes = {
  staticContext: PropTypes.object,
}

NotFound.defaultProps = {
  staticContext: {},
}

export default NotFound
