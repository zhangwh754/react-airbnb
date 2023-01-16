import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import config from './router'

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader />
      <main style={{ minHeight: '600px' }}>{useRoutes(config)}</main>
      <AppFooter />
    </div>
  )
})

export default App
