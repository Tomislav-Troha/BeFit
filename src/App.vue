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
import {db} from '@/views/firebase';






firebase.auth().onAuthStateChanged(function(user) {
  const currentRoute=router.currentRoute;
  console.log(currentRoute)

  if (user) {
    store.currentUser = user.email;
    console.log(user)

    db.collection("korisnici")
    .doc(user.email)
    .get()
    .then(doc => {
    if (doc.exists) {
    console.log("Document data:", doc.data());
    this.id = doc.data().id;

    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
    });
    
     
    // User is signed in.
  } else {
    // No user is signed in.
    store.currentUser = null;

    
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

