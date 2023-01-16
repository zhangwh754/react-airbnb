import IconSvg from '@/assets/svg/IconSvg'
import React, { memo } from 'react'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className="logo">
        <IconSvg />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
