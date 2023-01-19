import React, { createRef, memo, useState } from 'react'
import className from 'classnames'
import { Rating } from '@mui/material'

import { ItemWrapper } from './style'
import IconLast from '@/assets/svg/IconLast'
import IconMore from '@/assets/svg/IconMore'
import { Carousel } from 'antd'
import Indicator from '@/ui/Indicator'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setItemInfoAction } from '@/store/features'

const SectionItem = memo(props => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { itemWidth = '25%' } = props

  const sliderRef = createRef()

  const handleBtnClick = (isNext, e) => {
    e.stopPropagation()

    isNext ? sliderRef.current.next() : sliderRef.current.prev()

    let index = isNext ? currentIndex + 1 : currentIndex - 1

    if (index < 0) index = props.picture_urls.length - 1
    if (index > props.picture_urls.length - 1) index = 0

    setCurrentIndex(index)
  }

  const handleNavigate = () => {
    dispatch(setItemInfoAction(props))
    navigate('/detail')
  }

  const coversEl = (
    <>
      <div className="swiper">
        <Carousel ref={sliderRef} dots={false} easing="none">
          {props.picture_urls.map((pic, index) => (
            <div key={index} className="cover">
              <img src={pic} alt="房间图片" />
            </div>
          ))}
        </Carousel>
        <div className="left control" onClick={e => handleBtnClick(false, e)}>
          <IconLast width={28} height={28} />
        </div>
        <div className="right control" onClick={e => handleBtnClick(true, e)}>
          <IconMore width={28} height={28} />
        </div>
        <div className="spot">
          <Indicator index={currentIndex}>
            {props.picture_urls.map((_, index) => (
              <div key={index} className="spot-item">
                <span className={className('white-dot', { active: index === currentIndex })}></span>
              </div>
            ))}
          </Indicator>
        </div>
      </div>
    </>
  )

  return (
    <ItemWrapper
      key={props.id}
      descColor={props.verify_info?.text_color}
      bottomContent={props?.bottom_info}
      itemWidth={itemWidth}
      onClick={handleNavigate}
    >
      {props.picture_urls.length ? (
        coversEl
      ) : (
        <div className="cover">
          <img src={props.picture_url} alt="房间图片" />
        </div>
      )}

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
            <span className="bottom">{props?.bottom_info?.content && `·${props.bottom_info.content}`}</span>
          </>
        ) : (
          <span className="new">new</span>
        )}
      </div>
    </ItemWrapper>
  )
})

export default SectionItem
