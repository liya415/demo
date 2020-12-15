<template>
    <div class="Una_Footer">
       <div>总金额:<span>￥{{$store.state.flag?$store.state.price+3:$store.state.price}}</span>&nbsp;&nbsp;^</div>
       <div>
            <span @click="t">取消订单</span>
            <span>立即支付</span>
        </div>
        <div class="t" v-show="isShow">
            <h2>温馨提示</h2>
            <p>一天内3次申请车票成功后取消订单，当日将不能在12306继续购票！</p>
            <button @click="T">关闭</button>
            <button @click="gt">确认取消</button>
        </div>
    </div>
</template>

<script>
    export default{
        name:"Una_Footer",
        data(){
            return {
                isShow:false
            }
        },
        methods:{
            t(){
                this.isShow=true;
            },
            T(){
                this.isShow=false;
            },
            gt(){
                this.$router.push("/arder");
            }
        }
    }
</script>

<style scoped>

.Una_Footer{
    width:100%;
    height:0.5rem;
    background-color: #fafafa;
    line-height: 0.5rem;
    position: relative;
}

.Una_Footer div:nth-of-type(1){
    float: left;
    font-size: 0.12rem;
    color: #ababab;
    margin-left: 0.15rem;
}
.Una_Footer div:nth-of-type(1) span{
    font-size: 0.14rem;
    color: #fc7700;
}

.Una_Footer div:nth-of-type(2){
    float: right;
}
.Una_Footer div:nth-of-type(2) span:nth-of-type(1){
    font-size: 0.14rem;
    color: #747474;
}
.Una_Footer div:nth-of-type(2) span:nth-of-type(2){
    font-size: 0.14rem;
    font-weight: bold;
    color: #fff;
    float: right;
    width: 0.95rem;
    height: 0.5rem;
    background-color: #ff972e;
    text-align: center;
    margin-left: 0.2rem;
}
.Una_Footer .t{
    width: 2.6rem;
    height: 1.9rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -3.5rem;
    background-color: #fff;
    border-radius: 0.08rem;
    border: 1px solid #f5f5f5;
    color: #fff;
}
.Una_Footer .t h2{
    text-align: center;
    font-size: 0.16rem;
    line-height: 0.65rem;
}
.Una_Footer .t p{
    font-size: 0.12rem;
    color: #c2c5c8;
    line-height: 0.26rem;
    padding: 0 0.15rem;
    letter-spacing: 0.02rem;
}
.Una_Footer .t button{
    width: 0.9rem;
    height: 0.34rem;
    border-radius: 0.05rem;
    border: 0.01rem solid #3b99fb;
    line-height: 0.34rem;
    margin-right:0.1rem ;
    outline: none;
    font: 0.13rem/0.34rem "微软雅黑";
    color: #fff;
}
.Una_Footer .t button:nth-of-type(1){
    background-color: #fff;
    margin-left: 0.35rem;
    margin-top: 0.1rem;
    color: #000;
}
.Una_Footer .t button:nth-of-type(2){
    background-color: #3b99fb;
}
</style>