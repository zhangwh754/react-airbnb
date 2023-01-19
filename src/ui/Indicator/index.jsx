import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { IndicatorWrapper } from './style'

const Indicator = memo(props => {
  const { index } = props

  const contentRef = useRef()

  useEffect(() => {
    const contentEl = contentRef.current
    const itemEl = contentEl.children[index]

    const offsetLeft = itemEl.offsetLeft


    const itemWidth = itemEl.clientWidth

    const contentWidth = contentEl.clientWidth
    const contentScroll = contentEl.scrollWidth

    let distance = offsetLeft + 0.5 * itemWidth - 0.5 * contentWidth

    if (distance < 0) distance = 0
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance

    contentEl.style.transform = `translate(${-distance}px)`
  }, [index])

  return (
    <IndicatorWrapper>
      <div className="indicator-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  index: PropTypes.number
}

export default Indicator
