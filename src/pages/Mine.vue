<template>
    <div class="box">
        <div class="head">
             <div class="title"> 
            <p>
                我的12306
            </p>
            <div>
                <span><img src="../assets/configorder/msg1.jpg"></span>
            </div>
            </div>
        </div>
        <div class="container">
             <ul>
                <li v-for="(list,index) in lists" :key="index" @click="fn(list.to)">
                    <span class="sl" v-html="list.name"></span>
                    <i v-if="list.tips">{{list.tips}}</i>
                    <span class="rightArrow"></span>
                </li>
            </ul>
            <ul>
                 <li>
                    <span class="sl">出行向导</span>
                    <span class="rightArrow"></span>
                </li>
                <li>
                     <span class="sl">温馨服务</span>
                     <span class="rightArrow"></span>
                </li>
                <li class="last">
                     <span class="sl">信息服务</span>
                     <span class="rightArrow"></span>
                </li>
            </ul>
            <ul>
                <li class="last">
                    <span class="sl">旅行休闲</span>
                    <span class="rightArrow"></span>
                </li>
            </ul>
            <ul>
                 <li>
                    <span class="sl">通知消息</span>
                    <span class="rightArrow"></span>
                </li>
                <li>
                     <span class="sl">关于</span>
                     <span class="rightArrow"></span>
                </li>
            </ul>
        </div> 
    </div>
</template>

<script>
// import axios from 'axios'
export default {
    name:"Mine",
    data(){
        return{
             lists:[],
             loginAfter: [{
                "name": "迪丽热巴",
                "to":"/mineList"
            },
            {
                "name": "人脸核验"
            },
            {
                "name": "手机核验",
                "tips":"(已通过核验)"
            },
            {
                "name": "我的餐饮·特产"
            }],
            loginBefore: [{
                "name": "登录",
                "to":"/login"
            },
            {
                "name": "注册",
                "to":"/reg"
            }]
        }
    },
     created(){
        let ls =localStorage;
        if(ls.userAccount){
            this.loginAfter[0].name=ls.userAccount;
            this.lists=this.loginAfter
        }else{
            this.lists=this.loginBefore
        }
        
    },
    methods:{
        fn(to){
            if(to){
                this.$router.push(to);
            }
        }
    }
}

</script>

<style scoped>
@import url("../assets/minePage/iconfont.css");
.box{
    background-color: #f0eff4;
   display: flex;
   flex-direction: column;
   height: 100%;
} 
.head{
     height:0.46rem;
     width: 100%;
    background-color: #3b99fb;
}
.title{
    height:0.46rem;
    width: 100%;
    display: flex;
    background-color: #3b99fb;
    color: #edf3f8;
}
.title p{
    width: 0.94rem;
    height: 0.46rem;
    line-height: 0.46rem;
    margin-left: 1.33rem;
}
.title div{
    width: 0.22rem;
    height: 0.46rem;
    margin-left: 0.9rem;
}
.title div span{
    display: inline-block;
    width: 0.22rem;
    height: 0.22rem;
    margin-top: 0.12rem;
}
.title div span img{
    width: 0.22rem;
    height: 0.22rem;
}
.container{
    width:100%;
    flex: 1;
}
.container ul{
    width: 100%;
    background-color: #ffffff;
    border-top: 0.01rem solid #e1e1e1;
    border-bottom: 0.01rem solid #e1e1e1;
    margin-top: 0.23rem;
}
.container ul li{
    width: 90%;
    margin-left: 5%;
    height: 0.485rem;
    line-height: 0.485rem;
    border-bottom: 0.01rem solid #e1e1e1;
    position: relative;
    font-size: 0.14rem;
}
.container ul li .rightArrow{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.08rem;
    height: 0.10rem;
    width: 0.10rem;
    background: url(../assets/minePage/rightArrow.png) no-repeat;
    background-size: 100% 100%;
    opacity: .7;
}
.container li .sl{
    color: #111111;
    margin-left: 0.2rem;
}
.container li i{
    font-style: normal;
    color: #2f863c;
}
.about{
    height: 0.97rem;
    width: 100%;
    background-color: #ffffff;
    margin-top: 0.23rem;
    border-top: 0.01rem solid #e1e1e1;
    border-bottom: 0.01rem solid #e1e1e1;
}

</style>