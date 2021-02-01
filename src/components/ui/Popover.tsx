import React, { ComponentPropsWithoutRef, MouseEvent } from 'react'
import cx from 'clsx'
import { makeStyles } from 'styles'
import PopupState, {
  bindTrigger,
  bindHover,
  bindPopover,
} from 'material-ui-popup-state'
import BasePopover from 'material-ui-popup-state/HoverPopover'

const useStyles = makeStyles({
  triggerWrap: {
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
  },
})

type Props = ComponentPropsWithoutRef<typeof BasePopover> & {
  triggerWrapClassName?: string
  renderTrigger: () => React.ReactNode
  bindType?: 'click' | 'hover'
}

function Popover({
  children,
  triggerWrapClassName,
  renderTrigger,
  anchorOrigin,
  transformOrigin,
  bindType = 'hover',
}: Props): JSX.Element {
  const classes = useStyles()

  const preventBubbling = (event: MouseEvent) => {
    if (!event) return

    event.preventDefault()
    event.stopPropagation()

    if (!event.nativeEvent) return

    event.nativeEvent.preventDefault()
    event.nativeEvent.stopImmediatePropagation()
  }

  const boundTrigger = bindType === 'hover' ? bindHover : bindTrigger

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <>
          <div role="presentation" onClick={preventBubbling}>
            <button
              type="button"
              className={cx(classes.triggerWrap, triggerWrapClassName)}
              {...boundTrigger(popupState)}
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

export default Popover
