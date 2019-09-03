import Vue from 'vue'

import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import '../node_modules/bootstrap/dist/css/bootstrap.css'



import router from './router.js'
import app from './app.vue'

// 导入mui样式和拓展样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

// 导入mint-ui 


// 导入动画样式


// 注册路由
Vue.use(vueRouter)
Vue.use(vueResource);

// 注册富文本编辑器


let vm = new Vue({
    el: "#app",
    render: c=>c(app),
    router:router
})