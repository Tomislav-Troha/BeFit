<template>
  <div class="mx-3" id="navbar">
    <b-navbar>
      <b-navbar-nav>
        <b-nav-item>
          <router-link :to="{ name: 'Login' }" class="navbar-brand">
            <img
              src="@/assets/gym-logo.png"
              style="height: 100px;"
              alt="logo"
            />
            <a id="befit">BeFit</a></router-link
          >
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
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
