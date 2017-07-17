<template>
	<div id="good-normal">
		<div class="good-swiper">
			<img :src="arr1.topImages[0]"/>
			<div class="swiper-page">
				<span>1</span> /
				<span>{{arr1.topImages.length}}</span>
			</div>
		</div>
		<div class="good-title">
			<span>{{arr1.itemInfo.title}}</span>
		</div>
		<div class="price clearfix">
			<div class="price-now">
				<span>￥</span>{{arr1.normalPrice.nowPrice}}
			</div>
			<div class="price-old" v-if="arr1.normalPrice.priceTags">
				<p class="price-old--price">￥{{arr1.normalPrice.oldPrice}}</p>
				<span class="price-old--tag">{{arr1.normalPrice.priceTags[0].text}}</span>
			</div>
		</div>
		<div class="service-cloumns">
			<span class="service-cloumns--express">{{arr1.itemServices.columns[1].desc}}</span>
		</div>
		<div class="service-content">
			<div class="clearfix">
				<div class="service-content--item" v-for="(item,index) in arr1.itemServices.services" v-if="index<3">
					<span><img :src="item.icon"/></span>{{item.name}}
				</div>
				<div class="icon-arrow-right">
					<i class="fa fa-angle-right" aria-hidden="true"></i>
				</div>
			</div>
		</div>
		<div class="good-privilege">优惠活动（0）</div>
		<div class="more-sku" v-on:click="goodsOpen">
			请选择：颜色 尺码
			<div class="icon-arrow-right">
				<i class="fa fa-angle-right" aria-hidden="true"></i>
			</div>
		</div>
		<div class="good-evaluate">
			<div class="evaluate-head">
				<span>
					买家评价 {{arr1.rateInfo.cRate}} |
					销量 {{arr1.rateInfo.sales}}
				</span>
				<div class="icon-arrow-right">
					<i class="fa fa-angle-right" aria-hidden="true"></i>
				</div>
			</div>
			<div class="evaluate-tags">
				<span v-for="item in arr1.rateInfo.rateTags">{{item.value}}({{item.num}})</span>
			</div>
			<div class="evaluate-list" v-for="item in arr1.rateInfo.list">
				<div class="user">
					<div class="user-avatar">
						<img :src="item.user.avatar"/>
					</div>
					<span class="user-name">{{item.user.uname}}</span>
				</div>
				<div class="content">{{item.content}}</div>
				<div class="created">{{item.created}}</div>
			</div>
		</div>
		<div class="goods-shop">
			<div class="shop-head clearfix">
				<div class="shop-logo"><img :src="arr1.shopInfo.shopLogo"/></div>
				<div class="head--info">
					<p>{{arr1.shopInfo.name}}</p>
					<div class="info-star">
						<div v-for="n in arr1.shopInfo.level"><img src="../assets/upload_18x18.png"/></div>
					</div>
				</div>
				<div class="entry">
					进店 >
				</div>
			</div>
			<div class="desc clearfix">
				<div class="desc-sale">
					<p class="desc-num">{{arr1.shopInfo.cSells}}</p>
					<p>总销量</p>
				</div>
				<div class="desc-fav">
					<p class="desc-num">{{arr1.shopInfo.cFans}}</p>
					<p>总收藏</p>
				</div>
				<div class="desc-score">
					<p v-for="item in arr1.shopInfo.score">{{item.name}} <span>{{item.score}}</span></p>
				</div>
			</div>
		</div>
		<div class="good-particulars">
			<div class="tabs-bar">
				<div class="tabs-nav--wrap">
					<div class="tabs-link"></div>
					<div class="tabs-tab">图文详情</div>
					<div class="tabs-tab">商品参数</div>
					<div class="tabs-tab">热卖推荐</div>
				</div>
			</div>	
			<div class="tabs-content">
				<div class="tabs-desc">{{arr1.detailInfo.desc}}</div>
				<div class="list">
					<div class="list-item--title">{{arr1.detailInfo.detailImage[0].key}}</div>
					<div class="imgList" v-for="item in arr1.detailInfo.detailImage[0].list"><img :src="item"/></div>
				</div>
				<div class="size-table-box">
					<table class="size-table">
						<tr v-for="item in arr1.itemParams.rule.tables[0]">
							<td v-for="item1 in item">{{item1}}</td>
						</tr>
						<tr v-for="(item,value) in arr1.itemParams.info.set">
							<td>{{value}}</td>
							<td>{{item}}</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<div class="footbar clearfix">
			<div class="content-icons clearfix">
				<div class="content-icons-im">
					<i class="fa fa-commenting-o" aria-hidden="true"></i>
					<p>客服</p>
				</div>
				<div class="content-icons-im">
					<i class="fa fa-star-o" aria-hidden="true"></i>
					<p>收藏</p>
				</div>
				<div class="content-icons-im">
					<i class="fa fa-shopping-basket" aria-hidden="true"></i>
					<p>小店</p>
				</div>
			</div>
			<div class="content-btns">
				<div class="content-btns--cart" v-on:click="goodsOpen(1)">加入购物车</div>
				<div class="content-btns--buy">立即购买</div>
			</div>
		</div>
		<div class="dialog-core-box">
			<div class="dialog-core">
				<div class="goods clearfix">
					<div class="goods-cont">
						<span class="goods-close--icon" v-on:click="goodsClosc">×</span>
						<img :src="arr1.topImages[0]"/>
						<p class="goods-cont--price">
							<span class="goods-cont--price-unit">￥</span><span class="goods-cont--price-text">{{arr1.normalPrice.nowPrice}}</span>
						</p>
						<p class="goods-cont--stock">库存{{arr1.skuInfo.totalStock}}件</p>
						<p class="goods-cont--addon">请选择：<span>颜色 尺码</span></p>
					</div>
				</div>
				<div class="scroll">
					<div class="prop-rows" v-for="item in arr1.skuInfo.props">
						<p class="prop-rows--title">{{item.label}}:</p>
						<ul class="prop-list clearfix">
							<li class="prop-item" v-for="item1 in item.list" v-on:click="itemAct(item1.name)">{{item1.name}}</li>
						</ul>
					</div>
				</div>
				<div class="number">
					<p>数量：</p>
					<div class="number-calculator">
						<span class="number-calculator--reduce">-</span>
						<span class="number-calculator--value">1</span>
						<span class="number-calculator--increase">+</span>
					</div>
				</div>
				<div class="foot"><span class="foot-okbtn">确定</span></div>
			</div>
		</div>
	</div>
</template>

<script>
import '../font-awesome/css/font-awesome.min.css'
//import {formatDate} from '../views/date.js'

export default{
	data(){
		return{
			arr1:[],
		}
	},
	methods:{
		goodsClosc:function(){
			$('.dialog-core-box').hide()
		},
		goodsOpen:function(num){
			if(num===1){
				$('.foot').html('<span class="foot-okbtn">确定</span>')
			}else{
				$('.foot').html('<span class="foot-cart">加入购物车</span><span class="foot-okbtn">立即购买</span>')
			}
			
			$('.dialog-core-box').show();
		},
	},
	mounted(){
		if(this.$route.params.id){
			localStorage.goodNormal = this.$route.params.id;
		}
		this.$http.jsonp('http://m.mogujie.com/jsonp/detail.api/v1?iid='+localStorage.goodNormal+'&template=1-2-detail_normal-1.0.0&_='+new Date().getTime()).then(function(res){
			this.arr1 = res.body.data;
			console.log(res.body.data)
		},function(res){
			console.log(res)
		})
	}
}
</script>

<style>
#good-normal{padding-bottom: .5rem;background: rgb(234, 234, 234);font-size: .12rem;}
#good-normal>div{background: white;}
.good-swiper{width: 100%;height: 3.84rem;position: relative;}
.good-swiper>img{width: 100%;height: 100%;}
.swiper-page{position: absolute;background: rgba(0,0,0,.3);border-radius: .12rem;height: .2rem;right: .15rem;bottom: .1rem;font-size: .12rem;line-height: .2rem;padding: 0 .12rem;color: white;}
.good-title{padding-top: .15rem;}
.good-title>span{display: block;padding: 0 .15rem;font-size: .14rem;color: #424242;line-height: .18rem;}
.price{padding: 0 .16rem;color: #333;padding-top: .05rem;}
.price>div{float: left;}
.price-now{font-size: .3rem;}
.price-now>span{font-size: .12rem;float: left;margin-top: .05rem;}
.price-old--price{color: #999;text-decoration: line-through;}
.price-old--tag{background: #FFE8EE;color: #FF2255;padding: 0 .04rem;}
.service-cloumns{padding: 0 .16rem;line-height: .32rem;color: #999;}
.service-content{padding-left: .16rem;line-height: .32rem;}
.service-content>div{border-top: 1px solid #eee;}
.service-content--item{float: left;margin-right: .05rem;}
.service-content--item>span{display: inline-block;width: .15rem;height: .15rem;vertical-align: middle;}
.service-content--item>span>img{width: 100%;}
.icon-arrow-right{float: right;margin-right: .16rem;font-size: .2rem;}
.good-privilege{margin-top: .1rem;padding: .1rem .16rem .08rem;color: #999;}
.more-sku{margin-top: .1rem;padding-left: .16rem;line-height: .45rem;}
.good-evaluate{padding: 0 .16rem;margin-top: .1rem;}
.evaluate-head{line-height: .3rem;}
.evaluate-head>span{color: #999;}
.evaluate-head>.icon-arrow-right{margin-right: 0;}
.evaluate-tags>span{display: inline-block;color: #f25;background: #ffe8ee;line-height: .24rem;border-radius: .02rem;padding: 0 .06rem;margin-right: .03rem;margin-top: .05rem;}
.evaluate-list{padding: .15rem 0;border-bottom: 1px solid #eee;}
.user{line-height: .34rem;}
.user-avatar{float: left;}
.user-avatar>img{width: .3rem;border-radius: 50%;}
.user-name{font-size: .14rem;margin-left: .09rem;}
.content{padding-top: .04rem;}
.created{line-height: .18rem;}
.goods-shop{padding: .17rem .13rem .14rem;margin-top: .1rem;}
.shop-head>div{float: left;}
.shop-logo{margin-right: .1rem;}
.shop-logo>img{width: .41rem;}
.head--info>p{line-height: .2rem;color: #333;}
.info-star>div{float: left;margin-right: .02rem;}
.info-star>div>img{width: .09rem;}
.shop-head>.entry{float: right;padding: 0 .11rem;border: 1px solid #ff5777;line-height: .24rem;color: #ff5777;border-radius: .02rem;}
.desc{display: flex;margin-top: .08rem;}
.desc>div{float: left;flex: 1;text-align: center;border-right: 1px solid #e5e5e5;}
.desc>div:last-child{border: none;}
.desc .desc-num{color: #333;font-size: .16rem;}
.desc-score span{color: #ff5777;}
.good-particulars{margin-top: .1rem;position: relative;}
.tabs-bar{height: .4rem;width: 100%;border-bottom: 1px solid #d9d9d9;}
.tabs-nav--wrap{display: flex;position: absolute;width: 100%;}
.tabs-tab{flex: 1;line-height: .4rem;text-align: center;color: #333;font-size: .14rem;transition: color .3s;}
.tabs-tab-active{color: #f57;}
.tabs-link{position: absolute;top: 100%;width: .97rem;height: .01rem;background: #ff5777;}
.tabs-content{margin-top: .17rem;}
.tabs-desc{padding: .13rem;}
.list{margin-top: .06rem;line-height: .21rem;text-indent: .14rem;font-size: .13rem;font-weight: 400;color: #333;}
.imgList{margin-bottom: .02rem;}
.size-table-box{margin-top: .17rem;padding: 0 .13rem;}
.size-table{width: 100%;}
.size-table>tr{border-bottom: 1px solid #d9d9d9;width: 100%;height: .4rem;}
.size-table td{color: #eb4868;}
.size-table td:first-child{width: .85rem;color: #666;}
.size-table>tr:first-child td{color: #666;}

/*底部导航*/
.footbar{position: fixed;bottom: 0;z-index: 5;width: 100%;height: .5rem;}
.footbar>div{float: left;width: 50%;display: flex;height: 100%;text-align: center;}
.content-icons>div{float: left;border-top: 1px solid #ededed;flex: 1;height: 100%;}
.content-icons>div>i{font-size: .16rem;line-height: .2rem;}
.content-icons>div>p{line-height: .3rem;}
.content-btns>div{flex: 1;line-height: .5rem;}
.content-btns--cart{background: #ffe6e8;color: #ff5777;}
.content-btns--buy{background: #ff5777;color: white;}

/*添加购物车*/
#good-normal .dialog-core-box{position: fixed;z-index: 100;background: rgba(0,0,0,.4);top: 0;bottom: 0;left: 0;right: 0;}
.dialog-core{position: absolute;bottom: 0;transition: all 1s;background: white;width: 100%;}
.goods{padding: .13rem 0;;}
.goods>div{float: left;}
.goods-cont{padding: 0 .13rem 0 1.1rem;position: relative;color: #333;width: 100%;}
.goods-cont>img{width: .85rem;position: absolute;bottom: 0;left: .1rem;}
.goods-cont--price{font-size: .24rem;}
.goods-cont--price-unit{font-size: .12rem;vertical-align: text-top;}
.goods-cont--stock{line-height: .16rem;}
.goods-close--icon{float: right;font-size: .3rem;color: #666;margin-top: -.1rem;}
.scroll{padding: 0 .06rem;}
.prop-rows--title{line-height: .18rem;}
.prop-item{float: left;margin: 0 .08rem .08rem 0;padding: 0 .13rem;border: 1px solid #bbb;line-height: .24rem;border-radius: .03rem;}
.is-selected{border-color: #ed4566;color: #ed4566;}
.number{padding: 0 .06rem;margin-bottom: .12rem;}
.number>p{line-height: .2rem;}
.number-calculator{border: 1px solid #bbb;border-radius: .02rem;width: .77rem;display: flex;}
.number-calculator>span{flex: 1;text-align: center;line-height: .2rem;border-right: 1px solid #bbb;}
.number-calculator>span:last-child{border-right: none;}
.number-calculator--reduce,.number-calculator--increase{color: #ed4566;font-size: .18rem;}
.foot{text-align: center;line-height: .43rem;display: flex;}
.foot-okbtn{flex: 1;color: white;background: #ff5777;}
.foot-cart{flex: 1;background: #ffe6e8;color: #ff5777;}
</style>