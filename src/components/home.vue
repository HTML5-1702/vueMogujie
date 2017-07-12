<template>
	<div id="home">首页内容
		<div id="search"></div>
		<lunbo :message="swiperData"></lunbo>
		<div id="tab">
	    	<ul>
	    		<li class="active">
	    			<router-link to="/home">
	    				<div class="img-wrap"></div>
	    				<div class="title active">首页</div>
	    			</router-link>
	    		</li>
	    		<li>
	    			<router-link to="/category">
	    				<div class="img-wrap"></div>
	    				<div class="title active">分类</div>
	    			</router-link>
	    		</li>
	    		<li>
	    			<router-link to="/shopcar">
	    				<div class="img-wrap"></div>
	    				<div class="title active">购物车</div>
	    			</router-link>
	    		</li>
	    		<li>
	    			<router-link to="/mine">
	    				<div class="img-wrap"></div>
	    				<div class="title active">我的</div>
	    			</router-link>
	    		</li>
	    	</ul>
	    </div>
	</div>
</template>

<script>
	import lunbo from '../views/lunbo'
	export default{
		components:{
			lunbo
		},
		data(){
			return {swiperData:[]}
		},
		mounted(){
			this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604').then(function (res){
	       		this.swiperData = res.data.data[51822].list;
	       		console.log(this.swiperData);
			})
		}
	}
</script>

<style>

	#search{width: 100%;height: 0.4rem;padding: 0.08rem;background: pink;}

</style>