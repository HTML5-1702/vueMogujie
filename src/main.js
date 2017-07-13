// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import $ from 'jquery'
import App from './App'
import Home from './components/home'
import Category from './components/category'
import Shopcar from './components/shopcar'
import Mine from './components/mine'
import Login from './components/login'
import Search from './components/search'
import SearchList from './components/searchlist'
import CategoryList from './components/categorylist'


Vue.config.productionTip = false;

//安装
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueAwesomeSwiper);

const routes = [
	{path : '/' , redirect : '/home'},
	{path : '/home' , component : Home},
	{path : '/category' , component : Category},
	{path : '/shopcar' , component : Shopcar},
	{path : '/mine' , component : Mine},
  {path:'/login',component:Login},
	{path : '/search' , component : Search},
	{path : '/searchlist' , component : SearchList},
	{path : '/categorylist' , component : CategoryList}
];

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
