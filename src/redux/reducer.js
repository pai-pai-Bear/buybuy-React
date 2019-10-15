import { combineReducers } from "redux"

import {
  HOMEDATA,
  CATEGORYLIST,
  CATEGORY
} from './action-types'

function home(state = {}, action) {
  switch (action.type) {
    case 'HOMEDATA':
      return action.data
  }
}

function cate(state = {}, action) {
  switch (action.type) {
    case 'CATEGORY':
      return action.data
  }
}

function cateList(state = {}, action) {
  switch (action.type) {
    case 'CATEGORYLIST':
      return action.data
  }
}

export default combineReducers({
  cateList,
  home,
  cate
})