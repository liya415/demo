<template>
    <div class="Pass_Message">
        <p>当前用户</p>
        <ul>
            <li v-for="(item,index) in news" :key='index'>
                <span class="s1">{{item.peeName}}</span>
                <span class="s2">{{item.peePassengerType}}</span>
                <span class="s3">{{item.peeDocumentNum}}</span>
                <input type="checkbox" class="s4" @click="fn(index)">
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";

    export default{
        name:"addtrainer_Message",
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
                //  console.log("res.data",res.data.info);
                this.news=res.data.info;    
            }
            );
        },
        methods:{
            fn(index){
               let obj= this.news[index];
               this.$store.commit('ticket/updata',{
                    name:obj.peeName,
                    uid:obj.peeDocumentNum,
                    tickettype:obj.peePassengerType
               })
            }
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
}
</style>