import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { createStructuredSelector } from 'reselect'
import { removeQS } from 'utils'
import { MODAL_QUERY_PARAMS } from 'utils/constants'
import { getQuery } from 'redux/modules/app/selectors'
import { Dialog } from './ui'

function Modal({ children, dispatch, name, query }) {
  const { modalKey = '', modalState = {} } = query

  if (modalKey !== name) return null

  const open = Boolean(modalKey)

  const handleClose = () => {
    removeQS(dispatch, MODAL_QUERY_PARAMS)
  }

  return (
    <Dialog title="Create client" open={open} onClose={handleClose}>
      {children({ modalState })}
    </Dialog>
  )
}

Modal.propTypes = {
  children: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  query: PropTypes.object,
}

Modal.defaultProps = {
  query: null,
}

const mapState = createStructuredSelector({
  query: getQuery,
})

export default compose(connect(mapState), withRouter)(Modal)
