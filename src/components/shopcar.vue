<template>
	<div id="shopcar">
		<div class="shopcar-head">
			<div class="head-left">
				<a href="javascript:void(history.back())"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
			</div>
			<div class="head-title">购物车</div>
			<div class="head-right">
				<span>编辑</span>
				<a href=""></a>
			</div>
		</div>
		<div class="shopcar-box">
			<div v-for="shop in arr1" class="shop">
				<p class="shop-name">
					<span class="shop-checkbox"></span>
					{{shop.shopInfo.shopName}}
					<img v-if="shop.shopRelatedTagList.length==1" :src="shop.shopRelatedTagList[0].image" class="shop-logo"/>
					<span v-if="shop.promotionRelatedTagList.length==1" class="shop-coupon">领卷 ></span>
				</p>
				<div class="goods">
					<div v-for="good in shop.cartItemGroup">
						<span class="good-checkbox"></span>
						<div class="cartgood clearfix">
							<router-link :to="{name:'goodnormal',params:{id:good.sku.itemIdEsc}} "class="cartgood-pic">
								<img :src="good.sku.imgUrl"/>
							</router-link>
							<div class="cgood-desc">
								<a href="" class="cgood-desc-ts-title">{{good.sku.title}}</a>
								<p class="cgood-desc-ts-sku">
									{{good.sku.skuAttributes[0].key}} :
									{{good.sku.skuAttributes[0].value}} ;
									{{good.sku.skuAttributes[1].key}} :
									{{good.sku.skuAttributes[1].value}} ;</p>
								<p class="cgood-pc-price">
									￥
									<span class="cgood-pc-price-now" v-if="good.sku.nowprice%100==0">{{good.sku.nowprice/100+'.00'}}</span>
									<span class="cgood-pc-price-now" v-else-if="good.sku.nowprice%10==0">{{good.sku.nowprice/100+'0'}}</span>
									<span class="cgood-pc-price-now" v-else>{{good.sku.nowprice/100}}</span>
									<span v-if="good.sku.price!=good.sku.nowprice">
										<span class="cgood-pc-price-origin" v-if="good.sku.price%100==0"> ￥ {{good.sku.price/100+'.00'}}</span>
										<span class="cgood-pc-price-origin" v-else-if="good.sku.price%10==0"> ￥ {{good.sku.price/100+'0'}}</span>
										<span class="cgood-pc-price-origin" v-else> ￥ {{good.sku.price/100}}</span>
									</span>	
									<span class="cgood-pc-count">x{{good.number}}</span>
								</p>
							</div>
						</div>
					</div>	
				</div>
				<div class="checkout-normal">
					
				</div>
			</div>
			<div class="shopcar-empty">
				<div class="empty-car-icon"><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>
				<p>购物车还是空的哦～</p>
				<div class="empty-car-button">
					<router-link to="/home">
						去逛逛
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import '../font-awesome/css/font-awesome.min.css'
export default{
	data (){
		return{
			arr1:[]
		}
	},
	mounted(){
		this.$http.jsonp('http://m.mogujie.com/api/cart/cartList?marketType=market_mogujie').then(function(res){
			this.arr1 = res.data.result.shopGroup;
			if(this.arr1.length==0){
				$(".shopcar-empty").show()
			}else{
				$(".shopcar-empty").hide()
			}
			console.log(res.body.result.shopGroup)
		},function(res){
			console.log(res)
		})
	}
}
</script>

<style>
.shopcar-head{width: 100%;height: .39rem;border-bottom: 1px solid #c9c7c8;position: relative;}
.shopcar-head>div{float: left;height: .39rem;text-align: center;line-height: .39rem;}
.head-left>a{display: block;width: .39rem;}
.head-left i{font-size: .24rem;color: #5e5e5e;line-height: .39rem;font-style: normal;}
.head-title{width: 2.4rem;font-size: .15rem;}
.head-right{width: .6rem;position: absolute;right: 0;top: 0;height: .39rem;}
.head-right>a{display: block;float: right; background: url(../assets/top_icon1.png) no-repeat center;width: .15rem;height: .36rem;background-size: 100%;margin-right: .09rem;}
/*空购物车显示*/
.shopcar-empty{margin-top: 1.45rem;text-align: center;}
.empty-car-icon{margin: 0 auto;width: 1.09rem;height: 1.09rem;border-radius: 50%;background: #ddd5d7;color: white;margin-bottom: .1rem;}
.empty-car-icon i{font-size: .6rem;line-height: 1.09rem;}
.shopcar-empty>p{line-height: .3rem;font-size: .14rem;}
.empty-car-button{margin: 0 auto;width: .85rem;height: .3rem;margin-top: .05rem;border-radius: .05rem;background: #ff5777;}
.empty-car-button a{display: block;line-height: .3rem;width: 100%;color: white;}

/*购物车列表*/
.shop{border-top: 1px solid #d8d8d8;border-bottom: 1px solid #d8d8d8;margin-top: .13rem;}
.shop-name{padding: .07rem .13rem;font-size: .12rem;border-bottom: 1px solid #E5E5E5;}
.shop-logo{width: .21rem;display: inline-block;vertical-align: middle;}
.shop-coupon{float: right;}
.shop-checkbox{display: inline-block;width: .17rem;height: .17rem;background: url(../assets/checkbox.png) 0 100% no-repeat;background-size: .17rem;margin-right: .05rem;vertical-align: middle;}
.goods{padding: .09rem;position: relative;}
.goods>div{padding-top: .04rem;}
.good-checkbox{width: .17rem;height: .17rem;background: url(../assets/checkbox.png) 0 100% no-repeat;background-size: .17rem;position: absolute;}
.cartgood{padding-left: .34rem;}
.cartgood-pic{width: .55rem;height: .82rem;float: left;}
.cartgood-pic>img{width: 100%;}
.cgood-desc{padding-left: .68rem;}
.cgood-desc-ts-title{color: #5e5e5e;font-size: .12rem;font-weight: bold;line-height: .18rem;}
.cgood-desc-ts-sku{height: .3rem;color: #999;}
.cgood-pc-price{font-size: .14rem;}
.cgood-pc-price-origin{color: #999;font-size: .12rem;text-decoration: line-through;}
.cgood-pc-count{float: right;color: #999;font-size: .12rem;}
</style>