import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getHomeGoodPriceData, getHomeHighScoreData } from '@/services/modules/home'

export const fetchHomeDataAction = createAsyncThunk('fetchGoodPriceInfo', (payload, { dispatch }) => {
  getHomeGoodPriceData().then(res => {
    dispatch(homeReducer.actions.changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(homeReducer.actions.changeHighScoreInfoAction(res))
  })
})

const homeReducer = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    }
  }
  // extraReducers: builder => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload
  //   })
  // }
})

// export const {} = homeReducer.actions

export default homeReducer.reducer
