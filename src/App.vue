<template>
  <div id="app">
    <Navbar />
    <vue-page-transition name="fade">
  <router-view/>
</vue-page-transition>
        
    
    <Footer />
    
    
  </div>
</template>

<script>
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>

</style>

