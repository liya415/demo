<template>
    <div class="Pass_Top11">
        <h1>乘车人
            <span @click="fn">完成</span>
        </h1>
    </div>
</template>

<script>
    export default{
        name:"addtrainertop",
        data(){
            return {

            }
        },
        methods:{
            fn(){
                this.$router.push('./configorder');
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
.Pass_Top11 h1{
    width: 100%;
    height: 0.5rem;
    font-size: 0.18rem;
    color: #fff;
    line-height: 0.5rem;
    text-align: center;
    font-weight: normal;
    background: url(../assets/configorder/arrow.png) no-repeat 0.17rem ;
    background-size: 0.12rem 0.18rem;
}
.Pass_Top11 h1 span {
    position: absolute;
    font-size: 14px;
    color: #fff;
    right:20px ;
    top: 0px;
}
</style>