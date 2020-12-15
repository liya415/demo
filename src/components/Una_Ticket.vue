<template>
    <div class="Una_Ticket">
       <div class="t1">
           <ul>
               <li>
                   <!-- <span>兰州</span> -->
                   <span>{{ticket.beginStation}}</span>
                   <span>{{ticket.beginTime}}</span>
               </li>
               <li>
                   <p>
                       <span>{{ticket.trainNum}}</span>
                       <span>经停站</span>
                    </p>
                   <span>历时16小时25分</span>
               </li>
               <li>
                   <span>{{ticket.endStation}}</span>
                   <span>13:25</span>
               </li>
           </ul>
           <!-- <p>发车时间:2020年12月04日  周五</p> -->
           <p>发车时间:{{ticket.setOutDay}}</p>
       </div>
       <div class="t2">
           <p class="p1">
               <span><b>{{ticket.peeName}}</b></span>&nbsp;
               <span>（中国居民身份证）</span>&nbsp;
               <span>{{ticket.ticketType}}</span>
               <span>￥ {{$store.state.price}}</span>
           </p>
           <p class="p2">
               <span>{{ticket.seatType}} </span>
               <span>14车 </span>
               <span>010号 </span>
               <span>退改说明</span>
           </p>
       </div>
    </div>
</template>

<script>
import axios from "axios";
    export default{
        name:"Una_Ticket",
        data(){
            return {
                ticket:{}
            }
        },
        created(){
            
            // let ss=sessionStorage();
            // ss.setItem("hy","j")
            // // ss.get
            // console.log(ss.getItem());
            axios({
                method:"post",
                url:"/getUnpaidTicket",
                headers: {'Content-Type': 'application/json'},
                data:{
                    userAccount:localStorage.getItem("userAccount")
                }
            }).then(res=>{
                // console.log("res.data",res.data.info[0]);
                this.ticket=res.data.info[0]; 
                }
            );
        }
    }
</script>

<style scoped>
.Una_Ticket{
    height: 1.9rem;
    margin: 0 0.15rem;
    background-color: #fcfcfc;
    position: relative;
    top: -0.2rem;
}
.Una_Ticket .t1{
    height: 1.1rem;
    overflow: hidden;
    background-color: #fff;
}
.Una_Ticket .t1 ul{
    margin: 0.18rem 0;
    height: 0.45rem;
    padding: 0 0.15rem;
    display: flex;
    justify-content: space-between;
}
.Una_Ticket .t1 ul li:nth-of-type(3){
    text-align: right;
}
.Una_Ticket .t1 li>span:nth-of-type(1){
    font-size: 0.12rem;
    color: #323232;
}
.Una_Ticket .t1 li>span{
    display: block;
}
.Una_Ticket .t1 li>span:nth-of-type(2){
    font-size: 0.2rem;
    color: #000;
}
.Una_Ticket .t1 li p span:nth-of-type(2){
    background-color: #e5f1ff;
    color: #93c5fa;
    font-size: 0.1rem;
    margin-left: 0.05rem;
    padding: 0.01rem;
}
.Una_Ticket .t1 li:nth-of-type(2)>span{
    font-size: 0.1rem;
    color: #b8b8b8;
}
.Una_Ticket .t1 li>p{
    margin-bottom: 0.08rem;
    
}
.Una_Ticket .t1 li>p span:nth-of-type(1){
    font-size: 0.12rem;
}
.Una_Ticket .t1 li:nth-of-type(2){
    padding-right: 0.1rem;
    background: url(../assets/arder/img/jt.png) no-repeat 0 0.2rem;
    background-size: 0.8rem;
}
.Una_Ticket .t1>p{
    font-size: 0.12rem;
    color: #767676;
    margin-left: 0.15rem;
}

.Una_Ticket .t2{
    height: 0.75rem;
    padding: 0 0.15rem;
    background-color: #fff;
}
.Una_Ticket .t2 span{
    font-size: 0.12rem;
    float: left;
}
.Una_Ticket .t2 p{
    line-height: 0.3rem;
    height: 0.3rem;
}
.Una_Ticket .t2 .p1 span:nth-of-type(2){
    font-size: 0.1rem;
    color: #ababab;
}
.Una_Ticket .t2 .p1 span:nth-of-type(3){
    border: 0.01rem solid #b4d7f9;
    border-radius: 0.02rem;
    /* height: 0.18rem; */
    font-size: 0.1rem;
    color: #b4d7f9;
    line-height: 0.1rem;
    padding: 0.03rem 0.05rem;
    margin-top: 0.05rem;
}
.Una_Ticket .t2 .p1 span:last-child{
    float: right;
    color: #feaf5c;
}
.Una_Ticket .t2 .p2 span:last-child{
    float: right;
    color: #80b9ec;
    text-decoration: underline;
}
.Una_Ticket .t2 p span{
    margin-right: 0.05rem;
}
</style>