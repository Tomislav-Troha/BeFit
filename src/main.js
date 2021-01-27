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
import VuePageTransition from 'vue-page-transition' 
import { firebase } from "@/views/firebase";
import moment from 'moment'


Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY')
  }
})



Vue.use(VuePageTransition)



Unicon.add([uniArrowDown])
Vue.use(Unicon)


Vue.use(BackToTop)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)

Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged(function(user) {
    
new Vue({
    router,
    render: (h) => h(App),
    components : {App},
                
}).$mount('#app');
});





