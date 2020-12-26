<template>
  <div id="app">
    <Navbar :store = "store"/>
    <vue-page-transition name="fade">
  <router-view/>
</vue-page-transition>
        
    
    <Footer />
    
    
  </div>
</template>

<script>
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import store from "@/store";
import { firebase } from "@/views/firebase";
import router from "@/router"






firebase.auth().onAuthStateChanged(function(user) {
  

  if (user) {
    store.currentUser = user.email;
    console.log(user)
    // User is signed in.
  } else {
    // No user is signed in.
    store.currentUser = null;

    if(router.name !== "login"){
      router.push({name: "login"})
    }
  }

});






export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  data(){
    return {
      store,
    }
  }
};
</script>

<style>

</style>

