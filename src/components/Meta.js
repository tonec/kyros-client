import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import get from 'lodash/get'
import config from '../../config'

function renderMeta() {
  const meta = get(config, 'app.head.meta')

  return meta.map(tag => {
    if (tag.name) {
      return <meta key={tag.name} name={tag.name} content={tag.content} />
    }
    if (tag.property) {
      return (
        <meta
          key={tag.property}
          property={tag.property}
          content={tag.content}
        />
      )
    }
    return null
  })
}

function Meta({ title, description, children }) {
  return (
    <Helmet>
      {renderMeta()}
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
        </>
      )}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </>
      )}
      {children}
    </Helmet>
  )
}

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.element,
}

Meta.defaultProps = {
  title: null,
  description: null,
}

export default Meta
