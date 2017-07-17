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
import Login from './components/login'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Indent from './components/indent'
import verify from "vue-verify-plugin"
import SignIn from './components/signIn'
import Group from './components/group'
import Search from './components/search'
import SearchList from './components/searchlist'
import CategoryList from './components/categorylist'

Vue.config.productionTip = false;

//安装
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
Vue.use(verify);
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
	{path : '/mine' , component : Mine},
<<<<<<< HEAD
  	{path : '/login',component:Login},
=======
  {path:'/login',component:Login},
  {path:'/indent',component:Indent},
  {path:'/signIn',component:SignIn},
  {path:'/group',component:Group},
>>>>>>> dd668e1ab488ff778e437c178d8a640288e91014
	{path : '/search' , component : Search},
	{path : '/searchlist' , component : SearchList},
	{path : '/categorylist' , component : CategoryList}
];
//创建路由对象
const router = new VueRouter({
	routes
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});
