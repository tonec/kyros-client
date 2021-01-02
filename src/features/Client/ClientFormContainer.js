import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createClient } from 'redux/modules/client/actions'
import ClientForm from './ClientForm'

function ClientFormContainer({ dispatch }) {
  const handleOnSubmit = data => {
    dispatch(createClient(data))
  }

  return <ClientForm handleOnSubmit={handleOnSubmit} />
}

ClientFormContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapState = () => ({})

export default connect(mapState)(ClientFormContainer)
