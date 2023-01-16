import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './cpns/HomeBanner'
import SwitchRoute from '@/components/SwitchRoute'
import { fetchHomeDataAction } from '@/store/features'
import SectionHeader from '@/components/SectionHeader'
import { HomeWrapper } from './style'
import SectionList from '@/components/SectionList'

const Home = memo(() => {
  const { goodPriceInfo } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo
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
        <div className="goodprice">
          <SectionHeader title={goodPriceInfo.title} />
          <SectionList list={goodPriceInfo.list} />
        </div>
      </div>
      <SwitchRoute />
    </HomeWrapper>
  )
})

export default Home
