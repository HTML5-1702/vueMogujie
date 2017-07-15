// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import Home from './components/home'
import Category from './components/category'
import Shopcar from './components/shopcar'
import Mine from './components/mine'
import Login from './components/login'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Indent from './components/indent'
import verify from "vue-verify-plugin"
import SignIn from './components/signIn'
import Group from './components/group'
Vue.config.productionTip = false;

//安装
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
Vue.use(verify);


const routes = [
	{path : '/' , redirect : '/home'},
	{path : '/home' , component : Home},
	{path : '/category' , component : Category},
	{path : '/shopcar' , component : Shopcar},
	{path : '/mine' , component : Mine},
  {path:'/login',component:Login},
  {path:'/indent',component:Indent},
  {path:'/signIn',component:SignIn},
  {path:'/group',component:Group}
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
