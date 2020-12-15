<template>
  <div id="unarder1">
    <Una_Top1 class="top111"/>
    <div class="content111">
        <div>

        </div>
    </div>
  </div>
</template>
<script>

import Una_Top1 from "../components/Una_Top1"
export default{
  name:"Unarder1",
  components:{
    Una_Top1
  },
  date(){
    return {
      msg:"hello"
    }
  }
}
</script>

<style scoped>
#unarder1{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
#unarder1 .top111{
  height: 0.5rem;
}
#unarder1 .content111 {
  overflow-y: auto;
  flex: 1;
  position: relative;
}
#unarder1 .content111 div{
    width: 0.94rem;
    height: 1.14rem;
    position: absolute;
    left: 50%;
    margin-left: -0.47rem;
    top: 1.45rem;
    background: url(../assets/arder/img/dd.png) no-repeat;
    background-size: 0.94rem 1.14rem;
}
</style>