const debounce = function (fn, delay, immediate = false) {
  let timer = null
  let isDo = false
  return function (...args) {
    if (immediate && !isDo) {
      fn.apply(this, args)
      isDo = true
    }
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      isDo = false
    }, delay)
  }
}

export default debounce
