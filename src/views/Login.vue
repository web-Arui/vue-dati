<template>
  <div>
    <Index>
    <div class="box">
      <div class="sonBox">
        <div class="box-header">
          <a class="login">登录</a>
          <a class="register" @click="register">注册</a>
        </div>
        <div class="box-login">
          <div class="message"><div v-show="isShow">{{judge}}</div></div>
          <input type="text" class="username" placeholder="用户名" v-model="username"/>
          <input type="password" placeholder="密码" class="password" v-model="password"/>
        </div>
        <div :class="uuu" @click="login">登陆</div>
      </div>
    </div>
    </Index>
  </div>
</template>

<script>
import Index from '@/components/Index'
import { setTimeout } from 'timers';
export default {
  name: "Login",
  data() {
    return {
      username:'',
      password:'',
      judge:'密码或账号错误',//登陆错误提示
      isShow:false //提示消息的显示隐藏
    };
  },
  components:{
    Index
  },
  created(){
    localStorage.removeItem('token');
  },
  methods:{
     register(){
         this.$router.push({name:"register"})
     },
     login(){
       if(this.username && this.password){
         this.$axios.post('/users/login',{name:this.username,password:this.password}).then(res=>{
         const {meta:{status,msg}} = res.data
         console.log(res)
         if(status==500){
           this.isShow=true
           setTimeout(()=>{
             this.isShow=false
             this.password=''
           },3000)
         }else if(status==200){
          localStorage.setItem('token',res.data.data.token)
          localStorage.setItem('userId',res.data.data.id)
          // console.log(res.data.data.id)
          this.$router.push({name:'home'})
         }else{
           alert('服务器挂了')
         }
       })
       }
     },
    
  },
  computed: {
       uuu:function(){
         return this.username&&this.password? 'zhou button':'button'
       }
     }
};
</script>

<style lang="less" scoped>
.box {
  background-color: #fff;
  height: 60vh;
  width: 82vw;
  border-radius: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: alpha(Opacity=80);
  -moz-opacity: 0.5;
  opacity: 0.5;
  // position: absolute;
  // left: 10%;
  // top: 18%;
  margin: 0 auto;
  margin-top: 2.2rem;
}
.sonBox {
  width: 40vh;
  height: 82vw;
  display: flex;
  flex-direction: column; //竖向布局
  align-items: center; /*垂直居中*/
}
.box-header {
  // background-color: skyblue;
  width: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.box-login {
  // background-color: #846ccc;
  display: flex;
  flex-direction: column; //竖向布局
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
  width: 100%;
  height: 60%;
}
.username,
.password {
  margin-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid #000;
  outline: none; //鼠标点击隐藏黑色边框
  margin-top: 10px;
}
input {
  height: 0.5rem;
  width: 200px;
  border: 1px solid #000;
}
.button {
  background-color: #fab4b4;
  background-image: linear-gradient(88deg, #fab4b4 0%, #ffbdb4 74%);
  width: 200px;
  height: 50px;
  border-radius: 25px;
  text-align: center;
  line-height: 1rem;
}
.message{
  // margin-top: -1px;
  height: 17px;
  color: red;
}
.login,
.register {
  // background-color: skyblue;
  font-size: 20px;
  width: 1.5rem;
  height: 1rem;
  border-radius: 6%;
  line-height: 1rem;
  text-align: center;
}
.login{
  color: #f10100;
}
.zhou{
  background-color: #f10100;
  background-image: linear-gradient(88deg, #f10100 0%, #ff4a15 74%);
}
</style>