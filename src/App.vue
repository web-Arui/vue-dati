<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
 document.addEventListener("DOMContentLoaded", ()=>{
     // 获取html宽度 浏览器兼容 苹果5默认html font-size 16px
    let htmlWidth =
      document.documentElement.clientWidth || document.body.clientWidth;
    // 获取html对象
    let htmlDom = document.getElementsByTagName("html")[0];
    // 页面宽度固定不能大于750
    if(htmlWidth>750){
      htmlWidth = 750
    }
// 网易的方案
    // 苹果6 物理375px 设计稿750px  375/3.75=100  1rem=100px  375/7.5=100 1rem = 50px
    htmlDom.style.fontSize = htmlWidth / 7.5 + 'px';
  })
export default {
  data(){
    return{
      tan:''
    }
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
	    //设置动画名称
        this.tan = 'slide-left';
      }else{
        this.tan = 'slide-right';
      }
    }
  } 

}
</script>

<style>
  body,html{
    height: 100%;
  }
  #app{
    height: 100%;
  }
</style>