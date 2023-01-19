import React, { memo } from 'react'

import { ViewWrapper } from './style'

const DetailImages = memo(props => {
  const [big, ...small] = props.children

  return (
    <ViewWrapper>
      <div className="left">
        <div className="view-item">
          {big}
          <div className="cover"></div>
        </div>
      </div>
      <div className="right">
        {small.map(item => (
          <div className="view-item">
            {item}
            <div className="cover"></div>
          </div>
        ))}
      </div>
    </ViewWrapper>
  )
})

export default DetailImages
