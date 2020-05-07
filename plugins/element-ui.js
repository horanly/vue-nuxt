// 全局引入
// import Vue from 'vue'
// import ElementUI from 'element-ui'

// Vue.use(ElementUI)

// 按需引入
import Vue from 'vue'
import { Button, Loading, MessageBox } from 'element-ui'

Vue.use(Button)
Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
