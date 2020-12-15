<template>
    <div class="box">
        <router-link to="/arder">
            <p><img src="../assets/Maas_img/07.png"></p>
        </router-link>
            <h4>
               已支付
            </h4>
    </div>

</template>

<script>
export default {
name:"Paid_top"
}
</script>

<style scoped>
.box{
    height: 0.5rem;
    background-color: #3b99fb;
    padding:0 18px 0 0;
}

.box h4{
    line-height: 0.5rem;
    text-align: center;
    font-size: 20px;
    color: #e5e9f2;
}
p{
    float: left;
    margin-left: 0.15rem;
}
p img{
    width: 0.18rem;
    height: 0.18rem;
    margin-top: 0.15rem;
}
</style>

