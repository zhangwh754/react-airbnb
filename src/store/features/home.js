import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData
} from '@/services/modules/home'

export const fetchHomeDataAction = createAsyncThunk('fetchGoodPriceInfo', (payload, { dispatch }) => {
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })
  getHomeHotRecommendData().then(res => {
    dispatch(changeHotRecommendInfo(res))
  })
})

const homeReducer = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotRecommendInfo(state, { payload }) {
      state.hotRecommendInfo = payload
    }
  }
  // extraReducers: builder => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload
  //   })
  // }
})

const { changeGoodPriceInfoAction, changeHighScoreInfoAction, changeDiscountInfoAction, changeHotRecommendInfo } =
  homeReducer.actions

export default homeReducer.reducer
