import axios from 'axios'
const request = axios.create(// 创建axios通用规则
  {
    // baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  }
)

// http request 请求拦截器
request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error);
  }
)

// http response 服务器响应拦截器
request.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error);
  }
)

/*包装通用请求方法
*@method handleRequest
*@param{OBject|Sting}axiosConfig axios的请求配置,可以定义一个叫customConfig字段用于传递自定义配置字段
*@return {function} 一个promise
*/
const handleRequest = (axiosConfig = {}, data={}) => {
  if(axiosConfig.customConfig) { //获取增加自定义参数,用于其他用途
    let customConfig = axiosConfig.customConfig
    delete xiosConfig.customConfig
  }

  if(!axiosConfig.method) { // 不存在的配置默认都为get形式
    axiosConfig = {url : axiosConfig,method:'GET'}
  }

  axiosConfig.method = axiosConfig.method.toUpperCase() //方法转大写

  switch(axiosConfig.method) {
    case 'GET':
      axiosConfig.params = data
      break
    default:
      axiosConfig.data = data
  }

  return request(axiosConfig)
}

export default handleRequest