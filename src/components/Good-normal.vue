<template>
	<div>
		<div class="good-swiper">
			<img :src="arr1.topImages[0]"/>
			<div class="swiper-page">
				<span>1</span> /
				<span>{{arr1.topImages.length}}</span>
			</div>
		</div>
		<div class="good-title">
			<span>{{arr1.detailInfo.desc}}</span>
		</div>
		<div class="price clearfix">
			<div class="price-now">
				<span>￥</span>{{arr1.normalPrice.nowPrice}}
			</div>
			<div class="price-old" v-if="arr1.normalPrice.priceTags.length">
				<p class="price-old--price">￥{{arr1.normalPrice.oldPrice}}</p>
				<span class="price-old--tag">{{arr1.normalPrice.priceTags[0].text}}</span>
			</div>
		</div>
		<div class="service-cloumns">
			<span class="service-cloumns--express">{{arr1.itemServices.columns[1].desc}}</span>
		</div>
		<div class="service-content">
			<div>
				
			</div>
		</div>
	</div>
</template>

<script>
import '../font-awesome/css/font-awesome.min.css'
export default{
	data(){
		return{
			arr1:[]
		}
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
.good-swiper{width: 100%;height: 3.84rem;position: relative;}
.good-swiper>img{width: 100%;height: 100%;}
.swiper-page{position: absolute;background: rgba(0,0,0,.3);border-radius: .12rem;height: .2rem;right: .15rem;bottom: .1rem;font-size: .12rem;line-height: .2rem;padding: 0 .12rem;color: white;}
.good-title>span{display: block;padding: 0 .15rem;margin-top: .15rem;font-size: .14rem;color: #424242;line-height: .18rem;}
.price{padding: 0 .16rem;color: #333;}
.price>div{float: left;}
.price-now{font-size: .32rem;}
.price-now>span{font-size: .12rem;float: left;margin-top: .05rem;}
.price-old--price{color: #999;text-decoration: line-through;}
.price-old--tag{background: #FFE8EE;color: #FF2255;padding: 0 .04rem;}
.service-cloumns{padding: 0 .16rem;line-height: .32rem;color: #999;}
.service-content{padding-left: .16rem;line-height: .32rem;}
.service-content>div{border-top: 1px solid #eee;}
</style>