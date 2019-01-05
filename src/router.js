import vueRouter from 'vue-router'

// 导入首界面
import home from './components/tabbar/home.vue'

// 导入会员界面
import vip from './components/tabbar/vip.vue'

// 导入购物车界面
import cart from './components/tabbar/cart.vue'

// 导入搜索界面
import search from './components/tabbar/search.vue'


var router = new  vueRouter({
  routes:[
    {path:'/home',component:home},
    {path:'/vip',component:vip},
    {path:'/cart',component:cart},
    {path:'/search',component:search},
  ],
  linkActiveClass:"mui-active"
})

export var router = {
  router:router,
  vuerouter:vueRouter
};

