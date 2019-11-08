import axios from "axios"
import {Message, Notification} from 'element-ui'
import config from "./config";
import URL from "./baseURL"

const server = axios.create(config)

// 请求拦截
server.interceptors.request.use(config => {
  config.url = URL.baseURL + config.url

  // let token = localStorage.getItem('author')
  // if (token) {
  //   config.headers.Authorization = token
  // }
  // console.log(config,'request')
  return config
})

// 响应拦截
server.interceptors.response.use(res => {
  // console.log(res,'response')
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
    return res
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
