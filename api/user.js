import request from '~/common/http'

// 登录
export function login (data) {
  return request({
    url: '/user/login',
    method: 'post',
    data: data
  })
}

// 获取列表
export function getIndexList (data){
  return request({
    url: '/api/v1/topics?page=1&limit=20&tab=all',
    method: 'get',
    params: data
  })
}

// 获取列表
export function getSearchList (data){
  return request({
    url: '/api/v1/topics?page=1&limit=20&tab=all',
    method: 'get',
    params: data
  })
}
