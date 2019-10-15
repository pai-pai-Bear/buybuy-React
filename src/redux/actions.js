import { HOMEDATA, CATEGORY, CATEGORYLIST } from './action-types'

export const getHomeData = () => ({
  type: HOMEDATA,
  data: homeData
})

export const getCategory = () => ({
  type: CATEGORY,
  data: category
})

export const getCategoryList = () => ({
  type: CATEGORYLIST,
  data: categoryList
})