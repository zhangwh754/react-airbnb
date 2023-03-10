import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import ListFilter from './cpns/ListFilter'
import ListPagination from './cpns/ListPagination'
import ListRooms from './cpns/ListRooms'
import { fetchEntireRoomList } from '@/store/features/List/actionCreators'
import { isEmptyObject } from '@/utils'

const List = memo(() => {
  const { totalPage, listData, currentPage, isLoading } = useSelector(
    state => ({
      totalPage: state.list.totalPage,
      listData: state.list.listData,
      currentPage: state.list.currentPage,
      isLoading: state.list.isLoading
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEntireRoomList())
  }, [dispatch])

  return (
    <div>
      {isEmptyObject(listData) && (
        <>
          <ListFilter />
          <ListRooms listData={listData} />
          <ListPagination totalPage={totalPage} currentPage={currentPage} isLoading={isLoading} />
        </>
      )}
    </div>
  )
})

export default List
