<template>
  <div id="box1">
    <!-- <transition name="fade-enter"> -->
      <slot></slot>
      <!-- </transition> -->
  </div>
</template>

<script>


export default {
  name:'Index',
  data() {
    return {
   
   
    };
  },
  
  created(){
    // var {tan} = this.$refs
    // console.log(tan)
    // console.log(this.$refs.flag)
    // console.log(this.$parent)
  },
  
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
#box1 {
  font-size: 16px;
  background: url(../images/login.jpg) no-repeat;
  background-size: cover; //背景自适应
  width: 100%;
  height: 100%;
  position: fixed;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
