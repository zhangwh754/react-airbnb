import request from '../request'

export const getHomeGoodPriceData = () => {
  return request.get({
    url: '/home/goodprice'
  })
}
