import { useEffect } from 'react'

export const useRender = name => {
  useEffect(() => {
    console.log(`${name}挂载了`)
  }, [])
}
