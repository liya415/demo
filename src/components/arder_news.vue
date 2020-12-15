<template>
    <div class="news">
        <dl @click="toUna">
            <dt><span class="iconfont icon-dingdangdaiyinxingqiashouquan"></span></dt>
            <dd>未完成</dd>
        </dl>
        <dl>
            <router-link to="/paid">
                <dt><span class="iconfont icon-dingdan"></span></dt>
                <dd>已支付</dd>
            </router-link>
        </dl>
        <dl>
            <dt><span class="iconfont icon-ziyuan35"></span></dt>
            <dd>候补车票</dd>
        </dl>
        <dl>
            <router-link to="/myticket">
                <dt><span class="iconfont icon-suitcase"></span></dt>
                <dd>本人车票</dd>
            </router-link>
        </dl>
    </div>
</template>

<script>
import axios from "axios";
    export default{
        name:"news",
        data(){
            return {

            }
        },
        methods: {
            toUna(){
                if(localStorage.getItem("userAccount")){
                    axios({
                        method:"post",
                        url:"/getUnpaidTicket",
                        headers: {'Content-Type': 'application/json'},
                        data:{
                            userAccount:localStorage.getItem("userAccount")
                        }
                    }).then(res=>{
                        // console.log("res.data",res.data.info[0]);
                        // this.ticket=res.data.info[0]; 
                        if(res.data.info[0]){
                            this.$router.push({ path: '/unarder' })
                        }
                    });
                }else{
                    this.$router.push({ path: '/notUnarder' })
                }
            }
        },
    }
</script>

<style scoped>
.news{
    height:0.78rem;
    border-bottom: 0.01rem solid #f0f0f0;
    /* background-color: #3b99fb; */
    padding: 0 0.25rem;
    display: flex;
    justify-content: space-between;
}
.news dl{
    width: 0.48rem;
    height: 0.78rem;
    text-align: center;
}
.news dt{
    margin: 0.15rem 0 0.1rem 0;
}
.news dt span{
    font-size: 0.22rem;
    color: #1489f9;
}
.news dd{
    font-size: 0.12rem;
    color: #3f3f3f;
}
</style>