import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ConfirmationDialog from './ConfirmationDialog'

function ConfirmAction({ children, title, content, action }) {
  const [open, setOpen] = useState(false)
  const [callback, setCallback] = useState()

  const openConfirmationDialog = callback => event => {
    event.preventDefault()
    event.persist()

    setOpen(true)
    setCallback(() => () => callback(event))
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleConfirm = () => {
    callback()
    setOpen(false)
  }

  return (
    <>
      {children(openConfirmationDialog)}
      <ConfirmationDialog
        open={open}
        title={title}
        content={content}
        action={action}
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
      />
    </>
  )
}

ConfirmAction.propTypes = {
  children: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  action: PropTypes.string,
}

ConfirmAction.defaultProps = {
  title: null,
  content: null,
  action: null,
}

export default ConfirmAction
