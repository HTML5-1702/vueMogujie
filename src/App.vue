<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>
	export default {
	  data(){
      return {

      }
	  },
	  methods:{
	      
	  }
	}
	window.onload = function(){
		//REM布局
		var windowW = $(window).width();
		$('html').css('font-size',parseInt(windowW/3.2)+'px');
		window.onresize = function(){
			var windowW = $(window).width();
			$('html').css('font-size',parseInt(windowW/3.2)+'px');
		}
	}
</script>

<style>
*{margin: 0;padding: 0;box-sizing: border-box;}
ul,ol,li{list-style: none;}
img{border: none; display: block; width: 100%;}
a{color: #000;text-decoration: none;cursor: pointer;}
body{font:.12rem Arial,Verdana,Sans-serif;color: #666;}
body,html,#app{height :100%;	width:100%;}
.overflowHide{overflow: hidden;}
html{font-size: 100px;}
.clearfix:after{content: '';display: block;height: 0;line-height: 0;visibility: hidden;clear: both;
}
/*#app{font-size: .12rem;}*/
#tab{width: 100%; height: .41rem; position: fixed; left: 0; bottom: 0; font-size: .12rem; border-top: 1px solid #E5E5E5; background: #fff;}
#tab ul{padding: 0;}
#tab li{width: 25%; list-style: none; text-align: center; float: left;}
/*#tab li img{width: .19rem; height: .19rem; margin: 0 auto;}*/
#tab .img-wrap{width: .19rem; height: .19rem; margin: .04rem auto 0 auto; background-repeat: no-repeat; background-position: center; background-size: 100% auto;}
#tab .title{width: 100%; height: .17rem; line-height: .17rem;}
#tab li:nth-child(1) .img-wrap{background-image: url(assets/home_icon.png);}
#tab li:nth-child(2) .img-wrap{background-image: url(assets/category_icon.png);}
#tab li:nth-child(3) .img-wrap{background-image: url(assets/shopcar_icon.png);}
#tab li:nth-child(4) .img-wrap{background-image: url(assets/mine_icon.png);}
#tab li.active:nth-child(1) .img-wrap{background-image: url(assets/home_icon2.png);}
#tab li.active:nth-child(2) .img-wrap{background-image: url(assets/category_icon2.png);}
#tab li.active:nth-child(3) .img-wrap{background-image: url(assets/shopcar_icon2.png);}
#tab li.active:nth-child(4) .img-wrap{background-image: url(assets/mine_icon2.png);}
#tab li.active a{color: #FF5777;}
#home,#category,#shopcar,#mine{position: absolute; top: 0; right: 0; bottom: 0; left: 0; padding-bottom: .41rem; overflow-y: scroll;}
</style>
