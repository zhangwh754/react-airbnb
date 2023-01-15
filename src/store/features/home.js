import { createSlice } from '@reduxjs/toolkit'

const homeReducer = createSlice({
  name: 'home',
  initialState: {
    count: 0
  },
  reducers: {
    countAdd(state, { payload }) {
      state.count += payload
    }
  }
})

export const { countAdd } = homeReducer.actions

export default homeReducer.reducer
