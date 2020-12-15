<template>
    <div class="Una_Safe">
        <div class="box1">
            <div class="a1">中国铁路保险，全方位守护您的路程安全</div>
            <div class="a2">
                <div>
                    <span>铁路乘意险</span>
                    <span>旅程安心 | 保额</span>
                    <span>55万</span>
                </div>
                <div>
                    <span>￥3/人</span>
                    <input type="radio" @click="unchecked">
                </div>
            </div>
            <div class="a3">
                <p>请阅读<span>[保险条款]</span>和<span>投保须知</span>。</p>
                <span>可登录铁路保险公司官网http://www.china-ric.com/开具电子发票</span>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default{
        name:"Una_Safe",
        data(){
            return {
                flag:false
            }
        },
        methods:{
            unchecked(e){
                // this.flag=!this.flag;
                this.$store.commit({
                    type:"change"
                });
                e.target.checked=this.$store.state.flag;
            }
        }
    }
</script>

<style scoped>
.Una_Safe{
    height:1.66rem;
    padding: 0.08rem 0.15rem;
    background-color: #fcfcfc;
}
.box1{
    height:1.5rem;
    border-radius: 0.05rem;
    background-color: #fff;
}
.a1{
    height: 0.35rem;
    background: url(../assets/arder/img/bx.png) no-repeat 0.1rem;
    background-size: 0.16rem 0.16rem;
    background-color: #e4f2fe;
    font-size: 0.12rem;
    line-height: 0.35rem;
    text-indent: 0.34rem;
}
.a2{
    height: 0.6rem;
}
.a2 div:nth-of-type(1){
    float: left;
    font-size: 0.12rem;
    color: #3d3d3d;
    margin-left: 0.15rem;
}
.a2 div:nth-of-type(1) span:nth-of-type(1){
    display: block;
    margin: 0.12rem 0 0.1rem 0;
}
.a2 div:nth-of-type(1) span:nth-of-type(2){
   color: #a0a0a0;
   font-size: 0.1rem;
}
.a2 div:nth-of-type(2){
    float: right;
    color: #363636;
    font-size: 0.12rem;
    line-height: 0.6rem;
    margin-right: 0.15rem;
}
.a2 div span:nth-of-type(3){
    color: #f0aa59;
}
.a2 div:nth-of-type(2) input{
    width: 0.16rem;
    height: 0.16rem;
    float: right;
    margin-top: 0.23rem;
    margin-left: 0.1rem;
}
.a3{
    height: 0.55rem;
    border-top: 0.02rem solid #f7f7f7;
    margin-left: 0.15rem;
}
.a3 p{
    font-size: 0.1rem;
    color: #b4b4b4;
    line-height: 0.4rem;
}
.a3 p span{
    color: #1482f5;
    margin: 0 0.1rem;
}
.a3>span{
    font-size: 0.1rem;
    color: #313131;
    display: block;
    /* margin-top: ; */
}
</style>