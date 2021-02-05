import handleRequest from './require'

const importModule = (() => { // 动态加载js文件模块
  const importModule = import.meta.glob('../*.js')
  const re = /^\.*\/(.*)\.js$/   // 用于去掉键值的前缀
  return Object.keys(importModule).reduce((prev,item)=>{ // 将模块名重写
    prev[item.match(re)[1]] = importModule[item]
    return prev
  },{})
})()

/*处理api
*@method handleApi
*@param{String}spacename 命名空间名称
*@param{Array}apiArr 接口命名列表
*@return {Array} 返回值描述
*/
const handleApi =  (() => {
  const store = {} // 所有接口存储
  return async (spacename,apiArr) => {
    if(!store[spacename]) {
      const res = await importModule[spacename]()
      store[spacename] = res.default
    }
    const apiObj = {}
    apiArr.forEach(item => {
      apiObj[item] = store[spacename][item]
    })
    return Promise.resolve(apiObj)
  }
})()

// 代理
const propxApi = (spacename,apiArr) => {
  const apiModule = {}
  apiArr.forEach(item => {
    apiModule[item] = async (data) => {
      const promise = new Promise((resolve, reject) => {
        handleApi(spacename,apiArr).then(res => {
          res[item] ? resolve(handleRequest(res[item],data)) :reject(`没有这个接口:${item}`) // 获取到具体的函数
        })
      })
      return promise
    }
  })
  return apiModule
}

export default propxApi
