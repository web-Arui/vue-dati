<template>
  <div id="aapp">
    <!-- <div class="flower">
    </div> -->
   <div class="zt">
     
     <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><img src="../images/11.jpg"></swiper-slide>
    <swiper-slide><img src="../images/11.jpg"></swiper-slide>
    <swiper-slide><img src="../images/11.jpg"></swiper-slide>
    <swiper-slide><img src="../images/11.jpg"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
   </div>
   <div class="fu">
     <div class="fu-left">
       <div class="di" @click="begin"><i class="iconfont icon-shandian"></i> <span>一战到底</span></div>
       <div class="me" @click="myMe"><i class="iconfont icon-gerenzhongxin"></i><span>个人中心</span></div>
     </div>
     <div class="fu-right" @click="ranki">
         <img src="../images/paihang.png" alt="">
       <span>排行榜</span>
     </div>
   </div>
  </div>
</template>

<script>
 
export default {
  data(){
    return{
      swiperOption: {
          autoplay: {
            delay: 5000,//1秒切换一次
          },
          pagination: {
            el: '.swiper-pagination',
          },
          loop : true,
        }
    }
  },
  methods:{
    begin(){
      this.$router.push({name:'guanka'})
    },
    ranki(){
      this.$router.push({name:'ranking'})
    },
    myMe(){
      this.$router.push({name:'noeself'})
    }
  }
}
</script>
<style lang="less" scpoed>
  #aapp{
    background: url(../images/bg4.jpg) no-repeat;
    background-size: 100% 100%;
    font-size: 16px;
    height: 100%;
    .flower{
      width: 100%;
      height: .8rem;
      background-image: linear-gradient(45deg,#216B85 25%,#022A4A 0,#022A4A 50%,#216B85 0,#216B85 75%,#022A4A 0);
      background-size: 40px 40px;
      
    }
    .zt{
      width: 100%;
      height: 2.5rem;
      margin: 0 auto;
      border-radius: 10px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .fu{
      padding-top: 2.8rem;
      width: 87%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .fu-left{
        width: 3rem;
        height: 3.8rem;
        // border: 1px solid pink;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .di{
          width: 100%;
          height: 1.2rem;
          border-radius: 12px;
          text-align: center;
          line-height: 1.2rem;
          background-color: #eb5d1f;
          background-image: linear-gradient(147deg, #eb5d1f 0%, #ec8634 74%);
          box-shadow:2px 1px 6px #EB5D1F, 0px 2px 5px #333333;
          color: white;
          i{
            font-size: 20px;
            margin-right: .08rem;
          }
          span{
            font-size: 20px;
          }
        }
        .me{
          width: 100%;
          height: 1.2rem;
          border-radius: 12px;
          text-align: center;
          line-height: 1.2rem;
          background-color: #7db056;
          background-image: linear-gradient(147deg, #7db056 0%, #53b45c 74%);
          box-shadow:2px 3px 6px #77B056, 0px 2px 5px #333333;
          color: white;
          i{
            font-size: 20px;
            margin-right: .08rem;
          }
          span{
            font-size: 20px;
          }
        }
      }
      .fu-right{
        width: 3rem;
        height: 3.8rem;
        border-radius: 12px;
        text-align: center;
        background-color: #066ed3;
        background-image: linear-gradient(147deg, #066ed3 0%, #24a9ff 74%);
        box-shadow:2px 3px 6px #066ed3, 0px 2px 5px #333333;
        color: white;
        display: flex;
        flex-direction: column;
          img{
            width: 88%;
            height: 71%;
            margin: 0 auto;
          }
          span{
            margin-top: .2rem;
            font-size: 20px;
          }
      }
    }
  }
</style>
