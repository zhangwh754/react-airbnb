import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAge } from '@/store/features'

const Detail = memo(() => {
  const { age } = useSelector(state => ({
    age: state.detail.age
  }))

  const dispatch = useDispatch()

  return (
    <>
      <h2>{age}</h2>
      <button onClick={() => dispatch(getAge())}>countSub</button>
    </>
  )
})

export default Detail
