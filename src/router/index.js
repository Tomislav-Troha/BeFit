import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Home from '@/components/Home'





Vue.use(Router)

const router = new Router ({
  mode: 'history',
  routes:[
    {
      path: '/',
      name: 'login',
      component: Login
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
    component: Home
  },

]
})




export default router
