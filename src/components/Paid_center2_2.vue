<template>
    <div class="box">

        <div v-for="(noe,app) in noes" :key="app">
            <div class="box1">
                <!-- <h2>C8523 西安-蒲城东</h2> -->
                <h2>{{noe.trainNum}} {{noe.beginStation}}-{{noe.endStation}}</h2>
                <h3>查看详情 ></h3>
            </div>
            <div class="box2">
                <ul>
                    <!-- <li>订单号:E088948134</li> -->
                    <li>订单号:{{noe.orderNum}}</li>
                    <li>发车时间：{{noe.beginDay}} {{noe.beginTime}}开</li>

                    <!-- <li>发车时间：2020-12-13 21：23开</li> -->
                    <li>总张数：1张 {{noe.peeName}} {{noe.seatType}} {{noe.ticketType}}</li>
                    
                </ul>
                <!-- <p>已支付</p> -->
                <p>{{noe.orderStatus}}</p>
            </div>
        </div>
    </div>

</template>

<script>
import axios from "axios";
export default {
    name:"Paid_center2_2",
    data(){
            return {
                noes:[],
                // num:10
            }
        },
        created(){
            axios({
                method:"post",
                url:"/getPaidTicket",
                data:{
                    userAccount:localStorage.getItem("userAccount")
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res=>{
                 console.log("res.data",res.data);
                this.noes=res.data.info;
               
            }
            );
        }
}
</script>

<style scoped>
.box{
    height: 1.2rem;
    background-color: #ffffff;
    /* padding:0 18px 0 0; */
    margin-top: 0.1rem;
}

.box1{
    width: 100%;
    height: 0.41rem;
    /* background-color: yellow; */
    /* float: left; */
    line-height: 0.41rem;
    background-color: #fff;
}
.box1 h2{
    color: #323232;
    font-size: 16px;
    float: left;
    line-height: 0.41rem;
    margin-left: 0.13rem;
}

.box1 h3{
    color: #868686;
    font-size: 10px;
    float: right;
    margin-right: 0.06rem;
}

.box2{
    height: 0.83rem;
    background-color:#fff;
    margin-bottom: 0.1rem;
    /* line-height: 0.41rem; */
}

.box2 ul{
    float: left;
    margin-left: 0.13rem;
}

.box2 li{
    list-style: none;
    color: #8a8a8a;
    margin-top: 0.08rem;
    font-size: 0.09rem;
}

.box2 p{
    color: #03b77f;
    float: right;
    font-size: 0.09rem;
    margin-right: 0.06rem;
    margin-top: 0.08rem;
}
</style>

