import ajax from './ajax'

export const reqCategory = () => ajax('/category');

// 获取首页数据
export const reqHomeData = () => ajax('/home');

export const reqCategoryList = () => ajax('/knewThings')

// export const reqKnewThings = () => ajax(`${prefix}/topic/v1/find/recManual.json`)
export const reqKnewThings = () => ajax('/api/topic/v1/find/recManual.json')

export const reqHot = () => ajax('/api/xhr/search/init.json?csrf_token=bac99fe4f8963b0a4454ec4709fb6408')

export const reqKnewTab = () => ajax('/api/topic/v1/find/getTabs.json')