<template>
  <div id="pass">
    <addtrainertop class="header1"/>
    <div class="content1">
        <ddtrainer_Title1/>
        <addtrainer_Messagee/>
    </div>
  </div>
</template>

<script>
import addtrainertop from "../components/addtrainertop"
import ddtrainer_Title1 from "../components/addtrainer_Title1"
import addtrainer_Messagee from "../components/addtrainer_Message"

export default{
  name:"addtrainer",
  components:{
    addtrainertop,ddtrainer_Title1,addtrainer_Messagee
  },
  date(){
    return {
    }
  }
}
</script>

<style scoped>
#pass{
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