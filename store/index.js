import Vuex from 'vuex'

let store = () => new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    setToken (state, token) {
       state.token = token
    }
  },
  actions: {
    nuxtServerInit({ commit }, { req }) {
      let cookie = req.headers.cookie;

      // 将cookie转成json对象（自己实现该方法）
      let token = cookieparse(cookie).token;
      commit('setToken', token);
    },
  }
})

// export default store