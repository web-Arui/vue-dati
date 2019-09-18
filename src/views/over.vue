<template>
  <div id="appcc">
    <div class="sbk"></div>
    <div class="header">
      <img src="../images/gl.png" alt />
    </div>
    <div class="main">《星月夜》（The Starry Night）是荷兰后印象派画家文森特·梵·高于1889年在法国圣雷米的一家精神病院里创作的一幅油画</div>
    <div class="food">
      <div class="prize">领奖</div>
      <div class="return" @click="back">返回首页</div>
    </div>
    <div class="xbk"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    back(){
      this.$router.push({name:'home'})
    }
  }
};
</script>

<style lang="less" scoped>

#appcc {
 font-size: 16px;
  color: #eff3f3;
  width: 100%;
  height: 100vh;
//   border: 1px solid #0a39d0;
  background-image: url(../images/tgbj.jpg);
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
  .sbk{
    width: 40%;
    height: 0.05rem;
    background-color: #7779b3;
    margin: 0 auto;
    margin-top: -1.2rem;
    border-radius: 25px;
    // margin-top: -1.21rem;
  }
  .xbk{
    width: 40%;
    height: 0.05rem;
    background-color: #7a78b2;
    margin: 0 auto;
    margin-bottom: -1.2rem;
    border-radius: 25px;
    // margin-bottom: -1.21rem; 
  }
  .header {
    width: 4rem;
    height: 4rem;
    background-color: #b5ddec;
    margin: 0 auto;
    margin-top: .5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
  }
   .main {
    width: 80%;
    height: 2rem;
    margin: 0 auto;
    margin-top: .5rem;
    // text-align: center;
    text-indent: 2em; //首行缩进
    font-size: 16px;
  }
  .food {
    width: 80%;
    height: 2rem;
    margin: 0 auto;
    margin-top: -0.5rem;
    display: flex;
    flex-direction: column; //竖向布局
    align-items: center;
    div {
      width: 60%;
      height: 1rem;
      margin-top: .25rem;
      border-radius: 25px;
      text-align: center;
      line-height: 1rem;
      color: #eff3f3;
    //   font-size: 12px;
    }
    .prize{
      background-color: #ef6e5a;
    
    }
    .return{
      background-color: #91ba39;
      
    }
  }
}
</style>