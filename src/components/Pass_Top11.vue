<template>
    <div class="Pass_Top11">
        <router-link to="/mineList">
            <img src="../assets/arder/img/jiantou.png" alt="">
        </router-link>
        <h1>乘车人
            <span>添加</span>
        </h1>
    </div>
</template>

<script>
    export default{
        name:"Pass_Top11",
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
.Pass_Top11{
    height:0.5rem;
    background-color: #3b99fb;
    position: relative;
}
.Pass_Top11 img{
    width: 0.12rem;
    height: 0.18rem;
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
}
.Pass_Top11 h1{
    width: 100%;
    height: 0.5rem;
    font-size: 0.18rem;
    color: #fff;
    line-height: 0.5rem;
    text-align: center;
    font-weight: normal;
}
.Pass_Top11 h1 span {
    position: absolute;
    font-size: 14px;
    color: #fff;
    right:20px ;
    top: 0px;
}
</style>