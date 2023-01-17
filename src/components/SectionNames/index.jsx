import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { NamesWrapper } from './style'

const SectionNames = memo(props => {
  const [activeIndex, setActiveIndex] = useState(0)

  const { handleActiveName, namesArr = [] } = props

  const handleNameClick = (index, name) => {
    setActiveIndex(index)

    handleActiveName(name)
  }

  return (
    <NamesWrapper>
      {namesArr.map((item, index) => (
        <div
          key={item}
          className={classNames('name', { active: activeIndex === index })}
          onClick={() => handleNameClick(index, item)}
        >
          {item}
        </div>
      ))}
    </NamesWrapper>
  )
})

SectionNames.propTypes = {
  namesArr: PropTypes.array
}

export default SectionNames
