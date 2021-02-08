import React, { ComponentPropsWithoutRef } from 'react'
import cx from 'clsx'
import { makeStyles } from 'styles'
import BaseCard from '@material-ui/core/Card'

interface UseStylesProps {
  flush: boolean
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: ({ flush }: UseStylesProps) => (flush ? 0 : theme.spacing(4)),
  },
}))

type Props = ComponentPropsWithoutRef<typeof BaseCard> & {
  flush?: boolean
}

function Card({
  children,
  raised = false,
  elevation = 0,
  flush = false,
  className,
}: Props): JSX.Element {
  const classes = useStyles({ flush })

  return (
    <BaseCard className={cx(classes.root, className)} raised={raised} elevation={elevation}>
      {children}
    </BaseCard>
  )
}

export default Card
