import { createSlice } from '@reduxjs/toolkit'

const detailReducer = createSlice({
  name: 'detail',
  initialState: {
    itemInfo: {}
  },
  reducers: {
    setItemInfoAction(state, { payload }) {
      state.itemInfo = payload
    }
  }
})

export const { setItemInfoAction } = detailReducer.actions

export default detailReducer.reducer
