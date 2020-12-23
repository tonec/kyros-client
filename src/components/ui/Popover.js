/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { childrenType } from 'types'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import BasePopover from '@material-ui/core/Popover'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'

const useStyles = makeStyles({
  triggerWrap: {
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
  },
})

function Popover({
  children,
  triggerWrapClassName,
  renderTrigger,
  anchorOrigin,
  transformOrigin,
}) {
  const classes = useStyles()

  const preventBubbling = event => {
    if (!event) return

    event.preventDefault()
    event.stopPropagation()

    if (!event.nativeEvent) return

    event.nativeEvent.preventDefault()
    event.nativeEvent.stopImmediatePropagation()
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <>
          <div role="presentation" onClick={preventBubbling}>
            <button
              type="button"
              className={cx(classes.triggerWrap, triggerWrapClassName)}
              {...bindTrigger(popupState)}
            >
              {renderTrigger()}
            </button>
          </div>
          <BasePopover
            {...bindPopover(popupState)}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
          >
            <div role="presentation" onClick={preventBubbling}>
              {children}
            </div>
          </BasePopover>
        </>
      )}
    </PopupState>
  )
}

Popover.propTypes = {
  children: childrenType.isRequired,
  triggerWrapClassName: PropTypes.string,
  renderTrigger: PropTypes.func.isRequired,
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
  }),
  transformOrigin: PropTypes.shape({
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
  }),
}

Popover.defaultProps = {
  triggerWrapClassName: null,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
  transformOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
}

export default Popover
