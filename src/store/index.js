import { configureStore } from '@reduxjs/toolkit'

import { detailReducer, homeReducer } from './features'
import { ListReducer } from './features/List'

const store = configureStore({
  reducer: {
    home: homeReducer,
    detail: detailReducer,
    list: ListReducer
  },
  devTools: true
})

export default store
