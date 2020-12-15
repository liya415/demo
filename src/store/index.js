import Vue from 'vue'
//引入vueX
import Vuex from 'vuex'
import ticket from './ticket'
//把vueX安装到Vue里
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ticket: ticket
    },
    state: {
        flag: false,
		price: 488
    },
    getters: {},
    mutations: {
        change(state) {
			state.flag = !state.flag;
		}
    },
    actions: {}
})