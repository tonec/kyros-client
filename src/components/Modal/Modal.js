import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { closeModal } from 'redux/modules/modal/actions'
import { getModalOpen } from 'redux/modules/modal/selectors'
import { Dialog } from '../ui'

function ModalContainer({ children, open, dispatch }) {
  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <Dialog title="Create client" open={open} onClose={handleClose}>
      {children}
    </Dialog>
  )
}

ModalContainer.propTypes = {
  children: childrenType.isRequired,
  open: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapState = createStructuredSelector({
  open: getModalOpen,
})

export default connect(mapState)(ModalContainer)
