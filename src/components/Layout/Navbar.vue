<template>
  <div class="mx-3" id="navbar">
    <b-navbar>
      <b-navbar-nav>
        <b-nav-item>
          <router-link :to="{ name: 'Home' }" class="navbar-brand">
            <img
              src="@/assets/gym-logo.png"
              style="height: 100px;"
              alt="logo"
            />
            <a id="befit">BeFit</a></router-link
          >
        </b-nav-item>

        

      </b-navbar-nav>

<nav-item class="mx-auto">
        <h1 style="font-size:70px;font-family:Segoe UI; font-weight: bold;" v-if="$route.name==='Home'">Dobrodošli</h1></nav-item>
        <h1 style="font-size:70px;font-family:Segoe UI; font-weight: bold;" v-if="$route.name==='Skola_prehrane'">Škola prehrane</h1>
        <h1 style="font-size:70px;font-family:Segoe UI; font-weight: bold;" v-if="$route.name==='Prehrambeni_status'">Prehrambeni status</h1>
        <h1 style="font-size:70px;font-family:Segoe UI; font-weight: bold;" v-if="$route.name==='Calorie'">Calorie Counter</h1>


       <nav-item right class="ml-auto mb-5"><a href="#" v-if="store.currentUser">{{store.currentUser}}</a></nav-item>


      <nav-item right class="ml-auto mb-5"  >
        <a href="#"  @click.prevent="odjava()" v-if="store.currentUser">Odjava</a></nav-item>

       

    </b-navbar>
  </div>
</template>

<script>

import store from "@/store";
import { firebase } from "@/views/firebase";





export default {
  props: ['store'],
  name: "Navbar",
  data() {
    return {
      user: null,
      
    };
  },
  methods: {
    odjava() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: 'login' });
        });
    },
  },
};
</script>

<style scoped>
#navbar {
  background-color: #c4c4c4;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#befit {
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  color: #000000 !important;
  position: absolute;
  left: 160px;
  top: 45px;
}
</style>
