import React, { CSSProperties, MouseEvent, KeyboardEvent, ReactNode } from 'react'

function isTrivialHref(href: string) {
  return !href || href.trim() === '#'
}

type Props = {
  href?: string
  tabIndex?: number
  disabled?: boolean
  onKeyDown?: (...args: any) => void
  children: ReactNode
  onClick?: (event: MouseEvent | KeyboardEvent) => void
}

function Anchor({
  href = '',
  tabIndex = 0,
  disabled = false,
  onKeyDown,
  children,
  onClick,
  ...props
}: Props): JSX.Element {
  const handleClick = (event: MouseEvent | KeyboardEvent) => {
    if (disabled || isTrivialHref(href)) {
      event.preventDefault()
    }

    if (disabled) {
      event.stopPropagation()
      return
    }

    if (onClick) {
      onClick(event)
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === ' ') {
      event.preventDefault()
      handleClick(event)
    }

    if (typeof onKeyDown === 'function') {
      onKeyDown(event)
    }
  }

  let setTabIndex = tabIndex || 1
  let hreference = href
  let style: CSSProperties = { pointerEvents: 'auto', cursor: 'pointer' }

  if (isTrivialHref(hreference)) {
    hreference = '#'
  }

  if (disabled) {
    setTabIndex = -1
    style = { pointerEvents: 'none', cursor: 'initial' }
  }

  return (
    <a
      {...props}
      tabIndex={setTabIndex}
      role="link"
      style={style}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </a>
  )
}

export default Anchor
