<template>
  <div id="app">
    <Navbar />
    
    
    <router-view />
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

