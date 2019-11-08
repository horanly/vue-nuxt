import axios from "axios"
import {Message, Notification} from 'element-ui'

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// const urlKey = location.host
// const ipConfig = {
//   'localhost:9006': {
//     baseUrl: 'http://192.168.1.4:9807'
//   },
//   '127.0.0.1:9006': {
//     baseUrl: 'http://192.168.1.4:9807'
//   },
//   '192.168.1.4:9006': {
//     baseUrl: 'http://192.168.1.4:9807'
//   }
// }
const server = axios.create({
  timeout: 10000
})

// const baseURL = ipConfig[urlKey].baseUrl || ''
   const baseURL = 'http://192.168.1.4:9807'

// 请求拦截
server.interceptors.request.use(config => {
  config.url = baseURL + config.url

  let token = localStorage.getItem('author')
  if (token) {
    config.headers.Authorization = token
  }
  console.log(config,'request')
  return config
})

// 响应拦截
server.interceptors.response.use(res => {
  console.log(res,'response')
  if (res.data) {
    if (res.data.status !== 0) {
      Message({
        type: 'error',
        message: res.data.msg,
        duration: 5000
      })
    }
    return res.data
  } else {
    return res.data
  }
}, error => {
  if (error.response) {
    switch (error.response.status) {
      case 400: {
        if (error.response && error.response.data && error.response.data.message) {
          Notification.error({
            title: '400错误',
            message: error.response.data.message,
            duration: 5000,
            closable: true
          })
        }
        break
      }
    }
  }
})

/*
// 发送post请求
export async function post(url, params) {
  try {
    let res = await server.post(url, params)
    res = res.data
    return new Promise((resolve, reject) => {
      resolve(res)
    })
  } catch (error) {
    console.log(error)
  }
}

// 发送formData请求
export async function fetchQs(url, params) {
  try {
    let res = await server.post(url, params, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    res = res.data
    return new Promise((resolve, reject) => {
      resolve(res)
    })
  } catch (error) {
    console.log(error)
  }
}


// 发送get请求
export async function get(url, params) {
  try {
    let res = await server.get(url, {
      params: params
    })
    res = res.data
    return new Promise((resolve, reject) => {
      resolve(res)
    })
  } catch (error) {
    console.log(error)
  }
}

// 发送delete请求
export async function del(url, params) {
  try {
    let res = await server.delete(url, {
      params: params
    })
    res = res.data
    return new Promise((resolve, reject) => {
      resolve(res)
    })
  } catch (error) {
    console.log(error)
  }
}
*/

export default server
