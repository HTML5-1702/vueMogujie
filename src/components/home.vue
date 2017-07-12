<template>
	<div id="home">
		<div id="search"></div>
		<lunbo :message="swiperData"></lunbo>
		<!-- 大牌满减-->
		<div id="home-dapai">
			<div v-for="item in dapaiData">
				<a href="javascript:;">
					<p>{{item.title}}</p>
					<p>{{item.description}}</p>
					<img :src="item.image" alt="" />
				</a>
			</div>
		</div>
		<!--秒杀倒计时-->
		<div id="daojishi">
			<div class="daojishi-left">
				<span>{{title}}</span><span class="yuandian"></span><span>{{title2}}</span>
			</div>
			<div class="daojishi-right">
				<span></span> : <span></span> : <span></span>
			</div>
			
		</div>
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
			return {swiperData:[],dapaiData:[]}
		},
		methods:{
//			timer : setInterval( function() {
//					this.time--;
//					this.minutes = parseInt(time / 60 % 60);
//					this.hours = parseInt(time / 60 / 60 % 24);
//					this.seconds = parseInt(this.time % 60);
//					if(this.seconds < 10) {
//						this.seconds = '0' + this.seconds;
//					};
//					if(this.minutes < 10) {
//						this.minutes = "0" + this.minutes;
//					};
//					if(this.hours < 10) {
//						this.hours = '0' + this.hours;
//					};
//				}, 1000)
			
		},
		mounted(){
			this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604').then(function (res){
	       		this.swiperData = res.data.data[51822].list;
	       		this.dapaiData = res.data.data[51827].list;
	       		this.seckill = res.data.data[41119].list;
	       	    this.time=this.seckill[0].time;
	       	    this.title=this.seckill[0].title;
	       	    this.title2=this.seckill[0].viceTitle;
	       		console.log(this.seckill)
			})
//			this.timer();
			
		}
	}
</script>

<style>
	#home{background: #f1f1f1;}
	#search{width: 100%;height: 0.4rem;padding: 0.08rem;background: red;}
	#home-dapai{width: 100%;background: #fff;padding:0.05rem 0;overflow: hidden;}
	#home-dapai>div{width: 33%;float: left;position: relative;}
	
	#home-dapai>div:nth-child(1) a:after{content: "";display: block;width: 1px;height: 0.7rem;border-right: 1px solid #eee;position: absolute;top: 0.1rem;right: 0;}
	#home-dapai>div:nth-child(2) a:after{content: "";display: block;width: 1px;height: 0.7rem;border-right: 1px solid #eee;position: absolute;top: 0.1rem;right: 0;}
	#home-dapai>div>a{display: inline-block;width: 100%;height: 100%;}
	#home-dapai>div>a>p:nth-child(1){color: #ff6801;width: 100%;height: 0.1rem;text-align: center;line-height: 0.1rem;font-size: 0.1rem;}
	#home-dapai>div>a>p:nth-child(2){color: #666;width: 100%;height: 0.2rem;text-align: center;line-height: 0.2rem;font-size: 0.1rem; overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
	#home-dapai>div>a>img{width: 45%;margin: 0 auto;}
	#daojishi{width: 100%;height:0.4rem;line-height: 0.4rem; padding: ;background: #fff;margin: 0.1rem 0 0 0;overflow: hidden;padding: 0.05rem 0 0 0.1rem ;}
	.yuandian{display: inline-block;width: 0.05rem;height: 0.05rem;background: #000;border-radius: 50%;margin: 0.05rem 0.05rem;}
	.daojishi-left{float: left;}
	.daojishi-right{float: left;margin: 0 0 0 0.1rem;}
	.daojishi-right span{display: inline-block;width: 0.2rem;height:0.2rem;background: #000;vertical-align: middle;border-radius:0.03rem ;color: #fff;}
	.daojishi-left span{font-size: 0.15rem}
</style>
