<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-md navbar-light">
      <router-link :to="{ name: 'Login' }" class="navbar-brand">
        <img src="@/assets/gym-logo.png" width="200" height="120" alt="" />
        <a id="befit">Befit</a>
      </router-link>
    </nav>
  </div>
</template>


<script>
export default {
  name: "Navbar",
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#nav {
  background-color: #c4c4c4 !important;
}

#befit {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 82px;
  color: #000000 !important;
  position: absolute;
  left: 230px;
}
</style>
