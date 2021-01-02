import React from 'react'
import PropTypes from 'prop-types'
import { Dialog } from 'components'
import ClientFormContainer from './ClientFormContainer'

function ClientDialog({ isOpen, handleClose }) {
  return (
    <Dialog title="Create client" open={isOpen} onClose={handleClose}>
      <ClientFormContainer />
    </Dialog>
  )
}

ClientDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default ClientDialog
