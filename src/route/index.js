import Vue from 'vue';
import Router from "vue-router";
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
import VueRouter from 'vue-router';

import facade from "@/pages/Facade";
import home from "@/pages/home";
import maas from "@/pages/Maas";
import mine from "@/pages/Mine";
import pwdChange from "@/pages/Pwdchange";
import arder from "@/pages/Arder";
import vip from "@/pages/Vip";
import mineList from "@/pages/MineList";
import trainInfo from "@/pages/TrainInfo";
import configorder from "@/pages/configorder";
import personalData from "@/pages/personalData";
import Login from "@/pages/Login";
import Myticket from "@/pages/Myticket";
import addtrainer from "@/pages/addtrainer";
import unarder from "@/pages/Unarder";
import notUnarder from "@/pages/Unarder1";
import passengers from "@/pages/Passengers";
import paid from "@/pages/Paid";
import reg from "@/pages/Reg";
Vue.use(Router);

let routes = [{
        path: '/',
        component: facade,
        redirect: "/home"
    },
    {
        path: '/facade',
        component: facade,
        children: [
            { path: '/home', component: home },
            { path: '/maas', component: maas },
            { path: '/arder', component: arder },
            { path: '/vip', component: vip },
            { path: '/mine', component: mine }
        ]
    },
    //查询列车信息
    { path: '/trainInfo', component: trainInfo },
    //我的列表
    { path: '/mineList', component: mineList },
    //个人信息
    { path: '/personalData', component: personalData, meta: { requireAuth: true } },
    //乘车人
    { path: '/passengers', component: passengers, meta: { requireAuth: true } },
    //修改密码
    { path: '/pwdChange', component: pwdChange, meta: { requireAuth: true } },
    //添加订单
    { path: '/configorder', component: configorder, meta: { requireAuth: true } },
    //添加订单页面选择乘车人
    { path: '/addtrainer', component: addtrainer, meta: { requireAuth: true } },
    //登录
    { path: '/login', component: Login },
    //注册
    { path: '/reg', component: reg },
    //未完成订单
    { path: '/unarder', component: unarder, meta: { requireAuth: true } },
    { path: '/notUnarder', component: notUnarder, meta: { requireAuth: true } },
    //已支付订单
    { path: '/paid', component: paid, meta: { requireAuth: true } },
    //本人车票
    { path: '/myticket', component: Myticket, meta: { requireAuth: true } }
]

let router = new VueRouter({
    routes,
    mode: 'history'
});
router.beforeEach((to, from, next) => {
    console.log("to", to);
    if (to.meta.requireAuth) {
        if (localStorage.getItem("userAccount")) {
            next();
        } else {
            next({ path: "/login", query: { toPath: to.path } });
        }
    } else {
        next();
    }

});

export default router;