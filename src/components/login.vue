<template>
  <div class="login">
    <div id="title-login">
      <p><i class="iconfont">&#xe602;</i></p>
      <p>登录</p>
      <p>忘记密码</p>
    </div>
    <div id="info">
        <div class="account">
          <p>蘑菇街账号</p>
          <input type="text" placeholder="输入用户名/邮箱/手机" v-model.trim="number" v-verify="number">
          <br>
          <label v-verified="verifyError.number"></label>
        </div>
        <div class="account">
          <p>密码</p>
          <input type="password" placeholder="输入密码" v-model.trim="pwd">
          <br>
          <label v-verified="verifyError.pwd"></label>
        </div>
    </div>
    <div id="enter">
      <p @click="submit">登  录</p>
    </div>
    <!--<div>{{$verify.$errorArray}}</div>-->
    <div id="enter-sort">
      <p><a href="">免密登录</a></p>
      <router-link to="/signIn"><p class="zc">注册账号</p></router-link>
    </div>
    <div id="qq">
      <div id="include">
        <a href="">
          <p><i class="iconfont">&#xe61a;</i></p>
          <p>QQ登录</p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
      name:'login',
      data(){
         return {
           number:'',
           pwd:'',
         }
      },
  verify:{
    number:[
        'required',
      {
          minLength:11,
          message:'手机号码为11位数'
      }
    ],
    pwd:{
        minLength:6,
        message:'密码至少6位数'
    }
  },
    computed:{
      verifyError:function () {
        return this.$verify.$errors;
      }
    },
    methods: {
          submit:function () {
              console.log(this.$verify.check());
            var user = JSON.parse(localStorage.getItem('user'));
            console.log(user,user[0].inputInfo);

            //验证正确跳转
            for(var i=0; i<user.length; i++){
              if(this.number==user[i].inputInfo){
                var idx = i;
                break;
              }
            }
//            console.log(idx)
            if(this.number==user[idx].inputInfo && this.pwd==user[idx].inputInfo2){
              localStorage.storage=true;
              this.$router.push('/mine');
            }else{
              alert('账号错误');
            }



          }
      },
    }
</script>
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
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
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
  #title-login{width:3.2rem;
    height:0.4rem;
    background:#fafafa;
    border-bottom:1px solid #c9c7c8;
    display: flex;
    justify-content: space-between;

    line-height:0.4rem;
  }
  #info{
    width:3.2rem;
    height:1.6rem;
    margin-top:0.2rem;
    padding:0 0.14rem;
  }
  .account{width:3.2rem;
    height:0.8rem;}
  .account input,.account p{
    text-align:center;
    line-height:0.4rem;
    width:2.96rem;
    height:0.4rem;
  }
  .account input{font-size:0.18rem;
    color:#000;
    border-style: none;
    border-bottom:1px solid #ededed;}
  .account p{font-size:0.12rem;}
  #enter{width:2.97rem;
    height:0.42rem;
    background:#ff1877;
    text-align: center;
    line-height: 0.42rem;
    margin:0.2rem 0.14rem;}
  #enter p{color:#fff;}
  #enter-sort{display: flex; justify-content: space-between; padding:0 0.14rem;}
  #enter-sort>p:last-child a{color:red;}
  #include a{display: inline-block;}
  #qq{width:3.2rem;height:0.9rem;text-align:center;display:flex;justify-content: center;}
  #include{background:#0598e2;width:0.9rem;height:0.9rem;border-radius:50%;padding:0.2rem 0;margin-top:0.8rem;}
  #qq p i{color:#fff;font-size:0.2rem;}
  .zc{color:red;}
  label{width:3.2rem;height:0.1rem;}
</style>
