import PropTypes from 'prop-types'
import React, { memo } from 'react'

import IconMore from '@/assets/svg/IconMore'
import { FooterWrapper } from './style'
import theme from '@/assets/theme'

const SectionFooter = memo(props => {
  const { text } = props

  return (
    <FooterWrapper color={text ? theme.color.second : '#000'}>
      <div className="text">查看更多{text}房源</div>
      <div className="icon">
        <IconMore />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  text: PropTypes.string
}

export default SectionFooter
