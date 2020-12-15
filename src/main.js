import Vue from 'vue'
import App from './App.vue'
import router from "./route";
import Vant from 'vant';
import 'vant/lib/index.css';
import Axios from 'axios';
import store from './store'
Vue.config.productionTip = false
Vue.use(Vant);
// Vue.use(Axios);
Vue.prototype.Axios = Axios;
Axios.defaults.baseURL = '/api'
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')