import { configureStore } from '@reduxjs/toolkit'

import { detailReducer, homeReducer } from './features'

const store = configureStore({
  reducer: {
    home: homeReducer,
    detail: detailReducer
  },
  devTools: true
})

export default store
