<template>
  <form @submit.prevent="Login" class="container">
    
        <h3 id="naslov_prijava">Prijava</h3>
  <div class="form-group_login">
    <label id="lozinka_login" for="email-adresa">Email adresa: </label>
    <input type="email" class="form-control" id="email-adresa" aria-describedby="emailHelp" placeholder="Unesite email" v-model="email">
  
  
    <label id="lozinka_login" for="lozinka">Lozinka: </label>
    <input type="password" class="form-control" id="lozinka" placeholder="Unesite lozinku" v-model="lozinka">
  </div>
  
  <p class="noacc">Nemaš naš račun?</p>
  <p class="text-danger text-center" v-if="feedback">{{ feedback }}</p>
  <router-link  to="Signup" tag="button" type=" submit" class="btn-secondary">Registriraj se</router-link>
  <p class="text-danger text-center" v-if="feedback">{{ feedback }}</p>
  <router-link  to="Home" tag="button" type=" submit" class="btn-primary">Prijavi se</router-link>
  
          
</form>


  

</template>

<script>
export default {};
  
</script>



<style>


.noacc {
  margin-top: 55px;
  font-size: 20px;
  color: black;
  margin-bottom: -17%;
  margin-left: 160px;
}

#lozinka_login{
  margin-top: 10px;
  margin-bottom: 0%;
  font-family: "Segoe UI";
  color: #444444;
  font-style: italic;
  font-weight: bold;
}


#naslov_prijava{
  font-family: "Segoe UI";
  color: #444444;
  font-style: italic;
  font-weight: bold;
  margin-left:180px;

}


.container {
 max-width: 500px !important;
 height: 500px;
 fill: rgba(196,196,196,1);
 filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
 overflow: visible;
 margin-top:80px;
 background:#C4C4C4;
 

}

.btn-primary{
 stroke: rgba(112, 112, 112, 1);
  shape-rendering: auto;
  overflow: visible;
  width: 200px;
  height: 50px;
  background-color: #00b0de;
  border: none;
  border-radius: 22px;
  font-size: 25px;
  margin-top: 15px;
  margin-left: 140px ;
  position: relative;
}

.btn-secondary{
  margin-top: 80px;
  margin-left: 140px;
  stroke: rgba(112, 112, 112, 1);
  shape-rendering: auto;
  overflow: visible;
  width: 200px;
  height: 50px;
  background-color: #00b0de;
  border: none;
  border-radius: 22px;
  font-size: 25px;
  position: relative;
 
}

.form-control{
  width: 350px !important;
  height: 55px !important;
}

.form-group_login{
width: 450px;
margin-top: 80px;
margin-left: 65px;
}





</style>
