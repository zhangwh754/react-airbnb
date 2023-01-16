import React, { memo } from 'react'
import HeaderCenter from './cpns/HeaderCenter'
import HeaderLeft from './cpns/HeaderLeft'
import HeaderRight from './cpns/HeaderRight'
import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default AppHeader
