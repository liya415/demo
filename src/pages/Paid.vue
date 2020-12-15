<template>
  <div id="app">
    <div  class="top-box">
      <Paid_top/>
    </div>
    <div class="center-box">
        <Paid_center1_1/>
        <Paid_center2_2/>
        <Paid_center3_3/>
    </div>
    <Bottom class="bottom-box"/>
  </div>
</template>

<script>
     import Paid_top from "../components/Paid_top"
     import Paid_center1_1 from "../components/Paid_center1_1"
     import Paid_center2_2 from "../components/Paid_center2_2"
     import Paid_center3_3 from "../components/Paid_center3_3"

     import Bottom from "../components/Bottom"

export default {
  name: 'Paid',
  components: {
    Paid_top,Paid_center1_1,Paid_center2_2,Paid_center3_3,Bottom
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

.bottom-box{
  position: fixed;
  bottom:0;
  left:0;
}

</style>