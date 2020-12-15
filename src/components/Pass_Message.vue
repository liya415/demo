<template>
    <div class="Pass_Message">
        <p>当前用户</p>
        <ul>
            <li v-for="(n,idx) in news" :key="idx">
                <span class="s1">{{n.peeName}}</span>
                <span class="s2">{{n.peePassengerType}}</span>
                <span class="s3">{{n.peeDocumentNum}}</span>
                <span class="s4"></span>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";
    export default{
        name:"Pass_Message",
        data(){
            return {
                news:[]
            }
        },
        created(){
            axios({
                method:"post",
                url:"/getPassengerList",
                headers: {'Content-Type': 'application/json'},
                data:{
                    userAccount:localStorage.getItem("userAccount")
                }
            }).then(res=>{
                 console.log("res.data",res.data.info);
                this.news=res.data.info;
                
               
            }
            );
        }
    }
</script>

<style scoped>
.Pass_Message{
    background-color: #f4f5f7;
}
.Pass_Message p{
    color: #1e1e1e;
    font-size: 10px;
    line-height: 26px;
    padding-left:15px;
}
.Pass_Message ul{
    background-color: #fff;
    padding: 0 15px;
}
.Pass_Message li{
    height: 48px;
    line-height: 48px;
    color: #47a446;
    font-size: 12px;
}
.Pass_Message li .s1{
    margin-right: 37px;
}
.Pass_Message li .s2{
    margin-right: 27px;
}
.Pass_Message li .s4{
    float: right;
    width: 16px;
    height: 16px;
    margin-top: 16px;
    background: url(../assets/arder/img/write.png) no-repeat;
    background-size: 16px 16px;
}
</style>