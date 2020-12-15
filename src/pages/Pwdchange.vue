<template>
  <div class="box">
    <div class="box2">
      <div @click="fn">
        <span></span>
      </div>
      <p>密码修改</p>
    </div>
    <div class="container">
      <div class="box1">
        <div>
          <span class="span1">原&nbsp;密&nbsp;码</span>
          <input type="password" placeholder="请输入原密码" v-model="userOldPwd" />
        </div>
        <div>
          <span class="span1">新&nbsp;密&nbsp;码</span>
          <input type="password" placeholder="不少于6位" v-model="userNewPwd" />
        </div>
        <div>
          <span class="span1">密码确认</span>
          <input type="password" placeholder="请再次输入密码"  v-model="configPwd"/>
        </div>
        <div class="checkcode">
          <input type="text" placeholder="输入获取短信验证码" v-model="chcode" />
          <div>
            <p>获取验证码</p>
          </div>
        </div>
      </div>
      <div class="headon" @click="pwdcheck">确定</div>
    </div>
    <van-dialog v-model="show" title="温馨提示" show-cancel-button>
      <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
    </van-dialog>
  </div>
</template>

<script>
import axios from 'axios';
import { Dialog } from 'vant';
export default {
    name:"Pwdchange",
    components:{
         
    },
    data(){
         return { userNewPwd:"",userOldPwd:"",configPwd:"" ,chcode:"6758",show:false}
    },
    methods:{
        pwdcheck(){
            let _regnum=/^\d+$/;
            let _regletter=/^[a-zA-Z]+$/;
            let _regchar=/^[!@#$*]+$/;
            var reg = /^[\w]{6,}$/
            if(reg.test(this.userNewPwd)&&reg.test(this.userOldPwd)){
               let new1= _regnum.test(this.userNewPwd)||_regletter.test(this.userNewPwd)||_regchar.test(this.userNewPwd);
               let old= _regnum.test(this.userOldPwd)||_regletter.test(this.userOldPwd)||_regchar.test(this.userOldPwd);
                if(new1||old){
                    Dialog.alert({
                        title: "温馨提示",
                        message: "密码格式错误，请输入且只能输入包括字符数字下划线中的两种或者两种以上"
                    }).then(() => {
                });
                }else{
                    if(this.userNewPwd==this.configPwd){
                    axios({
                        url:'/updateUserPwd',
                        method:'post',
                        headers: {'Content-Type': 'application/json'},
                        data:{
                            userAccount:localStorage.getItem("userAccount"),
                            userNewPwd:this.userNewPwd,
                            userOldPwd:this.userOldPwd
                          }
                    }).then(res=>{
                      console.log(res.data.code)
                        if(res.data.code==1){
                             Dialog.alert({
                                  title: "温馨提示",
                                  message: res.data.msg
                                  }).then(() => {
                            });
    
                            this.$router.push('/Login'); 
                        }else{
                             Dialog.alert({
                                  title: "温馨提示",
                                  message: "密码格式错误，请输入且只能输入包括字符数字下划线中的两种或者两种以上"
                                  }).then(() => {
                            });
    
                        }
                    });
                    }else{
                       Dialog.alert({
                        title: "温馨提示",
                        message: "新密码与确认密码不一致，请重新输入"
                    }).then(() => {
                });
                    }
                    
                }
            }else{
                if(this.userOldPwd||this.userNewPwd){
                   Dialog.alert({
                        title: "温馨提示",
                        message: "密码不能为空"
                    }).then(() => {
                });
                }else{
                   Dialog.alert({
                        title: "温馨提示",
                        message: "密码格式错误，请输入且只能输入包括字符数字下划线中的两种或者两种以上"
                    }).then(() => {
                });
                }
                
            }
        },
        fn(){
           this.$router.push('/MineList'); 
        }
     
    }
}
</script>

<style scoped>
@import url("../assets/minePage/iconfont.css");
.box2 {
  height: 0.46rem;
  width: 100%;
  display: flex;
  background-color: #3b99fb;
  color: #edf3f8;
}
.box2 div {
  width: 0.44rem;
  height: 0.46rem;
  text-align: center;
  line-height: 0.46rem;
}
.box2 div span {
  display: block;
  width: 0.15rem;
  height: 0.15rem;
  background: url(../assets/minePage/leftArrow.png);
  background-size: 100% 100%;
  margin-left: 15px;
  margin-top: 14px;
}
.box2 p {
  width: 0.82rem;
  height: 0.46rem;
  line-height: 0.46rem;
  margin-left: 1rem;
}
.box1 {
  height: 204px;
  width: 100%;
  margin-top: 20px;
  font-size: 14px;
}
.box1 div {
  height: 49px;
  width: 100%;
  border-top: 1px solid #f3f3f3;
  margin-bottom: 1px;
  display: flex;
}
.box1 div .span1 {
  width: 66px;
  height: 49px;
  line-height: 49px;
  color: #b3b3b3;
  margin-left: 24px;
  letter-spacing: 2px;
}
.box1 div input {
  width: 240px;
  height: 49px;
  line-height: 49px;
  outline: none;
  border: 0;
  padding: 0;
  margin-left: 12px;
  color: #3a3a3a;
}
.box1 .checkcode input {
  width: 158px;
  height: 49px;
  line-height: 49px;
  color: #919191;
  margin-left: 24px;
  outline: none;
  padding: 0;
  border: 0;
}
.box1 .checkcode div {
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-top: 5px;
  background-color: #3b99fb;
  color: #fcfffc;
  margin-left: 50px;
}
.box1 .checkcode div p {
  margin-left: 28px;
}
input::-webkit-input-placeholder {
  color: #8f8f8f;
  font-size: 0.14rem;
}

.headon {
  width: 90%;
  height: 40px;
  margin-left: 5%;
  color: #fcfffc;
  line-height: 40px;
  text-align: center;
  background-color: #3b99fb;
  margin-top: 16px;
  border-radius: 5px;
}
</style>