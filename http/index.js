import {get, post} from './http'

export default {
  POST (link) {
    return post(link)
  },
  GET (link) {
    return get(link)
  }
}