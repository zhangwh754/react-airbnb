import React, { memo } from 'react'
import { Rating } from '@mui/material'

import { ItemWrapper } from './style'

const SectionItem = memo(props => {
  return (
    <ItemWrapper key={props.id} descColor={props.verify_info?.text_color} bottomContent={props?.bottom_info}>
      <div className="cover">
        <img src={props.picture_url} alt="房间图片" />
      </div>
      <div className="desc">{props.verify_info.messages.join('·')}</div>
      <div className="name">{props.name}</div>
      <div className="price">¥{props.price}/晚</div>
      <div className="rate">
        {props.star_rating ? (
          <>
            <Rating
              style={{ color: props.star_rating_color || 'lightblue' }}
              value={props.star_rating}
              precision={0.5}
              sx={{ fontSize: '12px' }}
              readOnly
            />
            <span>{props.reviews_count}</span>
            <span className='bottom'>{props?.bottom_info?.content && `·${props.bottom_info.content}`}</span>
          </>
        ) : (
          <span className="new">new</span>
        )}
      </div>
    </ItemWrapper>
  )
})

export default SectionItem
