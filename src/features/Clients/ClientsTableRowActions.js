import React from 'react'
import { clientType } from 'types'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { openModal } from 'utils/modalQS'
import { deleteClient } from 'redux/modules/client/actions'
import { Icon, IconButton, Popover } from 'components'

const useStyles = makeStyles(theme => ({
  actions: {
    position: 'relative',
    padding: theme.spacing(0, 2),
  },
  triggerWrap: {
    lineHeight: '48px',
    '& > span': {},
  },
  trigger: {
    display: 'block',

    '& > svg': {
      verticalAlign: 'middle',
    },
  },
}))

function ClientsTableRowActions({ client }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const onEdit = e => {
    e.stopPropagation()

    openModal('client', {
      state: { id: client.id, view: 'edit' },
    })
  }

  const onDelete = e => {
    e.stopPropagation()

    dispatch(deleteClient(client.id))
  }

  return (
    <div className={classes.actions}>
      <Popover
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
        <IconButton aria-label="Delete client" onClick={onDelete}>
          <Icon variant="delete" />
        </IconButton>
      </Popover>
    </div>
  )
}

ClientsTableRowActions.propTypes = {
  client: clientType.isRequired,
}

export default ClientsTableRowActions
