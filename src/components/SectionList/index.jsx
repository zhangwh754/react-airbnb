import PropTypes from 'prop-types'
import React, { memo } from 'react'

import SectionItem from '../SectionItem'
import { ListWrapper } from './style'

const SectionList = memo(props => {
  const { list = [], itemWidth } = props

  return (
    <ListWrapper>
      {list.slice(0, 8).map(item => (
        <SectionItem {...item} key={item.id} itemWidth={itemWidth} />
      ))}
    </ListWrapper>
  )
})

SectionList.propTypes = {
  list: PropTypes.array
}

export default SectionList
