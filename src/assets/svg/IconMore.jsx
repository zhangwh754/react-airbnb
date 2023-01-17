import React, { memo } from 'react'

import css2obj from './utils/css2obj'

const IconMore = memo(() => {
  return (
    <svg
      viewBox="0 0 18 18"
      role="img"
      aria-hidden="false"
      aria-label="see all"
      focusable="false"
      style={css2obj('height:10px;width:10px;fill:currentColor')}
    >
      <path
        d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
        fillRule="evenodd"
      ></path>
    </svg>
  )
})

export default IconMore
