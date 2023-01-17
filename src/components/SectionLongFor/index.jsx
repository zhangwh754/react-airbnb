import ScrollView from '@/ui/ScrollView'
import React, { memo } from 'react'
import SectionLongForItem from '../SectionLongForItem'

import { LongForWrapper } from './style'

const SectionLongFor = memo(props => {
  const { list } = props

  return (
    <LongForWrapper>
      <ScrollView>
        {list.map(item => (
          <SectionLongForItem key={item.city} {...item} />
        ))}
      </ScrollView>
    </LongForWrapper>
  )
})

export default SectionLongFor
