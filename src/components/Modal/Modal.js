import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { closeModal } from 'redux/modules/modal/actions'
import { getModalId, getModalOpen } from 'redux/modules/modal/selectors'
import { Dialog } from '../ui'

function Modal({ children, id, open, dispatch, name }) {
  if (id !== name) return null

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
  id: PropTypes.string,
  open: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

Modal.defaultProps = {
  id: null,
}

const mapState = createStructuredSelector({
  id: getModalId,
  open: getModalOpen,
})

export default connect(mapState)(Modal)
