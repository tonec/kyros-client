import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { createStructuredSelector } from 'reselect'
import { closeModal } from 'redux/modules/modal/actions'
import { getModalKey, getModalState } from 'redux/modules/modal/selectors'
import { getQuery } from 'redux/modules/app/selectors'
import { Dialog } from './ui'

function Modal({ children, dispatch, name, modalKey, modalState, query }) {
  const { modalKeyQS, modalStateQS } = query

  const key = modalKey || modalKeyQS
  const state = modalState || modalStateQS

  console.log('key', key)
  console.log('state', state)

  if (key !== name) return null

  const open = Boolean(modalKey)

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <Dialog title="Create client" open={open} onClose={handleClose}>
      {children(state)}
    </Dialog>
  )
}

Modal.propTypes = {
  children: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
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

export default compose(connect(mapState), withRouter)(Modal)
