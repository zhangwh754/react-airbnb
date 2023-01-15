import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import config from './router'

const App = memo(() => {
  return (
    <div className="app">
      <header>header</header>
      <main>{useRoutes(config)}</main>
      <footer>footer</footer>
    </div>
  )
})

export default App
