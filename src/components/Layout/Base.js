import React from 'react'
import PropTypes from 'prop-types'
import { childrenType, maxWidthType } from 'types'
import cx from 'clsx'
import Helmet from 'react-helmet'
import { makeStyles } from 'styles'
import { ConditionalWrap } from '../ui'
import Flash from '../Flash/FlashContainer'
import Header from '../Header/Header'

const useStyles = makeStyles({
  wrap: {
    display: 'flex',
    height: '100%',
  },
  container: {
    maxWith: ({ maxWidth }) => maxWidth,
  },
})

function BaseLayout({
  children,
  title,
  maxWidth,
  classNameWrap,
  header,
  container,
  classNameContainer,
}) {
  const classes = useStyles({ maxWidth })

  return (
    <div className={cx(classes.wrap, classNameWrap)}>
      <Helmet title={title} />
      {header && <Header />}
      <ConditionalWrap
        condition={container}
        wrap={child => (
          <div className={cx(classes.container, classNameContainer)}>
            {child}
          </div>
        )}
      >
        {children}
      </ConditionalWrap>
      <Flash />
    </div>
  )
}

BaseLayout.propTypes = {
  children: childrenType.isRequired,
  title: PropTypes.string.isRequired,
  header: PropTypes.bool,
  container: PropTypes.bool,
  maxWidth: maxWidthType,
  classNameWrap: PropTypes.string,
  classNameContainer: PropTypes.string,
}

BaseLayout.defaultProps = {
  maxWidth: false,
  header: false,
  container: false,
  classNameWrap: null,
  classNameContainer: null,
}

export default BaseLayout
