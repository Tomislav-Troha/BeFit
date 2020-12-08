import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BackToTop from 'vue-backtotop'
import Unicon from 'vue-unicons'
import { uniArrowDown } from 'vue-unicons/src/icons'
require("@fortawesome/fontawesome-free/css/all.min.css");



Unicon.add([uniArrowDown])
Vue.use(Unicon)


Vue.use(BackToTop)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false;
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)


new Vue({
    router,
    render: (h) => h(App),
    components : {App}
}).$mount('#app');





