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
