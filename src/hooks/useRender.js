import { useEffect } from 'react'

export const useRender = name => {
  useEffect(() => {
    console.log(`${name}挂载了`)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
