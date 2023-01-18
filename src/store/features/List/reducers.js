import * as variables from './constant'

const initState = {
  currentPage: 0,
  totalPage: 0,
  listData: [],
  isLoading: false
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case variables.CURRENT_PAGE_ADD:
      return { ...state, currentPage: payload }
    case variables.CHANGE_TOTAL_PAGE:
      return { ...state, totalPage: payload }
    case variables.SET_LIST_DATA:
      return { ...state, listData: payload }
    case variables.LIST_IS_LOADING:
      return { ...state, isLoading: payload }
    default:
      return state || initState
  }
}

export default reducer
