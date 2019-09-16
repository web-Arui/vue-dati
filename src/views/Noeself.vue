<template>
  <div id="app2">
    <div class="cover">
      <img src="../images/xk.jpg" />
      <main>
        <i class="iconfont icon-fanhui1" @click="black"></i>
        <span @click="setUp">设置</span>
      </main>
    </div>
    <div class="chart">
      <img class="img" src="../images/chart.jpg" />
    </div>
    <div class="food">
      <div class="introduce">
        <div class="name">
          <h2>{{name}}</h2>
        </div>
        <p>个人简介：本人性格开朗、稳重、有活力，待人热情、真诚；工作认真负责，积极主动，能吃苦耐劳，用于承受压力，勇于创新；有很强的组织能力和团队协作精神，具有较强的适应能力；纪律性强，工作积极配合；意志坚强，具有较强的无私奉献精神。</p>
      </div>
      <div class="box">
        <div class="sonBox">
          <div class="icon" @click="toRoute">
            <img src="../images/fb-h.png" alt />
          </div>
          <div class="title">发表评论</div>
        </div>
        <div class="sonBox">
          <div class="icon" @click="toRoute">
            <img src="../images/gr-hh.png" alt />
          </div>
          <div class="title">编辑简介</div>
        </div>
        <div class="sonBox">
          <div class="icon" @click="toRoute">
            <img src="../images/rz-h.png" alt />
          </div>
          <div class="title">考试日志</div>
        </div>
        <div class="sonBox">
          <div class="icon" @click="toRoute">
            <img src="../images/gd-h.png" alt />
          </div>
          <div class="title">更多</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: "../images/fb-h.png",
      name:''
    };
  },
  methods: {
    async getUser(){
      const userId = localStorage.getItem('userId')
  
     const res = await  this.$axios.get('/users/'+userId)
     const {name} = res.data.data
     this.name = name
  
    },
    toRoute(e) {
      let icon = document.querySelectorAll(".icon");//获取icon类
      for (let i = 0; i < icon.length; i++) {
        icon[i].classList.remove("backgroundColor");//删除backgroundColor类
        icon[i].nextSibling.classList.remove("Color");//删除下一个兄弟节点的Color类
        // console.log(icon[i].nextSibling);
      }
      e.currentTarget.classList.add("backgroundColor");//添加backgroundColor类
      e.currentTarget.nextSibling.classList.add("Color");//添加下一个兄弟节点的Color类

      // this.path="./images/fb.png";
      // e.currentTarget.style.backgroundColor ="skyblue";
      // e.currentTarget.nextSibling.style.color="skyblue";
    },
    black(){ //返回
      this.$router.go(-1)
    },
    setUp(){ //设置
      this.$router.push({name:'setup'})
    }
  },
  created(){
    this.getUser()
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
#app2 {
  font-size: 16px;
  p {
    text-indent: 2em;
    margin-top: 1rem;
  }

  .cover {
    // position: relative;
    img {
      width: 100%;
      height: 3rem;
    }
    main{
      width: 90%;
      color: white;
      position: absolute;
      left: .4rem;
      top: .3rem;
      i{
        font-size: 16px;
      }
      span{
        float: right;
      }
    }
  }
  .chart {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
    .img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      margin-top: -1.8rem;
    }
  }
  .food {
    width: 100%;
    height: 6rem;
    background-color: #ffffff;
    margin-top: -5.8rem;
    .introduce {
      width: 100%;
      .name {
        width: 1rem;
        margin: 0 auto;
        margin-top: 4.5rem;
      }
    }
    .box {
      width: 100%;
      height: 3rem;
      margin-left: -0.5rem;
      margin-top: 1.6rem;
      display: inline-flex;
      justify-content: space-between; //均匀分布
      &::after{
        content: '';
        display: block;
      }
      &::before{
        content: '';
        display: block;
      }
      .sonBox {
        width: 1rem;
        height: 2rem;
        margin-left: 0.5rem;
        .icon.backgroundColor {
          background-color: skyblue;
        }
        .title.Color {
          color: skyblue;
        }
        .icon {
          width: 1.4rem;
          height: 1.4rem;
          border-radius: 50%;
          background: rgb(189, 205, 212);
          //   color: skyblue;
          //   opacity: 0.3; //半透明

          img {
            width: 1rem;
            height: 1rem;
            margin: 0.2rem;
          }
        }
        .title {
          width: 1.4rem;
          height: 0.4rem;
          color: rgb(1, 16, 22);
          text-align: center;
        }
      }
    }
  }
}
</style>