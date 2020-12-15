<template>
  <div class="personalData">
    <div class="head">
      <div>
        <router-link to="/mineList" class="returnUp">
          <img src="@/assets/minePage/leftArrow.png" alt />
        </router-link>
      </div>
      <p>{{userName}}</p>
    </div>
    <div class="container">
      <div class="infoList" v-for="(infolist,idx) in pagesInfo" :key="'list'+idx">
        <p v-text="infolist.list" class="listTitle"></p>
        <ul v-for="(info,idx) in infolist.Info" :key="'li'+idx">
          <li>
            <p class="infoType">{{info.infoType}}:</p>
            <p class="infoTips" v-if="info.infoTips" v-text="info.infoTips"></p>
            <p class="infoMain" v-text="info.infoMain"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Mine",
  data() {
    return {
      userName: "个人资料",
      pagesInfo: [
        {
          list: "基本信息",
          Info: [{
              infoType: "用户名",
              infoMain: ""
          }]
        },
        {
          list: "详细信息",
          Info: [
            {
              infoType: "姓名",
              infoMain: ""
            },
            {
              infoType: "国家地区",
              infoMain: ""
            },
            {
              infoType: "证件类型",
              infoMain: ""
            },
            {
              infoType: "证件号码",
              infoMain: ""
            },
            {
              infoType: "审核状态",
              infoMain: ""
            }
          ]
        },
        {
          list: "联系方式",
          Info: [
            {
              infoType: "手机账号",
              infoMain: "",
              infoTips: "已通过核验"
            },
            {
              infoType: "固定电话",
              infoMain: ""
            },
            {
              infoType: "电子邮箱",
              infoMain: ""
            },
            {
              infoType: "地址",
              infoMain: ""
            },
            {
              infoType: "邮编",
              infoMain: ""
            }
          ]
        },
        {
          list: "附加信息",
          Info: [
            {
              infoType: "旅客类型",
              infoMain: ""
            }
          ]
        }
      ]
    };
  },
  created() {
    axios({
      url: "/getPersonalData",
      method:'post',
      headers: {'Content-Type': 'application/json'},
      data:{
        userAccount:localStorage.getItem("userAccount")
      }
      // params: {
      //   beginDay: "2020-12-06",
      //   beginStation: "西安",
      //   endStation: "上海"
      // }
    }).then(res => {
      console.log(res.data.info);
      //用户账户
      this.pagesInfo[0].Info[0].infoMain = res.data.info.userAccount;
      //用户姓名
      this.pagesInfo[1].Info[0].infoMain = res.data.info.userName;
      //用户地区
      this.pagesInfo[1].Info[1].infoMain = res.data.info.city;
      //证件类型
      this.pagesInfo[1].Info[2].infoMain = res.data.info.documentType;
      //证件号
      this.pagesInfo[1].Info[3].infoMain = res.data.info.documentNum;
      //手机号
      this.pagesInfo[2].Info[0].infoMain = res.data.info.userPhone;
      //电子邮箱
      this.pagesInfo[2].Info[2].infoMain = res.data.info.userEmail;
      //乘客类型
      this.pagesInfo[3].Info[0].infoMain = res.data.info.passengerType;
    });
  }
};
</script>
<style src="@/assets/minePage/iconfont.css"></style>
<style scoped>
.personalData {
  background-color: #f0eff4;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.personalData .head {
  height: 0.46rem;
  width: 100%;
  background-color: #3b99fb;
  color: #edf3f8;
  display: flex;
}
.head p {
  width: 0.82rem;
  height: 0.46rem;
  line-height: 0.46rem;
  margin-left: 1rem;
}
.head div {
  width: 0.44rem;
  height: 0.46rem;
  text-align: center;
  line-height: 0.46rem;
}
.head div img {
  display: block;
  height: 0.2rem;
  margin-top: 13px;
  margin-left: 13px;
}
.infoList {
  background-color: #f0eff4;
}
.infoList .listTitle {
  height: 37px;
  font: 16px/36px "微软雅黑";
  text-indent: 12px;
}
.infoList ul li {
  height: 50px;
  background-color: #fff;
  padding: 0 24px;
}
.infoList li .infoType {
  font: 14px/50px "微软雅黑";
  width: 80px;
  float: left;
}
.infoList li .infoTips {
  font: 12px/50px "微软雅黑";
  width: auto;
  float: right;
  color: #066e06;
  margin-left: 10px;
}
.infoList li .infoMain {
  font: 12px/50px "微软雅黑";
  width: auto;
  float: right;
}
</style>