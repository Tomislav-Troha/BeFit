import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Prijava/Login'
import Signup from '@/components/Prijava/Signup'
import Home from '@/components/Home'
import Skola_prehrane from '@/components/Skola_prehrane'
import Onama from '@/components/Onama'





Vue.use(Router)

const router = new Router ({
  mode: 'history',
  routes:[
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: { transition: 'fade-in-left' }
    },

   {
    path: '/login',
    name: 'Login',
    component: Login
  },
  
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  
  {
    path: '/home',
      name: 'Home',
      component: Home,
     
  },

  {
    path: '/skola_prehrane',
    name: 'Skola_prehrane',
    component: Skola_prehrane,
    meta: { transition: 'flip-x' },
  },

  {
    path: '/onama',
    name: 'Onama',
    component: Onama
  }
]
})




export default router
