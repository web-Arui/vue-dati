<template>
    <div id="begin" class="begin">
         <div class="loading"></div>
    </div> 
</template>

<script>
export default {
    name:'loading'
}
</script>

<style scoped>
    .begin{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    
}

.loading{
    width: 200px;
    height: 200px;
    position: relative;
}
.loading::before,.loading::after{
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: black;
    border-radius: 50%;
    animation: load 1.7s linear infinite;
}
.loading::after{
    animation-delay: 0.7s;
}
@keyframes load{
    0%{
        width: 0;
        height: 0;
        opacity: 1;
    }
    100%{
        width: 60px;
        height: 60px;
        opacity: 0;
    }
}
</style>
