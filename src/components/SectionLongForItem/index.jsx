import React, { memo } from 'react'
import { ItemWrapper } from './style'

const SectionLongForItem = memo(item => {
  return (
    <ItemWrapper>
      <div className="item">
        <div className="img">
          <img src={item.picture_url} alt="城市图片" />
        </div>
        <div className="bg"></div>
        <div className="desc">
          <div className="title">{item.city}</div>
          <div className="price">均价 {item.price}</div>
        </div>
      </div>
    </ItemWrapper>
  )
})

export default SectionLongForItem
