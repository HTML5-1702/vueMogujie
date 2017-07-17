<template>
  <div id="group">
    <title>
      <p>
        <a href="javascript:void(history.back())">
          <i class="iconfont">&#xe602;</i>
        </a>
      </p>
      <p>我的拼团</p>
      <p>
        <i class="iconfont" id="icon2">&#xe601;</i>
      </p>
    </title>
    <div id="cargo">
      <ul>
        <li class="lis">全部</li>
        <li class="lis">代付款</li>
        <li class="lis">拼团中</li>
        <li class="lis">拼团成功</li>
        <li class="lis">拼团失败</li>
      </ul>
    </div>
    <div id="indent-info">
      <img src="../assets/194500731154.png" alt="">
      <p></p>
      <p class="go-group"><a href="">去开团</a></p>
    </div>
    <div class="group-text">
      <p>
        <span>大家都在拼</span><span>更多<i class="iconfont">&#xe60e;</i></span>
      </p>
    </div>
    <div class="goods">
        <ul>
          <li>
            <div><img src="" alt=""></div>
            <div><p></p><p></p></div>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>

</script>
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  html,body{background:#eeeeee;}
  @font-face{
    font-family: 'iconfont';  /* project id 351005 */
    src: url('http://at.alicdn.com/t/font_78dwusgxze12a9k9.eot');
    src: url('http://at.alicdn.com/t/font_78dwusgxze12a9k9.eot?#iefix') format('embedded-opentype'),
    url('http://at.alicdn.com/t/font_78dwusgxze12a9k9.woff') format('woff'),
    url('http://at.alicdn.com/t/font_78dwusgxze12a9k9.ttf') format('truetype'),
    url('http://at.alicdn.com/t/font_78dwusgxze12a9k9.svg#iconfont') format('svg');
  }
  .iconfont{ font-family:"iconfont"
  !important; font-size:16px;font-style:normal;
    -webkit-font-smoothing:antialiased;
    -webkit-text-stroke-width:0.2px;
    -moz-osx-font-smoothing:grayscale;}
  #group{overflow:auto;}
  title{border-bottom:1px solid gray;width:3.2rem;height:0.4rem;background:#eeeeee;display:flex;
    justify-content:space-between;line-height:0.4rem;padding:0 0.1rem;}
  #icon2{font-size:0.3rem;}
  #cargo{padding:0 0.1rem;width:3.2rem;height:0.4rem;background:#fff;line-height:0.4rem;}
  #cargo ul{display:flex;justify-content:space-between;}
  #indent-info{width:3.2rem;height:2.5rem;background:#fff;margin-top:0.1rem;}
  .lis:hover{color:red;border-bottom:1px solid red;}
  .go-group{width:0.88rem;height:0.3rem;background:#ff5777;border-radius:5%;line-height:0.3rem;text-align:center;margin-left:1.06rem;}
  .group-text{margin-top:0.1rem;border-bottom:1px solid #eeeeee;}
  .group-text p{width:3.2rem;height:0.4rem;line-height:0.4rem;background:#fff;display:flex;justify-content: space-between;}
</style>
