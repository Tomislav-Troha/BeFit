import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Prijava/Login'
import Signup from '@/components/Prijava/Signup'
import Home from '@/components/Home'
import Skola_prehrane from '@/components/Skola_prehrane'
import Onama from '@/components/Onama'
import Prehrambeni_status from '@/components/Prehrambeni_status'
import Calorie from '@/components/Calorie'
import Stanje from '@/components/Stanje'
import store from "@/store";
import { firebase } from "@/views/firebase";




Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: { transition: 'fade-in-left' }, logged:true
    },

    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { logged: true }
      
    },

    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta: { logged: true }
      
    },

    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
      

    },

    {
      path: '/skola_prehrane',
      name: 'Skola_prehrane',
      component: Skola_prehrane,
      meta: { transition: 'flip-x' },  requiresAuth: true

    },

    {
      path: '/onama',
      name: 'Onama',
      component: Onama,
      meta: { requiresAuth: true }
      
      
      
    },
    {
      path: '/prehrambeni_status',
      name: 'Prehrambeni_status',
      component: Prehrambeni_status,
      meta: { requiresAuth: true }
      
    },
    {
      path: '/calorie',
      name: 'Calorie',
      component: Calorie,
      meta: { requiresAuth: true }
      
    },
    {
      path: '/stanje',
      name: 'Stanje',
      component: Stanje,
      meta: { requiresAuth: true }
     
    }
  ]
})

router.beforeEach((to, from, next) => {
  
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const logged = to.matched.some(record => record.meta.logged)
  const currentUser = firebase.auth().currentUser

  if(requiresAuth && !currentUser) {
      next("/")
  } else if(requiresAuth && currentUser) {
      next()
  }
  
  if(logged && currentUser) {
    next("home")
  }
  
  else{
      next()
  }
})

export default router
