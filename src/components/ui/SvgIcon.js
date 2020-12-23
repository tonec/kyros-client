import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

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

function SvgIcon({ viewBox, children, style, size, className }) {
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

SvgIcon.propTypes = {
  viewBox: PropTypes.string,
  children: childrenType.isRequired,
  style: PropTypes.shape({}),
  size: PropTypes.number,
  className: PropTypes.string,
}

SvgIcon.defaultProps = {
  viewBox: '0 0 24 24',
  style: {},
  size: null,
  className: null,
}

export default SvgIcon
