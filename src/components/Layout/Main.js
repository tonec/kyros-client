import React from 'react'
import PropTypes, { arrayOf, node } from 'prop-types'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { ConditionalWrap, Container } from '../ui'
import Header from '../Header/Header'

const useStyles = makeStyles({
  wrap: {
    display: 'flex',
    flexDirection: 'row',
  },
  inner: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    marginLeft: 56,
  },
})

function Main({ children, maxWidth, className, container }) {
  const classes = useStyles()

  return (
    <div className={cx(classes.wrap, className)}>
      <Header />
      <ConditionalWrap
        condition={container}
        wrap={child => <Container maxWidth={maxWidth}>{child}</Container>}
      >
        <div className={classes.inner}>{children}</div>
      </ConditionalWrap>
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.oneOfType([arrayOf(node), node]).isRequired,
  container: PropTypes.bool,
  maxWidth: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  ]),
  className: PropTypes.string,
}

Main.defaultProps = {
  maxWidth: false,
  container: false,
  className: null,
}

export default Main
