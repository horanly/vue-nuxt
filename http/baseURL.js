let config = {}
if(process.env.PATH_TYPE === 'test'){
  config = {
    baseURL: 'https://cnodejs.org',
    nodeUrl: ''
  }
} else if (process.env.PATH_TYPE === 'production'){
  config = {
    baseURL: 'https://cnodejs.org',
    nodeUrl: ''
  }
} else {
  config = {
    baseURL: 'https://cnodejs.org',
    nodeUrl: ''
  }
}

export default config
