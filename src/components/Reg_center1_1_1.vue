<template>
  <div class="box">
    <h4>基本信息</h4>
    <div class="box1">
      <div>
        <span class="span1">用&nbsp;户&nbsp;名:</span
        ><input
          type="text"
          placeholder="字母,数字或,6-30位"
          v-model="userAccount"
        />
      </div>
      <div>
        <span class="span1">新&nbsp;密&nbsp;码:</span
        ><input type="password" placeholder="不少于6位" v-model="userPwd" />
      </div>
      <div>
        <span class="span1">密码确认:</span
        ><input
          type="password"
          placeholder="请再次输入密码"
          v-model="userPwd1"
        />
      </div>
    </div>
    <h5>详细信息<span>(用于身份核验，请务必正确填写)</span></h5>
    <div class="box2">
      <div class="box2-2">
        <span class="span1">证件类型:中国居民身份证</span>
        <label class="zjChoice">
            <input type="radio" name="zjType" v-model="documentType" value="中国居民身份证">中国居民身份证
        </label>
        <label class="zjChoice">
            <input type="radio" name="zjType" v-model="documentType" value="外国人永久居留身份证">外国人永久居留身份证
        </label>
        <label class="zjChoice">
            <input type="radio" name="zjType" v-model="documentType" value="港澳台居民居住证">港澳台居民居住证
        </label>
      </div>
      <div class="box2-3">
        <div>
          <span class="span1">姓&nbsp;名:</span
          ><input type="text" placeholder="请输入真实姓名，以便购票" v-model="userName"/>
        </div>
        <div>
          <span class="span1">证件号码:</span
          ><input placeholder="输入证件号码" v-model="documentNum"/>
        </div>
      </div>
      <div class="box3">
        <h6>联系方式</h6>
        <div class="box3-3">
          <div>
            <span class="span1">手机号码:</span
            ><input placeholder="请准确填写您的手机号"/>
          </div>
          <div>
            <span class="span1">电子邮箱:</span
            ><input placeholder="请准确填写邮箱地址"   v-model="userEmail"/>
          </div>
        </div>

        <div class="box4">
          <h1>附加信息</h1>
          <div class="box4-4">
            <div>
              <span class="span1">旅客类型:</span><input placeholder="成人" v-model="passengerType"/>
            </div>
          </div>
        </div>

        <div class="box5">
          <van-checkbox v-model="checked"
            >同意<span>服务条款 隐私权政策</span></van-checkbox
          >
        </div>

        <div class="headon"  @click="regSave()">注册</div>


        



      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Reg_center1_1_1",
  data() {
    return {
      documentType: "",
      checked: true,
      userAccount:"",
      userPwd:"",
      userPwd1:"",
      userName:"",
      documentNum:"",
      userEmail:"",
      passengerType:""
    };
  },
  methods:{
    regSave(){
  //     // 1、正则验证
        // 用户名
        let userAccount = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
        let userAccount1 = false;
        
        if(userAccount.test(this.userAccount)){
                userAccount1 = true;
                
        }else{
          alert("用户名字母开头，允许5-16字节，允许字母数字下划线");
        }
        console.log(userAccount1)

        // 密码
        let userPwd = /^[a-zA-Z]\w{5,17}$/;
        let userPwd2 = false;
        
        if(userPwd.test(this.userPwd)){
                userPwd2 = true;
                
        }else{
          // this.userPwd = "密码字母开头，以字母开头，长度在6~18之间，只能包含字母、数字和下划线";
          alert("密码字母开头，以字母开头，长度在6~18之间，只能包含字母、数字和下划线");
        }
        console.log(userPwd2)

        // 确认密码
        let userPwd1 = /^[a-zA-Z]\w{5,17}$/;
        let userPwd11 = false;
        
        if(userPwd1.test(this.userPwd1)){
                userPwd11 = true;
                
        }else{
          alert("密码字母开头，以字母开头，长度在6~18之间，只能包含字母、数字和下划线");
        }
        if(this.userPwd != this.userPwd1){
              alert("密码不相同");
        }
        console.log(userPwd11)


        // 姓名
        let userName = /^[\u4e00-\u9fa5]{0,}$/;
        let userName1 = false;
        
        if(userName.test(this.userName)){
                userName1 = true;
                
        }else{
          alert("请输入姓名");
        }
        console.log(userName1)

        // 证件号
        let documentNum = /^\d{15}|\d{18}$/;
        let documentNum1 = false;
        
        if(documentNum.test(this.documentNum)){
                documentNum1 = true;
                
        }else{
          alert("请输入证件号");
        }
        console.log(documentNum1)

        // 电子邮箱
        let userEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        let userEmail1 = false;
        
        if(userEmail.test(this.userEmail)){
                userEmail1 = true;
                
        }else{
          alert("请输入电子邮箱");
        }
        console.log(userEmail1)
      

      // 2、发送请求
      // let data = new URLSearchParams();
      // data.append("userAccount",this.userAccount);
      // data.append("userPwd",this.userPwd);
      // data.append("userPwd1",this.userPwd1);
      // data.append("documentType",this.documentType);
      // data.append("fullName",this.fullName);
      // data.append("documentNum",this.documentNum);
      // data.append("mailBox",this.mailBox);
      // data.append("passengerType",this.passengerType);

      // console.log(data)


      if(userAccount1 && userPwd2 && userPwd11 && userName1 && userName1 && userEmail1){
         axios({
        url:"/userRegister",
        method:"post",
        
        data:{
          userAccount:this.userAccount,
          userPwd:this.userPwd,
          userPwd1:this.userPwd1,
          documentType:this.documentType,
          userName:this.userName,
          documentNum:this.documentNum,
          userEmail:this.userEmail,
          passengerType:this.passengerType
        }
      })
      .then(res=>{
        if(res.data.code==1){
          this.$router.push("/login");
        }else{
          alert("注册失败！")
        }
      })
      }


      
      // axios({
      //   url:"/api/userRegister",
      //   method:"post",
        
      //   data:{
      //     userAccount:this.userAccount,
      //     userPwd:this.userPwd,
      //     userPwd1:this.userPwd1,
      //     documentType:this.documentType,
      //     userName:this.userName,
      //     documentNum:this.documentNum,
      //     userEmail:this.userEmail,
      //     passengerType:this.passengerType
      //   }
      // })
      // .then(res=>{
      //   if(res.data.code==1){
      //     alert(res.data.msg)
      //   }
      //   console.log(res.data);
      // })
    }
  }
};
</script>

<style scoped>
h4 {
  height: 0.37rem;
  line-height: 0.37rem;
  background-color: #f0eff4;
  margin-left: 0.15rem;
}
.box .box1 {
  height: 1.5rem;
  background-color: #fff;
  width: 100%;
}
.box1 div {
  border-bottom: 1px solid #f3f3f3;
}

.box1 div .span1 {
  width: 0.66rem;
  height: 0.49rem;
  line-height: 0.49rem;
  color: #000;
  margin-left: 0.24rem;
  letter-spacing: 0.02rem;
}
.box1 div input {
  width: 2.4rem;
  height: 0.49rem;
  line-height: 0.49rem;
  outline: none;
  border: 0;
  padding: 0;
  margin-left: 0.12rem;
  color: #3a3a3a;
}
.zjChoice{
  display: block;
  width: 60%;
  height: 0.4rem;
  margin-left: 1rem;
}
h5 {
  font-size: 16px;
  height: 0.37rem;
  line-height: 0.37rem;
  background-color: #f0eff4;
  margin-left: 0.15rem;
}
h5 span {
  font-size: 0.12rem;
  color: #919095;
}
.box2 {
  height: 2.7rem;
  background-color: #fff;
  width: 100%;
}
.box2 .box2-2 {
  border-bottom: 1px solid #f3f3f3;
}

.box2 div .span1 {
  width: 0.66rem;
  height: 0.49rem;
  line-height: 0.49rem;
  color: #000;
  margin-left: 0.24rem;
  letter-spacing: 0.02rem;
}
.van-checkbox {
  margin-left: 0.85rem;
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
}

.box2-3 {
  height: 1rem;
  border-bottom: 1px solid #f3f3f3;
  /* background-color: red; */
}

.box2-3 div {
  border-bottom: 1px solid #f3f3f3;
}

.box2-3 div .span1 {
  width: 0.66rem;
  height: 0.49rem;
  line-height: 0.49rem;
  color: #000;
  margin-left: 0.24rem;
  letter-spacing: 0.02rem;
}
.box2-3 div input {
  width: 2.4rem;
  height: 0.49rem;
  line-height: 0.49rem;
  outline: none;
  border: 0;
  padding: 0;
  margin-left: 0.12rem;
  color: #3a3a3a;
}
.box3 {
  height: 1.42rem;
  background-color: #fff;
  /* background-color: yellow; */
}
.box3 h6 {
  /* width: 100%; */
  height: 0.37rem;
  background-color: #f0eff4;
  font-size: 16px;
  line-height: 0.37rem;
  /* margin-left: 0.15rem; */
  padding-left: 0.15rem;
}

.box3-3 {
  height: 105px;
  background-color: #fff;
  /* background-color: red; */
  width: 100%;
}
.box3-3 div {
  border-bottom: 1px solid #f3f3f3;
}

.box3-3 div .span1 {
  width: 0.66rem;
  height: 0.49rem;
  line-height: 0.49rem;
  color: #000;
  margin-left: 0.24rem;
  letter-spacing: 0.02rem;
}
.box3-3 div input {
  width: 2.4rem;
  height: 0.49rem;
  line-height: 0.49rem;
  outline: none;
  border: 0;
  padding: 0;
  margin-left: 0.12rem;
  color: #3a3a3a;
}
.box4 {
  height: 0.87rem;
  /* background-color:red; */
}
.box4 h1 {
  height: 0.36rem;
  font-size: 16px;
  background-color: #f3f3f3;
  line-height: 0.36rem;
  padding-left: 0.15rem;
}

.box4-4 {
  height: 0.5rem;
  background-color: #fff;
  width: 100%;
}
.box4-4 div {
  border-bottom: 1px solid #f3f3f3;
}

.box4-4 div .span1 {
  width: 0.66rem;
  height: 0.49rem;
  line-height: 0.49rem;
  color: #000;
  margin-left: 0.24rem;
  letter-spacing: 0.02rem;
}
.box4-4 div input {
  width: 2.4rem;
  height: 0.49rem;
  line-height: 0.49rem;
  outline: none;
  border: 0;
  padding: 0;
  margin-left: 0.12rem;
  color: #3a3a3a;
}

.box5 {
  height: 0.25rem;
  /* background-color: red; */
  margin-left: -0.6rem;
}

.box5 span {
  color: #7faed0;
}
.headon {
  width: 90%;
  height: 0.4rem;
  margin-left: 5%;
  color: #fcfffc;
  line-height: 0.4rem;
  text-align: center;
  background-color: #3b99fb;
  margin-top: 0.16rem;
  border-radius: 0.05rem;
}
</style>

