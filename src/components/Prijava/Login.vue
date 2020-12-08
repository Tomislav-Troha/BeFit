<template>
<div>
  <form @submit.prevent="Login" class="container mt-5 mb-5" id="login" style="background-color:#c4c4c4; max-width:450px;">
    <div class="mx-auto rounded-lg mt-5">
    <h3 class="naslov_prijava text-center">Prijava</h3>
    <div class="form-group_login mx-auto p-3 m-4 ">
      <label id="lozinka_login" for="email-adresa">Email adresa: </label>
      <input
        type="email"
        class="form-control mx-auto"
        id="email-adresa"
        aria-describedby="emailHelp"
        placeholder="Unesite email"
        v-model="email"/>

      <label id="lozinka_login" for="lozinka">Lozinka: </label>
      <input
        type="password"
        class="form-control mx-auto"
        id="lozinka"
        placeholder="Unesite lozinku"
        v-model="lozinka"/>
    </div>

<div class="sale text-center mt-5">
    <p class="noacc">Nemaš naš račun?</p>
    <p class="text-danger" v-if="feedback">{{ feedback }}</p>
    <router-link to="Signup" tag="button" type=" submit" class="btn-primary mb-1 ">Registriraj se</router-link>
    <p class="text-danger" v-if="feedback">{{ feedback }}</p>
    <router-link to="Home" tag="button" type=" submit" class="btn-secondary  ">Prijavi se</router-link>
    </div>
    
    </div>
    
  </form>
  
  <br><br><br>
 
</div>
 
</template>

<script>
export default {};
</script>

<style scoped>



.sale{
  height: 160px;
}


.btn-primary {
  stroke: rgba(112, 112, 112, 1);
  shape-rendering: auto;
  overflow: visible;
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 22px;
  font-size: 25px;
  position: relative;
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  
  
}

.btn-secondary {
  stroke: rgba(112, 112, 112, 1);
  shape-rendering: auto;
  overflow: visible;
  width: 200px;
  height: 50px;
  background-color: #00D841;
  border: none;
  border-radius: 22px;
  font-size: 25px;
  position: relative;
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  display: block;
  margin:0 auto;
  
  
}
.btn-secondary:hover{
  background-color:#08A538;
}

#login{
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  background: #c4c4c4;
 
  

}



</style>
