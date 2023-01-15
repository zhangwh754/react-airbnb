import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('../views/Home'))
const List = React.lazy(() => import('../views/List'))
const Detail = React.lazy(() => import('../views/Detail'))

const config = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/list',
    element: <List />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '*',
    element: <Detail />
  }
]

export default config
