import React from 'react'
import PropTypes, { arrayOf, node } from 'prop-types'
import cx from 'clsx'
import Helmet from 'react-helmet'
import { makeStyles } from '@material-ui/core/styles'
import { ConditionalWrap, Container } from '../ui'

const useStyles = makeStyles({
  wrap: {
    display: 'flex',
  },
})

function BaseLayout({
  children,
  title,
  maxWidth,
  classNameWrap,
  container,
  classNameContainer,
}) {
  const classes = useStyles()

  return (
    <div className={cx(classes.wrap, classNameWrap)}>
      <Helmet title={title} />
      <ConditionalWrap
        condition={container}
        wrap={child => (
          <Container className={classNameContainer} maxWidth={maxWidth}>
            {child}
          </Container>
        )}
      >
        {children}
      </ConditionalWrap>
    </div>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([arrayOf(node), node]).isRequired,
  title: PropTypes.string.isRequired,
  container: PropTypes.bool,
  maxWidth: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  ]),
  classNameWrap: PropTypes.string,
  classNameContainer: PropTypes.string,
}

BaseLayout.defaultProps = {
  maxWidth: false,
  container: false,
  classNameWrap: null,
  classNameContainer: null,
}

export default BaseLayout
