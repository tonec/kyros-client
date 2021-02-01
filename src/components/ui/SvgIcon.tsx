import React from 'react'
import cx from 'clsx'
import { makeStyles } from 'styles'

const useStyles = makeStyles(theme => ({
  svg: {
    userSelect: 'none',
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
    fontSize: '24px',
    verticalAlign: 'middle',
  },
}))

type Props = {
  viewBox?: string
  children: React.ReactNode
  style?: Record<string, string>
  size?: number
  className?: string
}

function SvgIcon({
  viewBox = '0 0 24 24',
  children,
  style,
  size,
  className,
}: Props): JSX.Element {
  const classes = useStyles()

  const styles = { ...style }

  if (size) {
    styles.width = `${size}px`
    styles.height = `${size}px`
  }

  return (
    <svg
      viewBox={viewBox}
      className={cx(classes.svg, className)}
      style={styles}
    >
      {children}
    </svg>
  )
}

export default SvgIcon
