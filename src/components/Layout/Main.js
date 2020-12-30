import React from 'react'
import PropTypes from 'prop-types'
import { childrenType, maxWidthType } from 'types'
import cx from 'clsx'
import { makeStyles } from 'styles'
import { ConditionalWrap, Container } from '../ui'
import Flash from '../Flash/FlashContainer'
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
      <Flash />
    </div>
  )
}

Main.propTypes = {
  children: childrenType.isRequired,
  container: PropTypes.bool,
  maxWidth: maxWidthType,
  className: PropTypes.string,
}

Main.defaultProps = {
  maxWidth: false,
  container: false,
  className: null,
}

export default Main
