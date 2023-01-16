import PropTypes from 'prop-types'
import React, { memo } from 'react'

import SectionHeader from '@/components/SectionHeader'
import SectionList from '@/components/SectionList'
import { SectionWrapper } from './style'

const HomeSection = memo(props => {
  const { listInfo } = props

  return (
    <SectionWrapper>
      <SectionHeader title={listInfo.title} subtitle={listInfo.subtitle} />
      <SectionList list={listInfo.list} />
    </SectionWrapper>
  )
})

HomeSection.propTypes = {
  listInfo: PropTypes.object
}

export default HomeSection
