<template>
	<div id="category">
		<div class="search">
            <a class="im-talk" href="javascript:;"></a>
            <form class="search-form">
                <input id="search-input" class="search" type="text" name="q" placeholder="露背无袖连衣裙" data-query-word="露背无袖连衣裙">
            </form>
            <a class="cart" href="javascript:;"></a>
		</div>
		<div class="categoryMain">
			<div class="categoryLeft">
				<ul>
					<li v-for="i in categoryL">{{i.title}}</li>
				</ul>
			</div>
			<div class="categoryRight">
				categoryRight
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
	      categoryL:[]
	    }
	},
	mounted: function() {
	    this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=41789')
	    .then(function(res) {
	        this.categoryL = res.data.data[41789].list;
	        console.log(res.data.data[41789].list);
	    });
	}
}
</script>

<style>
.search{width: 100%; height: .4rem; padding: .064rem .043rem; border-bottom: 1px solid #e5e5e5;}
.search input{border: none; width: 2.26rem; height: .26rem; line-height: .26rem; padding-left: .256rem; background: #eee url(../assets/top_icon2.png) no-repeat .07rem center; background-size: auto 55%; float: left;}
.search .im-talk,.search .cart{display: block; width: .427rem; height: .26rem; float: left; background-repeat: no-repeat; background-position: center; background-size: auto 68%;}
.search .im-talk{background-image: url(../assets/top_icon1.png);}
.search .cart{background-image: url(../assets/shopcar_icon.png);}
</style>