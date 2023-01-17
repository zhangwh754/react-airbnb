import request from '../request'

export const getHomeGoodPriceData = () => {
  return request.get({
    url: '/home/goodprice'
  })
}

export const getHomeHighScoreData = () => {
  return request.get({
    url: '/home/highscore'
  })
}

export const getHomeDiscountData = () => {
  return request.get({
    url: '/home/discount'
  })
}

export const getHomeHotRecommendData = () => {
  return request.get({
    url: '/home/hotrecommenddest'
  })
}

export const getHomeLongforData = () => {
  return request.get({
    url: '/home/longfor'
  })
}

export const getHomePlusData = () => {
  return request.get({
    url: '/home/plus'
  })
}
