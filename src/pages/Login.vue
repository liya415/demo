<template>
  <div id="Login">
    <div class="top">
      <router-link to="/mine">
        <span>{{leftArrow}}</span>
      </router-link>
      <p>登录</p>
    </div>
    <div class="center">
      <h1>
        <img src="../assets/Login_img/logo.jpg" alt />
      </h1>
      <h2>欢迎登录</h2>
      <div class="login">
        <p class="p1">账号登录</p>
        <span></span>
        <p>指纹登录</p>
      </div>
      <div class="text">
        <span class="span1">用户</span>
        <input class="input1" type="text" v-model="userAccount" />
        <img class="img1" src="../assets/Login_img/1.jpg" alt />
        <br />
        <span class="span2">密码</span>
        <input class="input2" type="password" v-model="userPwd" />
        <img class="img2" src="../assets/Login_img/2.jpg" alt />
      </div>
      <p class="denglu" @click="login">登录</p>
      <p class="reg" @click="reg">注册</p>
      <p class="tishi">忘记密码？</p>
      <div class="mes">
        <span class="mes1">《服务条款》</span>
        <span class="mes2">《隐私权政策》</span>
      </div>
    </div>
    <div class="footer">
      <p>温馨提示：铁路12306每日06:00~23:30提供购票、改签、变更到站和退票等服务，在铁路12306购票、改签和退票须不晚于开车前25分钟；办理"变更到站"业务时，请不晚于开车前48小时。</p>
      <h1>×</h1>
    </div>
    <van-dialog v-model="show" title="温馨提示" show-cancel-button>
      <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
    </van-dialog>
  </div>
</template>
<script>
import axios from "axios";
import { Dialog } from 'vant';
export default {
  name: "Bottom",
  data() {
    return {
      // user: {
      userAccount: "",
      userPwd: "",
      show: false
      // }
    };
  },
  methods: {
    login() {
      // let _regnum = /^\d+$/;
      // let _regletter = /^[a-zA-Z]+$/;
      // let _regchar = /^[!@#$*]+$/;
      // var reg = /[\w]{6,30}/;

      // if (reg.test(this.userAccount) && reg.test(this.userAccount)) {
      //   let text =
      //     _regnum.test(this.userAccount) ||
      //     _regletter.test(this.userAccount) ||
      //     _regchar.test(this.userAccount);
      //   if (text) {
      //     alert(
      //       "密码格式错误，请输入且只能输入包括字符数字下划线中的两种或者两种以上"
      //     );
      //   } else {

      axios({
        url: "/userLogin",
        method: "post",
        data: {
          userAccount: this.userAccount,
          userPwd: this.userPwd
        }
      }).then(res => {
        // console.log(res.data);
        if (res.data.code == 1) {
          localStorage.setItem("userAccount", this.userAccount);
          this.$router.push({ path: '/mine' })
        } else {
          // alert("登陆失败");

          Dialog.alert({
            title: "温馨提示",
            message: "用户名或密码错误"
          }).then(() => {
            // on close
          });
        }
      });
    },
    reg(){
      this.$router.push({ path: '/reg' })
    }
  },
  computed:{
    leftArrow(){
      return "<";
    }
  }
  //   }
  // }
};
</script>
<style scoped>
#Login {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fafafa;
}
.top {
  display: flex;
  width: 100%;
  height: 0.41rem;
  background-color: #3b99fb;
  overflow: hidden;
}
.top p {
  text-align: center;
  line-height: 0.41rem;
  width: 100%;
  color: #fff;
}
.top span {
  position: absolute;
  color: #fff;
  line-height: 0.41rem;
  left: 0.17rem;
  font-size: 0.2rem;
}
.center {
  flex: 1;
  overflow: hidden;
  height: 5.84rem;
  background-color: #f9f9f9;
}
.footer {
  height: 0.8rem;
  width: 100%;
  position: fixed;
  bottom: 0rem;
  background-color: #fefe82;
  overflow: hidden;
  display: flex;
}
.footer p {
  font-size: 0.12rem;
  color: #1e1f21;
  width: 3.21rem;
  height: 0.57rem;
  margin-left: 0.1rem;
  margin-top: 0.11rem;
}
.footer h1 {
  font-size: 0.3rem;
  color: #d4d5d8;
  margin-top: -0.07rem;
}
.center h1 img {
  width: 0.55rem;
  display: block;
  height: 0.55rem;
  margin: auto;
  margin-top: 0.34rem;
}
.center h2 {
  margin-top: 0.17rem;
  width: 100%;
  font-size: 0.2rem;
  font-weight: 500;
  text-align: center;
}
.login {
  width: 1.98rem;
  margin: auto;
}
.login p {
  font-size: 0.12rem;
}
.login span {
  display: block;
  width: 0.01rem;
  height: 0.16rem;
  background-color: #d1d1d1;
}
.login {
  display: flex;
  justify-content: space-between;
  margin-top: 0.37rem;
}
.login .p1 {
  color: #3d93ed;
}
.text {
  width: 2.52rem;
  margin: auto;
  position: relative;
}
.text img {
  position: absolute;
}
.text input {
  width: 2.52rem;
  height: 0.45rem;
  border: none;
  border-radius: 0.07rem;
  text-indent: 0.54rem;
  font-size: 0.13rem;
  font-weight: 600;
  /* padding-left: 0.56rem; */
}
.text .input1 {
  margin-top: 0.25rem;
}
.text .input2 {
  margin-top: 0.13rem;
}
.text img {
  width: 0.16rem;
  height: 0.16rem;
  position: absolute;
}
.text .img1 {
  top: 0.4rem;
  right: 0.09rem;
}
.text .img2 {
  top: 0.97rem;
  right: 0.09rem;
}
.text span {
  position: absolute;
  font-size: 0.13rem;
  font-weight: 600;
}
.text .span1 {
  top: 0.4rem;
  left: 0.14rem;
}
.text .span2 {
  top: 0.97rem;
  left: 0.14rem;
}
.denglu,
.reg {
  width: 2.52rem;
  height: 0.45rem;
  border-radius: 0.07rem;
  text-align: center;
  line-height: 0.45rem;
  margin: auto;
  border: 0.01rem #e7e7e7 solid;
}
.denglu {
  background-color: #3b99fb;
  color: #fff;
  margin-top: 0.28rem;
}
.reg {
  margin-top: 0.18rem;
}
.tishi {
  font-size: 0.11rem;
  text-decoration-line: underline;
  color: #999999;
  text-align: center;
  margin-top: 0.18rem;
}
.mes1,
.mes2 {
  font-size: 0.11rem;
  color: #1b84ee;
}
.mes {
  width: 1.66rem;
  margin: auto;
}
</style>