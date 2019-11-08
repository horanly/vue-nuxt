let config = {}
if(process.env.PATH_TYPE === 'test'){
  config = {
    baseURL: 'http://192.168.1.4:9807',
    nodeUrl: ''
  }
} else if (process.env.PATH_TYPE === 'production'){
  config = {
    baseURL: 'http:www.zhongwuhe.top',
    nodeUrl: ''
  }
} else {
  config = {
    baseURL: 'http://192.168.1.4:9807',
    nodeUrl: ''
  }
}

export default config
