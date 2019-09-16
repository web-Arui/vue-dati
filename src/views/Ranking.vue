<template>
  <div id="appc">
    <Headers title="排行榜" />
    <div class="trophy">
      <img src="../images/paihang.png" alt="">
    </div>
    <div class="rank">世界排名</div>
    <div class="content">
      <!-- <div class="personal">
        <div class="number">1</div>
        <div class="picture">
          <img src="../images/11.jpg" alt />
        </div>
        <div class="Nickname">彪彪</div>
        <div class="score">100分</div>
      </div>

      <div class="personal">
        <div class="number">2</div>
        <div class="picture">
          <img src="../images/999_01.png" alt />
        </div>
        <div class="Nickname">彪彪</div>
        <div class="score">100分</div>
      </div>
      <div class="personal">
        <div class="number">3</div>
        <div class="picture">
          <img src="../images/999_01.png" alt />
        </div>
        <div class="Nickname">彪彪</div>
        <div class="score">100分</div>
      </div>

      <div class="personal">
        <div class="number">4</div>
        <div class="picture">
          <img src="../images/999_01.png" alt />
        </div>
        <div class="Nickname">彪彪</div>
        <div class="score">100分</div>
      </div> -->
      <div class="personal" v-for="(item,index) in me" :key="index">
        <div class="number">{{index+1}}</div>
        <div class="picture">
          <img :src="item.avatar || require('../images/11.jpg')" alt />
        </div>
        <div class="Nickname">{{item.name}}</div>
        <div class="score">{{item.bankf}}分</div>
      </div> 
    </div>
    <div class="oneself">
      <div class="oneself-picture">
        <img :src="avatar || require('../images/11.jpg')" />
      </div>
      <div class="oneself-Nickname">
        <span class="name">{{usename}}</span>
        <!-- <span class="ranking">第二名</span> -->
        <div class="oneself-score">{{paimin}}名</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      me:'', //排行榜
      userId:'',
      paimin:'', //用户排行
      usename:'',
      avatar:'',
    }
  },
  methods:{
    async rank(){
      const res =await this.$axios.get('/users/pai/'+this.userId)
      // console.log(res)
      this.me = res.data.data.arr
      this.paimin = res.data.data.paimin
    },
    async put2() {
      //查看用户当前成绩和名字
      const res3 = await this.$axios.get("/users/" + this.userId);
      // console.log(res3);
      this.usename = res3.data.data.name;
      this.avatar = res3.data.data.avatar
      // console.log(this.avatar)
    }
  },
  created(){
    this.userId = localStorage.getItem('userId')
    // console.log(this.userId)
    this.rank()
    this.put2()
  }
};
</script>

<style lang="less" spoced>
html,
body {
  width: 100%;
  height: 100%;
}
#appc {
  background-color: pink;
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: #fff;
   background: url(../images/bg4.jpg) no-repeat;
    background-size: 100% 100%;
    height: 100%;
  .trophy {
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    img {
      width: 2rem;
      height: 2rem;
    }
  }
  .rank {
    font-size: 20px;
    width: 3rem;
    height: 1rem;
    text-align: center; //文字居中
    line-height: 1rem; //行高  用于文字居中
    background-color: blue;
    margin: 0 auto;
    border-radius: 6px;
  }
  .content {
    border-radius: 7px;
    width: 7rem;
    height: 6rem;
    margin: 0 auto;
    margin-top: 0.3rem;
    background: #2B1E64;
    display: flex;
    flex-direction: column; //竖向布局
    justify-content: space-between; //均匀分布
    &::before{
      content: '';
      display: block;
    }
    &::after{
      content: '';
      display: block;
    }
    .personal {
      width: 90%;
      height: 1rem;
      margin: 0 auto;
      margin-top: 0.2rem;
      display: flex;
      justify-content: space-around;
      .number{
        height: .8rem;
        width: 0.8rem;
        line-height: .8rem;
        text-align: center;
        font-size: 30px;
      }
      .picture {
        img {
          width: .8rem;
          height: .8rem;
          border-radius: 50%;
          border: 1px solid white;
        }
      }
      .Nickname {
        height: .8rem;
        width: 50%;
        margin: 0 auto;
        line-height: .8rem;
      }
      .score {
        height: .8rem;
        width: 1rem;
        line-height: .8rem;
        text-align: center;
      }
    }
  }
  .oneself {
    // background-color: orange;
    width: 7rem;
    height: 1rem;
    margin: 0 auto;
    margin-top: 0.3rem;
    display: flex;

    .oneself-picture {
      z-index: 1;

      img {
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        border: 1px solid white;
      }
    }
    .oneself-Nickname {
      height: .8rem;
      width: 7rem;
      background-color: #372D6C;
      margin-left: -0.8rem;
      border-radius: 25px;
      margin-top: .14rem;
      .name {
        display: inline-block;
        margin-left: 1.2rem;
        font-size: 10px;
        margin-top: .1rem;
      }
      .ranking {
        display: inline-block;
        margin-left: 0.32rem;
        font-size: 10px;
        margin-top: .1rem;
      }
      .oneself-score {
        margin-left: 1.2rem;
        font-size: 14px;
        margin-top: .15rem;
      }
    }
  }
}
</style>