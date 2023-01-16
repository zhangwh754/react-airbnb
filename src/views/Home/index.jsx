import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './cpns/HomeBanner'
import SwitchRoute from '@/components/SwitchRoute'
import { fetchHomeDataAction } from '@/store/features'
import { HomeWrapper } from './style'
import HomeSection from './cpns/HomeSection'

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content ">
        <HomeSection listInfo={goodPriceInfo}></HomeSection>
        <HomeSection listInfo={highScoreInfo}></HomeSection>
      </div>
      <SwitchRoute />
    </HomeWrapper>
  )
})

export default Home
