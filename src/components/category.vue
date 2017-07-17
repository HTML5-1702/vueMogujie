<template>
	<div id="category">
		<div class="search">
            <a class="im-talk" href="javascript:;"></a>
            <form class="search-form">
                <input class="search" type="text" name="q" placeholder="露背无袖连衣裙" @focus="searchFocus()">
            </form>
            <a class="cart" href="javascript:;"></a>
		</div>
		<div class="categoryMain">
			<div class="categoryLeft">
				<ul>
					<li v-for="(i,index) in categoryL" @click="maitKey(i.maitKey,i.miniWallkey,index)" v-bind:class="{ active: categoryLIdx == index }"><span>{{i.title}}</span></li>
				</ul>
			</div>
			<div class="categoryRight">
				<div class="categoryRTop">
					<ul>
						<li v-for="i in categoryR">
							<router-link :to="{path:'/categorylist/',query:{id:i.link}}">
								<img v-bind:src="i.image"/>
								<p class="ng-binding">{{i.title}}</p>
							</router-link>
						</li>
					</ul>
				</div>
				<div class="category_list">
					<div class="list_operation_box">
						<div class="list_operation">
							<a href="javascript:;"><span>综合</span></a>
							<a href="javascript:;"><span>销量</span></a>
							<a href="javascript:;"><span>新品</span></a>
						</div>
					</div>
					<ul class="category_ul">
						<li v-for="i in categoryList">
							<!--<router-link :to="{name:'goodnormal',params:{id:good.sku.itemIdEsc}}">-->
								<div class="goods_img">
						            <img class="J_dynamic_img fill_img" v-bind:src="i.img"/>
						            <div class="bo_pv">已售{{i.sale}}件</div>
								</div>
	        					<div class="goods_info">
	        						<p class="goods_name">{{i.title}}</p>
		           					<div class="bot_box clearfix">
		                				<p class="p_price">￥{{i.price}}</p>
		                                <p class="p_feed">{{i.cfav}}</p>
		                           </div>
	       						</div>
	       					<!--</router-link>-->
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div id="tab">
	    	<ul>
	    		<li>
	    			<router-link to="/home">
	    				<div class="img-wrap"></div>
	    				<div class="title active">首页</div>
	    			</router-link>
	    		</li>
	    		<li class="active">
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
export default {
	data () {
	    return {
	    	categoryL:[],
	    	categoryR:[],
	    	categoryList:[],
	    	categoryLIdx:0
	    }
	},
	mounted: function() {
		//左边分类
	    this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=41789')
	    .then(function(res) {
	        this.categoryL = res.data.data[41789].list;
//	        console.log(this.categoryL)
	    }),
	    //右边分类
	    this.$http.jsonp('http://mce.mogujie.com/jsonp/makeup/3?pid=41888')
	    .then(function(res) {
	        this.categoryR = JSON.parse(res.bodyText).data.categoryNavigation.list;
	    }),
    	//右边产品
	    this.$http.jsonp('https://list.mogujie.com/search?cKey=h5-cube&fcid=10062603')
	    .then(function(res) {
	        this.categoryList = JSON.parse(res.bodyText).result.wall.docs;
	        console.log(this.categoryList)
	    });
		$('.categoryLeft,.categoryRight').css('height',$(window).height()-$('.search').outerHeight()-$('#tab').outerHeight());
	},
	methods:{
		maitKey:function(key1,key2,idx){
			this.categoryLIdx = idx;
	    	//右边分类
		    this.$http.jsonp('http://mce.mogujie.com/jsonp/makeup/3?pid='+key1)
		    .then(function(res) {
		        this.categoryR = JSON.parse(res.bodyText).data.categoryNavigation.list;
//	        	console.log(key1)
//	        	console.log(JSON.parse(res.bodyText))
		    }),
	    	//右边产品
		    this.$http.jsonp('https://list.mogujie.com/search?cKey=h5-cube&fcid='+key2)
		    .then(function(res) {
		        this.categoryList = JSON.parse(res.bodyText).result.wall.docs;
		    });
		},
		searchFocus:function(){
			this.$router.push('/search');
		}
	}
}

$(function(){
	$('.categoryRight').scroll(function(){
		var categoryRTH = $('.categoryRTop').outerHeight();
		if($('.categoryRight').scrollTop()>=categoryRTH){
			$('.list_operation').css({
				'position':'fixed',
				'right':'0',
				'top':'0.4rem'
			});
		}else{
			$('.list_operation').css('position','');
		}
	})
})
</script>

<style>
.search{width: 100%; height: .4rem; padding: .064rem .043rem; border-bottom: 1px solid #e5e5e5; overflow: hidden;}
.search form{overflow: hidden; float: left;}
.search input{border: none; width: 2.26rem; height: .26rem; line-height: .26rem; padding-left: .256rem; background: #eee url(../assets/top_icon2.png) no-repeat .07rem center; background-size: auto 55%; border-radius: .02rem;}
.search .im-talk,.search .cart{display: block; width: .427rem; height: .26rem; float: left; background-repeat: no-repeat; background-position: center; background-size: auto 68%;}
.search .im-talk{background-image: url(../assets/top_icon1.png);}
.search .cart{background-image: url(../assets/shopcar_icon.png);}
.categoryMain{overflow: hidden;}
.categoryLeft{width: .77rem; background: #F6F6F6;}
.categoryRight{width: 2.43rem; background: #FFF;}
.categoryLeft,.categoryRight{float: left; overflow-y: auto; overflow-x: hidden;}
.categoryLeft li{width: 100%; height: .38rem; text-align: center; overflow: hidden;}
.categoryLeft li span{display: block; width: 100%; height: .14rem; line-height: .14rem; margin-top: .12rem;}
.categoryLeft li.active{background: #fff; color: #FF5777; font-weight: bold;}
.categoryLeft li.active span{border-left: solid #FF5577 .04rem;}
.categoryRTop{width: 100%; padding: .13rem .085rem; padding-bottom: 0;}
.categoryRTop ul{width: 100%; border-bottom: solid #E5E5E5 1px; overflow: hidden;}
.categoryRTop li{width: 33.33333%; float: left; margin: .085rem 0;}
.categoryRTop li img{width: 73.6%; margin: 0 auto;}
.categoryRTop li p{width: 100%; height: .16rem; line-height: .16rem; margin-top: .085rem; text-align: center;}
.list_operation_box{width: 2.43rem; height: .32rem;}
.list_operation{width: 2.43rem; height: .32rem; border-bottom: 1px solid #eaeaea; background: #fff; z-index: 9;}
.list_operation a{display: block; width: 33.3333%; padding: .095rem 0; float: left; text-align: center;}
.list_operation a:first-child span{border: none;}
.list_operation span{display: block; width: 100%; height: .13rem; line-height: .13rem; border-left: 1px solid #e6e6e6;}
.category_ul{overflow: hidden;}
.category_ul li{width: 1.14rem; margin: .05rem 0 0 .05rem; float: left; border-radius: .03rem; overflow: hidden;}
.category_ul li .goods_img{position: relative; width: 100%; height: 1.71rem; overflow: hidden;}
.category_ul li .bo_pv{position: absolute; width: 100%; height: .22rem; line-height: .22rem; left: 0; bottom: .04rem; color: #fff; padding-left: .085rem; background: rgba(0,0,0,.4);}
.category_ul .goods_info{width: 100%; padding: .04rem .05rem;}
.category_ul .goods_info .goods_name{width: 100%; line-height: .13rem; overflow: hidden; text-overflow:ellipsis; white-space: nowrap;}
.category_ul .goods_info .bot_box{height: .2rem;}
.category_ul .goods_info .p_price,.category_ul .goods_info .p_feed{height: .16rem; line-height: .16rem; margin-top: .03rem;}
.category_ul .goods_info .p_price{color: #FF5777; float: left; font-size: .14rem; font-weight: bold;}
.category_ul .goods_info .p_feed{color: #999; float: right; padding-right: .13rem; background: url(../assets/p_feed.png) no-repeat right center; background-size: auto 65%;}
</style>
