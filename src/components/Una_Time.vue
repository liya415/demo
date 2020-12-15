<template>
    <div class="Una_Time">
        <div>
            <span class="a1">未完成</span>
            <span class="a2">剩余:</span>
            <span class="a3">{{m+"分"+s+"秒 "}}</span>
        </div>
        <p>为了保护您和他人的身体健康，请旅客们在车站和列车上全程佩戴口罩，感谢支持配合！</p>
    </div>
</template>

<script>
    export default{
        name:"Una_Time",
        data(){
            return {
                m:29,
                s:59
            }
        },
        methods:{
            setT(){
                let that=this;
                setInterval(function(){
                    that.s--;
                    (that.s<10&&that.s>=0)?that.s="0"+that.s:that.s;
                    if(that.s<0){
                        that.s=59;
                        that.m--;
                    }
                    if(that.m<0){
                        that.m=0;
                        that.s=0;
                    }
                    
                },1000);
            }
        },
        mounted(){
            this.setT();
        }
        
    }
</script>

<style scoped>
.Una_Time{
    height:0.95rem;
    background-color: #3b99fb;
    position: relative;
}
.Una_Time div{
    height: 0.3rem;
    background: url(../assets/arder/img/time.png) no-repeat 0.12rem;
    background-size: 0.2rem 0.2rem;
    line-height: 0.3rem;
}
.Una_Time div span{
    font-size: 0.18rem;
    color: #fff;
    float: left;
}
.Una_Time .a1{
    margin-left: 0.4rem;
}
.Una_Time .a2{
    font-size: 0.12rem;
    margin-left: 1.45rem;
    margin-top: 0.03rem;
}
.Una_Time .a3{
    margin-left: 0.03rem;
}
.Una_Time p{
    padding:0.1rem 0.18rem 0 0.18rem;
    font-size: 0.1rem;
    color: #fff;
    line-height: 0.16rem;
    letter-spacing: 0.01rem;
}
</style>