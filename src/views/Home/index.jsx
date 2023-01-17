import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './cpns/HomeBanner'
import { fetchHomeDataAction } from '@/store/features'
import { HomeWrapper } from './style'
import HomeSection from './cpns/HomeSection'
import HomeSectionV2 from './cpns/HomeSectionV2'
import { isEmptyObject } from '@/utils'

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo
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
        {isEmptyObject(goodPriceInfo) && <HomeSection listInfo={goodPriceInfo} />}
        {isEmptyObject(highScoreInfo) && <HomeSection listInfo={highScoreInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
