<template>
	<div id="lunbo">
		 <swiper :options="swiperOption"  ref="mySwiper">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide v-for="item in message">   
            	<img :src="item.image_800" alt="" >
            </swiper-slide>  
            <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>  
        </swiper>  
	</div>
</template>

<script type="text/javascript">
	import { swiper, swiperSlide } from 'vue-awesome-swiper'  
	export default{
		name:'lunbo',
		props:{
			message:{}
		},
        data() {  
            return {  
                swiperOption: {  
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
                autoplay: 3000, 
                loop:true,
                pagination: '.swiper-pagination', 
                mousewheelControl:true,
                centeredSlides: true,  
                paginationClickable: true, 
                observeParents:true,
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
	.swiper-pagination{text-align: left;margin: 0 0 0 0.1rem;}
	.swiper-pagination-bullet{background: #FFFFFF;opacity: 1;}
	.swiper-pagination-bullet-active{background: red;}
</style>