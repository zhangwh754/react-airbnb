import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import SectionHeader from '@/components/SectionHeader'
import SectionList from '@/components/SectionList'
import SectionNames from '@/components/SectionNames'
import { SectionWrapper } from './style'
import SectionFooter from '@/components/SectionFooter'

const HomeSectionV2 = memo(props => {
  const { listInfo } = props

  const [name, setName] = useState(listInfo.dest_address[0].name)

  const names = listInfo.dest_address.map(item => item.name)

  const handleActiveName = useCallback(name => {
    setName(name)
  }, [])

  return (
    <SectionWrapper>
      <SectionHeader title={listInfo.title} subtitle={listInfo.subtitle} />
      <SectionNames namesArr={names} handleActiveName={handleActiveName} />
      <SectionList list={listInfo.dest_list[name]} itemWidth="33.3333%" />
      <SectionFooter text={name} />
    </SectionWrapper>
  )
})

HomeSectionV2.propTypes = {
  listInfo: PropTypes.object
}

export default HomeSectionV2
