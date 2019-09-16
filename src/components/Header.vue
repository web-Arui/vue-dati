<template>
  <div id="tou">
      <main>
        <i class="iconfont icon-fanhui1" @click="returns"></i>
        <span>{{title}}</span>
      </main>
  </div>
</template>

<script>
export default {
    name:'headers',
    data(){
        return{

        }
    },
    props:{
        title:{
            type:String,
            default:'标题'
        }
    },
    methods:{
        returns(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scoped>
    #tou{
        main{
            height: 0.8rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            i{
                line-height: .8rem;
                font-size: 16px;
                color: white;
                margin-left: .3rem;
            }
            span{
                line-height: .8rem;
                margin-right: 50%;
                transform: translateX(50%);
                color: white;
                font-size: 26px;
            }
        }
    }
</style>