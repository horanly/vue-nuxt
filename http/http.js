import axios from 'axios'
import qs from 'qs'

// axios.default.timeout = 50000
// axios.default.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

let urlKey = location.host
let ipConfig = {
  'localhost:9006': {
    baseUrl: 'http://192.168.1.4:9807'
  },
  '192.168.1.4:9006': {
    baseUrl: 'http://192.168.1.4:9807'
  },
  'www.love599.cn': {
    baseUrl: 'https://api.pc.love599.cn'
  }
}

const baseURL = ipConfig[urlKey].baseUrl || ''

// 请求拦截
axios.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'

    config.url = baseURL + config.url //配置接口地址

    let token = localStorage.getItem('author')
    if (token) {
      config.headers.Authorization = token
    }
    let _params = {
      platform: 'web'
    }
    // 多媒体类型不转换
    if (config.data instanceof FormData) {
      config.params = {
        ...config.params
      }
      return config
    }
    if (config.method === 'post') {
      let finalData = qs.parse(config.data)
      let _data = Object.assign({}, _params, finalData)
      config.data = qs.stringify(_data)
    } else if (config.method === 'get') {
      config.params = Object.assign({}, _params, config.params)
    }
    console.log(config, '请求拦截')
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 服务响应的拦截处理
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      if (response.data.status === 100403) { // 登录失效
        localStorage.clear()
        setTimeout(() => {
          window.location.href = '/'
        }, 1000)
        return
      }
      return response.data
      //   if (response.data.status === 0) {
      //     return response.data
      //   } else {
      //     Message.error(response.data.msg)
      //   }
    }
  },
  error => {
    return Promise.reject(error)
  }
)

// 发送post请求
export async function post(url, params) {
  try {
    let res = await axios.post(url, params)
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
    let res = await axios.post(url, params, {
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
    let res = await axios.get(url, {
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
    let res = await axios.delete(url, {
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
