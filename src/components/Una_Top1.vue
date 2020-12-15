<template>
    <div class="Una_Top1">
        <h1><router-link to="/Arder"><span></span></router-link>未完成</h1>
    </div>
</template>

<script>
    export default{
        name:"Una_Top1",
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
.Una_Top1{
    height:0.5rem;
    background-color: #3b99fb;
    position: relative;
}
.Una_Top1 h1{
    width: 100%;
    height: 0.5rem;
    font-size: 0.18rem;
    color: #fff;
    line-height: 0.5rem;
    text-align: center;
    font-weight: normal;
    
}
.Una_Top1 h1 span{
    width: 0.12rem;
    height: 0.18rem;
    position: absolute;
    left: 0.17rem;
    top: 0.16rem;
    background: url(../assets/arder/img/jiantou.png);
    background-size: 0.12rem 0.18rem;
}
</style>