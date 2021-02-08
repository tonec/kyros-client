import React from 'react'
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

interface Props {
  title?: string
  content?: string
  action?: string
  open?: boolean
  handleCancel: () => void
  handleConfirm: () => void
}

function ConfirmationDialog({
  title = 'Are you sure?',
  content = '',
  action = 'Confirm',
  open = false,
  handleCancel,
  handleConfirm,
}: Props): JSX.Element {
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

export default ConfirmationDialog
