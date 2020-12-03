import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Signup from '@/components/Signup'





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
]
})




export default router
