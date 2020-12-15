<template>
    <div class="Una_Back">
            <span>购买返程</span>
            <span>去购买 ></span>
    </div>
</template>

<script>
    export default{
        name:"Una_Back",
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
.Una_Back{
    margin: 0 0.15rem;
    height:0.5rem;
    border-radius: 0.05rem;
    background: url(../assets/arder/img/fj.png) no-repeat left bottom;
    background-size: 0.9rem 0.25rem;
    background-color: #f5fafe;
}
.Una_Back span:first-child{
    float: left;
    font-size: 0.12rem;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
}
.Una_Back span:last-child{
    float: right;
    color: #a4a4a4;
    font-size: 0.1rem;
    margin-top: 0.2rem;
    margin-right: 0.15rem;
}
</style>