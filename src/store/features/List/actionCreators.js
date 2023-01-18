import { getEntireRoomList } from '@/services/modules/list'
import * as variables from './constant'

export const pageAddAction = page => ({
  type: variables.CURRENT_PAGE_ADD,
  payload: page
})

export const changeTotalPageAction = page => ({
  type: variables.CHANGE_TOTAL_PAGE,
  payload: page
})

export const setListDataAction = page => ({
  type: variables.SET_LIST_DATA,
  payload: page
})

export const setLoadingAction = bool => ({
  type: variables.LIST_IS_LOADING,
  payload: bool
})

export const fetchEntireRoomList = () => async (dispatch, getState) => {
  const pageNum = getState().list.currentPage

  const offset = pageNum * 20

  dispatch(setLoadingAction(true))

  const res = await getEntireRoomList(offset)

  dispatch(setLoadingAction(false))

  dispatch(setListDataAction(res.list))

  dispatch(changeTotalPageAction(Math.ceil(res.totalCount / 20)))
}
