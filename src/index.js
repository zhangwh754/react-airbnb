import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from '@/App'
import 'normalize.css'
import './assets/style/index.scss'
import store from './store'
import theme from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Suspense>
    </Provider>
  </HashRouter>
)
