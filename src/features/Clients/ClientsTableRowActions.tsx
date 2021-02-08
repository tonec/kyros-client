import React from 'react'
import { Client } from 'types'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { openModal } from 'helpers/modalQS'
import { deleteClient } from 'redux/modules/client/actions'
import { ConfirmAction, Icon, IconButton, Popover } from 'components'

const useStyles = makeStyles(theme => ({
  actions: {
    position: 'relative',
    padding: theme.spacing(0, 2),
  },
  triggerWrap: {
    lineHeight: '48px',
  },
  trigger: {
    display: 'block',

    '& > svg': {
      verticalAlign: 'middle',
    },
  },
}))

interface Props {
  client: Client
}

function ClientsTableRowActions({ client }: Props): JSX.Element {
  const classes = useStyles()
  const dispatch = useDispatch()

  const onEdit = () => {
    openModal('client', { id: client.id, view: 'edit' })
  }

  const onDelete = () => {
    dispatch(deleteClient(client.id))
  }

  return (
    <div className={classes.actions}>
      <Popover
        open={false}
        triggerWrapClassName={classes.triggerWrap}
        renderTrigger={() => (
          <span className={classes.trigger}>
            <Icon variant="more" />
          </span>
        )}
      >
        <IconButton aria-label="Edit client" onClick={onEdit}>
          <Icon variant="edit" />
        </IconButton>

        <ConfirmAction title="Are you sure?" action="Delete client">
          {confirm => (
            <IconButton aria-label="Delete client" onClick={confirm(onDelete)}>
              <Icon variant="delete" />
            </IconButton>
          )}
        </ConfirmAction>
      </Popover>
    </div>
  )
}

export default ClientsTableRowActions
