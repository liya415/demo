<template>
  <div id="app">
    <div  class="top-box">
      <Reg_top/>
    </div>
    <div class="center-box">
        <Reg_center1_1_1/>
    </div>
    <!-- <Bottom class="bottom-box"/> -->
  </div>
</template>

<script>
     import Reg_top from "../components/Reg_top"
     import Reg_center1_1_1 from "../components/Reg_center1_1_1"

    //  import Bottom from "../components/Bottom"

export default {
  name: 'Reg',
  components: {
    Reg_top,Reg_center1_1_1
  },
  data(){
    return {
      msg:"hello"
    }
  }
}
</script>

<style>
.top-box{
  position: fixed;
  top:0;
  left:0;
}

.center-box{
  margin-top:0.5rem;
  margin-bottom:0.5rem; 
}

/* .bottom-box{
  position: fixed;
  bottom:0;
  left:0;
} */

</style>