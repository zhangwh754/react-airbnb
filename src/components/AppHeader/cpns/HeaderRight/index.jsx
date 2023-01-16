import React, { memo, useEffect, useState } from 'react'

import IconAvatar from '@/assets/svg/IconAvatar'
import IconGlobal from '@/assets/svg/IconGlobal'
import IconMenu from '@/assets/svg/IconMenu'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const fn = () => setIsShow(false)
    window.addEventListener('click', fn)

    return () => window.removeEventListener('click', fn)
  }, [])

  const switchPanelShow = e => {
    e.stopPropagation() // 阻止冒泡，避免触发window的点击事件关闭面板

    setIsShow(true)
  }

  const panelItemClick = e => {
    e.stopPropagation() // 阻止冒泡，避免触发window的点击事件关闭面板

    switch (e.target.dataset.type) {
      case 'register':
        console.log('点击了注册')
        break
      case 'login':
        console.log('点击了登录')
        break
      case 'publish':
        console.log('点击了来爱彼迎发布房源')
        break
      case 'enjoy':
        console.log('点击了开展体验')
        break
      case 'help':
        console.log('点击了帮助')
        break
      default:
        console.log('error')
        break
    }
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={switchPanelShow}>
        <div className="icon">
          <IconMenu />
        </div>
        <div className="icon">
          <IconAvatar />
        </div>
      </div>

      {isShow && (
        <div className="panel" onClick={panelItemClick}>
          <div className="top">
            <div className="item" data-type="register">
              <strong>注册</strong>
            </div>
            <div className="item" data-type="login">
              登录
            </div>
          </div>
          <div className="bottom">
            <div className="item" data-type="publish">
              来爱彼迎发布房源
            </div>
            <div className="item" data-type="enjoy">
              开展体验
            </div>
            <div className="item" data-type="help">
              帮助
            </div>
          </div>
        </div>
      )}
    </RightWrapper>
  )
})

export default HeaderRight
