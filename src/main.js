import Vue from 'vue'

// 引入 App 組建
import app from './App.vue'

// 按需导入 mint-ui组件
import { Header } from 'mint-ui'
// 注册组件
Vue.component(Header.name,Header)

// 导入mui组件样式
import './lib/mui/css/mui.css'

var vm = new Vue({
  el: '#app',
  data: {},
  render: c => c(app)
})
