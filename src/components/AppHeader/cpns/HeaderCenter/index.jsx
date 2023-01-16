import IconSearch from '@/assets/svg/IconSearch'
import React, { memo } from 'react'
import { CenterWrapper } from './style'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="search_bar">
        <div className="left">搜索房源和体验</div>
        <div className="right">
          <div className="icon">
            <IconSearch />
          </div>
        </div>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter
