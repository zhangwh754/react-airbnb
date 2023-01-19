import React, { memo } from 'react'

import { ViewWrapper } from './style'

const DetailImages = memo(props => {
  const { handleOpen } = props
  const [big, ...small] = props.children

  return (
    <ViewWrapper>
      <div className="left">
        <div className="view-item" onClick={e => handleOpen(0)}>
          {big}
          <div className="cover"></div>
        </div>
      </div>
      <div className="right">
        {small.map((item, index) => (
          <div key={index} className="view-item" onClick={e => handleOpen(index + 1)}>
            {item}
            <div className="cover"></div>
          </div>
        ))}
      </div>
      <div className="btn" onClick={e => handleOpen()}>
        查看图片
      </div>
    </ViewWrapper>
  )
})

export default DetailImages
