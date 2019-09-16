<template>
  <div id="use">
    <main>
      <i class="iconfont icon-fanhui1" @click="black"></i>
      <div class="save" @click="save">完成</div>
    </main>
    <div class="hr"></div>
    <div class="uses">
      <input type="text" v-model="newname" :placeholder="usename"/>
    </div>
    <div class="hao">好名字更容易让世界的人记住你。</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "", //用户id
      newname: "", //新用户名字
      newpassword:'', //用户当前密码
      usename:'',//用户原来密码
    };
  },
  methods: {
    black() {
      this.$router.go(-1);
    },
    async save() {
      const res = await this.$axios.put("/users/" + this.userId, {
        name: this.newname,password:this.newpassword
      });
      this.$router.go(-1)
    },
    async put2() {
      //查看用户当前成绩和名字
      const res3 = await this.$axios.get("/users/" + this.userId);
      // console.log(res3)
      this.newpassword = res3.data.data.password;
      this.usename = res3.data.data.name
    }
  },
  created() {
    this.userId = localStorage.getItem("userId");
    this.put2()
  }
};
</script>

<style lang="less" scoped>
#use {
  font-size: 16px;
  main {
    width: 92%;
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
  .uses {
    width: 95%;
    margin: 0 auto;
    margin-top: 0.6rem;
    input {
      width: 100%;
      border: none;
      border-bottom: 1px solid #16da16;
      outline: none;
      caret-color: #16da16;
    }
  }
  .hao {
    width: 95%;
    margin: 0 auto;
    margin-top: 0.3rem;
    font-size: 12px;
    color: #ccc;
  }
}
</style>