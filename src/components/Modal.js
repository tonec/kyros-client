import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { closeModal } from 'utils/modalQS'
import { getModalKey, getModalState } from 'redux/modules/modal/selectors'
import { getQuery } from 'redux/modules/app/selectors'
import { Dialog } from './ui'

function Modal({ children, name, modalKey, modalState, query }) {
  const { modalKey: modalKeyQS, modalState: modalStateQS } = query

  const key = modalKeyQS || modalKey
  const state = modalStateQS || modalState

  if (key !== name) return null

  const open = Boolean(key)

  const handleClose = () => {
    closeModal()
  }

  return (
    <Dialog title="Create client" open={open} onClose={handleClose}>
      {children(state)}
    </Dialog>
  )
}

Modal.propTypes = {
  children: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  modalKey: PropTypes.string,
  modalState: PropTypes.object,
  query: PropTypes.object,
}

Modal.defaultProps = {
  modalKey: null,
  modalState: null,
  query: null,
}

const mapState = createStructuredSelector({
  query: getQuery,
  modalKey: getModalKey,
  modalState: getModalState,
})

export default connect(mapState)(Modal)
