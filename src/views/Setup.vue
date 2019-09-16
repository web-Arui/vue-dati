<template>
  <div id="app">
    <div class="profile">
      <i class="iconfont icon-fanhui1" @click="black"></i>
      <span>个人信息</span>
    </div>
    <div class="hr"></div>
    <div class="boxa">
      <div class="me">头像</div>
      <form
      >
        <!-- 限制上传图片格式 -->
        <a class="file">
          <input type="file" name="file" accept=".png, .jpg" @change="update"/>+
        </a>
        <div class="button">
          <!-- <button type="submit" @click="put">上传</button> -->
        </div>
      </form>
    </div>
    <div class="box" @click="change1">
      <div class="name">用户名</div>
      <div class="use">
        {{usename}}
        <i class="iconfont icon-fanhui2"></i>
      </div>
    </div>
    <div class="box" @click="change2">
      <div class="password">修改密码</div>
      <div class="use">
        <i class="iconfont icon-fanhui2"></i>
      </div>
    </div>
    <div class="box" @click="sgin">
      <div class="agin">退出登陆</div>
      <div class="use">
        <i class="iconfont icon-fanhui2"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      userId: "", //用户id
      usename: "", //用户名字
    };
  },
  computed: {
    tan(){
      return this.url+this.userId
    }
  },
  methods: {
    uploadDone(files) {
      if (files && Array.isArray(files) && files.length) {
        // this.$axios.post('/users/upload/'+userId).then(res=>{
        //   console.log(res)
        // })
        console.log(1);
      }
    },
     update(e){
        let file = e.target.files[0];
        let param = new FormData(); //创建form对象
        param.append('file',file);//通过append向form对象添加数据
        console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          headers:{'Content-Type':'application/json'}
        }; //添加请求头
        this.$axios.post('/users/upload/'+this.userId,param,config)
          .then(response=>{
            // console.log(response.data);
          })
      },
    change1() {
      this.$router.push({ name: "changeuse" });
    },
    change2() {
      this.$router.push({ name: "changepassword" });
    },
    black() {
      this.$router.go(-1);
    },
    async put2() {
      //查看用户当前成绩和名字
      const res3 = await this.$axios.get("/users/" + this.userId);
      // console.log(res3);
      this.usename = res3.data.data.name;
    },
    sgin(){
      this.$router.push({name:'login'})
    }
  },
  created() {
    this.userId = localStorage.getItem("userId");
    this.put2();
  }
};
</script>

<style lang="less" scoped>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  font-size: 16px;
  background-color: #ededed;
  .hr {
    width: 100%;
    height: 0.1rem;
    background-color: #fff;
  }
  .profile {
    height: 0.8rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    i {
      line-height: 0.8rem;
      font-size: 16px;
      color: black;
      margin-left: 0.3rem;
    }
    span {
      line-height: 0.8rem;
      margin-right: 50%;
      transform: translateX(50%);
      color: black;
      font-size: 16px;
    }
  }
  .box {
    width: 100%;
    height: 1.1rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ededed;
    // margin-top: 0.05rem;
    font-weight: bold;
  }
  .name {
    line-height: 1.1rem;
    margin-left: 0.2rem;
  }
  .use {
    line-height: 1.1rem;
    margin-right: 0.2rem;
    color: #ccc;
  }
  .password {
    line-height: 1.1rem;
    margin-left: 0.2rem;
  }
  .text {
    margin-left: 0.2rem;
    text-align: center;
    line-height: 1rem;
  }
  .agin{
    line-height: 1.1rem;
    margin-left: .2rem;
  }
  .boxa {
    width: 100%;
    height: 2rem;
    background-color: #fff;
    border-bottom: 1px solid #ededed;
    .me {
      margin-left: 0.6rem;
      padding-top: 0.1rem;
    }
    form {
      // line-height: 1rem;
      .file {
        position: relative;
        display: inline-block;
        background: white;
        border: 1px solid #ddffdd;
        border-radius: 4px;
        padding: 10px 27px;
        overflow: hidden;
        color: black;
        text-decoration: none;
        text-indent: 0;
        line-height: 35px;
        margin-top: 0.2rem;
        margin-left: 0.2rem;
        input {
          position: absolute;
          font-size: 100px;
          right: 0;
          top: 0;
          opacity: 0;
        }
      }
      .button {
        margin-top: -1rem;
        margin-left: 6rem;
        button {
          border-radius: 28px;
          font-family: 新宋体;
          color: #100e0e;
          font-size: 6px;
          background: #a9bfce;
          padding: 6px 15px 6px 15px;
          border: solid #98a6af 1px;
          text-decoration: none;
        }
      }
    }
  }
}

.upload {
  div {
    margin: 0;
    padding: 0;
    margin-top: 0.2rem;
  }
}
</style>