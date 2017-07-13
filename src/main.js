// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

import $ from 'jquery'
import App from './App'
import Home from './components/home'
import Category from './components/category'
import Shopcar from './components/shopcar'
import Mine from './components/mine'
import GoodNormal from './components/Good-normal'

Vue.config.productionTip = false

//安装
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

const routes = [
	{path : '/' , redirect : '/home'},
	{path : '/home' , component : Home},
	{path : '/category' , component : Category},
	{path : '/shopcar' , component : Shopcar},
	{name : 'goodnormal' , path : '/goodnormal' , component : GoodNormal},
	{path : '/mine' , component : Mine}
]

//创建路由对象
const router = new VueRouter({
	routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})