<template>
  <div id="xing">
    <Headers title="答题" />
    <main>
      <div class="x-left">
        <img src="../images/11.jpg" alt />
        <div class="x-lefts">
          <span class="firsta">挑战者</span>
          <span class="last">{{usename}}</span>
        </div>
      </div>
      <div class="x-right">
        <div>以答对</div>
        <div>
          <span class="correct">{{score}}</span>
          <span>/10</span>
        </div>
      </div>
    </main>
    <!-- <div class="content">
          <div class="box">1</div>
          <p>简洁时尚空间打开手机的；()商量的结果说的克己复礼</p>
          <div class="option">
              <label @click="tan"><input type="radio" name="a" checked="checked" value="11" v-model="radio"><div  class="tb">A.00</div></label>
              <label @click="tan"><input type="radio" name="a" value="22" v-model="radio"><div>B.00</div></label>
             <label @click="tan"><input type="radio" name="a" v-model="radio" value="33"> <div>C.00</div></label>
              <label @click="tan"><input type="radio" name="a" v-model="radio" value="44"><div>D.00</div></label>
          </div>
          <div class="option" v-for="item in lists[x]" :key="item.id">
              <label @click="tan"><input type="radio" name="a" checked="checked" :value="item.A" v-model="radio"><div  class="tb">A.{{item.A}}</div></label>
          </div>
    </div>-->
    <transition name="slide-fade">
      <div class="content" v-if="show">
        <transition name="fade">
          <div class="box" v-if="a">{{times}}</div>
          <div class="box" v-else-if="b">
            <i class="iconfont icon-zhengque1"></i>
          </div>
          <div class="box" v-else>
            <i class="iconfont icon-cuowu"></i>
          </div>
        </transition>
        <p v-if="lists">{{x+1}}. {{lists[x].title}}</p>
        <div class="option" v-if="lists">
          <label @click="tan">
            <input type="radio" name="a" checked="checked" :value="lists[x].A" v-model="radio" />
            <div>A.{{lists[x].A}}</div>
          </label>
          <label @click="tan">
            <input type="radio" name="a" :value="lists[x].B" v-model="radio" />
            <div>B.{{lists[x].B}}</div>
          </label>
          <label @click="tan">
            <input type="radio" name="a" :value="lists[x].C" v-model="radio" />
            <div>C.{{lists[x].C}}</div>
          </label>
          <label @click="tan">
            <input type="radio" name="a" :value="lists[x].D" v-model="radio" />
            <div>D.{{lists[x].D}}</div>
          </label>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      times: 15, //倒计时
      radio: "", //题的答案
      x: 0, //第几题
      show: true, //换题动画
      a: true, //倒计时
      b: false, //正确钩钩
      once: true,
      lists: "",//数据
      score:0, //答对的数量
      id:'' , //每个关卡的索引
      interval:'', //定时器
      userId:'',  //用户id
      bankf:'', //最高成绩
      usename:''//用户名字
    };
  },
  created() {
    this.userId = localStorage.getItem('userId')
    this.time();
    this.put2()
    this.id = this.$route.query.plan
    // console.log(this.$route.query.plan)
    this.$axios.get("/banks").then(res => {  //题目请求
      // console.log(res.data.data[0].bankTi)
      if (res.data.meta.msg == "ok") {
        this.lists = res.data.data[0].bankTi[this.id].zhou;
      }
    });
  },

  computed: {},
  methods: {
    time() {
      this.interval = setInterval(() => {
        if (this.times >= 0) {
          this.times = this.times - 1; //时间减1
          if (this.times < 0) {
            if (this.x < 10) {
              this.a = false;
              this.b = false; //变为错
              setTimeout(() => {
                this.show = false; //动画离开
                setTimeout(() => {
                  this.x = this.x + 1; //下一题
                  if(this.x==10){ //当位最后一页的时候不动，时间到了就跳到页面去
                    clearInterval(this.interval); //清理定时器
                    if(this.bankf<this.score*10){ //如果 用户成绩小于这次成绩,就重新赋值
                      this.put()
                    }
                    this.$router.push({name:'over'})
                  }
                  this.show = true;  //动画进入
                  this.times = 15;
                  this.a = true;
                  this.b = false; //时间出来
                  this.time()
                }, 500);
              }, 1000);
            }
          }
        } else {
          clearInterval(this.interval);
        }
      }, 1000);
    },
    tan(e) {
      if (this.once) {  //为true才能点击
        if (e.target.value) {
          if (this.once) {
             e.currentTarget.lastChild.classList.add('tb')   //点击选项变颜色
          }
          if (e.target.value == this.lists[this.x].answea && this.once) {
            this.score++
            this.a = false;
            this.b = true; //对出来
          } else {
            this.a = false;
            this.b = false; //错出来
          }
          this.once = false;
          setTimeout(() => {
            this.show = false;
            setTimeout(() => {
              this.x = this.x + 1;
              if(this.x==10){
                if(this.bankf<this.score*10){ //如果 用户成绩小于这次成绩,就重新赋值
                      this.put()
                  }
                this.$router.push({name:'over'})
              }
              this.show = true;
              this.times = 15;
              this.a = true;
              this.b = false;
              this.once = true;
            }, 500);
          }, 1000);
        }
      }
    },
    async put(){  //穿成绩给后端
      if(this.score==10){
        const res1 = await this.$axios.put('/users/bank/'+this.userId,{f:this.score*10,g:true,index:this.id})
      }else{
        const res2 = await this.$axios.put('/users/bank/'+this.userId,{f:this.score*10,g:false,index:this.id})
      }
    },
    async put2(){ //查看用户当前成绩
      const res3 = await this.$axios.get('/users/'+this.userId)
      // console.log(res3)
      this.bankf = res3.data.data.bankf
      this.usename = res3.data.data.name
    }
  },
  beforeDestroy(){
      clearInterval(this.interval);
  }
};
</script>

<style lang="less" scoped>
#xing {
  font-size: 12px;
  background: url(../images/bgq.jpg) no-repeat;
  background-size: 100% 100%;
  font-size: 16px;
  height: 100%;
  main {
    width: 80%;
    height: 1.4rem;
    border-radius: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.6rem;
    background: #372d6d;
    .x-left {
      display: flex;
      margin-left: 0.06rem;
      img {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        margin-left: 0.2rem;
      }
      .x-lefts {
        display: flex;
        height: 0.8rem;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 0.1rem;
        .firsta {
          margin: 2px 0;
          font-size: 8px;
          color: white;
        }
        .last {
          color: red;
          font-size: 11px;
        }
      }
    }
    .x-right {
      height: 0.8rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-right: 6px;
      color: white;
      font-size: 11px;
      div {
        .correct {
          color: red;
          font-size: 18px;
        }
      }
    }
  }
  .content {
    width: 80%;
    height: 8rem;
    margin: 0 auto;
    margin-top: 1.2rem;
    border-radius: 12px;
    background: white;
    border: 1px solid white;
    .box {
      width: 0.9rem;
      height: 0.9rem;
      border: 3px solid white;
      border-radius: 50%;
      box-shadow: 0 0 0 4px #ef6d23 inset;
      margin: 0 auto;
      margin-top: -0.5rem;
      background: white;
      line-height: 0.9rem;
      text-align: center;
      color: #ef6d23;
    }
    p {
      width: 80%;
      margin: 0 auto;
      margin-top: 0.8rem;
    }
    .option {
      height: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 0.5rem;
      &::before{
      content: '';
      display: block;
    }
    &::after{
      content: '';
      display: block;
    }
      input {
        display: none;
      }
      div {
        width: 80%;
        height: 0.8rem;
        border-radius: 30px;
        margin: 0 auto;
        text-align: center;
        line-height: 0.8rem;
        background: #7d8a9e;
        color: white;
      }
      .tb {
        background-color: #ef6d23;
        background-image: linear-gradient(120deg, #ef6d23 0%, #ffbb25 74%);

        transition: all .4s ease;
      }
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>