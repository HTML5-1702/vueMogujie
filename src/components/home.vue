<template>
	<div id="home">
		<div id="search"></div>
		<lunbo :message="swiperData"></lunbo>
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