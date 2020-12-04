<template>
    <form @submit.prevent="loginKorisnik" class="container">
        
  <div class="form-group_sign">
    <label id="slova_signup" for="email-adresa">Ime: </label>
    <input type="email" class="form-control" id="email-adresa" aria-describedby="emailHelp" placeholder="Unesite email" v-model="email">
  </div>
  <div class="form-group_sign">
    <label id="slova_signup" for="lozinka">Prezime: </label>
    <input type="password" class="form-control" id="lozinka" placeholder="Unesite lozinku" v-model="lozinka">
  </div>
  <div class="form-group_sign">
    <label id="slova_signup" for="lozinka">Datum rođenja: </label>
    <input type="password" class="form-control" id="lozinka" placeholder="Unesite lozinku" v-model="lozinka">
  </div>
  <div class="form-group_sign">
    <label id="slova_signup" for="lozinka">E-mail: </label>
    <input type="password" class="form-control" id="lozinka" placeholder="Unesite lozinku" v-model="lozinka">
  </div>
  <div class="form-group_sign">
    <label id="slova_signup" for="lozinka">Lozinka: </label>
    <input type="password" class="form-control" id="lozinka" placeholder="Unesite lozinku" v-model="lozinka">
  </div>
  <p class="text-danger text-center" v-if="feedback">{{ feedback }}</p>
  <b-button class="button_register" variant="success">Registriraj se!</b-button>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss">

.button_register{
  margin-left: 170px;
  margin-top: 20px;
}

.form-group_sign{
  margin-left: 65px;
}

#slova_signup{
  margin-bottom: 0%;
  margin-top: 8px;
  font-family: "Segoe UI";
  color: #444444;
  font-style: italic;
  font-weight: bold;
}

</style>