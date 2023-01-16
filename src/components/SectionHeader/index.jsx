import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { HeaderWrapper } from './style'

const SectionHeader = memo(({ title, subtitle }) => {
  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </HeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader
