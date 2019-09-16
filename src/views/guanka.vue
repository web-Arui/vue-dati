<template>
  <div id="tan">
    <Headers title="一战到底"/>
    <!-- <div class="blockDiv">
      <div @click="answers"><img src="../images/999_04.png" alt=""><span>1</span></div>
      <div @click="answers"><img src="../images/999_05.png" alt=""><span>2</span></div>
      <div @click="answers"><img src="../images/999_06.png" alt=""><span>3</span></div>
      <div @click="answers"><img src="../images/999_07.png" alt=""><span>4</span></div>
      <div @click="answers"><img src="../images/999_08.png" alt=""><span>5</span></div>
      <div @click="answers"><img src="../images/999_09.png" alt=""><span>6</span></div>
      <div @click="answers"><img src="../images/999_10.png" alt=""><span>7</span></div>
      <div @click="answers"><img src="../images/999_11.jpg" alt=""><span>8</span></div>
      <div @click="answers"><img src="../images/999_12.png" alt=""><span>9</span></div>
    </div> -->
    <div class="blockDiv">
      <div @click="answers(index)" v-for="(item,index) in tan" :key="index"><img :src="require(`@/images/999_${item+3}.png`)"><span>{{item}}</span></div>
    </div>
    
    <div class="explain">
      <div class="shang"></div>
      <h2>一战到底说明</h2>
      <div class="xia"></div>
      <p>box-shadow:阴影水平偏移值（可取正负值）； 阴影垂直偏移值（可取正负值）；阴影模糊值；阴影颜色</p>
      <div class="last"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      tan:[1,2,3,4,5,6,7,8,9]
    }
  },
  methods:{
    answers(index){
      // console.log(index)
      this.$router.push({name:'answer',query: { plan: index }})
    }
  },
 
};
</script>

<style lang="less" scoped>
#tan {
  width: 100%;
  background: url(../images/bg4.jpg) no-repeat;
    background-size: 100% 100%;
    font-size: 16px;
    height: 100%;
  .blockDiv {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 1rem;
    div {
      width: 26%;
      margin-top: 2%;
      height: 10%;
      color: white;
      position: relative;
      img{
        width: 100%;
        height: 100%;
        border-radius: 3px;
      }
      span{
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 40px;
        color: white;
      }
    }
  }
    .explain{
    width: 82%;
    height: 3rem;
    font-size: 16px;
    border: 4px solid #221042;
    margin: 0 auto;
    margin-top: 1rem;
    background: #221042;
    border-radius: 5px;
    box-shadow: 0 0 0 2px #142CAB inset;
    position: relative;
    .shang{
      border-top: 2px solid #787569;
      width: 1rem;
      margin: 0 auto;
    }
    h2{
      text-align: center;
      color: white;
      margin-top: .3rem;
    }
    .xia{
      border-bottom: 2px solid white;
      width: .5rem;
      margin: 0 auto;
      margin-top: .3rem;
    }
    p{
      color: white;
      width: 80%;
      margin: 0 auto;
      margin-top: .5rem;
      font-size: 10px;
    }
    .last{
      border-top: 2px solid #787569;
      width: 1rem;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>