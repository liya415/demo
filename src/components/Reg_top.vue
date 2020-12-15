<template>
    <div class="box">
        <router-link to="/mine">
            <p><img src="../assets/Maas_img/07.png"></p>
        </router-link>
            <h4>
               注册
            </h4>
    </div>

</template>

<script>
export default {
    name:"Reg_top"
}
</script>

<style scoped>
.box{
    width: 100vw;
    height: 0.5rem;
    background-color: #3b99fb;
    padding:0 18px 0 0;
    text-align: center;

}

.box h4{
    line-height: 0.5rem;
    font-size: 20px;
    color: #fff;
}
p{
    position: absolute;
    /* float: left; */
    left: 0;
    margin-left: 0.15rem;
}
p img{
    width: 0.18rem;
    height: 0.18rem;
    margin-top: 0.15rem;
}
</style>

