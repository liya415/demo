import Vue from 'vue'
//引入vueX
import Vuex from 'vuex'
Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        outstation: "西安",
        arrivestation: "北京",
        outtime: "22:52",
        arrivetime: "12:36",
        trainnum: "T8",
        username: "lidaya",
        uid: "123456789",
        tickettype: "成人"
    },
    getters: {},
    mutations: {
        updata(state, payload) {
            state.username = payload.name,
            state.uid = payload.uid,
            state.tickettype = payload.utype
        },
        subsubmitTransInfo(state, payload){
            state.outstation = payload.outstation;
            state.arrivestation = payload.arrivestation;
            state.outtime = payload.outtime;
            state.arrivetime = payload.arrivetime;
            state.trainnum = payload.trainnum;
        }
    },
}