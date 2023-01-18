import { pageAddAction } from '@/store/features/List'
import { fetchEntireRoomList } from '@/store/features/List/actionCreators'
import { Pagination } from '@mui/material'
import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { PaginationWrapper } from './style'

const ListPagination = memo(({ totalPage, currentPage }) => {
  const dispatch = useDispatch()

  const handleChange = (e, param) => {
    dispatch(pageAddAction(param - 1))

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    dispatch(fetchEntireRoomList())
  }

  return (
    <PaginationWrapper>
      <Pagination count={totalPage} page={currentPage + 1} onChange={handleChange} />
    </PaginationWrapper>
  )
})

export default ListPagination
