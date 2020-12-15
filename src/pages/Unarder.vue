<template>
  <div id="unarder">
    <Una_Top1 class="top11"/>
    <div class="content11">
        <Una_Time/>
        <Una_Ticket/>
        <Una_Back/>
        <Una_Safe/>
    </div>
    <Una_Footer class="bom1"/>
  </div>
</template>

<script>

import Una_Top1 from "../components/Una_Top1"
import Una_Time from "../components/Una_Time"
import Una_Ticket from "../components/Una_Ticket"
import Una_Back from "../components/Una_Back"
import Una_Safe from "../components/Una_Safe"
import Una_Footer from "../components/Una_Footer"


export default{
  name:"Unarder",
  components:{
    Una_Top1,Una_Time,Una_Ticket,Una_Back,Una_Safe,Una_Footer
  },
  date(){
    return {
      msg:"hello"
    }
  }
}
</script>

<style scoped>
#unarder{
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.top11,.bom1{
  height: 0.5rem;
}
.content11{
  overflow-y: auto;
  flex: 1;
}
</style>