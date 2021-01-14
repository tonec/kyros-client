import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { closeModal as closeModalQS } from 'helpers/modalQS'
import { closeModal } from 'redux/modules/modal/actions'
import { getModalKey, getModalState } from 'redux/modules/modal/selectors'
import { getQuery } from 'redux/modules/app/selectors'
import { Dialog } from './ui'

const getTitleString = (title, state) => {
  if (typeof title === 'string') return title

  const view = state.view || 'create'

  return title[view] || title.create || null
}

function Modal({ children, title, name, modalKey, modalState, query }) {
  const { modalKey: modalKeyQS, modalState: modalStateQS } = query

  const key = modalKeyQS || modalKey
  const state = modalStateQS || modalState || {}

  if (key !== name) return null

  const titleString = getTitleString(title, state)
  const open = Boolean(key)

  const handleClose = () => {
    closeModal()
    closeModalQS()
  }

  return (
    <Dialog title={titleString} open={open} onClose={handleClose}>
      {children(state)}
    </Dialog>
  )
}

Modal.propTypes = {
  children: PropTypes.func.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.string.isRequired,
  modalKey: PropTypes.string,
  modalState: PropTypes.object,
  query: PropTypes.object,
}

Modal.defaultProps = {
  title: null,
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
