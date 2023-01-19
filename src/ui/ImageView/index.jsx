import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import IconClose from '@/assets/svg/IconClose'
import IconLast from '@/assets/svg/IconLast'
import IconMore from '@/assets/svg/IconMore'
import { ViewWrapper } from './style'
import Indicator from '../Indicator'
import classNames from 'classnames'

const ImageView = memo(props => {
  const { handleClose, name, urls, index = 0 } = props

  const [currentIndex, setCurrentIndex] = useState(index)

  const [isNext, setIsNext] = useState(true)

  const [isHide, setIsHide] = useState(false)

  // 左右按钮点击切换
  const handleClick = isNext => {
    let index = isNext ? currentIndex + 1 : currentIndex - 1

    if (index < 0) index = urls.length - 1
    if (index > urls.length - 1) index = 0

    setIsNext(isNext)
    setCurrentIndex(index)
  }

  // 下方指示器点击切换
  const handleClick2 = index => {
    let isNext
    if (index > currentIndex) isNext = true
    else if (index < currentIndex) isNext = false
    else return

    setIsNext(isNext)
    setCurrentIndex(index)
  }

  return (
    <ViewWrapper isNext={isNext} isHide={isHide}>
      <div className="image-view-content">
        <div className="top">
          <div className="icon" onClick={handleClose}>
            <IconClose />
          </div>
        </div>
        <div className="view-content">
          <div className="left" onClick={e => handleClick(false)}>
            <IconLast width={72} height={72} />
          </div>
          <div className="right" onClick={e => handleClick(true)}>
            <IconMore width={72} height={72} />
          </div>
          <div className="middle">
            <SwitchTransition>
              <CSSTransition classNames="fade" key={urls[currentIndex]} timeout={300}>
                <img src={urls[currentIndex]} alt="房间图片" />
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="desc">
              <div className="left">
                {currentIndex + 1}/{urls.length}
                {name}
              </div>
              <div className="right" onClick={e => setIsHide(!isHide)}>
                <div className="text">隐藏照片列表</div>
                <div className="icon">
                  <IconMore width={8} height={8} />
                </div>
              </div>
            </div>
            <div className="scroll">
              <Indicator index={currentIndex}>
                {urls.map((item, index) => (
                  <div
                    key={index}
                    className={classNames('item', { active: index === currentIndex })}
                    onClick={e => handleClick2(index)}
                  >
                    <img src={item} alt="图片" />
                    <div className="cover"></div>
                  </div>
                ))}
              </Indicator>
            </div>
          </div>
        </div>
      </div>
    </ViewWrapper>
  )
})

ImageView.propTypes = {
  urls: PropTypes.array,
  index: PropTypes.number,
  name: PropTypes.string
}

export default ImageView
