import React, { memo, useState } from 'react'

import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const ListFilter = memo(() => {
  const [activeArr, setActiveArr] = useState([])

  const handleClick = item => {
    const newArr = [...activeArr]
    const index = newArr.indexOf(item)

    if (index === -1) {
      newArr.push(item)
    } else {
      newArr.splice(index, 1)
    }

    setActiveArr(newArr)
  }

  return (
    <>
      <FilterWrapper>
        {filterData.map(item => (
          <li className="item" key={item}>
            <button className={classNames({ active: activeArr.includes(item) })} onClick={() => handleClick(item)}>
              <div>{item}</div>
            </button>
          </li>
        ))}
      </FilterWrapper>
    </>
  )
})

export default ListFilter
