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




Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: { transition: 'fade-in-left' }
    },

    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        logged:true
      }
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
      meta: {
        needsUser: true,
      },

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
      component: Onama,
      meta: {
        needsUser: true,
      },
    },
    {
      path: '/prehrambeni_status',
      name: 'Prehrambeni_status',
      component: Prehrambeni_status,
      meta: {
        needsUser: true,
      },
    },
    {
      path: '/calorie',
      name: 'Calorie',
      component: Calorie,
      meta: {
        needsUser: true,
      },
    },
    {
      path: '/stanje',
      name: 'Stanje',
      component: Stanje,meta: {
        needsUser: true,
      },
    }
  ]
})
router.beforeEach((to, from, next) => {
  const noUser = store.currentUser === null;
  if (to.matched.some(record => record.meta.requiresAuth)) {
  if (noUser && to.meta.needsUser) {
    next({path: '/login',
         query: { redirect: to.fullPath }});
  }

  else {
    next();
  }
 
}
else {
  next();
}
})



export default router
