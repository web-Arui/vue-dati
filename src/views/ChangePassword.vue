<template>
  <div id="change">
    <main>
      <i class="iconfont icon-fanhui1" @click="black"></i>
      <div class="save" @click="save">完成</div>
    </main>
    <div class="hr"></div>
    <div class="use">
      <div class="use1">用户名</div>
      <div class="use2">{{usename}}</div>
    </div>
    <div class="hr"></div>
    <div class="uses">
      <div>原密码</div>
      <input type="text" placeholder="填写原密码" v-model="usepassworda" onkeyup="value=value.replace(/[\u4E00-\u9FA5]/g,'')"/> 
    </div>
    <div class="uses">
      <div>新密码</div>
      <input type="text" placeholder="填写新密码" maxlength="16" v-model="newpassword" onkeyup="value=value.replace(/[\u4E00-\u9FA5]/g,'')"/>
    </div>
    <div class="uses">
      <div>确认密码</div>
      <input type="text" placeholder="再次填写确认" maxlength="16" v-model="newpassword3" onkeyup="value=value.replace(/[\u4E00-\u9FA5]/g,'')"/>
    </div>
    <div class="introduce">密码必须是4-16位</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "", //用户id
      usename: "", //用户名
      usepassworda: "", //绑定的原密码
      usepassword: "", //原密码
      newpassword: "", //填写密码
      newpassword3: "" //再次填写密码
    };
  },
  methods: {
    black() {
      this.$router.go(-1);
    },
    put2() {
      //查看用户当前成绩和名字
      this.$axios.get("/users/" + this.userId).then(res => {
        const { password, name } = res.data.data;
        this.usepassword = password;
        this.usename = name;
      });
    },
    async save() {
      if (this.usepassworda === this.usepassword) {
        if (this.newpassword === this.newpassword3) {
          const res = await this.$axios.put("/users/" + this.userId, {
            name: this.usename,
            password: this.newpassword
          });
          this.$router.push({ name: "login" });
        }
      }
    }
  },
  created() {
    this.userId = localStorage.getItem("userId");
    this.put2();
  }
};
</script>

<style lang="less" scoped>
#change {
  font-size: 16px;
  main {
    width: 90%;
    color: #333;
    margin-left: 0.3rem;
    margin-top: 0.3rem;
    i {
      font-size: 16px;
    }
    .save {
      float: right;
      padding: 0.13rem 0.2rem;
      background: #1aaf1a;
      margin-top: -0.13rem;
      color: white;
      border-radius: 2px;
    }
  }
  .hr {
    border-bottom: 1px solid #efe9e9;
    margin-top: 0.2rem;
  }
  .use {
    display: flex;
    justify-content: space-around;
    margin-top: 0.6rem;
    .use1 {
      width: 64px;
    }
    .use2 {
      width: 70%;
    }
  }
  .uses {
    display: flex;
    justify-content: space-around;
    margin-top: 0.4rem;
    div {
      width: 64px;
    }
    input {
      width: 70%;
      border: none;
      border-bottom: 1px solid #efe9e9;
      outline: none;
      caret-color: #16da16;
      &:focus {
        border-bottom: 1px solid #16da16;
      }
    }
  }
  .introduce {
    font-size: 12px;
    margin-top: 0.4rem;
    margin-left: 0.21rem;
    color: #7b6e6e;
  }
}
</style>