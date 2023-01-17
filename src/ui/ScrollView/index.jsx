import React, { memo, useEffect, useRef, useState } from 'react'

import IconLast from '@/assets/svg/IconLast'
import IconMore from '@/assets/svg/IconMore'
import { ViewWrapper } from './style'

const ScrollView = memo(props => {
  const [index, setIndex] = useState(0)
  const [isShowRight, setIsShowRight] = useState(false)
  const [isShowLeft, setIsShowLeft] = useState(false)

  const contentRef = useRef()
  const totalDistance = useRef()

  useEffect(() => {
    const clientWidth = contentRef.current.clientWidth
    const scrollWidth = contentRef.current.scrollWidth

    totalDistance.current = scrollWidth - clientWidth

    setIsShowRight(totalDistance.current > 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleBtnClick = isGoRight => {
    const currentIndex = isGoRight ? index + 1 : index - 1

    const offsetLeft = contentRef.current.children[currentIndex].offsetLeft

    contentRef.current.style.transform = `translateX(-${offsetLeft}px)`

    console.log(offsetLeft, totalDistance.current)

    setIndex(currentIndex)
    setIsShowRight(offsetLeft < totalDistance.current)
    setIsShowLeft(offsetLeft > 0)
  }

  return (
    <ViewWrapper>
      <div className="scroll-container">
        <div ref={contentRef} className="scroll-content">
          {props.children}
        </div>
      </div>
      {isShowLeft && (
        <div className="control left" onClick={() => handleBtnClick(false)}>
          <IconLast />
        </div>
      )}
      {isShowRight && (
        <div className="control right" onClick={() => handleBtnClick(true)}>
          <IconMore />
        </div>
      )}
    </ViewWrapper>
  )
})

export default ScrollView
