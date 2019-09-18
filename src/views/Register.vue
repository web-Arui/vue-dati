<template>
  <div id="kk">
    <Index>
      <div class="box">
        <div class="sonBox">
          <div class="box-header">
            <a class="login" @click="tan">登录</a>
            <a class="register">注册</a>
          </div>
          <div class="box-login">
            <div class="message">
              <div v-show="isShow">{{judge}}</div>
              <div v-show="isShow1">{{judge1}}</div>
              <div v-show="isShow2">{{judge2}}</div>
              <div></div>
            </div>
            <label>
            <i class="iconfont icona icon-yonghuming1"></i>
          <input type="text" class="username" placeholder="用户名" v-model="username"/>
          </label>
          <label>
            <i class="iconfont iconb icon-mima"></i>
          <input type="password" placeholder="密码" class="password" v-model="password"/>
          </label>
          </div>
          <div :class="uuu" @click="resget">注册</div>
        </div>
      </div>
    </Index>
  </div>
</template>

<script>
import Index from "@/components/Index";
import { constants } from "crypto";
import { setTimeout } from "timers";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      judge: "", //登陆错误提示
      isShow: false, //提示消息的显示隐藏
      judge1:"",
      isShow1:false,
      judge2:'',
      isShow2:false
    };
  },
  methods: {
    tan() {
      this.$router.push({ name: "login" });
    },
    resget() {
     if (this.username.length > 9 || this.username.length<2) {
        this.isShow = true;
        this.judge = "账号长度不对";
        setTimeout(() => {
          this.isShow = false;
        }, 3000);
      } 
      if (this.password.length < 3 || this.password.length > 16) {
        this.isShow1 = true;
          this.judge1 = "密码长度不对";
        setTimeout(() => {
          this.isShow1 = false;
        }, 3000);
      } 
      if(this.username.length<10 && this.password.length>2 &&this.password.length<17){
        this.register();
      }
    },
    register() {
      if (this.username && this.password) {
        this.$axios
          .post("/users/register", {
            name: this.username,
            password: this.password
          })
          .then(res => {
            const {
              meta: { status, msg }
            } = res.data;
            console.log(status)
            if (status == 200) {
              this.username = "";
              this.password = "";
              this.$router.push({ name: "login" });
            } else if (status == 409) {
              this.isShow2 = true;
              this.judge2 = "账号已被注册";
              setTimeout(() => {
                this.isShow2 = false;
              }, 3000);
            }
          });
      }
    }
  },
  components: {
    Index
  },
  computed: {
    uuu: function() {
      return this.username && this.password ? "zhou button" : "button";
    }
  }
};
</script>

<style lang="less" scoped>
#kk{
  font-size: 16px;
}
.box {
  font-size: 16px;
  background-color: #fff;
  height: 7.15rem;
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
label{
  position: relative;
}
.iconb{
  font-size: 20px;
  position: absolute;
  left: -.1rem;
  top: .25rem;
}
.icona{
  font-size: 20px;
  position: absolute;
  left: -.05rem;
  top: .25rem;
}
.username,
.password {
  margin-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid #000;
  outline: none; //鼠标点击隐藏黑色边框
  margin-top: 10px;
  background: transparent;
  padding-left: 1em;
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
.register{
  color: #f10100;
}
.zhou{
  background-color: #f10100;
  background-image: linear-gradient(88deg, #f10100 0%, #ff4a15 74%);
}
</style>