// 导入Vue 文件
import Vue from 'vue'

// 引入 App 組建
import app from './App.vue'

// 导入路由文件
import {router} from './router.js'

Vue.use(router.vuerouter)

// 按需导入 mint-ui组件
import { Header,Swipe, SwipeItem } from 'mint-ui'
// 注册组件
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


// 导入mui组件样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

var vm = new Vue({
  el: '#app',
  data: {},
  router:router.router,
  components:{
    app
  }
})
