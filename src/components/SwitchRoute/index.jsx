import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

const SwitchRoute = memo(() => {
  const navigate = useNavigate()

  return (
    <>
      <button onClick={() => navigate('/home')}>home</button>
      <button onClick={() => navigate('/list')}>list</button>
      <button onClick={() => navigate('/detail')}>detail</button>
    </>
  )
})

export default SwitchRoute
