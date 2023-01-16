import React, { memo } from 'react'
import css2obj from './utils/css2obj'

const IconMenu = memo(() => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={css2obj(
        'display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; strokeWidth: 3; overflow: visible;'
      )}
    >
      <g fill="none" fillRule="nonzero">
        <path d="m2 16h28"></path>
        <path d="m2 24h28"></path>
        <path d="m2 8h28"></path>
      </g>
    </svg>
  )
})

export default IconMenu
