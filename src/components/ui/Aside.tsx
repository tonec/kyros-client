import React from 'react'
import cx from 'clsx'
import { Spacing } from 'types'
import { makeStyles } from 'styles'
import Box from './Box'
import Card from './Card'

const useStyles = makeStyles({
  asideContainer: {
    height: '100vh',
  },
  card: {
    width: 318,
    position: 'relative',
    height: '100vh',
  },
})

type Props = {
  children: React.ReactElement
  component?: React.ReactNode
  className?: string
  spacing?: Spacing
}

function Aside({ children, className, spacing }: Props): JSX.Element {
  const classes = useStyles()

  return (
    <div className={cx(classes.asideContainer, className)}>
      <Box component="aside" spacing={spacing}>
        <Card className={classes.card} flush>
          {children}
        </Card>
      </Box>
    </div>
  )
}

export default Aside
