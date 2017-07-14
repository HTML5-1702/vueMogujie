<template>
  <div id="indent">
    <div id="title">
      <p>
        <a href="javascript:void(history.back())">
          <i class="iconfont">&#xe602;</i>
      </a>
      </p>
      <p>订单列表</p>
      <p>

          <i class="iconfont" id="icon2">&#xe601;</i>

      </p>
    </div>
    <div id="cargo">
      <ul>
        <li class="lis">全部</li>
        <li class="lis">代付款</li>
        <li class="lis">待收货</li>
        <li class="lis">待评价</li>
        <li class="lis">售后</li>
      </ul>
    </div>
    <div id="indent-info">
      <img src="../assets/194500731154.png" alt="">
    </div>
  </div>
</template>
<script>
  export default{
//    methods:{
//      goBack: function () {
//        console.log(1);
////        this.$router.push('/mine');
//      }
//    }
  }
</script>
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  html,body{background:#eeeeee;}
  @font-face {
    font-family: 'iconfont';  /* project id 351005 */
    src: url('http://at.alicdn.com/t/font_tsefx41t5j8j8aor.eot');
    src: url('http://at.alicdn.com/t/font_tsefx41t5j8j8aor.eot?#iefix') format('embedded-opentype'),
    url('http://at.alicdn.com/t/font_tsefx41t5j8j8aor.woff') format('woff'),
    url('http://at.alicdn.com/t/font_tsefx41t5j8j8aor.ttf') format('truetype'),
    url('http://at.alicdn.com/t/font_tsefx41t5j8j8aor.svg#iconfont') format('svg');
  }
  .iconfont{ font-family:"iconfont"
  !important; font-size:16px;font-style:normal;
    -webkit-font-smoothing:antialiased;
    -webkit-text-stroke-width:0.2px;
    -moz-osx-font-smoothing:grayscale;}
  #title{border-bottom:1px solid gray;width:3.2rem;height:0.4rem;background:#eeeeee;display:flex;
    justify-content:space-between;line-height:0.4rem;padding:0 0.1rem;}
  #icon2{font-size:0.3rem;}
  #cargo{padding:0 0.1rem;width:3.2rem;height:0.4rem;background:#fff;line-height:0.4rem;}
  #cargo ul{display:flex;justify-content:space-between;}
  #indent-info{width:3.2rem;height:2.5rem;background:#fff;margin-top:0.1rem;}
  .lis:hover{color:red;border-bottom:1px solid red;}



</style>


