/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { childrenType } from 'types';
import createChainedFunction from 'utils/createChainedFunction';

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}

function Anchor({
  href,
  tabIndex,
  disabled,
  onKeyDown,
  children,
  onClick,
  ...props
}) {
  const handleClick = event => {
    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  const handleKeyDown = event => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  let setTabIndex = tabIndex || 1;
  let hreference = href;
  let style = { cursor: 'pointer' };

  if (isTrivialHref(hreference)) {
    hreference = '#';
  }

  if (disabled) {
    setTabIndex = -1;
    style = { pointerEvents: 'none', cursor: 'initial' };
  }

  return (
    <a
      {...props}
      tabIndex={setTabIndex}
      role="link"
      style={style}
      onClick={handleClick}
      onKeyDown={createChainedFunction(handleKeyDown, onKeyDown)}
    >
      {children}
    </a>
  );
}

Anchor.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  children: childrenType.isRequired,
};

Anchor.defaultProps = {
  href: '',
  onClick: null,
  onKeyDown: null,
  disabled: false,
  tabIndex: 0,
  className: '',
};

export default Anchor;
