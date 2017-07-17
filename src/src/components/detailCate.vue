<template>
	<div class="deteilTop">
		<img src="../assets/Left 2.png" alt="" />
		<h3>及时登记覅</h3>
		<img src="../assets/shopcar_icon.png"/>
	</div>
		<!--<div id="lunbohua" style="background-color: #FFFFFF;padding: 0 0 0 0.1rem;">
			 <swiper :options="swiperOption">  
	            <swiper-slide style="width: 0.1rem" v-for="item in message2" >   
	            	<img class="img" :src="item.img" alt="" >
	            </swiper-slide>  
	        </swiper>  
		</div>-->
</template>

<script type="text/javascript">
	import { swiper, swiperSlide } from 'vue-awesome-swiper'  
	import $ from 'jquery'
	export default{
		props:{
			
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
	.deteilTop{width: 100%;height: 0.44rem;line-height: 0.44rem; background:#FAFAFA ;color: #5e5e5e;}
	.deteilTop img:nth-child(1){display: inline-block;width: 0.22rem;vertical-align: middle;margin: 0 0.1rem;}
	.deteilTop img:nth-child(3){display: inline-block;width: 0.22rem;vertical-align: middle;margin: 0 0.15rem;}
	.deteilTop>h3{display: inline-block;width: 2.1rem;text-align: center;font-size: 0.18rem}
</style>