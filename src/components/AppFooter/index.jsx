import React, { memo } from 'react'

import { FooterWrapper } from './style'
import data from '@/assets/data/footer.json'

const AppFooter = memo(() => {

  return (
    <FooterWrapper className="content">
      {data.map(item => (
        <dl key={item.name}>
          <dt>
            <h4>{item.name}</h4>
          </dt>
          {item.list.map(item => (
            <dd key={item}>{item}</dd>
          ))}
        </dl>
      ))}
    </FooterWrapper>
  )
})

export default AppFooter
