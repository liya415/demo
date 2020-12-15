<template>
  <div id="passg">
    <Pass_Top11 class="header1"/>
    <div class="content1">
        <Pass_Title1/>
        <Pass_Message/>
    </div>
    <!-- <Bottom class="btm"/> -->
  </div>
</template>

<script>
import Pass_Top11 from "../components/Pass_Top11"
import Pass_Title1 from "../components/Pass_Title1"
import Pass_Message from "../components/Pass_Message"

export default{
  name:"Passengers",
  components:{
    Pass_Top11,Pass_Title1,Pass_Message
  },
  date(){
    return {
    }
  }
}
</script>

<style scoped>
#passg{
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.header1{
  height: 0.5rem;
}
.content1{
  overflow-y: auto;
  flex: 1;
  background-color: #f4f5f7;
}
</style>