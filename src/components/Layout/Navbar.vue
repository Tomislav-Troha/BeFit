<template>
<div class="mx-3">
  <b-navbar toggleable="lg" class="navbar">
       <b-navbar-brand>
       <router-link :to="{ name: 'Home' }" class="navbar-brand">
            <img
              src="@/assets/gym-logo.png"
              style="height: 100px;"
              alt="logo"
            />
      <a id="befit">BeFit</a>
</router-link>
</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto">
      <h1  v-if="$route.name==='Home'">Dobrodošli</h1>
        <h1  v-if="$route.name==='Skola_prehrane'">Škola prehrane</h1>
        <h1  v-if="$route.name==='Prehrambeni_status'">Prehrambeni status</h1>
        <h1  v-if="$route.name==='Calorie'">Calorie Counter</h1>
</b-navbar-nav>

      <!-- Right aligned nav items -->
      
        
<b-navbar-nav v-if="store.currentUser">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em style="font-size:25px;">Korisnik</em>
          </template>
           <b-dropdown-item href="#" v-if="store.currentUser">{{store.currentUser}}</b-dropdown-item>
          <b-dropdown-item href="#"  @click.prevent="odjava()" v-if="store.currentUser">Odjava</b-dropdown-item>
          <b-dropdown-item href="#" @click.prevent="onama()" v-if="store.currentUser">O nama</b-dropdown-item>
        </b-nav-item-dropdown>
     </b-navbar-nav >
    </b-collapse>
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
          this.$router.replace({ name: 'login' });
        });
    },
    onama(){
     this.$router.push({ name: 'Onama' });
    },
  },
};
</script>

<style scoped>
.navbar {
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
h1{
  
  color:black;
  font-size:60px;
  font-family:"Segoe UI"; 
  font-weight: bold;
}
</style>
