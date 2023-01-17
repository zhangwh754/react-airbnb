import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './cpns/HomeBanner'
import { fetchHomeDataAction } from '@/store/features'
import { HomeWrapper } from './style'
import { isEmptyObject } from '@/utils'
import HomeSection from './cpns/HomeSection'
import HomeSectionV2 from './cpns/HomeSectionV2'
import HomeSectionV3 from './cpns/HomeSectionV3'

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo, longForInfo, plusInfo } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo,
      longForInfo: state.home.longForInfo,
      plusInfo: state.home.plusInfo
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
        {isEmptyObject(discountInfo) && <HomeSectionV2 listInfo={discountInfo} />}
        {isEmptyObject(hotRecommendInfo) && <HomeSectionV2 listInfo={hotRecommendInfo} />}
        {isEmptyObject(longForInfo) && <HomeSectionV3 listInfo={longForInfo} />}
        {isEmptyObject(goodPriceInfo) && <HomeSection listInfo={goodPriceInfo} />}
        {isEmptyObject(highScoreInfo) && <HomeSection listInfo={highScoreInfo} />}
        {isEmptyObject(plusInfo) && <HomeSection listInfo={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
