<template>
  <div class="signIn">
    <div id="title">
      <p><a href="javascript:void(history.back())"><i class="iconfont">&#xe648;</i></a></p>
      <p>进入蘑菇街</p>
    </div>
    <div id="china">
      <p>国家与地区</p>
      <p><span>中国</span>+86<i class="iconfont">&#xe60e;</i></p>
    </div>
    <div id="num">
      <div class="inputInfo">
        <p>你的手机号码是？</p>
        <input type="text" placeholder="输入手机号码" v-model='iphone' @blue="num"/>
      </div>
      <div class="inputInfo2">
          <p>密码</p>
          <input type="password"  placeholder="密码" v-model="pwd" @blue="word"/>
      </div>
    </div>
    <div id="register">
      <button @click="success">一键注册</button>
    </div>
    <div id="loginStyle">
      <p><a href="">账号密码登录</a></p>
      <p><a href="">免密登录</a></p>
    </div>
    <div id="qq2">
      <div id="include2">
        <a href="">
          <p><i class="iconfont">&#xe61a;</i></p>
          <p>QQ登录</p>
        </a>
      </div>
    </div>
    <p class="infrom">*注册代表同意《蘑菇街网络服务协议》</p>
  </div>
</template>
<script>
  import Login from './login'
  export default{
      name:'signIn',
       data(){
           return{
             iphone:'',
             pwd:'',
             isnum:'false',
             ispwd:'false',
             ispwd2:'false'
           }
       },
       methods:{
           num(){
               if(!/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.iphone)){
                   alert('电话号码必须是13,14,15,18开头的11数字')
               }else{
                 this.isnum=true;
               }
           },
           word(){
             if(!/^.{6,}$/.test(this.pwd)){
                 alert('密码至少6位数以上')
             }else{
                 this.ispwd=true;
             }
           },
           success(){
               if(this.isnum&&this.ispwd){
                   var obj={inputInfo:this.iphone,inputInfo2:this.pwd,};
                   var arr=JSON.parse(localStorage.getItem('user'));
                   if(!arr){
                       var arr=[];
                   }
                   arr.unshift(obj);
                   //数组中的值转换成字符串存放到本地中
                localStorage.setItem('user',JSON.stringify(arr));
                console.log(JSON.parse(localStorage.getItem('user')),arr);
                 //跳转
                 this.$router.push({path:'/login',component:Login})
               }else{
                   alert('输入错误，请正确输入')
               }
           }
       }
  }
</script>
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  @font-face {
    font-family: 'iconfont';  /* project id 351005 */
    src: url('http://at.alicdn.com/t/font_78dwusgxze12a9k9.eot');
    src: url('http://at.alicdn.com/t/font_78dwusgxze12a9k9.eot?#iefix') format('embedded-opentype'),
    url('http://at.alicdn.com/t/font_78dwusgxze12a9k9.woff') format('woff'),
    url('http://at.alicdn.com/t/font_78dwusgxze12a9k9.ttf') format('truetype'),
    url('http://at.alicdn.com/t/font_78dwusgxze12a9k9.svg#iconfont') format('svg');
  }
  .iconfont{font-family:"iconfont"
  !important;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
  #title{border-bottom:1px solid #c9c7c8;width:3.2rem;height:0.4rem;line-height:0.4rem;padding:0 0.1rem;background:#fafafa;display:flex;align-items:center;padding-left:0.1rem;}
  #title p:nth-child(2){margin-left:1.2rem;font-weight:bold;}
  #title p:first-child{font-size:12px;}
  #china{width:3.2rem;height:0.9rem;display:flex;flex-direction:column;justify-content:space-between;align-items: center;padding:0.2rem 0;}
  #china p{font-size:12px;color:#a7a7a7;width:3.2rem;height:0.26rem;line-height:0.26rem;text-align: center;}
  #china p span{font-size:20px;font-weight:bold;color:#000;margin-right:0.1rem;}
  #china p:nth-child(2){position:relative;}
  #china p .iconfont{position:absolute;right:0.1rem;}
  #num{width:3.2rem;height:2.3rem;padding:0 0.1rem;text-align: center;}
  .inputInfo,.inputInfo2,.inputInfo3{width:3.2rem;height:0.75rem;}
  .inputInfo input,.inputInfo2 input,.inputInfo3 input{width:3.1rem;height:0.37rem;text-align:center;
    font-size:20px;border:none;border-bottom:1px solid #ededed ;
  }
  :-moz-placeholder{color:#f0f0f0;}
  #register{width:3.2rem;height:0.4rem;padding:0 0.1rem;}
  #register button{background:#ff1877;border-radius:5%;width:3rem;height:0.4rem;font-size:0.16rem;color:#fff;text-align: center;line-height: 0.4rem;}
  #loginStyle{width:3.2rem;height:0.45rem;display:flex;justify-content: space-between;padding:0 0.1rem;align-items:center;}
  #loginStyle p a{color: red;}
  #include a{display:inline-block;}
  #qq2{width:3.2rem;height:0.9rem;text-align:center;display:flex;justify-content: center;}
  #include2{background:#0598e2;width:0.9rem;height:0.9rem;border-radius:50%;padding:0.2rem 0;}
  #qq p i{color:#fff;font-size:0.2rem;}
  .infrom{text-align: center;margin-top:0.1rem;}

</style>
