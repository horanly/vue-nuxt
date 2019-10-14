import Vue from 'vue'
import Axios from '~/http/index.js'

Vue.prototype.$axios = Axios
Vue.use(Axios)