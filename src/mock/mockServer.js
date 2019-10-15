import Mock from 'mockjs'

import category from './data/category.json'
import categoryList from './data/categoryList.json'
import homeData from './data/homeData.json'

Mock.mock('/home', {
  code: 0,
  data: homeData
})

Mock.mock('/category', {
  code: 0,
  data: category
})

Mock.mock('/knewThings', {
  code: 0,
  data: categoryList
})