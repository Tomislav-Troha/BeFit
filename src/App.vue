<template>
  <nav id="nav" class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="@/assets/gym-logo.png" width="200" height="120" alt="">
  </a>
  <a id="befit">Befit</a>
  
</nav>
</template>



<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  padding: 30px;
  

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


#nav{
    background-color: #C4C4C4 !important;
}

#befit{
		font-family: Segoe UI;
		font-style: normal;
		font-weight: normal;
		font-size: 82px;
		color:#000000 !important;
    position: absolute;
    left: 230px;
	
}
</style>
