import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { DetailWrapper } from './style'
import ImageView from '@/views/Detail/cpns/DetailImages'

const Detail = memo(() => {
  const { itemInfo } = useSelector(
    state => ({
      itemInfo: state.detail.itemInfo
    }),
    shallowEqual
  )

  console.log(itemInfo.picture_urls.slice(0, 5))

  return (
    <DetailWrapper>
      <ImageView>
        {itemInfo.picture_urls.slice(0, 5).map((item, index) => (
          <img key={index} src={item} alt="房间图片" />
        ))}
      </ImageView>
    </DetailWrapper>
  )
})

export default Detail
