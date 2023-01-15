import { createSlice } from '@reduxjs/toolkit'

const detailReducer = createSlice({
  name: 'detail',
  initialState: {
    age: 18
  },
  reducers: {
    getAge(state, { payload }) {
      console.log(state.age)
    }
  }
})

export const { getAge } = detailReducer.actions

export default detailReducer.reducer
