<template>
  <div id="Myticket">
    <div class="top">
      <router-link to="/arder" class="toArder">
        <span>{{leftArrow}}</span>
      </router-link>
      <span>本人车票</span>
      <span class="last">筛选</span>
    </div>
    <div class="tishi">
      <img src="../assets/Login_img/3.jpg" alt /> 只显示当前12306账号本人"
      <span>{{getuserAccount}}</span>"的出行车票信息。
    </div>
    <ul class="ticketList">
      <li class="ticket" v-for="(item,index) in tickets" :key="index">
        <h4>
          乘车日期
          <span>{{item.beginDay}}</span>
        </h4>
        <div class="ticket_box">
          <div class="box_top">
            <div class="box_left">
              <span>{{item.beginStation}}</span>
              <p>{{item.beginTime}}</p>
            </div>
            <div class="box_center">
              <span class="span">{{item.trainNum}}</span>
              <img src="../assets/Login_img/4.jpg" alt />
            </div>
            <div class="box_right">
              <span>{{item.endStation}}</span>
              <p>{{item.beginTime}}</p>
            </div>
          </div>
          <div class="box_bottom">
            <div class="bootom_left">
              <span>{{item.orderStatus}}</span>
              <span class="span">{{item.ticketType}}</span>
              <p>{{item.seatType}}</p>
            </div>
            <div class="bootom_right">
              <span>非现金支付</span>
              <span class="span">线上购买</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Myticket",
  computed:{
    getuserAccount(){
      return localStorage.getItem("userAccount");
    },
    leftArrow(){
      return "<";
    }
  },
  created() {
    axios({
      url: "/getAllSelfTicket",
      method: "post",
      data:{
        userAccount:localStorage.getItem("userAccount")
      }
    }).then(res => {
      console.log(res.data.info)
      this.tickets=res.data.info;
    });
  },
  data() {
    return {
      tickets: []
    };
  }
};
</script>
<style scoped>
li {
  list-style: none;
}
#Myticket{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.top {
  height: 45px;
  background-color: #3b99fb;
  display: flex;
  justify-content: space-between;
  padding: 0 17px;
  line-height: 45px;
  color: #fff;
}
.top .last {
  font-size: 12px;
}
.top .toArder{
  color: #fff;
}
.tishi {
  height: 38px;
  background-color: #fff3cd;
  padding: 0 17px;
  line-height: 38px;
  font-size: 10px;
}
.tishi img {
  width: 16px;
  height: 16px;
}
.ticketList{
  flex: 1;
  overflow-y: scroll;
  background-color: #efeef3;
}
.ticketList::-webkit-scrollbar{
  display: none;
}
.ticket {
  padding: 0 13px;
  overflow: hidden;
}
.ticket h4 {
  width: 163px;
  height: 20px;
  background-color: #eaeaea;
  font-size: 11px;
  color: #919191;
  border-radius: 20px;
  text-align: center;
  line-height: 20px;
  margin-top: 15px;
}
.ticket_box {
  width: 333px;
  height: 129px;
  margin: auto;
  background-color: white;
  color: #797979;
  margin-top: 10px;
}
.box_top {
  display: flex;
  justify-content: space-between;
  padding: 18px 14px;
}
.box_top span {
  font-size: 14px;
}
.box_top .span {
  font-size: 10px;
  display: block;
  text-align: center;
}
.box_top p {
  font-size: 18px;
}
.box_top img {
  width: 96px;
  height: 8px;
}
.box_right {
  text-align: right;
}
.box_bottom {
  display: flex;
  padding: 0 14px;
  justify-content: space-between;
}
.bootom_left {
  font-size: 10px;
}
.bootom_left .span {
  border: 1px solid #797979;
  font-size: 9px;
  border-radius: 2px;
  margin-left: 8px;
}
.bootom_left p {
  margin-top: 9px;
}
.bootom_right span {
  font-size: 10px;
  border: 1px solid #f2f2f2;
}
.bootom_right .span {
  margin-left: 5px;
}
</style>