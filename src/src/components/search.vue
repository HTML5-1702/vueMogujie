<template>
	<div id="search">
		<div class="search_head">
			<a class="search-return" href="javascript:void(history.back())"></a>
            <input id="search-input" class="search-input" type="text" name="q" placeholder="露背无袖连衣裙">
        	<a class="search-btn" href="javascript:;">搜索</a>
		</div>
		<div class="search_content">
			<div class="search_history">
				<div class="top">
					<i></i>
					<span>历史搜索</span>
					<a href="javascript:;"></a>
				</div>
				<div class="bottom">
					<ul>
						<li>
							<a href="javascript:;">露背无袖连衣裙</a>
						</li>
					</ul>
					<div class="tip">暂无历史搜索</div>
				</div>
			</div>
			<div class="search_hotwords">
				<div class="top">
					<span>热门搜索</span>
				</div>
				<div class="bottom">
					<ul>
						<li>
							<a href="javascript:;">夏凉节</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
#search{width: 100%; height: 100%;}
.search_head{width: 100%; height: .38rem; padding: .04rem 0; border-bottom: 1px solid #eee; overflow: hidden;}
.search-return{display: block; width: .32rem; height: .29rem; float: left; background: url(../assets/search-return.png) no-repeat center; background-size: auto 60%;}
.search-input{width: 2.52rem; height: .21rem; margin-top: .04rem; border: 1px solid #aaa; border-radius: .05rem; padding: 0 .08rem; font-size: .12rem; float: left;}
.search-btn{display: block; width: .36rem; height: .29rem; line-height: .29rem; text-align: center; float: left; color: #666;}
.search_history{padding: .13rem .08rem .08rem; border-bottom: 1px solid #eee;}
.search_history .top,.search_history .bottom ul{overflow: hidden;}
.search_history .top i,.search_history .top a{display: block; width: .13rem; height: .13rem;}
.search_history .top i{float: left; background: url(../assets/top_icon2.png) no-repeat center; background-size: 90%;}
.search_history .top span{float: left;}
.search_history .top a{float: right; background: url(../assets/mb_trashbin.png) no-repeat center; background-size: 100%; margin-right: .08rem;}
.search_history .bottom li,.search_hotwords .bottom li{float: left; margin: .1rem 0 0 .08rem; border: 1px solid #f5f5f5; border-radius: .05rem;}
.search_history .bottom li a,.search_hotwords .bottom li a{display: block; width: 100%; line-height: .22rem; padding: 0 .1rem;}
.search_history .bottom .tip{margin: .08rem 0 0 .15rem;}
.search_hotwords{padding: .08rem;}
.search_hotwords .top span{padding-left: .13rem; background: url(../assets/p_feed.png) no-repeat left center; background-size: auto 75%;}
.search_history .bottom li.hot a{color: #ff4466;}
</style>