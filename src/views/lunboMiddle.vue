<template>
	<div id="lunboMiddle" style="background-color: #FFFFFF;padding: 0 0 0 0.1rem;">
		 <swiper :options="swiperOption"  ref="mySwiper" >  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide style="width: 0.1rem" v-for="item in message2" >   
            	<img class="img" :src="item.img" alt="" >
            	<p class="title">{{item.title}}</p>
            	<span class="salePrice">￥{{item.salePrice}}</span><span class="price">￥{{item.price}}</span>
            </swiper-slide>  
        </swiper>  
	</div>
</template>

<script type="text/javascript">
	import { swiper, swiperSlide } from 'vue-awesome-swiper'  
	import $ from 'jquery'
	export default{
		name:'lunboMiddle',
		props:{
			message:{},
			message2:{}
		},
        data() {  
            return {  
                swiperOption: {  
				 pagination: '.swiper-pagination',
        		 slidesPerView: 3,
        		 paginationClickable: true,
        		 spaceBetween:3,
        		 freeMode: true,
                }
            }  
        },
        components: {  
            swiper,  
            swiperSlide  
        },
        //定义这个sweiper对象  
        computed: {  
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        },
 
	}

</script>
<style>
.title{color: #666;font-size: 0.1rem;margin: 0.08rem 0 0 0;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
.img{width: 0.6rem;margin: 0 auto}
.salePrice{font-size: 0.1rem;color: #F25;}
.price{padding-left: 0.1rem;color: #888;font-size: 0.1rem;text-decoration: line-through;}
</style>