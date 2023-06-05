import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// 引入全局样式
import './assets/css/base.css'

// 引入axios
import Axios from 'axios'
// 这两天，axios没有集成上去了 qs

// import VueAxios from 'vue-axios'
// import Qs from 'qs'
// console.log(Qs)

// 设置默认基础路径
// Axios.defaults.baseURL = 'http://159.75.89.136:3000'


let app = createApp(App)
// 挂载axios 和 序列化方法
// app.config.globalProperties.qs = Qs

// 把自己本地封装好的 包 挂载到vue实例上去
import wjAPI from './api'
app.config.globalProperties.wjAPI = wjAPI

let hello = function(){
	console.log('hello')
}
app.config.globalProperties.hello = hello

import {wjAjax, wjLib} from './lib/wj2302.js'
app.config.globalProperties.wjAjax = wjAjax
app.config.globalProperties.wjLib = wjLib

// app.use(VueAxios, Axios)
app.use(router)

app.mount('#app')
