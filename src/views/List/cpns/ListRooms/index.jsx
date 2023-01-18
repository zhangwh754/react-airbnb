import React, { memo } from 'react'

import { RoomsWrapper } from './style'
import suitcaseImg from '@/assets/img/suitcase.gif'
import SectionItem from '@/components/SectionItem'

const ListRooms = memo(({ listData, isLoading }) => {
  return (
    <RoomsWrapper>
      <div className="desc">
        <div className="img">
          <img src={suitcaseImg} alt="行李箱图标" />
        </div>
        <div className="text">
          <strong>马上就要出门旅行了？</strong>
          <span>使用「闪订」筛选条件，查看可即时预订的房源。</span>
        </div>
      </div>

      <ul className="list">
        {listData.map(item => (
          <SectionItem key={item._id} {...item} itemWidth="20%" />
        ))}

        {isLoading && <div className="mask"></div>}
      </ul>
    </RoomsWrapper>
  )
})

export default ListRooms
