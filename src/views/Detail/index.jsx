import React, { memo, useCallback, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { DetailWrapper } from './style'
import ImageView from '@/views/Detail/cpns/DetailImages'
import ImageView2 from '@/ui/ImageView'

const Detail = memo(() => {
  const [isImageViewShow, setIsImageViewShow] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const { itemInfo } = useSelector(
    state => ({
      itemInfo: state.detail.itemInfo
    }),
    shallowEqual
  )

  const handleClose = useCallback(() => {
    setIsImageViewShow(false)
  }, [])

  const handleOpen = useCallback(index => {
    setCurrentIndex(index || 0)
    setIsImageViewShow(true)
  }, [])

  return (
    <DetailWrapper>
      <ImageView handleOpen={handleOpen}>
        {itemInfo.picture_urls.slice(0, 5).map((item, index) => (
          <img key={index} src={item} alt="房间图片" />
        ))}
      </ImageView>

      {/* 点击出现的图片展示器 */}
      {isImageViewShow && (
        <ImageView2
          urls={itemInfo.picture_urls}
          index={currentIndex}
          name={itemInfo.name}
          handleClose={handleClose}
        ></ImageView2>
      )}
    </DetailWrapper>
  )
})

export default Detail
