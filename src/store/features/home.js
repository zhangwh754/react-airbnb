import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getHomeGoodPriceData } from '@/services/modules/home'

export const fetchHomeDataAction = createAsyncThunk('fetchGoodPriceInfo', async () => {
  const res = await getHomeGoodPriceData()

  return res
})

const homeReducer = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
      state.goodPriceInfo = payload
    })
  }
})

// export const {} = homeReducer.actions

export default homeReducer.reducer
