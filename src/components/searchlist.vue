<template>
	<div id="searchlist">
		<div class="categoryListTop">
			<a class="search-return" href="javascript:void(history.back())"></a>
            <input class="search" type="text" name="q" v-model="categoryTitle" @focus="searchFocus()">
            <a class="cart" href="javascript:;"></a>
		</div>
		<div class="categoryListSort">
			<a href="javascript:;"><span>综合</span></a>
			<a href="javascript:;"><span>销量</span></a>
			<a href="javascript:;"><span>新品</span></a>
			<a href="javascript:;"><span>价格</span></a>
		</div>
		<div class="categoryListViews">
			<ul>
				<li v-for="i in categoryListData">
					<div class="styles1" v-if="i.show">
						<img v-bind:src="i.show.img"/>
					</div>
					<div class="styles2" v-if="i.img">
						<div class="goods_img">
							<img v-bind:src="i.img"/>
						</div>
						<div class="goods_info">
							<div class="name_tags">
								<span v-for="(j,index) in i.props">{{j}}</span>
							</div>
							<div class="bot_box">
								<p class="p_price">{{i.price}}</p>
								<p class="p_feed">{{i.cfav}}</p>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data () {
	    return {
	    	categoryListData:[],
	    	categoryTitle:''
	    }
	},
	mounted: function() {
		//左边分类
		this.categoryTitle = decodeURI(this.$route.query.id);
	    this.$http.jsonp('http://list.mogujie.com/search?_version=61&q='+ this.categoryTitle +'&cKey=46')
	    .then(function(res) {
	        this.categoryListData = res.body.result.wall.docs;
	        console.log(res)
	    })
	},
	methods:{
		searchFocus:function(){
			this.$router.push('/search');
		}
	}
}
</script>

<style>
.categoryListTop{width: 100%; height: .45rem; border-bottom: 1px solid #c9c7c8; overflow: hidden; background: #fafafa;}
.categoryListTop p{width: 2.2rem; float: left; font-size: .18rem; color: #5e5e5e; font-weight: bold; line-height: .45rem; text-align: center;}
.categoryListTop .search-return,.categoryListTop .cart{display: block; width: .5rem; height: .45rem; float: left; background-repeat: no-repeat; background-position: center;}
.categoryListTop .search-return{background-image: url(../assets/search-return.png); background-size: auto 35%;}
.categoryListTop .search{border: none; width: 2.2rem; height: .26rem; line-height: .26rem; padding-left: .256rem; background: #eee url(../assets/top_icon2.png) no-repeat .07rem center; background-size: auto 55%; border-radius: .02rem; float: left; margin-top: .09rem;}
.categoryListTop .cart{background-image: url(../assets/shopcar_icon.png); background-size: auto 50%;}
.categoryListSort{width: 100%; height: .34rem; border-bottom: 1px solid #eaeaea; overflow: hidden;}
.categoryListSort a{display: block; width: 25%; height: .33rem; float: left;}
.categoryListSort a span{display: block; width: 100%; height: .14rem; line-height: .14rem; border-left: 1px solid #e6e6e6; text-align: center; margin-top: .09rem;}
.categoryListSort a:first-child span{border: none;}
.categoryListViews{position: absolute; top: 0.79rem; right: 0; bottom: 0; left: 0; background: #F6F6F6; overflow-y: scroll; padding: 0 .03rem;}
.categoryListViews ul{overflow: hidden;}
.categoryListViews li{width: 50%; /*height: 2.7rem;*/ padding: .06rem .03rem 0 .03rem; float: left;}
.categoryListViews li .styles1,.categoryListViews li .styles2{width: 100%; height: 2.68rem; border-radius: .03rem; overflow: hidden; background: #fff;}
.categoryListViews li .styles1{background: #e5e5e5;}
.categoryListViews .goods_img{width: 100%; height: 1.97rem; overflow: hidden;}
.categoryListViews .name_tags{height: .42rem; padding: .06rem .04rem .02rem; overflow: hidden;}
.categoryListViews .name_tags span{display: block; padding: 0 .02rem; margin: 0 0 .02rem .02rem; background: #eff3f6; line-height: .16rem; float: left;}
.categoryListViews .bot_box{padding: 0 .07rem; line-height: .18rem;}
.categoryListViews .bot_box .p_price{float: left; color: #333; font-size: .14rem; font-weight: bold;}
.categoryListViews .bot_box .p_feed{float: right; color: #999; padding-right: .13rem; background: url(../assets/p_feed.png) no-repeat right center; background-size: auto 65%;}
</style>
