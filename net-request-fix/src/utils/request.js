import axios from 'axios'

// 创建一个axios的对象
const instance = axios.create({
  baseURL: 'https://api.cat-shop.penkuoer.com',
  timeout: 5000,
})

// 请求拦截
// 所有的网络请求都先执行此方法，可以在这里为请求添加一些自定义内容，例如token
instance.interceptors.request.use(
  (config) => {
    console.group('全局请求拦截')
    console.log(config)
    console.groupEnd()
    config.headers.token = '123456'
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截
// 所有网络请求返回数据之后都会先执行此方法
// 根据服务器返回状态码做相应的处理
instance.interceptors.response.use(
  (response) => {
    console.group('全局响应拦截')
    console.log(response)
    console.groupEnd()
    return response
  },
  (err) => {
    return Promise.reject(err)
  }
)

export function get(url, params) {
  return instance.get(url, {
    params,
  })
}

export function post(url, data) {
  return instance.post(url, data)
}

export function del(url) {
  return instance.delete(url)
}

export function put(url, data) {
  return instance.put(url, data)
}
