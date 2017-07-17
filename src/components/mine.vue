<template>
	<div id="mine">
    <div id="title">
    <p><img src="../assets/05.jpg_170x170.jpg" alt=""></p>
      <div id="user-info">
        <p id="user-name">用户名</p>
        <p><a href="">我的收获地址></a></p>
      </div>
    </div>
    <div id="indent">
<<<<<<< HEAD
      <p>
        <span id="pic"><i class="iconfont">&#xe692;</i></span><span><a href="">我的订单</a></span></p>
      <p><a href="">></a></p>
    </div>
    <div id="indent-list">
=======
      <router-link to='/indent'>
      <p>
        <span id="pic"><i class="iconfont">&#xe692;</i></span><span><a href="">我的订单</a></span></p>
      <p><a href="">></a></p>
      </router-link>
    </div>
    <div id="indent-list">
      <router-link to='/indent'>
>>>>>>> 9a9b278d80d38b6a0a9ab48ef5da940273d24437
      <ul>
        <li>
          <p><i class="iconfont">&#xe634;</i></p>
          <p><a href="">待付款</a></p>
        </li>
        <li>
          <p><i class="iconfont">&#xe6b1;</i></p>
          <p><a href="">待收货</a></p>
        </li>
        <li>
          <p><i class="iconfont">&#xe747;</i></p>
          <p><a href="">待评价</a></p>
        </li>
        <li>
          <p><i class="iconfont">&#xe632;</i></p>
          <p><a href="">售后</a></p>
        </li>
      </ul>
<<<<<<< HEAD
    </div>
    <div id="list2">
      <ul>
        <li><span><i class="iconfont">&#xe600;</i></span><p>我的购物车<a href="">></a></p></li>
        <li><span><i class="iconfont">&#xe64d;</i></span><p>我的拼团<a href="">></a></p></li>
=======
      </router-link>
    </div>
    <div id="list2">
      <ul>
        <router-link to="/shopcar"></router-link><li><span><i class="iconfont">&#xe600;</i></span><p>我的购物车<a href="">></a></p></li>
        <router-link to="/group">
        <li><span>
          <i class="iconfont">&#xe64d;</i></span><p>我的拼团<a href="">></a></p>
        </li>
        </router-link>
>>>>>>> 9a9b278d80d38b6a0a9ab48ef5da940273d24437
        <li><span><i class="iconfont">&#xe63b;</i></span><p>我的优惠券<a href="">></a></p></li>
        <li><span><i class="iconfont">&#xe60f;</i></span><p>我收藏的商品<a href="">></a></p></li>
        <li><span><i class="iconfont">&#xe645;</i></span><p>我收藏的店铺<a href="">></a></p></li>
      </ul>
    </div>
    <div id="download">
      <ul>
        <li><span id="mg"><i class="iconfont">&#xe61e;</i></span><p>下载App随时随地追踪订单<a>下载</a></p></li>
        <li><span id="wx"><i class="iconfont">&#xe615;</i></span><p>消息通知</p></li>
      </ul>
    </div>
<<<<<<< HEAD

=======
    <router-link to="/login">
      <div class="exit">
          <p>退出登录</p>
      </div>
    </router-link>
>>>>>>> 9a9b278d80d38b6a0a9ab48ef5da940273d24437
    <div id="tab">
      <ul>
        <li>
          <router-link to="/home">
            <div class="img-wrap"></div>
            <div class="title active">首页</div>
          </router-link>
        </li>
        <li>
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
        <li class="active">
          <router-link to="/mine">
            <div class="img-wrap"></div>
<<<<<<< HEAD
            <div class="title active">我的</div>
=======
            <div class="title active" >我的</div>
>>>>>>> 9a9b278d80d38b6a0a9ab48ef5da940273d24437
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
<<<<<<< HEAD

//  var app =new Vue({
//    data:{},
//    el:"#app",
//    render:h=> h(App),
//    router,
//    store,
//    watch:{
//      "route":'checkLogin'
//    },
=======
>>>>>>> 9a9b278d80d38b6a0a9ab48ef5da940273d24437
    created(){
      this.checkLogin();
    },
    methods:{
        checkLogin(){
<<<<<<< HEAD

//            if(JSON.parse(localStorage.getItem('storage')!=true)){
//                this.$router.push('/login');
//            }
//            else{
//                this.$router.push('/mine');
//            }
        }
=======
            //本地存储值为false的情况下，跳转到登录界面
            if(JSON.parse(localStorage.getItem('storage'))!=true){
                this.$router.push('/login');
            }
//          localStorage.removeItem('storage')
        },
>>>>>>> 9a9b278d80d38b6a0a9ab48ef5da940273d24437
    }
//  })
  }
</script>
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  body,html{background:#f6f6f6;}
  @font-face {
    font-family: 'iconfont';  /* project id 351005 */
    src: url('http://at.alicdn.com/t/font_tsefx41t5j8j8aor.eot');
    src: url('http://at.alicdn.com/t/font_tsefx41t5j8j8aor.eot?#iefix') format('embedded-opentype'),
    url('http://at.alicdn.com/t/font_tsefx41t5j8j8aor.woff') format('woff'),
    url('http://at.alicdn.com/t/font_tsefx41t5j8j8aor.ttf') format('truetype'),
    url('http://at.alicdn.com/t/font_tsefx41t5j8j8aor.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont";
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    /*padding-left:20px*/
  }
<<<<<<< HEAD
=======
  #mine{overflow: auto;}
>>>>>>> 9a9b278d80d38b6a0a9ab48ef5da940273d24437
  #title{width:3.2rem;height:0.8rem;background:#fff;padding:0.2rem 0 0 0.18rem;}
  #title>p:first-child{float:left;width:0.4rem;height:0.4rem;border-radius:50%;}
  #title>p>img{width:0.4rem;height:0.4rem;border-radius:50%;}
  #user-info{float:left;margin-left:0.14rem;}
  #user-info p{height:0.2rem;line-height: 0.2rem;}
  #indent{width:3.2rem;height:0.44rem;border-bottom:1px solid #e5e5e5;padding:0.12rem;}
  #indent span{margin-left:0.14rem;display: inline-block;}
  #indent p:first-child{float:left;}
  #pic{text-align:center;line-height:0.26rem;width:0.26rem;height:0.26rem;display:inline-block;border-radius:50%;background:#f45e9b;color:#fff;}
  #indent p:last-child{float:right;}
  #indent-list ul{margin-bottom:0.08rem;width:3.2rem;height:0.54rem;display: flex;justify-content:space-between;align-items:center;padding:0 0.2rem;}
  #list2 li{width:3.2rem;height:0.4rem;line-height:0.4rem;}
  #list2 li p{float:right;width:2.7rem;height:0.4rem;border-bottom:1px solid #e5e5e5;}
  #list2 li span{line-height:0.26rem;text-align:center;display:inline-block;width:0.26rem;height:0.26rem;border-radius:50%;background:#ff6600;margin:0.1rem 0.1rem;}
  #list2 li p a{float:right;margin-right:0.15rem;}
  #list2 li span i{color:#fff;}
  #download ul{width:3.2rem;height:1.2rem;}
  #download ul li{width:3.2rem;height:0.6rem;line-height:0.6rem;}
  #download ul li span{margin:0.1rem 0.1rem;display:inline-block;width:0.26rem;height:0.26rem;border-radius:50%;line-height:0.26rem;text-align:center;}
  #download ul li p a{margin-left:0.3rem;display:inline-block;width:0.6rem;height:0.2rem;border:1px solid #ff0077;line-height:0.2rem;text-align:center;}
  #mg{background:#ff0077;}
  #wx{background:green;}
  #download ul li span i{color:#fff;}
  #download ul li p{float:right;width:2.7rem;height:0.6rem;border-bottom:1px solid #e5e5e5;}
<<<<<<< HEAD
=======
  .exit{width:3.2rem;height:0.48rem;padding:0.1rem 0.2rem 0 0.2rem;}
  .exit p{width:2.8rem;height:0.28rem;background:#ff5777;border-radius:5%;text-align: center;line-height:0.28rem;}
  .exit p{color:#fff;}







>>>>>>> 9a9b278d80d38b6a0a9ab48ef5da940273d24437
</style>
