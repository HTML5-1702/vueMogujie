<template>
<<<<<<< HEAD
	<div id="home" >
		<div class="search">
            <a class="im-talk" href="javascript:;"></a>
            <form class="search-form">
                <input class="search" type="text" name="q" placeholder="露背无袖连衣裙" @focus="searchFocus()">
            </form>
            <a class="cart" href="javascript:;"></a>
		</div>
		<lunbo :message="swiperData" ></lunbo>
=======
	<div id="home">
		<div id="search"></div>
		<lunbo :message="swiperData"></lunbo>
>>>>>>> 9a9b278d80d38b6a0a9ab48ef5da940273d24437
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
<<<<<<< HEAD
				<span>{{hours}}</span> : <span>{{minutes}}</span> : <span>{{seconds}}</span>
				<img src="https://s10.mogucdn.com/p1/160719/upload_ifrwkntcmi4diolehezdambqhayde_84x20.png" alt="" />
			</div>

		</div>
		<!--秒杀下面的轮播图-->
		<lunboMiddle :message2="goods"></lunboMiddle>
		<!--超实惠促销直达-->
		<h2 class="header">超实惠-促销直达</h2>
		<div class="cuxiao-top">
			<div class="cuxiao-top-left">
				<h1>{{cuxiao1.title}}</h1>
				<p>{{cuxiao1.viceTitle}}</p>
				<img :src="cuxiao1.image" alt="" />
			</div>
			<div class="cuxiao-top-right">
				<div class="cuxiao-top-right-top">
					<h1>{{cuxiao2.title}}</h1>
					<p>{{cuxiao2.viceTitle}}</p>
					<img :src="cuxiao2.image" alt="" />
				</div>
				<div class="cuxiao-top-right-bottom">
					<h1>{{cuxiao3.title}}</h1>
					<p>{{cuxiao3.viceTitle}}</p>
					<img :src="cuxiao3.image" alt="cuxiao2" />
				</div>
			</div>
		</div>
		<div class="cuxiao-bottom">
			<a href="javascript:;" v-for="(value,index) in cuxiao"  v-if="index >2">
				<div >
					<h1>{{value.title}}</h1>
					<p>{{value.viceTitle}}</p>
					<img :src="value.image" alt="" />
					{{index}}
				</div>
			</a>
		</div>
<!----------热门市场------------------>
		<div class="remen">
			<div class="remenTitle">热门市场</div>
				<ul>
					<li v-for="item in hotMarket">
						<router-link :to="{path:'/categorylist/',query:{id:item.link}}">
							<img :src="item.image"/>
							<p>{{item.title}}</p>
						</router-link>
					</li>
				</ul>
		</div>
<!-----------猜你喜欢----------------->	
	    <div class="guess">
	    	<div class="guessTitle">{{caiNiXihuanTitle}}</div>
	    	<div class="guessBox">
	    		<a href="javascript:;" v-for="item in caiNiXihuan" >
	    			<img :src="item.img"/>
	    			<div class="guessBoxBottom">
	    				<div class="guessBoxBottom-top">
	    					<span v-for="tag in item.props">{{tag}}</span>
	    				</div>
	    				<div class="guessBoxBottom-bottom">
	    					<p class="p_price">￥{{item.price}}</p>
	    					<p class="p_feed">{{item.cfav}}</p>
	    				</div>
	    			</div>
	    		</a>
	    	</div>
	    </div>
	    <div class="biaochi">下拉加载更多</div>
<!----------底部--------------------->
		<div id="tab">
	    	<ul>
	    		<li class="active">
	    			<router-link to="/home"r>
=======
				<span></span> : <span></span> : <span></span>
			</div>
			
		</div>
		<div id="tab">
	    	<ul>
	    		<li class="active">
	    			<router-link to="/home">
>>>>>>> 9a9b278d80d38b6a0a9ab48ef5da940273d24437
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
<<<<<<< HEAD
	import lunboMiddle from '../views/lunboMiddle'

	export default{
		components:{
			lunbo,lunboMiddle
		},
		data(){
			return {swiperData:[],dapaiData:[],cuxiao:[],goods:[],hotMarket:[],cuxiao1:{},cuxiao2:{},cuxiao3:{},caiNiXihuan:[],title:'',title2:'',
						hours:'',minutes:'',seconds:'',caiNiXihuanTitle:''
				}
		},
		methods:{
				timer:function(x){
					//指针问题,定时器是window对象,这里是需要存储this的指向
					var time=x;
					var self = this;
					setInterval( function() {
					time--;
					self.minutes = parseInt(time / 60 % 60);
					self.hours = parseInt(time / 60 / 60 % 24);
					self.seconds = parseInt(time % 60);
					if(self.seconds < 10) {
						self.seconds = '0' + self.seconds;
//						if(self.seconds == 0 || self.seconds < 0){
//							self.seconds=0;
//							self.seconds = '0' + self.seconds;
//						}
					};
					if(self.minutes < 10) {
						self.minutes = "0" + self.minutes;
						if(self.minutes == 0){
							self.minutes=0;
							self.minutes = '0' + self.minutes;
						}
					};
					if(self.hours < 10) {
						self.hours = '0' + self.hours;
						if(self.hours == 0){
							self.hours=0;
							self.hours = '0' + self.hours;
						}
					};
				}, 1000)
					
			},
			getData:function(page){
				console.log(page);
				this.$http.jsonp('https://list.mogujie.com/search?cKey=h5-shopping&fcid=&pid=9750&searchTag=&sort=pop&page=' +page ).then(function(res){
				if(res) {
						var arr = res.data.result.wall.docs;
						if(!this.caiNiXihuan){
							this.caiNiXihuan = [];
							console.log(111);
						}
						this.caiNiXihuan = this.caiNiXihuan.concat(arr);
					}else{
						page--;
					}
				});
			},
			searchFocus:function(){
				this.$router.push('/search');
			}
		},
		mounted(){
			this.page=1;
=======
	
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
>>>>>>> 9a9b278d80d38b6a0a9ab48ef5da940273d24437
			this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604').then(function (res){
	       		this.swiperData = res.data.data[51822].list;
	       		this.dapaiData = res.data.data[51827].list;
	       		this.seckill = res.data.data[41119].list;
<<<<<<< HEAD
	       		this.goods = res.data.data[41119].list[0].list;
	       		this.cuxiao = res.data.data[51833].list;
	       		this.hotMarket = res.data.data[51836].list;
	       		this.cuxiao1 = this.cuxiao[0];
	       		this.cuxiao2 = this.cuxiao[1];
	       		this.cuxiao3 = this.cuxiao[2];
	       	    this.time=this.seckill[0].time;
	       	    this.title=this.seckill[0].title;
	       	    this.title2=this.seckill[0].viceTitle;
				this.timer(this.time);
				console.log(this.hotMarket)
			}),
			
			this.$http.jsonp('https://list.mogujie.com/search?cKey=h5-shopping&fcid=&pid=9750&searchTag=&sort=pop&page=' +this.page ).then(function(res){
				this.caiNiXihuanTitle = res.data.result.wall.title;
				this.caiNiXihuan = res.data.result.wall.docs;	
			});
			
			var guessH=$('.guess').offset().top+200;
			var height=$('html').height()-$('#tab').height();
			var sef=this;
			 $('#home').scroll(function() {
			 	guessH=$('.guess').offset().top+200;
			 	height=$('html').height()-$('#tab').height();
			 	if($('.biaochi').offset().top>guessH){
		        	if($('.biaochi').offset().top < height){
		        		sef.page++;
		        		sef.getData(sef.page);
		       	 	}
			 	}
		      }); 
	
=======
	       	    this.time=this.seckill[0].time;
	       	    this.title=this.seckill[0].title;
	       	    this.title2=this.seckill[0].viceTitle;
	       		console.log(this.seckill)
			})
//			this.timer();
			
>>>>>>> 9a9b278d80d38b6a0a9ab48ef5da940273d24437
		}
	}
</script>

<style>
	#home{background: #f1f1f1;}
<<<<<<< HEAD
	.search{width: 100%; height: .4rem; padding: .064rem .043rem; border-bottom: 1px solid #e5e5e5; overflow: hidden; background: #fff;}
	.search form{overflow: hidden; float: left;}
	.search input{border: none; width: 2.26rem; height: .26rem; line-height: .26rem; padding-left: .256rem; background: #eee url(../assets/top_icon2.png) no-repeat .07rem center; background-size: auto 55%; border-radius: .02rem;}
	.search .im-talk,.search .cart{display: block; width: .427rem; height: .26rem; float: left; background-repeat: no-repeat; background-position: center; background-size: auto 68%;}
	.search .im-talk{background-image: url(../assets/top_icon1.png);}
	.search .cart{background-image: url(../assets/shopcar_icon.png);}
=======
	#search{width: 100%;height: 0.4rem;padding: 0.08rem;background: red;}
>>>>>>> 9a9b278d80d38b6a0a9ab48ef5da940273d24437
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
<<<<<<< HEAD
	.daojishi-right span{display: inline-block;width: 0.2rem;height:0.2rem;line-height: 0.2rem; background: #000;vertical-align: middle;border-radius:0.03rem ;color: #fff;text-align: center;}
	.daojishi-left span{font-size: 0.15rem}
	.daojishi-right img{width: 0.44rem;float: right;margin: 0.1rem 0 0 0.4rem;}
	.header{width: 100%;height: .4rem;line-height: .4rem;background: #fff;color: #333;text-indent: .1rem;font-size: .1rem;font-weight: normal;margin: 0.1rem 0 0 0;border-bottom: 0.01rem solid #e5e5e5;}
	.cuxiao-top{width: 100%;overflow: hidden;}
	.cuxiao-top h1{font-size: .1rem;line-height: .15rem;color: #333;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
	.cuxiao-top p{color: #ff5f7e;}
	.cuxiao-top-left{width: 50%;height: 1.36rem;background: white;float: left;border-right: 0.01rem solid #e5e5e5;text-align: center;padding: 0.2rem 0 0 0;}
	.cuxiao-top-right{width: 50%;height: 1.36rem;background: white;float: left;text-align: left;}
	.cuxiao-top-right div{width: 100%;height: 50%;}
	.cuxiao-top-right-top{border-bottom: 0.01rem solid #e5e5e5;position: relative;padding: 0.1rem;}
	.cuxiao-top-right-bottom{position: relative;padding: 0.1rem;}
	.cuxiao-top-right-top h1{margin: 0.1rem 0 0 0;}
	.cuxiao-top-right-bottom h1{margin: 0.1rem 0 0 0;}
	.cuxiao-top-right-top img{height:100%;width: 0.68rem;float: right;position: absolute;right: 0;top: 0;}
	.cuxiao-top-right-bottom img{height:100%;width: 0.68rem;float: right;position: absolute;right: 0;top: 0;}
	.cuxiao-top-left img{width: 0.85rem;margin: 0 auto;}
	.cuxiao-bottom{width: 100%;overflow: hidden;}
	.cuxiao-bottom>a{float: left;display: block;width: 33.33%;height: 1.1rem;}
	.cuxiao-bottom>a div{width: 100%;height: 100%;border-top: 0.01rem solid #e5e5e5;border-right: 0.01rem solid #e5e5e5;padding: 0.1rem 0 0 0;background: #fff;text-align: center;}
	.cuxiao-bottom>a div h1{font-size: .1rem;line-height: .15rem;color: #333;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
	.cuxiao-bottom>a div img{width:0.68rem;height:0.7rem;margin: 0 auto;}
	.cuxiao-bottom>a div p{font-size: 0.02rem;color:#ff5f7e}
	.remen{width: 100%;background-color: #fff;margin: 0.1rem 0 0 0;padding:0.2rem 0.01rem 0.01rem 0.01rem;}
	.remenTitle{width: 1.3rem;height: 0.17rem;font-size: 0.1rem; color: #333; background-image: url(http://s18.mogucdn.com/p1/160415/upload_ifrwkyzymu2damdgg4zdambqhayde_313x10.png);background-size: 1.3rem;background-repeat:no-repeat;margin: 0 auto;text-align: center;background-position: center;}
	.remen ul{overflow: hidden;}
	.remen li{display: inline-block;width: 25%;height: 0.7rem;padding: 0.02rem;text-align: center;}
	.remen li img{width: 70%;margin: 0 auto;}
	.guess{width: 100%;height: auto;overflow: hidden;}
	.guessTitle{width: 1.3rem;height: 0.40rem;line-height: 0.4rem; font-size: 0.1rem; color: #333; background-image: url(http://s18.mogucdn.com/p1/160415/upload_ifrwkyzymu2damdgg4zdambqhayde_313x10.png);background-size: 1.3rem;background-repeat:no-repeat;margin: 0 auto;text-align: center;background-position: center;}
	.guessBox{padding: 0 0 0 0.05rem;width: 100%;}
	.guessBox a{ display: inline-block; float: left;width: 48%;height: 2.65rem;margin: 0 2% 2% 0;padding-bottom: 0.05rem;}
	.guessBox a img{width: 100%;height:75%;}
	.guessBox>a>div{width: 100%;height: 25%;background: #FFFFFF;padding:0 0 0.05rem 0.03rem;}
	.guessBoxBottom-top{width: 100%;height: 70%;padding: 0.02rem;overflow: hidden;white-space: normal;text-overflow: ellipsis;}
	.guessBoxBottom-top span{ display: inline-block;margin:0.01rem 0.02rem;font-size: .05rem;height: 0.1rem;line-height: 0.1rem; background: #eff3f6;color: #5a6f7a;}
	.guessBoxBottom-bottom{width: 100%;height: 30%;padding:0.03rem 0 0 0.03rem ;}
	.guessBoxBottom-bottom p:nth-child(1){width: 50%;float: left;font-weight: 800;}
	.guessBoxBottom-bottom p:nth-child(2){width: 40%; float: left;text-align: center;margin: 0.02rem 0 0 0;color: #999;background:url(../assets/star.png) no-repeat;background-size: 0.1rem;background-position: right center;padding-bottom: 0.03rem;}
	.biaochi{width: 100%;font-size: 0.1rem;text-align: center;}
=======
	.daojishi-right span{display: inline-block;width: 0.2rem;height:0.2rem;background: #000;vertical-align: middle;border-radius:0.03rem ;color: #fff;}
	.daojishi-left span{font-size: 0.15rem}
>>>>>>> 9a9b278d80d38b6a0a9ab48ef5da940273d24437
</style>
