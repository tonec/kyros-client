import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from 'styles'
import Button from './Button'
import ButtonsSpacer from './ButtonsSpacer'
import Dialog from './Dialog'
import Typography from './Typography'

const useStyles = makeStyles(theme => ({
  content: {
    marginBottom: theme.spacing(2),
  },
}))

function ConfirmationDialog({
  title,
  content,
  action,
  open,
  handleCancel,
  handleConfirm,
}) {
  const classes = useStyles()

  return (
    <Dialog title={title} open={open} onClose={handleCancel}>
      {content && (
        <Typography variant="body1" className={classes.content}>
          {content}
        </Typography>
      )}
      <ButtonsSpacer>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleConfirm} color="primary">
          {action}
        </Button>
      </ButtonsSpacer>
    </Dialog>
  )
}

ConfirmationDialog.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  action: PropTypes.string,
  open: PropTypes.bool,
  handleCancel: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
}

ConfirmationDialog.defaultProps = {
  title: 'Are you sure?',
  content: null,
  open: false,
  action: 'Confirm',
}

export default ConfirmationDialog
