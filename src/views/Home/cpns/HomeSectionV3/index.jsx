import React, { memo } from 'react'
import PropTypes from 'prop-types'

import SectionHeader from '@/components/SectionHeader'
import SectionLongFor from '@/components/SectionLongFor'
import { SectionWrapper } from './style'

const HomeSectionV3 = memo(props => {
  const { listInfo } = props

  return (
    <SectionWrapper>
      <SectionHeader title={listInfo.title} subtitle={listInfo.subtitle} />
      <SectionLongFor list={listInfo.list} />
    </SectionWrapper>
  )
})

HomeSectionV3.propTypes = {
  listInfo: PropTypes.object
}

export default HomeSectionV3
