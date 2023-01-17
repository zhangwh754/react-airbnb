/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react'

import { FooterWrapper } from './style'
import data from '@/assets/data/footer.json'

const AppFooter = memo(() => {
  return (
    <FooterWrapper className="content">
      {data.map(item => (
        <dl key={item.name}>
          <dt>
            <h4>
              <a href="#">{item.name}</a>
            </h4>
          </dt>
          {item.list.map(item => (
            <dd key={item}>
              <a href="#">{item}</a>
            </dd>
          ))}
        </dl>
      ))}
    </FooterWrapper>
  )
})

export default AppFooter
