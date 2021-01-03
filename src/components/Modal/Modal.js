import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { closeModal } from 'redux/modules/modal/actions'
import { getModalKey, getModalOpen } from 'redux/modules/modal/selectors'
import { Dialog } from '../ui'

function Modal({ children, modalKey, open, dispatch, name }) {
  if (modalKey !== name) return null

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <Dialog title="Create client" open={open} onClose={handleClose}>
      {children}
    </Dialog>
  )
}

Modal.propTypes = {
  children: childrenType.isRequired,
  modalKey: PropTypes.string,
  open: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

Modal.defaultProps = {
  modalKey: null,
}

const mapState = createStructuredSelector({
  modalKey: getModalKey,
  open: getModalOpen,
})

export default connect(mapState)(Modal)
